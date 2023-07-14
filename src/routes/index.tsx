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

type FormData = {
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
    const formdata = useStore<FormData>({
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
                    formdata.output.path = "";
                    formdata.output.url = "";
                    formdata.outputStatus = "Loading";

                    // Wait for ffmpeg to procces the vide
                    const path = await ffgif(
                        input.path,
                        formdata.startTime,
                        formdata.duration
                    );
                    formdata.output.path = path;
                    formdata.output.url = await createFileURL(path);
                    formdata.outputStatus = "Ready";
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
                        value={formdata.startTime}
                        onChange$={(e) =>
                            (formdata.startTime = +e.target.value)
                        }
                    ></input>
                </label>
                <label>
                    Duration:{" "}
                    <input
                        class="num"
                        type="number"
                        min={0}
                        value={formdata.duration}
                        onChange$={(e) => (formdata.duration = +e.target.value)}
                    ></input>
                </label>
                <button
                    class="btn"
                    disabled={formdata.outputStatus === "Loading"}
                >
                    {formdata.outputStatus === "Loading"
                        ? "Loading..."
                        : "Submit"}
                </button>
            </form>

            {formdata.outputStatus === "Ready" && (
                <>
                    <img
                        ref={outputElem}
                        class="vid"
                        src={formdata.output.url}
                        alt="output Gif"
                        width={480}
                        height={undefined}
                    />
                    <p>{formdata.output.path}</p>
                </>
            )}
        </>
    );
});

export const head: DocumentHead = {
    title: "Convert Video to Gif",
};
