import { component$, useContext, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import VideoPicker from "~/components/video-picker/video-picker";
import { ffaudioOnly, createFileURL } from "~/services/tauri-helpers";
import { InputFileContext } from "../layout";

type Store = {
    output: {
        path: string;
        // url: string;
    };
};

export default component$(() => {
    const { output } = useStore<Store>({
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
            <VideoPicker
                value={input.path}
                onChange$={async (file) => {
                    if (file) {
                        input.path = file;
                        input.url = await createFileURL(file);
                    }
                }}
            />
            <button
                class="btn"
                onClick$={async () => {
                    const outputFile = await ffaudioOnly(input.path);
                    output.path = outputFile;
                    // output.url = await createFileURL(outputFile);
                }}
            >
                Pull Audio
            </button>
            {output.path && (
                <p style={{ textAlign: "center" }}>
                    File Created @ {output.path}
                </p>
            )}
        </>
    );
});

export const head: DocumentHead = {
    title: "Pull Audio from file",
};
