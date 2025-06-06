import React from 'react'

// Default grocery categories
const defaultOptions = [
  { label: "All Categories", value: "" },
  { label: "Fruits & Vegetables", value: "fruits-vegetables" },
  { label: "Dairy & Eggs", value: "dairy-eggs" },
  { label: "Meat & Seafood", value: "meat-seafood" },
  { label: "Bakery", value: "bakery" },
  { label: "Snacks & Beverages", value: "snacks-beverages" },
  { label: "Pantry Staples", value: "pantry-staples" },
  { label: "Frozen Foods", value: "frozen-foods" },
  { label: "Household Essentials", value: "household-essentials" },
  { label: "Personal Care", value: "personal-care" }
];

const SelectOption = ({ options = defaultOptions, selected = "", onChange }) => {
  return (
    <select
      className="p-2 bg-[var(--grey-color)] text-[var(--black-color)] outline-none text-sm rounded-l-md"
      value={selected}
      onChange={onChange}
    >
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
