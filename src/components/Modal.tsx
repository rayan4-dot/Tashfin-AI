"use client";

import { useEffect, useRef } from "react";

interface DialogProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ id, title, children, isOpen, onClose }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  // Sync close events (Escape key)
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handler = () => onClose();
    dialog.addEventListener("close", handler);
    return () => dialog.removeEventListener("close", handler);
  }, [onClose]);

  // Close on backdrop click (clicking the <dialog> element itself, outside the inner panel)
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handler = (e: MouseEvent) => {
      if (e.target === dialog) onClose();
    };
    dialog.addEventListener("click", handler);
    return () => dialog.removeEventListener("click", handler);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      id={id}
      closedby="any"
      aria-labelledby={`${id}-title`}
      // Make the <dialog> itself a full-screen flex container so the inner panel is centred
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        maxWidth: "none",
        maxHeight: "none",
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        display: isOpen ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Inner visible panel */}
      <div
        className="rounded-2xl shadow-2xl"
        style={{
          background: "var(--surface, #1a1a2e)",
          width: "min(480px, 94vw)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <h2 id={`${id}-title`} className="font-display font-bold text-lg text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">{children}</div>
      </div>
    </dialog>
  );
}
