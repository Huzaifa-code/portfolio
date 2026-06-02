import React, { useState } from 'react';
import { LuCopy } from 'react-icons/lu';

const CodeBlock = ({ node }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(node.code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="code-block-wrapper my-8 relative group">
      <div className="flex justify-between items-center bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-4 py-2 border-t-4 border-x-4 border-black dark:border-black font-mono text-sm">
        <span className="font-bold tracking-wider uppercase">Code Snippet</span>
        <button
          onClick={handleCopyToClipboard}
          className="bg-yellow-400 text-black px-3 py-1 font-bold text-xs uppercase brutalist-border border-black dark:border-black hover:bg-yellow-300 active:translate-y-0.5 transition-all flex items-center gap-1.5"
        >
          <LuCopy className="text-sm" />
          <span>{isCopied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="m-0 brutalist-border bg-neutral-900 text-neutral-100 p-6 overflow-x-auto font-mono text-sm leading-relaxed max-h-[500px] custom-scrollbar shadow-inner">
        <code>{node.code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
