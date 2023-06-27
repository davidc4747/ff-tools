import { component$, useSignal } from "@builder.io/qwik";
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

// type PreviewState = "Initial" | "Loading" | "Ready";

export default component$(() => {
    const inputPath = useSignal("");
    const inputUrl = useSignal("");

    const outputUrl = useSignal("");

    const startTime = useSignal(0);
    const duration = useSignal(0);

    return (
        <main class={main}>
            <video
                class={inputVideo}
                controls={!!inputUrl.value}
                src={inputUrl.value}
            ></video>
            <form
                class={form}
                preventdefault:submit
                onSubmit$={async function () {
                    outputUrl.value = "";
                    outputUrl.value = await ffgif(
                        inputPath.value,
                        startTime.value,
                        duration.value
                    );
                }}
            >
                <VideoPicker
                    class={videoPicker}
                    onChange$={(file: string | null) => {
                        if (file) {
                            inputPath.value = file;
                            inputUrl.value = convertFileSrc(file);
                        }
                    }}
                />

                <label>
                    Start Time:{" "}
                    <input
                        class="num"
                        type="number"
                        min={0}
                        value={startTime.value}
                        onChange$={(e) => (startTime.value = +e.target.value)}
                    ></input>
                </label>
                <label>
                    Duration:{" "}
                    <input
                        class="num"
                        type="number"
                        min={0}
                        value={duration.value}
                        onChange$={(e) => (duration.value = +e.target.value)}
                    ></input>
                </label>
                <button class="btn">Submit</button>
            </form>

            {outputUrl.value && (
                <>
                    {/* <h1>Output</h1> */}
                    <p>{inputPath.value}</p>
                    <img
                        class={outputPreview}
                        src={outputUrl.value}
                        alt=""
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
