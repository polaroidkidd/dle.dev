#!/bin/bash
Q=63
EXT="mp4"
cd /home/dle/DevWork/me/dle.dev/packages/frontend/public/videos || exit

for i in *.${EXT}; do
  nice ffmpeg -y -i "$i" -c:v libvpx -b:v 0 -crf $Q \
    -aq-mode 2 -an \
    -tile-columns 0 -tile-rows 0 \
    -frame-parallel 0 -cpu-used 8 \
    -auto-alt-ref 1 -lag-in-frames 25 -g 999 \
    -pass 1 -f webm -threads 8 \
    -an \
    "$(basename "$i" .${EXT})".temp
  nice ffmpeg -y -i "$i" -c:v libvpx -b:v 0 -crf $Q \
    -aq-mode 2 -c:a libopus -b:a 12k \
    -tile-columns 2 -tile-rows 2 \
    -frame-parallel 0 -cpu-used -5 \
    -auto-alt-ref 1 -lag-in-frames 25 \
    -pass 2 -g 999 -threads 8 \
    -an \
    "$(basename "$i" .${EXT})"-vpx-q${Q}.webm
done