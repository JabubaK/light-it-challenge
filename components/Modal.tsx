"use client";
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 bg-red-400 p-2 rounded"
        >
          <X className=" h-4 w-4 text-white " />
        </button>
        {children}
      </div>
    </div>
  );
}
