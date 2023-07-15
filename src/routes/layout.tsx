import {
    component$,
    createContextId,
    Slot,
    useContextProvider,
    useStore,
} from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import { main } from "./layout.module.css";
import Navigation from "../components/navigation/navigation";
import Notifications, {
    useNotificationProvider,
} from "~/components/notifications/notifications";

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

type InputFile = {
    path: string;
    url: string;
};

export const inputFileContext = createContextId<InputFile>("inputFile");

export default component$(() => {
    // Video InputFile
    const input = useStore<InputFile>({
        path: "",
        url: "",
    });
    useContextProvider(inputFileContext, input);

    // Notifications
    useNotificationProvider();

    return (
        <>
            <Navigation />
            <Notifications />
            <main class={main}>
                <Slot />
            </main>
        </>
    );
});
