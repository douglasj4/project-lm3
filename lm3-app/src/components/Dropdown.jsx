// src/components/Dropdown.jsx
import React from "react";

const Dropdown = ({ label, options, selectedValue, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

