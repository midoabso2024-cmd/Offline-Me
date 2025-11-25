
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <span className="font-bold text-xl">Offline-Me</span>
  </div>
);

export default Logo;
