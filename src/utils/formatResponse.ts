/**
 * Utility functions for formatting chatbot responses
 */

export function formatChatbotResponse(response: string): string {
  // If the response is already formatted with markdown, return as is
  if (response.includes('**') && response.includes('*')) {
    return response;
  }

  let formatted = response;

  // Format numbered sections (e.g., "1. Health & Safety Measures:")
  formatted = formatted.replace(
    /^(\d+\.\s*)([^:\n]+)(:?)$/gm,
    '**$1$2$3**'
  );

  // Format bullet points that start with capital letters and end with colons
  formatted = formatted.replace(
    /^\s*\*\s*([A-Z][^:]*:)/gm,
    '* **$1**'
  );

  // Format sub-bullet points with key terms
  formatted = formatted.replace(
    /^\s{4,}\*\s*([A-Z][^:]*:)/gm,
    '    * **$1**'
  );

  // Format key terms in parentheses
  formatted = formatted.replace(
    /\(([A-Z]{2,}[^)]*)\)/g,
    '(**$1**)'
  );

  // Format standalone key terms at the beginning of sentences
  formatted = formatted.replace(
    /^(\s*\*\s*)([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s*:/gm,
    '$1**$2:**'
  );

  // Format terms that look like titles or important concepts
  formatted = formatted.replace(
    /^(\s*\*\s*)([A-Z][a-zA-Z\s&]+):\s*/gm,
    '$1**$2:** '
  );

  return formatted;
}

export function enhanceWorkEnvironmentResponse(response: string): string {
  // Specific formatting for work environment responses
  let enhanced = response;

  // Add icons and better formatting for key sections
  const sectionReplacements = {
    'Health & Safety Measures': '🛡️ Health & Safety Measures',
    'Physical Environment': '🏢 Physical Environment',
    'Safety Equipment and Training': '⚡ Safety Equipment and Training',
    'Employee Well-being': '💚 Employee Well-being and Psychological Aspects',
    'Cleanliness and Hygiene': '🧽 Cleanliness and Hygiene'
  };

  Object.entries(sectionReplacements).forEach(([original, replacement]) => {
    enhanced = enhanced.replace(
      new RegExp(`\\*\\*\\d+\\.\\s*${original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*`, 'g'),
      `**${replacement}**`
    );
  });

  // Add emphasis to key safety terms
  const keyTerms = [
    'Personal Protective Equipment',
    'First Aid',
    'Fire-Fighting Equipment',
    'Cleanliness and Ventilation',
    'Safety Notes',
    'Washing Facilities'
  ];

  keyTerms.forEach(term => {
    const regex = new RegExp(`\\*\\*${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*`, 'g');
    enhanced = enhanced.replace(regex, `**✓ ${term}**`);
  });

  return enhanced;
}