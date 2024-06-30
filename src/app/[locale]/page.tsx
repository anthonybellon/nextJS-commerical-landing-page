'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const HomePage: React.FC = () => {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-1 items-center justify-center">
      <h1>{t('title')}</h1>
    </div>
  );
};

export default HomePage;
