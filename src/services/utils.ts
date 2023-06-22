import { createFFmpeg } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });
await ffmpeg.load();

export async function FFGif(
    inputFile: File,
    startTime: number,
    duration: number
): Promise<Uint8Array> {
    const FPS = 10;
    const RESOLUTION = 720;
    const OUTPUT_FILE = `${inputFile.name}.gif`;
    ffmpeg.FS(
        "writeFile",
        inputFile.name,
        new Uint8Array(await inputFile.arrayBuffer())
    );
    await ffmpeg.run(
        "-ss",
        startTime.toString(),
        "-t",
        duration.toString(),
        "-i",
        inputFile.name,
        "-vf",
        `fps=${FPS},scale=${RESOLUTION}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
        OUTPUT_FILE
    );
    return ffmpeg.FS("readFile", OUTPUT_FILE);
}
