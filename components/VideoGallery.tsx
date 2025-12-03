
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { VideoContent } from '../types';
import Icon from './Icon';

const VideoCard: React.FC<{ video: VideoContent }> = ({ video }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Helper to get YouTube ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(video.url);

    if (!videoId) return null;

    return (
        <div className="bg-surface border border-border-light rounded-xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal/30 flex flex-col h-full">
            {/* Video Area */}
            <div className="relative w-full pb-[56.25%] bg-black group/video">
                {!isPlaying ? (
                    <button 
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group-hover/video:bg-black/20 transition-colors"
                        aria-label="Play Video"
                    >
                        {/* Thumbnail */}
                        <img 
                            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-90"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-red-600/90 hover:bg-red-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover/video:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </button>
                ) : (
                    <iframe
                        className="absolute top-0 left-0 w-full h-full animate-fade-in"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-text-dark group-hover:text-teal transition-colors mb-2 line-clamp-2">
                    {video.title}
                </h3>
                <p className="text-text-light text-sm opacity-80 mb-4 line-clamp-3 flex-grow">
                    {video.description}
                </p>
                
                <div className="mt-auto pt-2 flex items-center justify-between border-t border-border-light/10">
                        <a 
                        href={video.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal font-bold text-sm flex items-center gap-2 group/btn hover:underline decoration-teal/50 underline-offset-4 pt-3"
                    >
                        <Icon name="youtube" className="w-4 h-4" />
                        شاهد على يوتيوب
                    </a>
                </div>
            </div>
        </div>
    );
};

const VideoGallery: React.FC = () => {
    const { t } = useLanguage();
    const rawVideos = t('videos');
    const videos: VideoContent[] = Array.isArray(rawVideos) ? rawVideos : [];

    return (
        <div className="space-y-12 animate-fade-in-up">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('videosTitle')}</h2>
                <p className="mt-2 text-lg text-text-light">{t('videosSubtitle')}</p>
            </div>

            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
            
            {videos.length === 0 && (
                <div className="text-center text-text-light py-12">
                    <p>لا توجد فيديوهات متاحة حالياً.</p>
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
