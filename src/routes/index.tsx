import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    const outputGif = useSignal<string>("");
    return (
        <form action="#" onSubmit$={() => console.log("d")}>
            <video></video>
            <img src={outputGif.value} alt="" width={70} height={70} />
            <input
                type="file"
                onInput$={async (e) => {
                    const elm = e.target as HTMLInputElement;
                    const file = elm.files?.item(0);
                    if (file) {
                        const data = await FFGif(file, 12, 5);
                        outputGif.value = URL.createObjectURL(
                            new Blob([data.buffer], { type: "image/gif" })
                        );
                    }
                }}
            />
            <label>
                Start Time: <input type="number"></input>
            </label>
            <label>
                Duration: <input type="number"></input>
            </label>
            <input type="submit" />
            <progress max={1} value={0}></progress>
        </form>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
