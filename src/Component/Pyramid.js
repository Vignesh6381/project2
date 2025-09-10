import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { IoTriangle } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { TbTriangleInverted } from "react-icons/tb";

const Pyramid = () => {
  const rows = 5;
  const [selectedNumber, setSelectedNumber] = useState('1');
  const [selectedShape, setSelectedShape] = useState('normal');
  const [pattern, setPattern] = useState('');

  useEffect(() => {
    generatePattern();
  }, [selectedNumber, selectedShape]);

  const generatePattern = () => {
    let result = '';

    for (let i = 1; i <= rows; i++) {
      if (selectedShape === 'right' ) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(i);
        result += spaces + stars + '\n';
      } else if (selectedShape === 'normal') {
        const stars = '*'.repeat(i);
        result += stars + '\n';
      } else if (selectedShape === 'inverted') {
        const spaces = ' '.repeat(i - 1);
        const stars = '*'.repeat(rows - i + 1);
        result += spaces + stars + '\n';
      }
    }

    setPattern(result);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Dropdown Buttons</h2>

      {/* Number Dropdown */}
      <div className="dropdown d-inline me-3">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Number ({selectedNumber})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {[1, 2, 3].map((num) => (
            <li key={num}>
              <button className="dropdown-item" onClick={() => setSelectedNumber(num.toString(2))}>
                {num}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Shape Dropdown */}
      <div className="dropdown d-inline">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Shape ({selectedShape})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li>
            <button className="dropdown-item" onClick={() => setSelectedShape('right')}>
              <LuTriangleRight /> Right
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setSelectedShape('normal')}>
              <IoTriangle /> Normal
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setSelectedShape('inverted')}>
              <TbTriangleInverted /> Inverted
            </button>
          </li>
        </ul>
      </div>

      {/* Output */}
      <div className="mt-4">
        {/* <h5>
          Pattern for Number {selectedNumber} + {selectedShape.charAt(0).toUpperCase() + selectedShape.slice(1)} Triangle
        </h5> */}
        <pre className="bg-light p-3" style={{ fontFamily: 'monospace' }}>
          {pattern}
        </pre>
      </div>
    </div>
  );  
};

export default Pyramid;
