import {
    component$,
    useContext,
    useSignal,
    useStore,
    useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { form, videoPicker } from "./ffgif.module.css";
import VideoPicker from "~/components/video-picker/video-picker";
import { ffgif, createFileURL } from "~/services/tauri-helpers";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { InputFileContext } from "./layout";

type OutputStatus = "Initial" | "Loading" | "Ready";

type Store = {
    startTime: number;
    duration: number;

    outputStatus: OutputStatus;
    output: {
        path: string;
        url: string;
    };
};

export default component$(() => {
    const outputElem = useSignal<HTMLImageElement>();
    const store = useStore<Store>({
        startTime: 0,
        duration: 0,

        outputStatus: "Initial",
        output: {
            path: "",
            url: "",
        },
    });

    const input = useContext(InputFileContext);

    useTask$(({ track }) => {
        track(() => outputElem.value);
        const img = outputElem.value;
        if (img) {
            img.onload = function () {
                img.scrollIntoView({ behavior: "smooth" });
            };
        }
    });

    return (
        <>
            <video class="vid" controls={!!input.url} src={input.url}></video>
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
                        input.path,
                        store.startTime,
                        store.duration
                    );
                    store.output.path = path;
                    store.output.url = await createFileURL(path);
                    store.outputStatus = "Ready";
                }}
            >
                <VideoPicker
                    class={videoPicker}
                    value={input.path}
                    onChange$={(file: string | null) => {
                        if (file) {
                            input.path = file;
                            input.url = convertFileSrc(file);
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
                <button class="btn" disabled={store.outputStatus === "Loading"}>
                    {store.outputStatus === "Loading" ? "Loading..." : "Submit"}
                </button>
            </form>

            {store.outputStatus === "Ready" && (
                <>
                    <img
                        ref={outputElem}
                        class="vid"
                        src={store.output.url}
                        alt="output Gif"
                        width={480}
                        height={undefined}
                    />
                    <p>{store.output.path}</p>
                </>
            )}
        </>
    );
});

export const head: DocumentHead = {
    title: "Convert Video to Gif",
};
