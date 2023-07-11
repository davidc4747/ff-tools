import { invoke } from "@tauri-apps/api/tauri";
import { readBinaryFile } from "@tauri-apps/api/fs";
import type { Resolution } from "~/services/types";

/* ======================== *\
    #Commands
\* ======================== */

export async function ffgif(
    inputFile: string,
    startTime: number,
    duration: number
): Promise<string> {
    const outputFilePath = await invoke("ffgif", {
        inputFile,
        startTime,
        duration,
    });
    return typeof outputFilePath === "string" ? outputFilePath : "";
}

export async function ffmin(
    inputFile: string,
    resolution: Resolution,
    fps: number = 60
): Promise<string> {
    const outputFilePath = await invoke("ffmin", {
        inputFile,
        resolution,
        fps,
    });
    return typeof outputFilePath === "string" ? outputFilePath : "";
}

export async function ffaudioOnly(inputFile: string): Promise<string> {
    const outputFilePath = await invoke("ffaudio_only", { inputFile });
    return typeof outputFilePath === "string" ? outputFilePath : "";
}

/* ======================== *\
    #Local Files
\* ======================== */

/** Uses the File Binary to create a URL.
 *  This allows us to create new URLs as the File is updated
 *  (unlike tauri's convertFileSrc() function)
 * @param {string} path - Absolute path to the file you want to use
 * @param {string} type - MIME type of the file
 */
export async function createFileURL(
    path: string,
    type: string = "" //"image/gif"
): Promise<string> {
    const arrayBuffer = await readBinaryFile(path);
    const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type,
    });
    return URL.createObjectURL(blob);
}
