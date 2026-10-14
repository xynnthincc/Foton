"use client";

import { useState } from "react";
import { LatihanSet } from "@/lib/types";
import { Math as MathTex } from "./Math";

type Props = {
  latihan: LatihanSet;
};

const LETTERS = ["A", "B", "C", "D", "E"];

export function QuizRunner({ latihan }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(latihan.soalList.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState<number | null>(null);

  const soal = latihan.soalList[current];
  const selected = answers[current];

  const score = answers.reduce<number>(
    (sum, ans, i) =>
      ans === latihan.soalList[i].answerIndex ? sum + 1 : sum,
    0
  );

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answeredCount === latihan.soalList.length;

  function selectAnswer(idx: number) {
    if (showResult) return;
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  }

  function goNext() {
    if (current < latihan.soalList.length - 1) {
      setCurrent(current + 1);
      setShowExplanation(null);
    }
  }

  function goPrev() {
    if (current > 0) {
      setCurrent(current - 1);
      setShowExplanation(null);
    }
  }

  if (showResult) {
    const percentage = Math.round((score / latihan.soalList.length) * 100);
    return (
      <div>
        {/* Result summary */}
        <div className="rounded-xl border border-border-subtle bg-surface/40 p-6 text-center">
          <p className="text-sm text-text-muted">Hasil Latihan</p>
          <p className="mt-2 text-5xl font-bold text-accent">{score}</p>
          <p className="mt-1 text-text-secondary">
            dari {latihan.soalList.length} soal benar
          </p>
          <div className="mx-auto mt-4 h-2 max-w-xs overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-accent transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-text-muted">{percentage}% benar</p>
        </div>

        {/* Review */}
        <div className="mt-6 space-y-4">
          {latihan.soalList.map((s, i) => {
            const userAns = answers[i];
            const isCorrect = userAns === s.answerIndex;
            return (
              <div
                key={i}
                className="rounded-lg border border-border-subtle p-4"
              >
                <div className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isCorrect
                        ? "bg-success/20 text-success"
                        : "bg-danger/20 text-danger"
                    }`}
                  >
                    {isCorrect ? "✓" : "✗"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-text">
                      <span className="text-text-muted">{i + 1}.</span>{" "}
                      {s.question}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded bg-surface px-2 py-1">
                        Jawaban:{" "}
                        <span className="font-medium text-success">
                          {LETTERS[s.answerIndex]}
                        </span>
                      </span>
                      {userAns !== null && !isCorrect && (
                        <span className="rounded bg-surface px-2 py-1">
                          Kamu:{" "}
                          <span className="font-medium text-danger">
                            {LETTERS[userAns]}
                          </span>
                        </span>
                      )}
                    </div>
                    {s.explanation && (
                      <p className="mt-2 text-xs leading-relaxed text-text-muted">
                        <span className="font-medium text-text-secondary">
                          Pembahasan:
                        </span>{" "}
                        <ExplanationText text={s.explanation} />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            setAnswers(new Array(latihan.soalList.length).fill(null));
            setCurrent(0);
            setShowResult(false);
            setShowExplanation(null);
          }}
          className="mt-6 w-full rounded-lg border border-border bg-surface px-4 py-3 font-medium text-text transition-colors hover:bg-surface-hover"
        >
          Ulangi Latihan
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-text-muted">
            Soal {current + 1} dari {latihan.soalList.length}
          </span>
          <span className="text-text-muted">
            {answeredCount}/{latihan.soalList.length} terjawab
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{
              width: `${((current + 1) / latihan.soalList.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question dots */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        {latihan.soalList.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setShowExplanation(null);
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-all ${
              i === current
                ? "bg-accent text-bg"
                : answers[i] !== null
                ? "bg-surface text-text border border-accent/30"
                : "bg-surface text-text-muted border border-border-subtle hover:border-border"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <div className="rounded-xl border border-border-subtle bg-surface/30 p-6">
        <p className="text-lg leading-relaxed text-text">
          {soal.question}
        </p>
        {soal.formulaLatex && (
          <div className="mt-4 overflow-x-auto rounded-lg border border-border-subtle bg-bg-elevated px-4 py-3">
            <MathTex tex={soal.formulaLatex} display />
          </div>
        )}

        {/* Options */}
        <div className="mt-6 space-y-2">
          {soal.options.map((opt, i) => {
            const isSelected = selected === i;
            const showCorrect = showExplanation === current;
            const isAnswer = i === soal.answerIndex;
            const isWrong = isSelected && !isAnswer;

            let cls = "border-border-subtle bg-surface/40 hover:bg-surface hover:border-border";
            if (showCorrect) {
              if (isAnswer) {
                cls = "border-success/40 bg-success/10";
              } else if (isWrong) {
                cls = "border-danger/40 bg-danger/10";
              } else {
                cls = "border-border-subtle bg-surface/40 opacity-50";
              }
            } else if (isSelected) {
              cls = "border-accent/50 bg-accent-subtle";
            }

            return (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                disabled={showExplanation === current}
                className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-all ${cls}`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                    isSelected || (showCorrect && isAnswer)
                      ? "bg-accent text-bg"
                      : showCorrect && isWrong
                      ? "bg-danger text-bg"
                      : "bg-bg-elevated text-text-muted"
                  }`}
                >
                  {LETTERS[i]}
                </span>
                <span className="text-sm text-text-secondary">
                  <InlineText text={opt} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Show explanation toggle */}
        {selected !== null && (
          <div className="mt-4">
            <button
              onClick={() =>
                setShowExplanation(
                  showExplanation === current ? null : current
                )
              }
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              {showExplanation === current
                ? "Sembunyikan pembahasan"
                : "Lihat pembahasan"}
            </button>

            {showExplanation === current && (
              <div className="mt-3 rounded-lg border border-border-subtle bg-bg-elevated p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Jawaban: {LETTERS[soal.answerIndex]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  <ExplanationText text={soal.explanation} />
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:bg-surface-hover disabled:opacity-30 disabled:hover:bg-surface"
        >
          ← Sebelumnya
        </button>

        {current === latihan.soalList.length - 1 ? (
          <button
            onClick={() => setShowResult(true)}
            disabled={!allAnswered}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Selesai & Lihat Hasil
          </button>
        ) : (
          <button
            onClick={goNext}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
          >
            Selanjutnya →
          </button>
        )}
      </div>

      {!allAnswered && current === latihan.soalList.length - 1 && (
        <p className="mt-3 text-center text-xs text-text-muted">
          Jawab semua soal untuk melihat hasil
        </p>
      )}
    </div>
  );
}

function ExplanationText({ text }: { text: string }) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          return <MathTex key={i} tex={part.slice(1, -1)} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          return <MathTex key={i} tex={part.slice(1, -1)} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
