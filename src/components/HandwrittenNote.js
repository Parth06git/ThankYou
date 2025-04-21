import React, { useEffect, useState } from "react";
import "./HandwrittenNote.css";

const fullMessage = `
To Our Beloved Faculty,

Thank you—for the long hours, the thoughtful lectures, the unconditional love, and the unwavering support. You’ve not only taught us engineering… but how to think, question, and grow. In every formula, every project, and every piece of feedback, we saw your dedication and heart.

This small corner of the web is our humble attempt to say what words can barely express: 
Thank you for being the teachers who shaped our journey.

With deep respect and gratitude,  
Parth Trivedi
CE21B024
8764361770
`;

const HandwrittenNote = () => {
  const [text, setText] = useState("");
  const speed = 50; // typing speed in ms

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullMessage.slice(0, index));
      index++;
      if (index > fullMessage.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="note-container">
      <pre className="handwritten-text">{text}</pre>
    </div>
  );
};

export default HandwrittenNote;
