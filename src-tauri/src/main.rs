// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{path::Path, process::Command};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ffgif, ffmin, ffaudio_only])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

/* ======================== *\
    #FFmpeg Commands
\* ======================== */

#[tauri::command]
async fn ffgif(input_file: String, start_time: f32, duration: f32) -> String {
    const FPS: u8 = 10;
    const RESOLUTION: u16 = 480;

    let output_file = replace_extention(&input_file, "gif");
    let video_filter = format!(
        "fps={},scale={}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
        FPS, RESOLUTION
    );

    // IF Both values are 0 Just use the Full Length
    if start_time == 0.0 && duration == 0.0 {
        ffmpeg(&[
            "-y", // Override
            "-i",
            &input_file,
            "-vf",
            &video_filter,
            &output_file,
        ]);
    } else {
        ffmpeg(&[
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
        ]);
    }

    output_file
}

#[tauri::command]
async fn ffmin(input_file: String, resolution: String, fps: u8) -> String {
    let output_file = replace_extention(&input_file, "min.mp4");
    ffmpeg(&[
        "-y",
        "-i",
        &input_file,
        "-r",
        &fps.to_string(),
        "-s",
        match resolution.as_str() {
            "1080" => "hd1080",
            "720" => "hd720",
            "480" => "hd480",
            _ => "",
        },
        &output_file,
    ]);

    output_file
}

#[tauri::command]
async fn ffaudio_only(input_file: String) -> String {
    let output_file = replace_extention(&input_file, "mp3");
    ffmpeg(&[
        "-y",
        "-i",
        &input_file.to_string(),
        &output_file.to_string(),
    ]);

    output_file
}

/* ------------------------ *\
    #Helpers
\* ------------------------ */

fn replace_extention(file_path: &str, new_extention: &str) -> String {
    Path::new(file_path)
        .with_extension(new_extention)
        .to_str()
        .unwrap_or_default()
        .into()
}

const FFMPEG_PATH: &str = "../public/ffmpeg";
// const FFPROBE_PATH: &str =  "../public/ffprobe";
fn ffmpeg(args: &[&str]) -> () {
    let _ = Command::new(FFMPEG_PATH)
        .args(args)
        .spawn()
        .expect("failed to execute ffmpeg command")
        .wait();
}
