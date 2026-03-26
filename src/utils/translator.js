export const slangDictionary = {
  "bullshit": "incorrect information",
  "bs": "inaccurate information",
  "fuck": "mess up",
  "fucking": "extremely",
  "fucked up": "compromised",
  "shit": "suboptimal output",
  "shitty": "substandard",
  "saber-rattling": "assertiveness",
  "wtf": "what on earth",
  "asshole": "difficult person",
  "bitch": "unpleasant individual",
  "bitching": "complaining",
  "crappy": "poor quality",
  "crap": "subpar work",
  "idiot": "uninformed individual",
  "dumb": "ill-advised",
  "stupid": "unwise",
  "pissed": "dissatisfied",
  "pissed off": "highly dissatisfied",
  "shut up": "please allow me to speak",
  "damn": "darn",
  "hell": "heck",
  "lmao": "[amused]",
  "af": "highly",
  "sucks": "is highly suboptimal",
  "garbage": "unusable material",
  "trash": "discarded concepts",
  "moron": "misguided person",
  "jerk": "uncooperative peer",
  
  // Hinglish / Casual Desi Phrases
  "ho gya bhai bhej rhe": "The task is completed, I am forwarding it now.",
  "ho gaya bhai bhej raha hu": "The task is completed, I am sending it now.",
  "ho gya": "it is completed",
  "ho gaya": "it is completed",
  "bhej rhe": "sending it over",
  "bhai": "team",
  "yaar": "colleagues",
  "jaldi kar": "please expedite this",
  "jaldi karo": "please expedite this",
  "samajh nahi aa raha": "I require further clarification",
  "dekh lenge": "we will review it shortly",
  "pagal hai kya": "are you completely sure about this approach?",
  "kya bakwas hai": "this information appears incorrect",
  "kaam nahi kar raha": "it is currently non-functional"
};

/**
 * Translates a given text by replacing slang/vulgar words with professional equivalents.
 * Maintains basic case preservation (Title case, UPPERCASE, lowercase).
 */
export function translateToProfessional(text) {
  if (!text) return "";
  let translatedText = text;

  // Sort keys by length descending to match multi-word phrases first
  const sortedKeys = Object.keys(slangDictionary).sort((a, b) => b.length - a.length);

  sortedKeys.forEach((key) => {
    // Create a regular expression for word boundary matching
    // escaping regex special characters just in case
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKey}\\b`, "gi");

    translatedText = translatedText.replace(regex, (match) => {
      const replacement = slangDictionary[key];
      
      // Preserve uppercase
      if (match === match.toUpperCase() && match.length > 1) {
        return replacement.toUpperCase();
      }
      
      // Preserve Titlecase
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      
      return replacement;
    });
  });

  return translatedText;
}
