import React, { useState, useEffect, useRef } from "react";
import "../Styles/ItemForm.css";

export const ItemForm = ({ onComplete }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    createNew();
  }, []);

  const createNew = () => {
    setText("");
    inputRef.current.focus();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e && e.which === 13) {
      if (text === "") {
        return false;
      }

      onComplete && typeof onComplete === "function" && onComplete({ text });
      createNew();
    }
  };

  const handleAddClick = () => {
    if (text !== "") {
      onComplete && typeof onComplete === "function" && onComplete({ text });
      createNew();
    }
  };

  return (
    <div className="item-form">
      <label htmlFor="newItem">New Item</label>{" "}
      <div className="add">
      <input
        id="newItem"
        type="text"
        ref={inputRef}
        autoFocus
        placeholder="Start typing..."
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="rgb-button" onClick={handleAddClick}>Add</button></div>
    </div>
  );
};
