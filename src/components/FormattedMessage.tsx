import React from 'react';

interface FormattedMessageProps {
  content: string;
  className?: string;
}

export function FormattedMessage({ content, className = "" }: FormattedMessageProps) {
  // Function to parse and format the message content
  const formatMessage = (text: string) => {
    // Split by paragraphs and process each section
    const sections = text.split(/\n\s*\n/).filter(section => section.trim());
    
    return sections.map((section, sectionIndex) => {
      // Handle numbered sections with emojis (e.g., "🛡️ 1. Health & Safety Measures:")
      const emojiNumberedMatch = section.match(/^(\*\*(?:🔥|🛡️|🏢|⚡|💚|🧽)?\s*\d+\.\s*[^*]+\*\*:?)([\s\S]*)/u);
      if (emojiNumberedMatch) {
        const [, title, content] = emojiNumberedMatch;
        return (
          <div key={sectionIndex} className="mb-5 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-400 dark:border-blue-400">
            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3 text-base flex items-center gap-2">
              {title.replace(/\*\*/g, '')}
            </h3>
            <div className="pl-2">
              {formatContent(content)}
            </div>
          </div>
        );
      }

      // Handle numbered sections (e.g., "**1. Health & Safety Measures:**")
      const numberedSectionMatch = section.match(/^(\*\*\d+\.\s*[^*]+\*\*:?)([\s\S]*)/);
      if (numberedSectionMatch) {
        const [, title, content] = numberedSectionMatch;
        return (
          <div key={sectionIndex} className="mb-5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-slate-400 dark:border-slate-500">
            <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-3 text-base">
              {title.replace(/\*\*/g, '')}
            </h3>
            <div className="pl-2">
              {formatContent(content)}
            </div>
          </div>
        );
      }

      // Handle conclusion paragraph
      if (section.toLowerCase().includes('in essence') || section.toLowerCase().includes('conclusion')) {
        return (
          <div key={sectionIndex} className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-400 dark:border-green-400">
            <p className="text-sm leading-relaxed font-medium text-green-800 dark:text-green-300">
              {formatInlineText(section)}
            </p>
          </div>
        );
      }

      // Handle regular bold sections
      if (section.includes('**')) {
        return (
          <div key={sectionIndex} className="mb-4">
            {formatContent(section)}
          </div>
        );
      }

      // Handle regular paragraphs
      return (
        <div key={sectionIndex} className="mb-4">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{formatInlineText(section)}</p>
        </div>
      );
    });
  };

  // Function to format content within sections
  const formatContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    
    return lines.map((line, lineIndex) => {
      // Handle bullet points with checkmarks and bold text (e.g., "* **✓ Personal Protective Equipment:**")
      const checkmarkBulletMatch = line.match(/^(\s*\*\s*)(\*\*✓\s*[^*]+\*\*:?)(.*)$/);
      if (checkmarkBulletMatch) {
        const [, indent, boldText, remainingText] = checkmarkBulletMatch;
        return (
          <div key={lineIndex} className="flex items-start gap-2 mb-2 ml-4">
            <span className="text-green-500 dark:text-green-400 text-sm mt-0.5">✓</span>
            <div className="flex-1">
              <span className="font-semibold text-green-700 dark:text-green-300">
                {boldText.replace(/\*\*✓\s*/g, '').replace(/\*\*/g, '')}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300">{remainingText}</span>
            </div>
          </div>
        );
      }

      // Handle bullet points with bold text
      const bulletMatch = line.match(/^(\s*\*\s*)(\*\*[^*]+\*\*:?)(.*)$/);
      if (bulletMatch) {
        const [, indent, boldText, remainingText] = bulletMatch;
        return (
          <div key={lineIndex} className="flex items-start gap-2 mb-2 ml-4">
            <span className="text-blue-500 dark:text-blue-400 text-xs mt-1">•</span>
            <div className="flex-1">
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {boldText.replace(/\*\*/g, '')}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300">{remainingText}</span>
            </div>
          </div>
        );
      }

      // Handle sub-bullet points (nested)
      const subBulletMatch = line.match(/^(\s{4,}\*\s*)(.*)$/);
      if (subBulletMatch) {
        const [, indent, text] = subBulletMatch;
        return (
          <div key={lineIndex} className="flex items-start gap-2 mb-1 ml-8">
            <span className="text-slate-400 dark:text-slate-500 text-xs mt-1">◦</span>
            <span className="text-sm text-slate-600 dark:text-slate-300">{formatInlineText(text)}</span>
          </div>
        );
      }

      // Handle regular lines with potential bold text
      if (line.trim()) {
        return (
          <p key={lineIndex} className="text-sm leading-relaxed mb-2 text-slate-600 dark:text-slate-300">
            {formatInlineText(line)}
          </p>
        );
      }

      return null;
    });
  };

  // Function to format inline bold text
  const formatInlineText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={index} className="font-semibold text-slate-700 dark:text-slate-200">
            {part.replace(/\*\*/g, '')}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={`formatted-message ${className} dark:text-slate-100`}>
      {formatMessage(content)}
    </div>
  );
}