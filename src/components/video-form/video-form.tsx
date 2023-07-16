import type { JSX } from "@builder.io/qwik/jsx-runtime";
import {
    type PropFunction,
    component$,
    useContext,
    useSignal,
    Slot,
    type ClassList,
} from "@builder.io/qwik";
import { inputFileContext } from "~/routes/layout";
import { createFileURL } from "~/services/tauri-helpers";
import VideoPicker from "../video-picker/video-picker";

/* ======================== *\
    # Video Form
\* ======================== */

type OutputStatus = "Initial" | "Loading" | "Ready";

interface PropTypes {
    class?: ClassList;
    submitText?: string;
    onSubmit$: PropFunction<() => void>;
}

const VideoForm = component$((props: PropTypes): JSX.Element => {
    const outputStatus = useSignal<OutputStatus>("Initial");
    const input = useContext(inputFileContext);

    return (
        <>
            <video class="vid" controls={!!input.url} src={input.url}></video>
            <form
                class={props.class}
                preventdefault:submit
                onSubmit$={async function () {
                    if (input.path) {
                        outputStatus.value = "Loading";
                        await props.onSubmit$();
                        outputStatus.value = "Ready";
                    }
                }}
            >
                <VideoPicker
                    class="w-full"
                    value={input.path}
                    onChange$={async (file: string | null) => {
                        if (file) {
                            input.path = file;
                            input.url = await createFileURL(file);
                        }
                    }}
                />

                <Slot />

                <button class="btn" disabled={outputStatus.value === "Loading"}>
                    {outputStatus.value === "Loading"
                        ? "Loading..."
                        : props.submitText ?? "Submit"}
                </button>
            </form>
        </>
    );
});

export default VideoForm;
