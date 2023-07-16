import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { form } from "./ffaudio.module.css";
import { ffaudioOnly } from "~/services/tauri-helpers";
import { inputFileContext } from "../layout";
import { useNotification } from "~/components/notifications/notifications";
import VideoForm from "~/components/video-form/video-form";

export default component$(() => {
    const { fileCreated } = useNotification();
    const input = useContext(inputFileContext);

    return (
        <VideoForm
            class={form}
            submitText="Pull Audio"
            onSubmit$={async () => {
                const outputFile = await ffaudioOnly(input.path);
                fileCreated(outputFile);
            }}
        />
    );
});

export const head: DocumentHead = {
    title: "Pull Audio from file",
};
