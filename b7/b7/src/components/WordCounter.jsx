import React, { useState, useEffect } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const words = text.trim().split(/\s+/);
      setWordCount(words.length);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        onChange={handleTextChange}
        value={text}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
