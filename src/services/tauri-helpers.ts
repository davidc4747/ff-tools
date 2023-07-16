import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/shell";
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
    type: string = ""
): Promise<string> {
    const arrayBuffer = await readBinaryFile(path);
    const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type,
    });
    return URL.createObjectURL(blob);
}

export async function openFile(file: string): Promise<void> {
    // NOTE: path module NEEDS to be dynamically imported here
    //      this ensure that the modules only executes on client-side [DC]
    //      More info: https://github.com/tauri-apps/tauri/discussions/5271
    const path = await import("@tauri-apps/api/path");
    return await open(await path.normalize(file));
}
