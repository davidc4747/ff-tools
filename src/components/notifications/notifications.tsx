import type { JSX } from "@builder.io/qwik/jsx-runtime";
import {
    $,
    component$,
    createContextId,
    useContext,
    useContextProvider,
    useSignal,
    useStore,
} from "@builder.io/qwik";
import { noteList, noteItem } from "./notifications.module.css";

/* ======================== *\
    #Context
\* ======================== */

type Notification = {
    id: number;
    text: string;
};

const notificationContext = createContextId<Notification[]>("notification");

export const useNotification = () => {
    const notificationId = useSignal(0);
    const notes = useContext(notificationContext);
    const add = $((note: string) => {
        notificationId.value++;
        notes.push({ id: notificationId.value, text: note });
    });
    return add;
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
            {notes.map(({ id, text }, index) => (
                <li
                    class={noteItem}
                    key={id}
                    onAnimationEnd$={() => {
                        notes.splice(index, 1);
                    }}
                >
                    {text}
                </li>
            ))}
        </ul>
    );
});

export default Notifications;
