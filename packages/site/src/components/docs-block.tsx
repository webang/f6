import React, { useEffect, useRef } from "react";
import "./docs-block.less";
import * as marked from 'marked';
import Prism from 'prismjs';
import { Toast } from "f6";

const renderer = {
  table: (header: string, body: string) => {
    return `<div class="grid-container f6-docs-table"><table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
  },
  code: (code: string, language: string) => {
    // const res = encodeURIComponent(code)
    const highlightCode =
      Object.keys(Prism.languages).indexOf(language) > -1
        ? Prism.highlight(code, Prism.languages[language], language)
        : code;
    return `<div class="code-container">
      <button class="btn-copy">复制</button>
      <textarea class="code-input">${code.trim()}</textarea>
      <pre class="code" ><code class="language-${language}">${highlightCode}</code></pre>
    </div>`;
  },
  heading: (text: string, level: number) => {
    if (level === 1) return '';
    return `<h${level}>${text}</h${level}>`;
  }
};

(marked as any).use({ renderer });

export interface IDocsBlock {
  content: string;
}

const DocsBlock: React.FC<IDocsBlock> = ({ content }) => {
  const html = (marked as any).parse(content);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll('.btn-copy').forEach((it, index) => {
        it.addEventListener('click', () => {
          copy(index)
        })
      })
      function copy(index: number) {
        var Url2 = ref.current?.querySelectorAll(".code-input")[index] as HTMLInputElement;
        Url2?.select();
        document.execCommand("Copy");
        Toast.show({ message: '复制成功', });
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className="docs-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default DocsBlock;
