


import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from './Icon';

const SectionSeparator: React.FC = () => (
    <div className="my-10">
        <hr className="border-t border-border-light opacity-20" />
    </div>
);

const AboutProject: React.FC = () => {
    const { t } = useLanguage();
    const content = t('aboutProjectContent');

    const parseContent = (text: string) => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const elements: React.ReactNode[] = [];
        let listType: 'ul' | 'ol' | null = null;
        let listItems: React.ReactNode[] = [];
        let sectionCounter = 0;
        let olCounter = 1;

        const closeList = () => {
            if (listType === 'ul') {
                elements.push(<ul key={`ul-${elements.length}`} className="space-y-5 mb-6">{listItems}</ul>);
            } else if (listType === 'ol') {
                elements.push(<div key={`ol-${elements.length}`} className="space-y-5 mb-6">{listItems}</div>);
            }
            listItems = [];
            listType = null;
            olCounter = 1; 
        };

        lines.forEach((line, index) => {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith('## ')) {
                closeList();
                if (sectionCounter > 0) {
                    elements.push(<SectionSeparator key={`sep-${index}`} />);
                }
                const titleContent = trimmedLine.substring(3).replace(/\*\*(.*?)\*\*/g, '$1');
                elements.push(<h2 key={index} className="text-2xl md:text-3xl font-bold text-teal mt-8 mb-6 pb-2 border-b border-border-light">{titleContent}</h2>);
                sectionCounter++;
            } else if (trimmedLine.startsWith('### ')) {
                closeList();
                const titleContent = trimmedLine.substring(4).replace(/\*\*(.*?)\*\*/g, '$1');
                elements.push(<h3 key={index} className="text-xl md:text-2xl font-bold text-violet mt-8 mb-4">{titleContent}</h3>);
            } else if (trimmedLine.startsWith('* ')) {
                if (listType !== 'ul') {
                    closeList();
                    listType = 'ul';
                }
                const indentation = line.indexOf('*');
                const paddingRight = Math.floor(indentation / 4) * 40;
                const listItemContent = trimmedLine.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                listItems.push(
                    <li key={index} style={{ paddingRight: `${paddingRight}px` }} className="text-text-light text-base md:text-lg leading-relaxed flex items-start gap-4">
                        <Icon name="bullet-circle" className="h-6 w-6 mt-1 md:mt-2 flex-shrink-0 text-teal" />
                        <span dangerouslySetInnerHTML={{ __html: listItemContent }} />
                    </li>
                );
            } else if (/^\d+\.\s+/.test(trimmedLine)) {
                 if (listType !== 'ol') {
                    closeList();
                    listType = 'ol';
                    olCounter = 1; // Reset counter for new list
                }
                const indentation = line.search(/\d/);
                const paddingRight = Math.floor(indentation / 4) * 40;
                const listItemContent = trimmedLine.replace(/^\d+\.\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                listItems.push(
                    <li key={index} style={{ paddingRight: `${paddingRight}px` }} className="text-text-light text-base md:text-lg leading-relaxed flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-teal/20 text-teal font-bold rounded-full mt-1">
                            {olCounter++}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: listItemContent }} />
                    </li>
                );
            } else {
                closeList();
                const isBoldParagraph = trimmedLine.startsWith('**') && trimmedLine.endsWith('**');
                const content = isBoldParagraph ? trimmedLine.slice(2, -2) : trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                elements.push(
                    <p key={index} className={`mb-4 text-base md:text-lg leading-relaxed ${isBoldParagraph ? 'font-bold text-text-dark' : 'text-text-light'}`} dangerouslySetInnerHTML={{ __html: content }} />
                );
            }
        });

        closeList();
        return elements;
    };


    return (
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark uppercase tracking-wider">{t('pageTitle_about')}</h2>
                <p className="mt-2 text-lg text-text-light">{t('aboutSubtitle')}</p>
            </div>
            <div className="max-w-5xl mx-auto bg-surface border border-border-light p-6 md:p-8 rounded-2xl shadow-xl">
                 <img
                    src="https://lh6.googleusercontent.com/proxy/W3149IQ94VKuf_x2f6w2eVnMAVfLzSRmM5-r4r3WbdbXts7E33pyNg0i0iSkkWBOwEUPPBk6Wr9kUbMhSEzZ"
                    alt={t('aboutFacultyLogoAlt')}
                    className="h-28 w-28 md:h-40 md:w-40 mb-8 mx-auto rounded-full shadow-[0_0_25px_rgba(59,130,246,0.4)] border-2 border-teal/50"
                  />
                {parseContent(content)}
            </div>
        </div>
    );
};

export default AboutProject;