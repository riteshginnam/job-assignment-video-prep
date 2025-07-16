import React from 'react';
import Header from './components/Header';
import PrepSection from './components/PrepSection';
import { PREP_SECTIONS } from './constants';
import { PrepSectionData } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 space-y-6">
          {PREP_SECTIONS.map((section: PrepSectionData) => (
            <PrepSection
              key={section.id}
              title={section.title}
              description={section.description}
              placeholder={section.placeholder}
              promptContext={section.promptContext}
            />
          ))}
        </main>
        <footer className="text-center text-sm text-slate-500 mt-12 pb-4">
            <p>Powered by Gemini API. Built for your success.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
