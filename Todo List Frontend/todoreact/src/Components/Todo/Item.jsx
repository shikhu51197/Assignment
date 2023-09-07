import { useRef, useState } from "react";
import { Text } from "./Text";
import "../Styles/ItemForm.css";

export const Item = ({ item, onToggle, onRemove, onChange }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
  
    const startEditing = () => {
      setEditing(true);
      inputRef.current.focus();
    };
  
    const endEditing = () => setEditing(false);
  
    return (
      <li className={`item ${editing ? 'editing' : ''}`}>
        <label>
          <input
            type="checkbox"
            checked={item.done}
            onChange={onToggle}
            disabled={editing}
          />
          <span className="checkbox" />
        </label>
  
        <button onClick={onRemove}>[x]</button>
  
        <span className="text-wrapper">
          <Text done={item.done} onDoubleClick={startEditing}>
            {item.text} &nbsp;
          </Text>
  
          <input
            type="text"
            onBlur={endEditing}
            onKeyPress={(e) => (e.which === 13 ? endEditing(e) : () => {})}
            ref={inputRef}
            onChange={onChange}
            value={item.text}
          />
        </span>
      </li>
    );
  };