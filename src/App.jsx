import { useState, useEffect } from 'react';
import { translateToProfessional } from './utils/translator';

const ProfessionalTranslator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  // Use a debounce effect to prevent calling the API on every single keystroke.
  // It waits 800ms after the user stops typing to fetch the translation.
  useEffect(() => {
    if (!inputText.trim()) {
      setOutputText('');
      setIsTranslating(false);
      return;
    }

    setIsTranslating(true);
    const timeoutId = setTimeout(async () => {
      const result = await translateToProfessional(inputText);
      setOutputText(result);
      setIsTranslating(false);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [inputText]);

  return (
    <div className="app-container">
      <header>
        <h1>Official Lexicon</h1>
        <p className="subtitle">Transform informal or harsh language into clean, corporate discourse using Gemini AI.</p>
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
            placeholder="Type your casual message or Hinglish here... E.g., 'ho gya bhai bhej rhe' or 'this is crap'"
            spellCheck="false"
          />
        </div>

        {/* Output Panel */}
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">Professional Output</span>
            {isTranslating ? (
              <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>Translating AI...</span>
            ) : outputText && outputText !== inputText ? (
               <span className="badge">Refined by AI</span>
            ) : null}
          </div>
          <div className="output-content" style={{ transition: 'opacity 0.3s', opacity: isTranslating ? 0.4 : 1 }}>
            {outputText}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalTranslator;
