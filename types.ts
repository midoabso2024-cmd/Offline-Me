

export type Section = 'home' | 'story' | 'videos' | 'insights' | 'interactive' | 'explore' | 'about' | 'chatbot' | 'studio' | 'testimonials' | 'contact';

export interface QuizQuestion {
  question: string;
  options: { text: string; score: number }[];
}

export interface CharacterProfile {
  id: string;
  name: string;
  age: number;
  role: string;
  description: string;
}

export interface StoryChapter {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  images?: string[];
}

export interface Article {
    id: number;
    category: 'articles' | 'stories';
    title: string;
    author: string;
    content: string;
}

export interface VideoContent {
    id: number;
    title: string;
    url: string;
    description: string;
}