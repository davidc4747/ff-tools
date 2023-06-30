import type { JSX } from "@builder.io/qwik/jsx-runtime";
import {
    $,
    component$,
    type PropFunction,
    type QwikChangeEvent,
} from "@builder.io/qwik";
import { resolutionPicker } from "./resolution-picker.module.css";
import type { Resolution } from "~/services/types";

/* ======================== *\
    # Resolution Picker
\* ======================== */

interface PropTypes {
    value: Resolution;
    onChange$: PropFunction<(resolution: Resolution) => void>;
}

const ResolutionPicker = component$((props: PropTypes): JSX.Element => {
    const handleChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
        // props.value = e.target.value as Resolution;
        props.onChange$(e.target.value as Resolution);
    });

    const allResolutions: Resolution[] = ["1080", "720", "480"];

    return (
        <fieldset class={resolutionPicker}>
            {allResolutions.map((res, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        name="resolution"
                        value={res}
                        checked={res === props.value}
                        onChange$={handleChange}
                    />
                    {res}
                </label>
            ))}

            {/* <label>
                <input
                    type="radio"
                    name="resolution"
                    value="720"
                    onChange$={handleChange}
                />
                720
            </label>
            <label>
                <input
                    type="radio"
                    name="resolution"
                    value="480"
                    onChange$={handleChange}
                />
                480
            </label> */}
        </fieldset>
    );
});

export default ResolutionPicker;
