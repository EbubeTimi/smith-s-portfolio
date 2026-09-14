"""Rebuild approved watermarked derivatives without modifying source media."""
import hashlib
import json
import pathlib
import subprocess
import imageio_ffmpeg

ROOT = pathlib.Path(__file__).resolve().parent
SOURCE = pathlib.Path('C:/Users/smith/Videos/CAPCUT')
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
CLIPS = [('EMMA.mp4', 'emma', 540, 6), ('TIMI.mp4', 'timi', 540, 8), ('TRAILER F.mp4', 'trailer', 960, 8)]

def sha256(path):
    with path.open('rb') as f:
        return hashlib.file_digest(f, 'sha256').hexdigest()

def run(args):
    subprocess.run([FFMPEG, '-hide_banner', '-loglevel', 'warning', '-y', *args], cwd=ROOT, check=True)

def main():
    records = []
    for original, slug, width, poster_time in CLIPS:
        source = SOURCE / original
        before = sha256(source)
        output = ROOT / (slug + '.mp4')
        font_size = 23 if width == 540 else 26
        filters = (f'scale={width}:-2,setsar=1,'
                   f"drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':textfile=watermark.txt:"
                   f'fontsize={font_size}:fontcolor=white:box=1:boxcolor=black@0.65:'
                   'boxborderw=12:x=(w-text_w)/2:y=h-text_h-88')
        run(['-i', str(source), '-map', '0:v:0', '-map', '0:a:0?', '-vf', filters,
             '-c:v', 'libx264', '-preset', 'medium', '-crf', '25', '-pix_fmt', 'yuv420p',
             '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', '-map_metadata', '-1', str(output)])
        run(['-ss', str(poster_time), '-i', str(output), '-frames:v', '1', '-q:v', '2', '-update', '1', str(ROOT / (slug + '.jpg'))])
        run(['-i', str(output), '-f', 'null', '-'])
        assert sha256(source) == before, 'Source changed during processing'
        records.append({'source': str(source), 'source_sha256': before,
                        'source_bytes': source.stat().st_size, 'output': output.name,
                        'output_sha256': sha256(output), 'output_bytes': output.stat().st_size,
                        'poster': slug + '.jpg', 'poster_second': poster_time,
                        'codec': 'H.264 / AAC', 'watermark': 'Smith Onyekwereh · AI Filmmaking'})
        print(json.dumps(records[-1]), flush=True)
    (ROOT / 'provenance.json').write_text(json.dumps(records, indent=2), encoding='utf-8')

if __name__ == '__main__':
    main()
