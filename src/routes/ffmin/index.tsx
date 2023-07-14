import { component$, useContext, useStore } from "@builder.io/qwik";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { form } from "./ffmin.module.css";
import type { Resolution } from "~/services/types";
import { ffmin } from "~/services/tauri-helpers";
import VideoPicker from "~/components/video-picker/video-picker";
import ResolutionPicker from "~/components/resolution-picker/resolution-picker";
import { InputFileContext } from "../layout";

type FormData = {
    resolution: Resolution;
    output: {
        path: string;
        // url: string;
    };
};

export default component$(() => {
    const formdata = useStore<FormData>({
        resolution: "480",
        output: {
            path: "",
            // url: "",
        },
    });
    const input = useContext(InputFileContext);

    return (
        <>
            <video
                class="vid"
                src={input.url}
                controls={Boolean(input.url)}
            ></video>
            <form
                class={form}
                preventdefault:submit
                onSubmit$={async () => {
                    const outputFile = await ffmin(
                        input.path,
                        formdata.resolution
                    );
                    formdata.output.path = outputFile;
                }}
            >
                <VideoPicker
                    value={input.path}
                    onChange$={(file) => {
                        if (file) {
                            input.path = file;
                            input.url = convertFileSrc(file);
                        }
                    }}
                />
                <ResolutionPicker
                    value={formdata.resolution}
                    onChange$={(res) => {
                        formdata.resolution = res;
                    }}
                />
                <button class={["btn"]}>Minify Video</button>
            </form>

            {formdata.output.path && <p>{formdata.output.path}</p>}
        </>
    );
});
