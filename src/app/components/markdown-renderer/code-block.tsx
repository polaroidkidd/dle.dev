import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

interface ICodeBlockProps {
  value: string;
  language: 'jsx' | 'tsx' | 'typescript' | 'javascript';
}

const CodeBlock: React.FC<ICodeBlockProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={'jsx'} style={base16AteliersulphurpoolLight} customStyle={{ fontSize: '1.5rem' }}>
      {value}
    </SyntaxHighlighter>
  );
};

export { CodeBlock };
