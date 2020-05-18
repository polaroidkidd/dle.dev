import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeBlockProps {
  value: string;
  language: string;
}

const CodeBlock: React.FC<ICodeBlockProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={base16AteliersulphurpoolLight}
      customStyle={{ fontSize: '1.5rem' }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export { CodeBlock };
