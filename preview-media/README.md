# Approved portfolio media

These derivatives were created for public portfolio display with the user's approval. Every encoded video frame includes the persistent burned-in text **Smith Onyekwereh · AI Filmmaking**, centered in a translucent dark box above the lower player-control area. This is attribution, not DRM; public media remains downloadable.

| File | Duration | Dimensions | Bytes | Poster frame |
| --- | --- | --- | --- | --- |
| emma.mp4 | 49.27 s | 540 × 972 | 7,119,635 | 6 s |
| timi.mp4 | 55.59 s | 540 × 972 | 5,978,460 | 8 s |
| trailer.mp4 | 46.35 s | 960 × 526 | 5,526,042 | 8 s |

All files use H.264 High, yuv420p, 30 fps, AAC stereo at approximately 96 kb/s, and MP4 faststart. The combined videos are 18,624,137 bytes (about 18.6 MB), compared with 286,875,673 source bytes. Posters are JPEGs extracted from the encoded films and therefore contain the same watermark.

## Verification

Each output completed a full FFmpeg decode without errors. Codec, resolution, duration, and faststart atom order were checked. All three posters were visually inspected for meaningful film imagery and readable attribution. Original SHA-256 hashes were compared before and after encoding and remained identical. Source files were only read and are untouched. Exact source/output hashes are recorded in `provenance.json`.

## Rebuilding

Run `prepare_media.py` with a Python installation containing `imageio-ffmpeg`. It reads EMMA.mp4, TIMI.mp4, and TRAILER F.mp4 from `C:/Users/smith/Videos/CAPCUT`, writes only this directory's derivatives and generated provenance, and uses Windows Arial for the watermark. Rebuilding overwrites generated outputs here. Encoding settings: libx264, medium preset, CRF 25, scale to the listed widths with even heights. The watermark is applied unconditionally to every frame.
