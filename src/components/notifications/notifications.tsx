import type { JSX } from "@builder.io/qwik/jsx-runtime";
import {
    $,
    type JSXChildren,
    component$,
    createContextId,
    useContext,
    useContextProvider,
    useSignal,
    useStore,
} from "@builder.io/qwik";
import { noteList, noteItem } from "./notifications.module.css";
import { openFile } from "~/services/tauri-helpers";

/* ======================== *\
    #Context
\* ======================== */

type Notification = {
    id: number;
    type: "Text" | "FileCreated";
    text: string;
};

const notificationContext = createContextId<Notification[]>("notification");

export const useNotification = () => {
    const notificationId = useSignal(0);
    const notes = useContext(notificationContext);
    const add = $((message: string) => {
        notificationId.value++;
        notes.push({
            id: notificationId.value,
            type: "Text",
            text: message,
        });
    });
    const fileCreated = $((filePath: string) => {
        notificationId.value++;
        notes.push({
            id: notificationId.value,
            type: "FileCreated",
            text: filePath,
        });
    });
    return { add, fileCreated };
};

export function useNotificationProvider() {
    const notifications = useStore<Notification[]>([]);
    useContextProvider(notificationContext, notifications);
}

/* ============================ *\
    # Component
\* ============================ */

const Notifications = component$((): JSX.Element => {
    const notes = useContext(notificationContext);
    return (
        <ul class={noteList}>
            {notes.map((note, index) => (
                <li
                    class={noteItem}
                    key={note.id}
                    onAnimationEnd$={() => {
                        notes.splice(index, 1);
                    }}
                >
                    {renderNoteContent(note)}
                </li>
            ))}
        </ul>
    );
});

export default Notifications;

/* ------------------------ *\
    #Render
\* ------------------------ */

function renderNoteContent(notification: Notification): JSXChildren {
    switch (notification.type) {
        case "Text":
            return <>{notification.text}</>;

        case "FileCreated":
            return (
                <>
                    File Created @{" "}
                    <button
                        onClick$={async () => await openFile(notification.text)}
                    >
                        {notification.text}
                    </button>
                </>
            );
    }
}
