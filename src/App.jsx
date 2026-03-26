import { useState, useMemo } from 'react';
import { translateToProfessional } from './utils/translator';
import { slangDictionary } from './utils/translator';

const ProfessionalTranslator = () => {
  const [inputText, setInputText] = useState('');

  // We memoize the output text processing
  const outputText = useMemo(() => {
    return translateToProfessional(inputText);
  }, [inputText]);

  // Function to render the translated string with highlighted changed words
  // Since we use straightforward string replacement, we can just split by word
  // But a simple approach is to re-run the highlighting logic inside React parsing.
  // For a seamless visual, we render plain text if no highlights, or formatted HTML if needed.
  // Since our replace creates simple strings, we will just use regex to wrap the known dictionary values.
  const renderHighlightedOutput = () => {
    if (!outputText) return null;

    let highlightedHTML = outputText;
    
    // Sort values of dictionary descending by length to match multi-words first
    const professionalTerms = [...new Set(Object.values(slangDictionary))].sort((a, b) => b.length - a.length);

    professionalTerms.forEach((term) => {
      // Escape regex chars
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
      
      highlightedHTML = highlightedHTML.replace(regex, (match) => {
        // Prevent double wrapping if a term is a substring of another
        // A tricky part with simple regex: we could wrap an already wrapped `<span>`.
        // We'll trust this for now as a simple visual highlight, or just don't highlight.
        return `|~|${match}|^|`;
      });
    });

    // Replace our custom temp tokens with span tags safely
    const parts = highlightedHTML.split('|~|');
    return parts.map((part, index) => {
      if (part.includes('|^|')) {
        const [highlight, rest] = part.split('|^|');
        return (
          <span key={index}>
            <span className="highlight">{highlight}</span>
            {rest}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Official Lexicon</h1>
        <p className="subtitle">Transform informal or harsh language into clean, corporate discourse.</p>
      </header>

      <main className="translator-wrapper">
        {/* Input Panel */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">Original Input</span>
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your informal message here. E.g., 'This feature is bullshit and it sucks...'"
            spellCheck="false"
          />
        </div>

        {/* Output Panel */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">Professional Output</span>
            {inputText && outputText !== inputText && (
               <span className="badge">Refined</span>
            )}
          </div>
          <div className="output-content">
            {renderHighlightedOutput()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalTranslator;
