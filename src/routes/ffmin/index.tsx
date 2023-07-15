import { component$, useContext, useStore } from "@builder.io/qwik";
import { form } from "./ffmin.module.css";
import type { Resolution } from "~/services/types";
import { ffmin } from "~/services/tauri-helpers";
import ResolutionPicker from "~/components/resolution-picker/resolution-picker";
import { inputFileContext } from "../layout";
import { useNotification } from "~/components/notifications/notifications";
import VideoForm from "~/components/video-form/video-form";

type FormData = {
    resolution: Resolution;
};

export default component$(() => {
    const addNotification = useNotification();
    const input = useContext(inputFileContext);
    const formdata = useStore<FormData>({
        resolution: "480",
    });

    return (
        <VideoForm
            class={form}
            submitText="Minify Video"
            onSubmit$={async () => {
                const outputFile = await ffmin(input.path, formdata.resolution);
                addNotification(`File created @ ${outputFile}`);
            }}
        >
            <ResolutionPicker
                value={formdata.resolution}
                onChange$={(res) => {
                    formdata.resolution = res;
                }}
            />
        </VideoForm>
    );
});
