import React from "react";
import { motion } from "framer-motion";

export default function SkillItem({ id, part, details, isOpen, toggleDropdown }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4">
      {/* Tombol untuk membuka dropdown */}
      <button
        onClick={() => toggleDropdown(id)}
        className="w-full text-left font-bold  flex justify-between items-center"
      >
        {part}
        <span>{isOpen ? "⌃" : "⌄"}</span>
      </button>

      {/* Konten Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 bg-gray-100 p-3 rounded-md"
        >
          <p className="text-gray-700">{details}</p>
        </motion.div>
      )}
    </div>
  );
}
