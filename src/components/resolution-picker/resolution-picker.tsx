import type { JSX } from "@builder.io/qwik/jsx-runtime";
import {
    $,
    component$,
    type PropFunction,
    type QwikChangeEvent,
} from "@builder.io/qwik";
import {
    resolutionPicker,
    legend,
    lbl,
    rdo,
} from "./resolution-picker.module.css";
import type { Resolution } from "~/services/types";

/* ======================== *\
    # Resolution Picker
\* ======================== */

interface PropTypes {
    value: Resolution;
    onChange$: PropFunction<(resolution: Resolution) => void>;
}

const allResolutions: Resolution[] = ["1080", "720", "480"];

const ResolutionPicker = component$((props: PropTypes): JSX.Element => {
    const handleChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
        // props.value = e.target.value as Resolution;
        props.onChange$(e.target.value as Resolution);
    });

    return (
        <fieldset class={resolutionPicker}>
            <legend class={legend}>Choose a Resolution:</legend>
            {allResolutions.map((res, index) => (
                <label key={index} class={lbl}>
                    <input
                        class={rdo}
                        type="radio"
                        name="resolution"
                        value={res}
                        checked={res === props.value}
                        onChange$={handleChange}
                    />
                    {res}p
                </label>
            ))}
        </fieldset>
    );
});

export default ResolutionPicker;
