import "@/styles/highlight-dracula.css";

import hljs from "highlight.js/lib/common";
import { useEffect } from "react";

export const useHighlight = (languages = []) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, [languages]);
};
