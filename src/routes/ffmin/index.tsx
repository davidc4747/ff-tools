import { component$, useStore } from "@builder.io/qwik";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { inputFile, form } from "./ffmin.module.css";
import type { Resolution } from "~/services/types";
import { ffmin } from "~/services/tauri-helpers";
import VideoPicker from "~/components/video-picker/video-picker";
import ResolutionPicker from "~/components/resolution-picker/resolution-picker";

type Store = {
    resolution: Resolution;
    input: {
        path: string;
        url: string;
    };
    output: {
        path: string;
        // url: string;
    };
};

export default component$(() => {
    const store = useStore<Store>({
        resolution: "480",
        input: {
            path: "",
            url: "",
        },
        output: {
            path: "",
            // url: "",
        },
    });
    return (
        <>
            <video
                class={inputFile}
                src={store.input.url}
                controls={Boolean(store.input.url)}
            ></video>
            <form
                class={form}
                preventdefault:submit
                onSubmit$={async () => {
                    const outputFile = await ffmin(
                        store.input.path,
                        store.resolution
                    );
                    store.output.path = outputFile;
                }}
            >
                <VideoPicker
                    onChange$={(file) => {
                        if (file) {
                            store.input.path = file;
                            store.input.url = convertFileSrc(file);
                        }
                    }}
                />
                <ResolutionPicker
                    value={store.resolution}
                    onChange$={(res) => {
                        store.resolution = res;
                    }}
                />
                <button class={["btn"]}>Minify Video</button>
            </form>

            {store.output.path && <p>{store.output.path}</p>}
        </>
    );
});
