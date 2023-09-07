import { useEffect, useState } from "react";
import { ItemForm } from "./ItemForm";
import { Item } from "./Item";
import "../Styles/todoapp.css";

export const TodoApp = ({ items: initialItems }) => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem("items"));
      if (storedItems) {
        setItems(storedItems);
      } else {
        setItems(initialItems);
      }
    } catch (err) {
      setItems(initialItems);
    }
  }, [initialItems]);

  const addItem = (item) => {
    setItems((prevItems) => [
      {
        ...item,
        number: prevItems.length,
      },
      ...prevItems,
    ]);
    save();
  };

  const toggleItem = (index) => () => {
    setItems((prevItems) =>
      prevItems.map((item, current) => {
        if (index !== current) {
          return item;
        }

        return {
          ...item,
          done: !item.done,
        };
      })
    );
    save();
  };

  const removeItem = (index) => () => {
    setItems((prevItems) =>
      prevItems.filter((item, current) => index !== current)
    );
    save();
  };

  const changeItem = (index) => (e) => {
    const value = e && e.target ? e.target.value : null;

    setItems((prevItems) =>
      prevItems.map((item, current) => {
        if (index !== current) {
          return item;
        }

        return {
          ...item,
          text: value === null ? item.text : value,
        };
      })
    );
    save();
  };

  const save = () => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const filterItems = (item) => {
    if (filter === 1) {
      return item.done;
    }

    if (filter === 2) {
      return !item.done;
    }

    return item;
  };

  const setFilterHandler = (filterValue) => (e) => {
    e.preventDefault();
    setFilter(filterValue);
  };

  const reset = (e) => {
    e.preventDefault();
    setItems([]);
    save();
  };

  return (
    <div className="todo-app">
      <h2>TO-DO List App</h2>

      <ItemForm onComplete={addItem} />

      <div className="filter-tabs">
        <a
          href="#root"
          onClick={setFilterHandler(0)}
          className={`filter ${filter === 0 ? "disabled" : ""}`}
        >
          Show All
        </a>
        <a
          href="#root"
          onClick={setFilterHandler(1)}
          className={`filter ${filter === 1 ? "disabled" : ""}`}
        >
          Completed <span>{items.filter((item) => item.done).length}</span>
        </a>
        <a
          href="#root"
          onClick={setFilterHandler(2)}
          className={`filter ${filter === 2 ? "disabled" : ""}`}
        >
          Uncompleted <span>{items.filter((item) => !item.done).length}</span>
        </a>
      </div>

      <ul className="item-list">
        {items.length === 0 && (
          <li className="placeholder">No tasks added yet!</li>
        )}

        {items.length > 0 && items.filter(filterItems).length === 0 && (
          <li className="placeholder">No items</li>
        )}

        {items.map((item, index) => {
          if ((filter === 1 && !item.done) || (filter === 2 && item.done)) {
            return null;
          }

          return (
            <Item
              item={item}
              key={index}
              onChange={changeItem(index)}
              onRemove={removeItem(index)}
              onToggle={toggleItem(index)}
            />
          );
        })}
      </ul>

      <div className="footer-actions">
        <a
          href="#root"
          className={items.length === 0 ? "disabled" : ""}
          disabled={items.length === 0}
          onClick={reset}
        >
          Clear All
        </a>
      </div>
    </div>
  );
};
