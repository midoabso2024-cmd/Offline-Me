


import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Icon, { IconName } from './Icon';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; conclusion: string; }> = ({ title, children, icon, conclusion }) => (
  <div className="bg-surface border border-border-light rounded-lg shadow-lg p-6 flex flex-col hover:border-teal/50 transition-all duration-300 transform hover:-translate-y-1 h-full">
    <div className="flex items-center mb-4">
      <div 
        className="rounded-full p-3 me-4 flex-shrink-0 bg-cream border border-border-light"
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-dark text-start">{title}</h3>
    </div>
    <div className="text-text-light text-start flex-grow">{children}</div>
    <p className="text-teal font-bold text-center mt-4 pt-4 border-t border-border-light/50">"{conclusion}"</p>
  </div>
);

const InsightsZone: React.FC = () => {
  const { t } = useLanguage();

  const infographics = [
    { id: 1, iconName: 'insight-definition', contentKey: 'infographic_definition_teen' },
    { id: 2, iconName: 'insight-emotional', contentKey: 'infographic_psych_impact' },
    { id: 3, iconName: 'insight-academic', contentKey: 'infographic_academic_impact' },
    { id: 4, iconName: 'insight-social', contentKey: 'infographic_social_impact' },
    { id: 5, iconName: 'insight-behavior', contentKey: 'infographic_behavior_signs' },
    { id: 6, iconName: 'insight-physical', contentKey: 'infographic_health_teen' },
    { id: 7, iconName: 'insight-time', contentKey: 'infographic_time_impact' },
    { id: 8, iconName: 'insight-causes', contentKey: 'infographic_causes' },
    { id: 9, iconName: 'insight-tips', contentKey: 'infographic_tips_teen' },
    { id: 10, iconName: 'insight-parents', contentKey: 'infographic_parents_role' },
    
    // Legacy/General Infographics
    { id: 11, iconName: 'insight-nomophobia', contentKey: 'infographic_nomophobia' },
    { id: 12, iconName: 'insight-global', contentKey: 'infographic_global' },
    { id: 13, iconName: 'insight-recovery', contentKey: 'infographic_recovery' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-text-dark uppercase tracking-wider">{t('insightsZoneTitle')}</h2>
        <p className="mt-2 text-lg text-text-light">{t('insightsZoneSubtitle')}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {infographics.map(info => {
          const content = t(info.contentKey);
          if (!content || !content.points) {
            return null;
          }
          return (
            <InfoCard 
              key={info.id}
              title={content.title}
              icon={<Icon name={info.iconName as IconName} className="h-6 w-6 text-teal" />}
              conclusion={content.conclusion}
            >
              <ul className="space-y-3 mt-4">
                {content.points.map((point: string, index: number) => 
                  <li key={index} className="flex items-start">
                    <Icon name="bullet-circle" className="w-5 h-5 me-3 mt-1 flex-shrink-0 text-teal" />
                    <span dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                )}
              </ul>
            </InfoCard>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsZone;
