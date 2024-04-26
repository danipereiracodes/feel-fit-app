import { useState } from 'react';

interface CopyToClipboardProps {
  content: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => console.error('Copy failed:', error));
  };

  return (
    <button onClick={copyToClipboard}>
      {copied ? 'Copied!' : 'Copy to Clipboard'}
    </button>
  );
};

export default CopyToClipboard;
