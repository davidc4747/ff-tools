import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import VideoPicker from "~/components/video-picker/video-picker";
import { ffaudioOnly, createFileURL } from "~/services/tauri-helpers";
import { inputFileContext } from "../layout";
import { useNotification } from "~/components/notifications/notifications";

export default component$(() => {
    const addNotification = useNotification();
    const input = useContext(inputFileContext);

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
                    addNotification(`File created @ ${outputFile}`);
                }}
            >
                Pull Audio
            </button>
        </>
    );
});

export const head: DocumentHead = {
    title: "Pull Audio from file",
};
