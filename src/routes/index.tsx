import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { invoke, convertFileSrc } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/dialog";

export default component$(() => {
    const filePath = useSignal("");
    const inputPreview = useSignal("");
    const outputGif = useSignal("");
    const startTime = useSignal(0);
    const duration = useSignal(0);
    return (
        <form
            action="#"
            onSubmit$={async function () {
                const outputFilePath = await invoke("ffgif", {
                    inputFile: filePath.value,
                    startTime: startTime.value,
                    duration: duration.value,
                });
                if (typeof outputFilePath === "string")
                    outputGif.value = convertFileSrc(outputFilePath);
            }}
        >
            <video controls width={480} src={inputPreview.value}></video>
            <img src={outputGif.value} alt="" width={480} height={undefined} />
            <button
                onClick$={async function () {
                    const file = await open({
                        multiple: false,
                        directory: false,
                        filters: [
                            {
                                name: "Video",
                                extensions: [
                                    "mp4",
                                    "avi",
                                    "mkv",
                                    "mov",
                                    "webm",
                                ],
                            },
                        ],
                    });

                    if (file && !Array.isArray(file)) {
                        filePath.value = file;
                        inputPreview.value = convertFileSrc(file);
                    }
                }}
            >
                Select Video
            </button>

            <label>
                Start Time:{" "}
                <input type="number" value={startTime.value}></input>
            </label>
            <label>
                Duration: <input type="number" value={duration.value}></input>
            </label>
            <input type="submit" />
            <progress max={1} value={0}></progress>
        </form>
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
