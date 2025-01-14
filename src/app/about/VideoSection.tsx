import { useState, useRef } from "react";
import {
    IoPlayOutline,
    IoPauseOutline,
    IoVolumeHighOutline,
    IoVolumeMuteOutline,
    IoDownloadOutline,
    IoExpandOutline,
} from "react-icons/io5";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(1);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [showControls, setShowControls] = useState<boolean>(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.volume = volume || 1;
                setIsMuted(false);
            } else {
                videoRef.current.volume = 0;
                setIsMuted(true);
            }
        }
    };

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newProgress = Number(e.target.value);
        setProgress(newProgress);
        if (videoRef.current) {
            videoRef.current.currentTime =
                (videoRef.current.duration * newProgress) / 100;
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((currentTime / duration) * 100);
        }
    };

    const handleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    const handleVideoClick = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false);
            }
        }, 3000);
    };

    return (
        <div className="w-full h-auto py-4 sm:py-8 px-2 sm:px-8 flex items-center justify-center">
            <div className="relative w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] group">
                <video
                    ref={videoRef}
                    className="rounded-xl sm:rounded-2xl w-full h-auto object-cover cursor-pointer"
                    poster="/Images/Video-cover.png"
                    onEnded={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={handleVideoClick}
                >
                    <source src="/Images/nature.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Center play button - only shown when video is paused */}
                {!isPlaying && (
                    <button
                        onClick={handlePlayPause}
                        className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#23a6f0]/90 rounded-full hover:scale-110 transition-transform"
                        aria-label="Play video"
                    >
                        <IoPlayOutline size={32} color="white" />
                    </button>
                )}

                {/* Controls overlay - shows on hover or tap, hides after timeout */}
                <div 
                    className={`absolute bottom-0 w-full p-2 sm:p-4 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl sm:rounded-b-2xl transition-opacity duration-300 ${
                        showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="flex flex-col gap-2">
                        {/* Progress bar */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={progress}
                            onChange={handleProgressChange}
                            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#23a6f0]"
                        />

                        {/* Controls row */}
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                {/* Play/Pause */}
                                <button
                                    onClick={handlePlayPause}
                                    className="text-white hover:text-[#23a6f0] transition-colors"
                                    aria-label={isPlaying ? "Pause" : "Play"}
                                >
                                    {isPlaying ? (
                                        <IoPauseOutline size={24} />
                                    ) : (
                                        <IoPlayOutline size={24} />
                                    )}
                                </button>

                                {/* Volume controls - hidden on mobile */}
                                <div className="hidden sm:flex items-center gap-2">
                                    <button
                                        onClick={toggleMute}
                                        className="text-white hover:text-[#23a6f0] transition-colors"
                                    >
                                        {isMuted ? (
                                            <IoVolumeMuteOutline size={24} />
                                        ) : (
                                            <IoVolumeHighOutline size={24} />
                                        )}
                                    </button>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={isMuted ? 0 : volume}
                                        onChange={handleVolumeChange}
                                        className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#23a6f0]"
                                    />
                                </div>
                            </div>

                            {/* Right-side controls */}
                            <div className="flex items-center gap-2">
                                <a
                                    href="/Images/nature.mp4"
                                    download
                                    className="text-white hover:text-[#23a6f0] transition-colors"
                                    aria-label="Download video"
                                >
                                    <IoDownloadOutline size={24} />
                                </a>
                                <button
                                    onClick={handleFullScreen}
                                    className="text-white hover:text-[#23a6f0] transition-colors"
                                    aria-label="Full screen"
                                >
                                    <IoExpandOutline size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;