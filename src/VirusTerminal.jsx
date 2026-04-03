import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./VirusTerminal.css";

const BOOT_LINES = [
  { text: "Microsoft Windows [Version 10.0.19045.3693]", delay: 300 },
  { text: "(c) Microsoft Corporation. All rights reserved.", delay: 200 },
  { text: "", delay: 100 },
  { text: 'Type "help" to see available commands.', delay: 300 },
  { text: "Solve the puzzle to unlock your computer!", delay: 300 },
  { text: "", delay: 100 },
];

const HINTS = [
  "Hint 1: Think about the date we became a couple... (format: DD-MM-YYYY)",
  "Hint 2: What month did everything start?",
  "Hint 3: November... 24th... 2024...",
];

const UNLOCK_CODE = "24-11-2024";

export default function VirusTerminal({ onSolved }) {
  const [bootLines, setBootLines] = useState([]);
  const [bootDone, setBootDone] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [hintIndex, setHintIndex] = useState(0);
  const [solved, setSolved] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    let totalDelay = 0;
    const timers = [];

    BOOT_LINES.forEach((line) => {
      totalDelay += line.delay;
      const timer = setTimeout(() => {
        setBootLines((prev) => [...prev, line.text]);
        i++;
        if (i === BOOT_LINES.length) {
          setTimeout(() => setBootDone(true), 300);
        }
      }, totalDelay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  // Auto-scroll & focus
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    if (bootDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [bootLines, history, bootDone]);

  // Glitch effect on wrong answer
  useEffect(() => {
    if (glitch) {
      const timer = setTimeout(() => setGlitch(false), 600);
      return () => clearTimeout(timer);
    }
  }, [glitch]);

  const processCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const lines = [];

    switch (trimmed) {
      case "help":
        lines.push("╔══════════════════════════════════════╗");
        lines.push("║        AVAILABLE COMMANDS            ║");
        lines.push("╠══════════════════════════════════════╣");
        lines.push("║  help     — Show this menu           ║");
        lines.push("║  hint     — Get a hint               ║");
        lines.push("║  unlock   — Try to unlock (usage:    ║");
        lines.push("║             unlock <code>)           ║");
        lines.push("║  status   — Check system status      ║");
        lines.push("║  scan     — Scan for virus info      ║");
        lines.push("║  clear    — Clear terminal           ║");
        lines.push("╚══════════════════════════════════════╝");
        break;

      case "hint":
        if (hintIndex < HINTS.length) {
          lines.push(HINTS[hintIndex]);
          setHintIndex((prev) => prev + 1);
        } else {
          lines.push("No more hints! You have all the clues you need.");
        }
        break;

      case "status":
        lines.push("SYSTEM STATUS: LOCKED");
        lines.push("Files encrypted: 1,247");
        lines.push("Virus: LoveVirus v1.0");
        lines.push("Cure: Enter the correct unlock code");
        break;

      case "scan":
        lines.push("Scanning system...");
        lines.push("█████████████████████████ 100%");
        lines.push("");
        lines.push("Virus found: LoveVirus");
        lines.push("Origin: love_letter.exe (from Miki's USB)");
        lines.push("Weakness: The virus can be unlocked with");
        lines.push("a special date. Try the 'hint' command!");
        break;

      case "clear":
        setHistory([]);
        setBootLines([]);
        return;

      default:
        if (trimmed.startsWith("unlock ")) {
          const code = trimmed.replace("unlock ", "").trim();
          if (code === UNLOCK_CODE) {
            lines.push("");
            lines.push("CORRECT! Decrypting files...");
            lines.push("█████████████████████████ 100%");
            lines.push("");
            lines.push("System uncrypted, I love you!");
            setSolved(true);
            setTimeout(() => onSolved?.(), 2500);
          } else {
            lines.push(`Wrong code: "${code}"`);
            lines.push("ACCESS DENIED. Try again!");
            setGlitch(true);
          }
        } else if (trimmed === "unlock") {
          lines.push("Usage: unlock <code>");
          lines.push("Example: unlock 01-01-2000");
        } else {
          lines.push(`'${trimmed}' is not recognized as a command.`);
          lines.push('Type "help" for available commands.');
        }
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: cmd },
      ...lines.map((l) => ({ type: "output", text: l })),
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      processCommand(input);
      setInput("");
    }
  };

  return (
    <motion.div
      className={`virus-window ${glitch ? "virus-glitch" : ""}`}
      initial={{ scale: 0, opacity: 0, rotate: -2 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Title bar */}
      <div className="virus-titlebar">
        <div className="virus-titlebar-left">
          <span className="virus-titlebar-icon">⬛</span>
          <span>Command Prompt — love_letter.exe</span>
        </div>
        <div className="virus-titlebar-buttons">
          <div className="virus-btn virus-btn-min">─</div>
          <div className="virus-btn virus-btn-max">☐</div>
          <div className="virus-btn virus-btn-close">✕</div>
        </div>
      </div>

      {/* Terminal body */}
      <div
        className="virus-terminal"
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Boot lines */}
        {bootLines.map((line, i) => (
          <div key={`boot-${i}`} className="virus-line">
            {line === "⚠️  WARNING: VIRUS DETECTED — SYSTEM LOCKED ⚠️" ? (
              <span className="virus-warning">{line}</span>
            ) : (
              line || "\u00A0"
            )}
          </div>
        ))}

        {/* Command history */}
        {history.map((entry, i) => (
          <div key={`hist-${i}`} className="virus-line">
            {entry.type === "input" ? (
              <>
                <span className="virus-prompt">C:\Users\Majo&gt;</span>{" "}
                {entry.text}
              </>
            ) : (
              <span
                className={
                  entry.text.includes("✅")
                    ? "virus-success"
                    : entry.text.includes("❌")
                      ? "virus-error"
                      : ""
                }
              >
                {entry.text || "\u00A0"}
              </span>
            )}
          </div>
        ))}

        {/* Input line */}
        {bootDone && !solved && (
          <div className="virus-input-line">
            <span className="virus-prompt">C:\Users\Majo&gt;</span>
            <div className="virus-input-wrap">
              <span className="virus-input-sizer">{input || ""}</span>
              <input
                ref={inputRef}
                className="virus-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <span className="virus-cursor">█</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
