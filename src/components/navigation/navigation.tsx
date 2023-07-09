import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { navigation, lnk, selected } from "./navigation.module.css";

type NavLink = {
    href: string;
    text: string;
};

const Navigation = component$(() => {
    const { url } = useLocation();

    const allLinks: NavLink[] = [
        { href: "/", text: "Convert a Gif" },
        { href: "/ffmin/", text: "Minify Video" },
        { href: "/ffaudio/", text: "Audio Only" },
        // { href: "/compressed-dialog", text: "Compressed Dialog" },
    ];

    return (
        <nav class={navigation} onClick$={() => console.log(url.pathname)}>
            {allLinks.map(({ href, text }, index) => (
                <Link
                    key={index}
                    class={{
                        [lnk]: true,
                        [selected]: url.pathname === href,
                    }}
                    href={href}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
});

export default Navigation;
