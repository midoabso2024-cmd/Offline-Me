
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { text: t('welcomeMessage'), sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (process.env.API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = "أنت مساعد ودود ومفيد لمشروع Offline-Me. هدفك هو تقديم الدعم والمعلومات حول العافية الرقمية، وإدمان الشاشة، وإيجاد توازن صحي مع التكنولوجيا. أجب عن الأسئلة بناءً على هذا السياق. حافظ على إجاباتك موجزة وداعمة، واستخدم نبرة متعاطفة. يجب أن تكون ردودك باللغة العربية.";
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    // Use 'nearest' to prevent the whole page from scrolling if the chatbot is already in view
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    if (messages.length > 1) {
        scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { text: prompt, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Focus is maintained naturally since we don't disable the input

    if (!process.env.API_KEY || !chatRef.current) {
      const errorMessage: Message = { text: "AI features are disabled. API Key is not configured.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await chatRef.current.sendMessage({ message: prompt });
      const botMessage: Message = { text: response.text, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error with Gemini API:', error);
      const errorMessage: Message = { text: 'Sorry, I\'m having trouble connecting right now. Please try again later.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // No need to force focus here anymore
    }
  };
  
  const faqs: string[] = t('faqs');

  return (
    <div className="max-w-5xl mx-auto my-16 bg-surface border border-border-light rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Icon name="bot-stars" className="h-8 w-8 md:h-10 md:w-10 text-teal" />
              <h2 className="text-xl md:text-2xl font-bold text-text-dark uppercase tracking-wider">{t('chatbotTitle')}</h2>
            </div>
            <p className="text-sm md:text-base text-text-light">{t('chatbotSubtitle')}</p>
        </div>
        <div>
            <div 
              ref={chatContainerRef}
              tabIndex={-1} 
              className="h-64 md:h-80 overflow-y-auto mb-4 p-4 space-y-4 bg-cream rounded-lg focus:outline-none border border-border-light"
            >
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'bot' && (
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-surface border border-border-light"
                            >
                                <Icon name="bot-stars" className="h-5 w-5 text-teal" />
                            </div>
                        )}
                        <div className={`max-w-lg p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-google-blue text-white rounded-br-none' : 'bg-surface text-text-dark rounded-bl-none border border-border-light'}`}>
                        {msg.text}
                        </div>
                         {msg.sender === 'user' && (
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-border-light"
                            >
                                <Icon name="user" className="h-5 w-5 text-text-light" />
                            </div>
                        )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-surface border border-border-light"
                        >
                           <Icon name="bot-stars" className="h-5 w-5 text-teal" />
                        </div>
                        <div className="max-w-lg p-3 rounded-2xl bg-surface text-text-dark rounded-bl-none border border-border-light">
                            <span className="animate-pulse">...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {faqs.map((faq, index) => (
                    <button key={index} onClick={() => handleSendMessage(faq)} className="text-xs md:text-sm bg-surface hover:bg-border-light text-text-light hover:text-white border border-border-light font-semibold py-1.5 px-3 md:px-4 rounded-full transition-colors duration-200">
                        {faq}
                    </button>
                ))}
            </div>

            {/* Professional Glowing Input Area */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="relative group">
                {/* Animated Gradient Border Container */}
                <div className="absolute -inset-[2px] rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 overflow-hidden pointer-events-none">
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#131314_0%,#0B57D0_25%,#A8C7FA_50%,#0B57D0_75%,#131314_100%)] animate-spin-slow" />
                </div>

                {/* Input Content */}
                <div className="relative flex items-center bg-cream rounded-full border border-border-light p-2 pr-4 pl-2 shadow-inner transition-all duration-300 group-focus-within:border-transparent">
                     <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t('inputPlaceholder')}
                        className="flex-grow bg-transparent text-text-dark placeholder-text-light/50 px-4 py-2 focus:outline-none text-base"
                        // Removed disabled={isLoading} to keep keyboard open on mobile
                    />
                    <button 
                        type="submit" 
                        disabled={isLoading || !input.trim()} 
                        className="p-2 bg-google-blue text-white rounded-full transition-all duration-300 hover:bg-[#0b57d0]/90 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex-shrink-0"
                    >
                        {/* Send Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Chatbot;
