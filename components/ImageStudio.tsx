
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

type AspectRatio = '1:1' | '4:3' | '3:4' | '16:9' | '9:16';

const ImageStudio: React.FC = () => {
    const { t } = useLanguage();
    const [prompt, setPrompt] = useState('');
    const [lastPrompt, setLastPrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState<string | null>(null);
    // Default Aspect Ratio set to 16:9 (Wide) as requested
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const loadingIntervalRef = useRef<number | null>(null);

    const loadingMessages: string[] = useMemo(() => t('studioLoadingMessages') || [], [t]);

    useEffect(() => {
        if (isLoading && loadingMessages.length > 0) {
            let i = 0;
            setLoadingMessage(loadingMessages[0]);
            loadingIntervalRef.current = window.setInterval(() => {
                i = (i + 1) % loadingMessages.length;
                setLoadingMessage(loadingMessages[i]);
            }, 2500);
        } else if (loadingIntervalRef.current) {
            clearInterval(loadingIntervalRef.current);
            loadingIntervalRef.current = null;
        }
        return () => {
            if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
        };
    }, [isLoading, loadingMessages]);

    const handleGenerateImage = async (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);
        setGeneratedImage(null);
        setError(null);
        setLastPrompt(prompt);
        setIsImageModalOpen(false); // Close modal if open

        if (!process.env.API_KEY) {
            setError("AI features are disabled. API Key is not configured.");
            setIsLoading(false);
            return;
        }

        const requiredStyle = "Comic panel, heavy inking on shadows, Egyptian characters drawn in a hybrid style blending strong dark comic inking (Marvel/Vertigo), no text or captions.";
        const fullPrompt = `${prompt}. Style: ${requiredStyle}`;

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Try primary high-quality model first
            try {
                const response = await ai.models.generateImages({
                    model: 'imagen-4.0-generate-001',
                    prompt: fullPrompt,
                    config: {
                        numberOfImages: 1,
                        outputMimeType: 'image/png',
                        aspectRatio: aspectRatio,
                    },
                });

                if (response.generatedImages && response.generatedImages.length > 0) {
                    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
                    setGeneratedImage(`data:image/png;base64,${base64ImageBytes}`);
                    setIsLoading(false);
                    return;
                }
            } catch (primaryError) {
                console.warn('Primary model failed, attempting fallback...', primaryError);
                // Continue to fallback
            }

            // Fallback to Flash Image if Imagen fails
            const fallbackResponse = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: [
                        { text: `Generate an image: ${fullPrompt}` }
                    ]
                },
                config: {
                    responseModalities: [Modality.IMAGE],
                }
            });

            let foundImage = false;
            if (fallbackResponse.candidates && fallbackResponse.candidates.length > 0) {
                for (const part of fallbackResponse.candidates[0].content.parts) {
                    if (part.inlineData) {
                        const base64ImageBytes: string = part.inlineData.data;
                        setGeneratedImage(`data:image/png;base64,${base64ImageBytes}`);
                        foundImage = true;
                        break;
                    }
                }
            }

            if (!foundImage) {
                throw new Error("No image data received from API.");
            }

        } catch (err) {
            console.error('Error generating image:', err);
            setError(t('studioError'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleRetry = () => {
        setGeneratedImage(null);
        setError(null);
        setIsImageModalOpen(false);
        // Do not clear prompt to allow user to edit
    };

    const handleSave = () => {
        if (!generatedImage) return;
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `offline-me-studio-${lastPrompt.substring(0, 20).replace(/\s/g, '_')}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(lastPrompt);
    };

    const aspectRatios: { value: AspectRatio; labelKey: string }[] = [
        { value: '1:1', labelKey: 'aspect_1_1' },
        { value: '4:3', labelKey: 'aspect_4_3' },
        { value: '3:4', labelKey: 'aspect_3_4' },
        { value: '16:9', labelKey: 'aspect_16_9' },
        { value: '9:16', labelKey: 'aspect_9_16' },
    ];

    return (
        <>
        <div className="max-w-5xl mx-auto my-16 bg-surface border border-border-light rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1">
            
            {/* Header Section - Inside Card */}
            <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                    <Icon name="studio" className="h-16 w-16 md:h-20 md:w-20 text-teal" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('studioTitle')}</h2>
                <p className="mt-2 text-lg text-text-light">{t('studioSubtitle')}</p>
            </div>

            {/* Viewport / Result Area - Above Input */}
            <div className="w-full min-h-[300px] md:min-h-[400px] bg-cream rounded-xl border border-border-light mb-6 relative overflow-hidden flex flex-col items-center justify-center p-4">
                
                {/* State 1: Loading */}
                {isLoading && (
                    <div className="text-center animate-pulse z-10">
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal mx-auto mb-4"></div>
                        <p className="text-lg text-teal font-bold">{loadingMessage}</p>
                    </div>
                )}

                {/* State 2: Error */}
                {error && !isLoading && (
                    <div className="text-center max-w-md p-6 bg-surface/50 border border-danger/30 rounded-xl z-10">
                        <Icon name="info-circle" className="h-10 w-10 text-danger mx-auto mb-3" />
                        <p className="text-red-300 font-semibold">{error}</p>
                    </div>
                )}

                {/* State 3: Generated Image */}
                {generatedImage && !isLoading && (
                     <div className="relative w-full h-full flex flex-col items-center justify-center animate-fade-in">
                         <div className="relative max-w-full max-h-[300px] md:max-h-[380px] shadow-2xl rounded-lg overflow-hidden">
                            <img src={generatedImage} alt={lastPrompt} className="object-contain max-w-full max-h-full" />
                         </div>
                         
                         {/* Action Overlay */}
                         <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 px-4 pointer-events-none">
                            <div className="flex gap-2 bg-surface/80 backdrop-blur-md p-2 rounded-full border border-border-light shadow-lg pointer-events-auto">
                                <button onClick={() => setIsImageModalOpen(true)} className="p-2 hover:bg-teal/20 hover:text-teal rounded-full transition-colors" title={t('studioActionExpand')}>
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                </button>
                                <button onClick={handleSave} className="p-2 hover:bg-teal/20 hover:text-teal rounded-full transition-colors" title={t('studioActionSave')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </button>
                                <button onClick={handleCopy} className="p-2 hover:bg-teal/20 hover:text-teal rounded-full transition-colors" title={t('studioActionCopy')}>
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                </button>
                                <button onClick={handleRetry} className="p-2 hover:bg-teal/20 hover:text-teal rounded-full transition-colors" title={t('studioActionRetry')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </button>
                            </div>
                         </div>
                     </div>
                )}

                {/* State 4: Initial Placeholder */}
                {!generatedImage && !isLoading && !error && (
                    <div className="text-center opacity-30 select-none">
                        <Icon name="studio" className="h-24 w-24 mx-auto mb-4" />
                        <p className="text-xl font-bold">{t('studioPlaceholder').split('...')[0]}</p>
                    </div>
                )}
            </div>

            {/* Aspect Ratio Chips (Like FAQs in Chatbot) */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="text-xs text-text-light self-center mr-2">{t('studioAspectRatio')}</span>
                {aspectRatios.map(({ value, labelKey }) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setAspectRatio(value)}
                        disabled={isLoading}
                        className={`text-xs md:text-sm border font-semibold py-1.5 px-3 md:px-4 rounded-full transition-colors duration-200 ${
                            aspectRatio === value 
                            ? 'bg-teal/10 text-teal border-teal' 
                            : 'bg-surface hover:bg-border-light text-text-light hover:text-white border-border-light'
                        }`}
                    >
                        {t(labelKey)}
                    </button>
                ))}
            </div>

            {/* Input Area - Bottom */}
            <form onSubmit={handleGenerateImage} className="relative group">
                 {/* Animated Gradient Border Container */}
                 <div className="absolute -inset-[2px] rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 overflow-hidden pointer-events-none">
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#131314_0%,#0B57D0_25%,#A8C7FA_50%,#0B57D0_75%,#131314_100%)] animate-spin-slow" />
                </div>

                {/* Input Content */}
                <div className="relative flex items-center bg-cream rounded-full border border-border-light p-2 pr-4 pl-2 shadow-inner transition-all duration-300 group-focus-within:border-transparent">
                     <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={t('studioPlaceholder')}
                        className="flex-grow bg-transparent text-text-dark placeholder-text-light/50 px-4 py-2 focus:outline-none text-base"
                        disabled={isLoading}
                        autoComplete="off"
                    />
                    <button 
                        type="submit" 
                        disabled={isLoading || !prompt.trim()} 
                        className="p-2 bg-google-blue text-white rounded-full transition-all duration-300 hover:bg-[#0b57d0]/90 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex-shrink-0"
                        title={t('studioButton')}
                    >
                         {/* Sparkles / Magic Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 01-1.456 0l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>

        {/* Full Screen Modal */}
        {isImageModalOpen && generatedImage && (
            <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
                <button 
                    onClick={() => setIsImageModalOpen(false)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative max-w-full max-h-full flex items-center justify-center">
                    <img 
                        src={generatedImage} 
                        alt={lastPrompt} 
                        className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl" 
                    />
                </div>
            </div>
        )}
        </>
    );
};

export default ImageStudio;
