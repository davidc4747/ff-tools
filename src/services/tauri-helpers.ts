import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/dialog";
import { normalize } from "@tauri-apps/api/path";
import { readBinaryFile } from "@tauri-apps/api/fs";

/* ======================== *\
    #Commands
\* ======================== */

export async function ffgif(
    inputFile: string,
    startTime: number,
    duration: number
): Promise<string> {
    const outputFilePath = await invoke("ffgif", {
        inputFile: await normalize(inputFile),
        startTime: startTime,
        duration: duration,
    });
    if (typeof outputFilePath === "string") {
        return outputFilePath;
    } else {
        return "";
    }
}

/* ======================== *\
    #Local Files
\* ======================== */

export async function openVideoPicker(): Promise<string | null> {
    const file = await open({
        multiple: false,
        directory: false,
        filters: [
            {
                name: "Video",
                extensions: ["mp4", "avi", "mkv", "mov", "webm"],
            },
        ],
    });

    if (Array.isArray(file)) {
        return file[0] ?? null;
    } else {
        return file;
    }
}

export async function createFileURL(path: string): Promise<string> {
    const arrayBuffer = await readBinaryFile(path);
    const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type: "image/gif",
    });
    return URL.createObjectURL(blob);
}
