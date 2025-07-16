import React, { useState, useCallback } from 'react';
import { generateScriptSection } from '../services/geminiService';
import SpinnerIcon from './icons/SpinnerIcon';
import CopyIcon from './icons/CopyIcon';
import CheckIcon from './icons/CheckIcon';

interface PrepSectionProps {
  title: string;
  description: string;
  placeholder: string;
  promptContext: string;
}

const PrepSection: React.FC<PrepSectionProps> = ({ title, description, placeholder, promptContext }) => {
  const [userInput, setUserInput] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerateScript = useCallback(async () => {
    if (!userInput.trim()) {
      setError("Please enter some notes before generating.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedScript('');

    try {
      const script = await generateScriptSection(promptContext, userInput);
      setGeneratedScript(script);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [userInput, promptContext]);

  const handleCopy = () => {
    if (generatedScript) {
      navigator.clipboard.writeText(generatedScript);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 transition-all duration-300 hover:border-sky-500/50">
      <h2 className="text-2xl font-bold text-sky-400">{title}</h2>
      <p className="mt-2 text-slate-400">{description}</p>
      
      <div className="mt-4">
        <label htmlFor={`textarea-${title}`} className="block text-sm font-medium text-slate-300 mb-1">
          Your Notes
        </label>
        <textarea
          id={`textarea-${title}`}
          rows={4}
          className="w-full bg-slate-900 border border-slate-600 rounded-md p-3 text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
          placeholder={placeholder}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>

      <div className="mt-4 flex items-center">
        <button
          onClick={handleGenerateScript}
          disabled={isLoading}
          className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading && <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />}
          {isLoading ? 'Generating...' : 'Generate Script'}
        </button>
      </div>

      {error && <p className="mt-4 text-red-400 bg-red-900/50 border border-red-700 rounded-md p-3">{error}</p>}

      {generatedScript && (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-slate-200">Generated Script</h3>
                <button
                    onClick={handleCopy}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors p-2 rounded-md bg-slate-700/50 hover:bg-slate-600"
                    >
                    {isCopied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5" />}
                    <span className="text-sm">{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>
          <div className="bg-slate-900/70 p-4 rounded-md border border-slate-700 whitespace-pre-wrap font-mono text-slate-300 text-sm leading-relaxed">
            {generatedScript}
          </div>
        </div>
      )}
    </section>
  );
};

export default PrepSection;
