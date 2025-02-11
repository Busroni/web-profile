import React, { useState } from "react";
import SkillItem from "./SkillItem";

function SkillList({ skills }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Fungsi untuk mengatur dropdown yang terbuka
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="skills-list space-y-4 p-4 grid grid-cols-2 gap-3 font-semibold">
      {skills.map((skill) => (
        <SkillItem
          key={skill.id}
          id={skill.id}
          part={skill.part}
          details={skill.details}
          isOpen={openDropdown === skill.id}
          toggleDropdown={toggleDropdown}
        />
      ))}
    </div>
  );
}

export default SkillList;
