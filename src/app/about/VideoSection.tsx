import { useState, useRef } from "react";
import {
    IoPlayOutline,
    IoPauseOutline,
    IoVolumeHighOutline,
    IoDownloadOutline,
    IoExpandOutline,
} from "react-icons/io5";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(1); // Track video volume
    const [progress, setProgress] = useState<number>(0); // Track progress
    const videoRef = useRef<HTMLVideoElement>(null);

    // Handle play/pause toggle
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

    // Handle volume change
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    // Handle progress change
    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newProgress = Number(e.target.value);
        setProgress(newProgress);
        if (videoRef.current) {
            videoRef.current.currentTime =
                (videoRef.current.duration * newProgress) / 100;
        }
    };

    // Update progress slider as the video plays
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((currentTime / duration) * 100);
        }
    };

    // Handle full-screen toggle
    const handleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <div className="w-full h-[764px] relative flex items-center justify-center">
            {/* Video Element */}
            <div className="relative w-[989px] h-[540px]">
                <video
                    ref={videoRef}
                    className="rounded-2xl w-full h-full object-cover"
                    poster="/Images/Video-cover.png"
                    onEnded={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src="/Images/nature.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Center Play Button */}
                {!isPlaying && (
                    <button
                        onClick={handlePlayPause}
                        className="absolute inset-0 flex items-center justify-center bg-[#23a6f0] rounded-full w-16 h-16 hover:scale-110 transition-transform"
                        aria-label="Play video"
                        style={{ margin: "auto" }}
                    >
                        <IoPlayOutline size={40} color="white" />
                    </button>
                )}

                {/* Bottom Controls */}
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent rounded-b-2xl">
                    <div className="flex items-center justify-between">
                        {/* Play/Pause Button */}
                        <button
                            onClick={handlePlayPause}
                            className="bg-white rounded-full p-2 hover:scale-110 transition-transform"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            {isPlaying ? (
                                <IoPauseOutline size={20} />
                            ) : (
                                <IoPlayOutline size={20} />
                            )}
                        </button>

                        {/* Progress Slider */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={progress}
                            onChange={handleProgressChange}
                            className="flex-grow mx-4"
                        />

                        {/* Volume Control */}
                        <div className="flex items-center gap-2">
                            <IoVolumeHighOutline size={20} color="white" />
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-24"
                            />
                        </div>

                        {/* Full-Screen Button */}
                        <button
                            onClick={handleFullScreen}
                            className="bg-white rounded-full p-2 hover:scale-110 transition-transform"
                            aria-label="Enter full screen"
                        >
                            <IoExpandOutline size={20} />
                        </button>

                        {/* Download Button */}
                        <a
                            href="/Images/nature.mp4"
                            download
                            className="bg-white rounded-full p-2 hover:scale-110 transition-transform"
                            aria-label="Download video"
                        >
                            <IoDownloadOutline size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
