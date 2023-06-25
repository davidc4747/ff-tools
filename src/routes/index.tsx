import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
    form,
    preview,
    previewPane,
    progress,
    selectVideo,
    submit,
} from "./index.module.css";
import VideoPicker from "~/components/video-picker/video-picker";
import { ffgif } from "~/services/tauri-helpers";
import { convertFileSrc } from "@tauri-apps/api/tauri";

export default component$(() => {
    const filePath = useSignal("");
    const inputPreview = useSignal("");
    const outputGif = useSignal("");
    const startTime = useSignal(0);
    const duration = useSignal(0);

    return (
        <main>
            <section class={previewPane}>
                <video controls width={480} src={inputPreview.value}></video>
                <img
                    class={preview}
                    src={outputGif.value}
                    alt=""
                    width={480}
                    height={undefined}
                />
            </section>
            <form
                class={form}
                action="#"
                onSubmit$={async function () {
                    outputGif.value = await ffgif(
                        filePath.value,
                        startTime.value,
                        duration.value
                    );
                }}
            >
                <progress class={progress} max={1} value={0}></progress>
                <VideoPicker
                    class={selectVideo}
                    onChange$={(file: string | null) => {
                        if (file) {
                            filePath.value = file;
                            inputPreview.value = convertFileSrc(file);
                        }
                    }}
                />

                <label>
                    Start Time:{" "}
                    <input
                        class="num"
                        type="number"
                        value={startTime.value}
                        onChange$={(e) => (startTime.value = +e.target.value)}
                    ></input>
                </label>
                <label>
                    Duration:{" "}
                    <input
                        class="num"
                        type="number"
                        value={duration.value}
                        onChange$={(e) => (duration.value = +e.target.value)}
                    ></input>
                </label>
                <input class={["btn", submit]} type="submit" />
            </form>
        </main>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
