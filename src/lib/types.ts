export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "formula"; latex: string; description?: string }
  | { type: "list"; items: ListItem[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string; variant?: "info" | "warning" | "tip" }
  | { type: "example"; title: string; blocks: ContentBlock[] }
  | { type: "glossary"; title?: string; items: GlossaryItem[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "definition"; term: string; definition: string };

export type GlossaryItem = {
  symbol: string;
  meaning: string;
  unit?: string;
  note?: string;
};

export type ListItem = {
  text: string;
  children?: ListItem[];
};

export type Materi = {
  slug: string;
  no: number;
  title: string;
  category: string;
  summary: string;
  blocks: ContentBlock[];
  // optional short concept tags
  concepts?: string[];
};

export type Soal = {
  no: number;
  question: string;
  formulaLatex?: string;
  options: string[]; // 5 options A-E
  answerIndex: number; // 0-4
  explanation: string;
  explanationLatex?: string;
};

export type LatihanSet = {
  slug: string;
  title: string;
  category: string;
  description: string;
  difficulty: "Mudah" | "Sedang" | "Sulit";
  soalList: Soal[];
};
