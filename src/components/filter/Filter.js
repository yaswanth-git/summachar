import React from "react";
import "./filter.css";

export default function Filter(props) {
  const { filtersList, selected, setSelected } = props;
  return (
    <div className="filter-bar">
      {filtersList.map((filter, index) => (
        <div
          key={index}
          className={`filter ${index === selected && "active-filter"}`}
          onClick={() => setSelected(index)}
        >
          {filter}
        </div>
      ))}
      <div className="dropdown">
        <select>
          <option defaultValue hidden>
            More
          </option>
          <option value="1">something 1</option>
          <option value="2">something 2</option>
          <option value="3">something 3</option>
        </select>
      </div>
    </div>
  );
}
