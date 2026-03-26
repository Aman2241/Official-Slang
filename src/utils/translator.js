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
  "jerk": "uncooperative peer"
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
