import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { navigation } from "./navigation.module.css";

const Navigation = component$(() => (
    <nav class={navigation}>
        <Link href="/">Convert a Gif</Link>
        <Link href="/ffmin">Minify Video</Link>
        <Link href="/">Audio Only</Link>
        <Link href="/">Compressed Dialog</Link>
    </nav>
));

export default Navigation;
