import {
    component$,
    useContext,
    useSignal,
    useStore,
    useTask$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { form } from "./ffgif.module.css";
import { ffgif } from "~/services/tauri-helpers";
import { inputFileContext } from "./layout";
import { useNotification } from "~/components/notifications/notifications";
import VideoForm from "~/components/video-form/video-form";

type FormData = {
    startTime: number;
    duration: number;
};

export default component$(() => {
    const notification = useNotification();
    const input = useContext(inputFileContext);
    const outputPreview = useSignal<HTMLImageElement>();
    const formdata = useStore<FormData>({
        startTime: 0,
        duration: 0,
    });

    useTask$(({ track }) => {
        track(() => outputPreview.value);
        const img = outputPreview.value;
        if (img) {
            img.onload = function () {
                img.scrollIntoView({ behavior: "smooth" });
            };
        }
    });

    return (
        <VideoForm
            class={form}
            onSubmit$={async function () {
                // Wait for ffmpeg to procces the vide
                const path = await ffgif(
                    input.path,
                    formdata.startTime,
                    formdata.duration
                );
                notification.fileCreated(path);
            }}
        >
            <label>
                Start Time:{" "}
                <input
                    class="num"
                    type="number"
                    min={0}
                    step={0.01}
                    value={formdata.startTime}
                    onChange$={(e) => (formdata.startTime = +e.target.value)}
                ></input>
            </label>
            <label>
                Duration:{" "}
                <input
                    class="num"
                    type="number"
                    min={0}
                    step={0.01}
                    value={formdata.duration}
                    onChange$={(e) => (formdata.duration = +e.target.value)}
                ></input>
            </label>
        </VideoForm>
    );
});

export const head: DocumentHead = {
    title: "Convert Video to Gif",
};
