import { useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

type VideoTestimonialCardProps = {
  title: string;
  src: string;
  poster: string;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const secs = String(total % 60).padStart(2, '0');
  return `${minutes}:${secs}`;
}

export default function VideoTestimonialCard({ title, src, poster }: VideoTestimonialCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ratio, setRatio] = useState(9 / 16);
  const [loadError, setLoadError] = useState(false);
  const [started, setStarted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const isPortrait = ratio < 1;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20">
      <div
        className="relative mx-auto w-full overflow-hidden bg-black"
        style={{ aspectRatio: `${ratio}`, maxWidth: isPortrait ? '340px' : '100%' }}
      >
        {loadError ? (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="text-sm text-white/60">This testimonial could not be loaded right now.</p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              preload="metadata"
              playsInline
              onClick={togglePlay}
              onPlay={() => {
                setPlaying(true);
                setStarted(true);
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onLoadedMetadata={(event) => {
                const video = event.currentTarget;
                setDuration(video.duration);
                if (video.videoWidth && video.videoHeight) {
                  setRatio(video.videoWidth / video.videoHeight);
                }
              }}
              onError={() => setLoadError(true)}
              className="absolute inset-0 h-full w-full object-cover cursor-pointer"
            />

            {!started && (
              <img
                src={poster}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            )}

            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pb-3 pt-10">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? `Pause ${title}` : `Play ${title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {playing ? (
                  <Pause className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ) : (
                  <Play className="ml-0.5 h-4 w-4 fill-current" strokeWidth={1.5} />
                )}
              </button>

              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={(event) => seek(Number(event.target.value))}
                aria-label={`Seek ${title}`}
                className="h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full
                  [&::-webkit-slider-thumb]:h-3.5
                  [&::-webkit-slider-thumb]:w-3.5
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-moz-range-thumb]:h-3.5
                  [&::-moz-range-thumb]:w-3.5
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:bg-white"
                style={{
                  background: `linear-gradient(to right, #ff1493 ${progress}%, rgba(255,255,255,0.25) ${progress}%)`,
                }}
              />

              <span className="shrink-0 text-xs tabular-nums text-white/80">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? `Unmute ${title}` : `Mute ${title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
              >
                {muted ? (
                  <VolumeX className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Volume2 className="h-4 w-4" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 border-t border-white/10 px-6 py-5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff1493]" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{title}</h3>
      </div>
    </article>
  );
}
