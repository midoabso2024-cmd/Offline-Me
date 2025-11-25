
import React, { useState, useMemo } from 'react';
import type { QuizQuestion, Section } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';


const Quiz: React.FC<{ navigateTo: (section: Section) => void }> = ({ navigateTo }) => {
    const { t } = useLanguage();
    const rawQuestions = t('quizQuestions');
    const quizQuestions: QuizQuestion[] = Array.isArray(rawQuestions) ? rawQuestions : [];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);

    // If no questions loaded, show fallback or empty
    if (quizQuestions.length === 0) return <div className="p-4 text-center text-text-light">{t('loadingContent')}</div>;

    const handleAnswer = (score: number) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setShowResult(false);
    };

    const totalScore = useMemo(() => answers.reduce((acc, score) => acc + score, 0), [answers]);
    
    const percentage = useMemo(() => {
        if (!showResult || quizQuestions.length === 0) return 0;
        const minScore = quizQuestions.length * 1;
        const maxScore = quizQuestions.length * 3;
        if (maxScore === minScore) return 0;
        return Math.round(((totalScore - minScore) / (maxScore - minScore)) * 100);
    }, [showResult, totalScore, quizQuestions.length]);

    const result = useMemo(() => {
        if (!showResult) return null;
        const results = t('quizResults');
        
        if (percentage <= 33) return { 
            ...results.good, 
            progressColor: "#10B981",
            bgColor: "bg-success/10 border border-success/30",
            textColor: "text-success-dark",
        };
        if (percentage <= 66) return { 
            ...results.warning, 
            progressColor: "#F59E0B",
            bgColor: "bg-warning/10 border border-warning/30",
            textColor: "text-warning",
        };
        return { 
            ...results.danger, 
            progressColor: "#EF4444",
            bgColor: "bg-danger/10 border border-danger/30",
            textColor: "text-red-300",
        };
    }, [showResult, percentage, t]);


    return (
        <div className="bg-surface border border-border-light rounded-2xl shadow-xl p-6 md:p-8 w-full flex flex-col transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center mb-6">
                <Icon name="article-psychology" className="h-12 w-12 md:h-16 md:w-16 mb-4 text-teal" />
                <h3 className="text-xl md:text-2xl font-bold text-text-dark">{t('quizTitle')}</h3>
                <p className="text-text-light mt-1 text-sm">{t('quizCardSubtitle')}</p>
            </div>

            {!showResult ? (
                <div className="flex flex-col flex-grow">
                    <div className="text-center mb-4">
                        <p className="text-text-light">{t('quizProgress', { current: currentQuestionIndex + 1, total: quizQuestions.length })}</p>
                        <div className="w-full bg-border-light rounded-full h-2 mt-2">
                            <div className="bg-google-blue h-2 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}></div>
                        </div>
                    </div>
                    <p className="text-lg md:text-xl font-semibold text-center mb-6 text-text-dark min-h-[5rem] md:min-h-[6rem] flex items-center justify-center">{quizQuestions[currentQuestionIndex].question}</p>
                    <div className="flex flex-col space-y-3 mt-auto">
                        {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.score)}
                                className="w-full text-base md:text-lg bg-cream border border-border-light text-text-dark font-semibold py-3 px-4 rounded-lg hover:bg-teal/10 hover:border-teal hover:text-teal transition-all duration-200"
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center flex flex-col items-center animate-fade-in flex-grow">
                    <div className="relative w-48 h-48 mb-6">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
                            <circle
                                className="text-border-light"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                r="54"
                                cx="60"
                                cy="60"
                            />
                            <circle
                                stroke={result?.progressColor}
                                strokeWidth="8"
                                strokeLinecap="round"
                                fill="transparent"
                                r="54"
                                cx="60"
                                cy="60"
                                strokeDasharray={339.29}
                                strokeDashoffset={339.29 - (percentage / 100) * 339.29}
                                className="transition-all duration-1000 ease-out drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]"
                            />
                        </svg>
                        <div 
                            className="absolute inset-0 flex flex-col items-center justify-center"
                            style={{ color: result?.progressColor }}
                        >
                             <span className="text-5xl font-bold">{percentage}%</span>
                        </div>
                    </div>
                    
                    <div className={`mt-2 p-4 rounded-lg w-full ${result?.bgColor}`}>
                        <h4 className={`text-xl md:text-2xl font-bold ${result?.textColor}`}>{result?.title}</h4>
                        <p className={`mt-2 ${result?.textColor}`}>{result?.description}</p>
                    </div>

                    <div className="mt-auto pt-6 w-full flex flex-col items-center gap-3">
                        <button
                            onClick={resetQuiz}
                            className="bg-google-blue text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#0b57d0]/90"
                        >
                            {t('retakeQuizButton')}
                        </button>
                         {/* Suggestions are always good to show after result */}
                         <div className="mt-4 w-full text-center">
                            <p className="text-sm text-text-light mb-2">{t('suggestionTitle')}</p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => navigateTo('insights')}
                                    className="flex-1 bg-cream border border-border-light hover:bg-border-light text-text-light font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                                >
                                    {t('suggestionInsights')}
                                </button>
                                <button
                                    onClick={() => navigateTo('explore')}
                                    className="flex-1 bg-cream border border-border-light hover:bg-border-light text-text-light font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                                >
                                    {t('suggestionLibrary')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const UsageTracker: React.FC<{ navigateTo: (section: Section) => void }> = ({ navigateTo }) => {
    const { t } = useLanguage();
    const [hours, setHours] = useState<number>(0);

    const calculateColor = (h: number) => {
        if (h <= 2) return "#10B981"; // Green
        if (h <= 5) return "#F59E0B"; // Yellow/Orange
        if (h <= 8) return "#EF4444"; // Red
        return "#A21CAF"; // Purple/Dark Red
    };

    const analysis = useMemo(() => {
        const trackerData = t('usageTrackerAnalysis');
        if (hours <= 2) return { ...trackerData.safe, color: calculateColor(hours), battery: 100 };
        if (hours <= 5) return { ...trackerData.moderate, color: calculateColor(hours), battery: 75 };
        if (hours <= 8) return { ...trackerData.danger, color: calculateColor(hours), battery: 40 };
        return { ...trackerData.extreme, color: calculateColor(hours), battery: 10 };
    }, [hours, t]);

    // Fun stats
    const daysLost = Math.round((hours * 365) / 24);
    const booksRead = Math.round((hours * 365) / 5); // Avg book takes 5-8 hours
    const walkingKm = Math.round(hours * 5); // Avg walking speed 5km/h

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHours(parseInt(e.target.value));
    };

    return (
        <div className="bg-surface border border-border-light rounded-2xl shadow-xl p-6 md:p-8 w-full flex flex-col transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center mb-6">
                <Icon name="test-timer" className="h-12 w-12 md:h-16 md:w-16 mb-4 text-teal" />
                <h3 className="text-xl md:text-2xl font-bold text-text-dark">{t('usageTrackerTitle')}</h3>
                <p className="text-text-light mt-1 text-sm">{t('usageTrackerSubtitle')}</p>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
                
                {/* Circular Slider Visualization */}
                <div className="relative w-48 h-48 mb-6 group">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                        {/* Background Circle */}
                        <circle
                            cx="60" cy="60" r="54"
                            fill="none"
                            stroke="#131314"
                            strokeWidth="8"
                        />
                        {/* Progress Circle */}
                        <circle
                            cx="60" cy="60" r="54"
                            fill="none"
                            stroke={analysis.color}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="339.29"
                            strokeDashoffset={339.29 - (339.29 * (hours / 16))} // 16 hours as "waking day" max for visual impact
                            className="transition-all duration-300 ease-out drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                        />
                    </svg>
                    
                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-white transition-all duration-300" style={{color: analysis.color}}>{hours}</span>
                        <span className="text-xs text-text-light font-medium">{t('usageHoursLabel')}</span>
                    </div>
                </div>

                {/* Slider Input */}
                <div className="w-full max-w-xs mb-8">
                    <input 
                        type="range" 
                        min="0" 
                        max="16" 
                        value={hours} 
                        onChange={handleSliderChange}
                        className="w-full h-3 bg-cream rounded-lg appearance-none cursor-pointer accent-google-blue hover:accent-teal transition-all duration-300 border border-border-light"
                        style={{
                            background: `linear-gradient(to left, ${analysis.color} ${(hours/16)*100}%, #131314 ${(hours/16)*100}%)`
                        }}
                    />
                    <div className="flex justify-between text-xs text-text-light mt-2 px-1">
                        <span>0</span>
                        <span>8</span>
                        <span>16+</span>
                    </div>
                </div>

                {/* Analysis Card */}
                <div className={`w-full rounded-xl p-4 border border-white/5 transition-all duration-500 ${hours > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{backgroundColor: `${analysis.color}10`}}>
                    <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold" style={{color: analysis.color}}>{analysis.title}</h4>
                        <div className="flex items-center gap-2" title={t('usageBatteryLabel')}>
                            <div className="w-8 h-4 border border-text-light rounded sm-1 p-0.5 flex items-center">
                                <div className="h-full rounded-[1px] transition-all duration-500" style={{width: `${analysis.battery}%`, backgroundColor: analysis.battery < 20 ? '#EF4444' : '#10B981'}}></div>
                            </div>
                            <span className="text-xs text-text-light hidden sm:inline">{t('usageBatteryLabel')}</span>
                        </div>
                    </div>
                    <p className="text-sm text-text-light mb-4">{analysis.desc}</p>
                    
                    {/* Gamified Stats */}
                    {hours > 0 && (
                        <div className="grid grid-cols-3 gap-2 text-center border-t border-white/10 pt-3">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-text-dark">{daysLost}</span>
                                <span className="text-[10px] text-text-light leading-tight">{t('usageStatDays')}</span>
                            </div>
                            <div className="flex flex-col border-x border-white/10">
                                <span className="text-lg font-bold text-teal">{booksRead}</span>
                                <span className="text-[10px] text-text-light leading-tight">{t('usageStatBooks')}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-violet">{walkingKm}</span>
                                <span className="text-[10px] text-text-light leading-tight">{t('usageStatWalk')}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Suggestion Section for Hours > 2 */}
                {hours > 2 && (
                    <div className="mt-6 w-full text-center animate-fade-in">
                        <p className="text-sm text-text-light mb-2">{t('suggestionTitle')}</p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigateTo('insights')}
                                className="flex-1 bg-cream border border-border-light hover:bg-border-light text-text-light font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                            >
                                {t('suggestionInsights')}
                            </button>
                            <button
                                onClick={() => navigateTo('explore')}
                                className="flex-1 bg-cream border border-border-light hover:bg-border-light text-text-light font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                            >
                                {t('suggestionLibrary')}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

const InteractiveZone: React.FC<{ navigateTo: (section: Section) => void }> = ({ navigateTo }) => {
    const { t } = useLanguage();
    return (
      <>
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <Icon name="puzzle" className="h-16 w-16 md:h-20 md:w-20 text-teal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('interactiveZoneTitle')}</h2>
            <p className="mt-2 text-lg text-text-light">{t('interactiveZoneSubtitle')}</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <Quiz navigateTo={navigateTo} />
              <UsageTracker navigateTo={navigateTo} />
          </div>
        </div>
      </>
    );
};

export default InteractiveZone;
