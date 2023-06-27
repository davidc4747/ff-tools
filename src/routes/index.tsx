import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
    main,
    inputVideo,
    outputPreview,
    form,
    videoPicker,
} from "./index.module.css";
import VideoPicker from "~/components/video-picker/video-picker";
import { ffgif } from "~/services/tauri-helpers";
import { convertFileSrc } from "@tauri-apps/api/tauri";

type OutputStatus = "Initial" | "Loading" | "Ready";

type Store = {
    startTime: number;
    duration: number;

    input: {
        path: string;
        url: string;
    };

    outputStatus: OutputStatus;
    output: {
        path: string;
        url: string;
    };
};

export default component$(() => {
    const store = useStore<Store>({
        startTime: 0,
        duration: 0,

        input: {
            path: "",
            url: "",
        },

        outputStatus: "Initial",
        output: {
            path: "",
            url: "",
        },
    });

    return (
        <main class={main}>
            <video
                class={inputVideo}
                controls={!!store.input.url}
                src={store.input.url}
            ></video>
            <form
                class={form}
                preventdefault:submit
                onSubmit$={async function () {
                    // Clear Data
                    store.output.path = "";
                    store.output.url = "";
                    store.outputStatus = "Loading";

                    // Wait for ffmpeg to procces the vide
                    const path = await ffgif(
                        store.input.path,
                        store.startTime,
                        store.duration
                    );
                    store.output.path = path;
                    store.output.url = convertFileSrc(path);
                    store.outputStatus = "Ready";
                }}
            >
                <VideoPicker
                    class={videoPicker}
                    onChange$={(file: string | null) => {
                        if (file) {
                            store.input.path = file;
                            store.input.url = convertFileSrc(file);
                        }
                    }}
                />

                <label>
                    Start Time:{" "}
                    <input
                        class="num"
                        type="number"
                        min={0}
                        value={store.startTime}
                        onChange$={(e) => (store.startTime = +e.target.value)}
                    ></input>
                </label>
                <label>
                    Duration:{" "}
                    <input
                        class="num"
                        type="number"
                        min={0}
                        value={store.duration}
                        onChange$={(e) => (store.duration = +e.target.value)}
                    ></input>
                </label>
                <button class="btn">Submit</button>
            </form>

            {store.output.url && (
                <>
                    <p>{store.output.path}</p>
                    <img
                        class={outputPreview}
                        src={store.output.url}
                        alt="output Gif"
                        width={480}
                        height={undefined}
                    />
                </>
            )}
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
