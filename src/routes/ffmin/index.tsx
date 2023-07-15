import { component$, useContext, useStore } from "@builder.io/qwik";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { form } from "./ffmin.module.css";
import type { Resolution } from "~/services/types";
import { ffmin } from "~/services/tauri-helpers";
import VideoPicker from "~/components/video-picker/video-picker";
import ResolutionPicker from "~/components/resolution-picker/resolution-picker";
import { inputFileContext } from "../layout";
import { useNotification } from "~/components/notifications/notifications";

type FormData = {
    resolution: Resolution;
};

export default component$(() => {
    const addNotification = useNotification();
    const input = useContext(inputFileContext);
    const formdata = useStore<FormData>({
        resolution: "480",
    });

    return (
        <>
            <video
                class="vid"
                src={input.url}
                controls={Boolean(input.url)}
            ></video>
            <form
                class={form}
                preventdefault:submit
                onSubmit$={async () => {
                    const outputFile = await ffmin(
                        input.path,
                        formdata.resolution
                    );
                    addNotification(`File created @ ${outputFile}`);
                }}
            >
                <VideoPicker
                    value={input.path}
                    onChange$={(file) => {
                        if (file) {
                            input.path = file;
                            input.url = convertFileSrc(file);
                        }
                    }}
                />
                <ResolutionPicker
                    value={formdata.resolution}
                    onChange$={(res) => {
                        formdata.resolution = res;
                    }}
                />
                <button class="btn">Minify Video</button>
            </form>
        </>
    );
});
