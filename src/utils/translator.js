export async function translateToProfessional(text) {
  if (!text || text.trim() === "") return "";
  
  const apiKey = "AIzaSyD82il3fsb6_i5Dh8qkFH7JacW3teZ-XP8";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const prompt = `You are a highly skilled professional corporate translator. The following text contains slang, casual Hinglish, profanity, or informal phrasing.
Rewrite it strictly into highly refined, corporate-friendly professional English. Do not be overly verbose.
Return ONLY the translated text without any quotes, explanations, or Markdown formatting. 
Text: "${text}"`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.1 }
      })
    });
    
    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text.trim();
    }
  } catch (error) {
    console.error("Translation API error:", error);
    return "Error: Unable to process the translation at this time. Please check API Key or connection.";
  }
  return text; // Fallback to original text if API fails parsing silently
}
