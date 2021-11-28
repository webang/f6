import React from "react";
import "./docs-block.less";
import * as marked from 'marked';
import Prism from 'prismjs';

const renderer = {
  table: (header, body) => {
    return `<div class="grid-container f6-docs-table"><table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
  },
  code: (code, language) => {
    // console.log(Prism.languages, language)
    const highlightCode =
      Object.keys(Prism.languages).indexOf(language) > -1
        ? Prism.highlight(code, Prism.languages[language], language)
        : code;
    return `<pre class="code"><code class="language-${language}">${highlightCode}</code></pre>`;
  },
  heading: (text, level) => {
    if (level === 1) return '';
    return `<h${level}>${text}</h${level}>`;
  }
};

marked.use({ renderer });

export interface IDocsBlock {
  content: string;
}

const DocsBlock: React.FC<IDocsBlock> = ({ content }) => {
  let html = (marked as any).parse(content);
  return (
    <div
      className="docs-block"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></div>
  );
};

export default DocsBlock;
