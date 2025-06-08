export const extractJson = (text) => {
  try {
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanText);
  } catch {
    const match = text.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (match) {
      return JSON.parse(match[0]);
    }
    throw new Error('Could not parse JSON from response');
  }
};