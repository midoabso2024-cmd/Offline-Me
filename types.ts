
export type Section = 'home' | 'story' | 'insights' | 'interactive' | 'explore' | 'about' | 'chatbot' | 'studio' | 'contact';

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
