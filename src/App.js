import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [list, setList] = useState([
    { item: "Walk a dog" },
    { item: "Create Shopping List" },
    { item: "Do Homework" }
  ]);

  const [todo, setTodo] = useState({
    query: ""
  });

  function onPress() {
    setList([
      ...list,
      {
        item: todo
      }
    ]);
    setTodo({ query: "" });
  }

  function handleRemove(e) {
    const { id } = e.target.parentElement;
    list.splice(id, 1);
    setList([...list]);
  }

  return (
    <div className="App">
      <div align="center">
        <div>
          <Header />
          <div>
            <input
              type="text"
              name="add"
              placeholder="Todo item"
              value={todo.query}
              onChange={e => setTodo(e.target.value)}
            />
            <button onClick={onPress}>Add Todo</button>
          </div>
          <div>
            <br />
            {list.map((item, index) => (
              <li key={index} id={index}>
                {item.item}
                <button onClick={handleRemove} className="button">
                  X
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
