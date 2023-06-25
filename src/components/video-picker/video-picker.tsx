import {
    type PropFunction,
    type ClassList,
    component$,
    useSignal,
} from "@builder.io/qwik";
import { openVideoPicker } from "~/services/tauri-helpers";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { videoPicker, file, browse } from "./video-picker.module.css";

type PropTypes = {
    class?: ClassList;
    onChange$: PropFunction<(file: string | null) => void>;
};

const VideoPicker = component$((props: PropTypes): JSX.Element => {
    const filePath = useSignal("");

    return (
        <div class={[props.class, videoPicker]}>
            <input
                class={["txt", file]}
                type="text"
                value={filePath.value}
                disabled
            />
            <button
                class={["btn", browse]}
                type="button"
                onClick$={async function () {
                    const file = await openVideoPicker();
                    if (file) {
                        filePath.value = file;
                        props.onChange$(filePath.value);
                    }
                }}
            >
                Select Video
            </button>
        </div>
    );
});

export default VideoPicker;
