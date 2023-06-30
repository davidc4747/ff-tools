// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ffgif, ffmin])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

/* ======================== *\
    #FFmpeg Commands
\* ======================== */

const FFMPEG_PATH: &str = "../public/ffmpeg";
// const FFPROBE_PATH: &str =  "../public/ffprobe";

#[tauri::command]
fn ffgif(input_file: &str, start_time: u32, duration: u32) -> String {
    const FPS: u8 = 10;
    const RESOLUTION: u16 = 720;

    let output_file = format!("{}.gif", input_file);
    let video_filter = format!(
        "fps={},scale={}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
        FPS, RESOLUTION
    );
    Command::new(FFMPEG_PATH)
        .args([
            "-ss",
            &start_time.to_string(),
            "-t",
            &duration.to_string(),
            "-y", // Override
            "-i",
            &input_file,
            "-vf",
            &video_filter,
            &output_file,
        ])
        .output()
        .expect("failed to execute ffmpeg command");

    output_file.into()
}

#[tauri::command]
fn ffmin(input_file: &str, resolution: &str, fps: u8) -> String {
    println!("{} {} {}", input_file, resolution, fps);
    let output_file = format!("{}.min.mp4", input_file);
    Command::new(FFMPEG_PATH)
        .args([
            "-y",
            "-i",
            &input_file.to_string(),
            "-r",
            &fps.to_string(),
            "-s",
            match resolution {
                "1080" => "hd1080",
                "720" => "hd720",
                "480" => "hd480",
                _ => "",
            },
            &output_file.to_string(),
        ])
        .output()
        .expect("failed to execute ffmpeg command");

    output_file.into()
}
