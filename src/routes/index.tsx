import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/dialog";

export default component$(() => {
    const outputGif = useSignal<string>("");
    return (
        <form action="#" onSubmit$={() => console.log("d")}>
            <video></video>
            <img src={outputGif.value} alt="" width={70} height={70} />
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
                        console.log(file);
                        const outputFilePath = await invoke("ffgif", {
                            inputFile: file,
                            startTime: 12, // TODO:
                            duration: 5, // TODO:
                        });
                        console.log(outputFilePath);
                    }
                }}
            >
                Select Video
            </button>

            <label>
                Start Time: <input type="number"></input>
            </label>
            <label>
                Duration: <input type="number"></input>
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
