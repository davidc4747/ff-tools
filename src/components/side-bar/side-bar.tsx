import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { sidebar } from "./side-bar.module.css";

const SideBar = component$(() => (
    <nav class={sidebar}>
        <Link href="/">Convert a Gif</Link>
        <Link href="/">Minify Video</Link>
        <Link href="/">Audio Only</Link>
        <Link href="/">Compressed Dialog</Link>
    </nav>
));

export default SideBar;
