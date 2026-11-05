import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

function Todo() {
  const [todos, setTodos] = useState(loadTodos());
  const [text, setText] = useState("");

  function saveTodos(newTodos) {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    saveTodos([...todos, { id: Date.now(), text: text }]);
    setText("");
  }

  function removeTodo(id) {
    saveTodos(todos.filter((todo) => todo.id !== id));
  }

return (
    <section className="todo">
      <h2>Att göra</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Skriv en uppgift..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Lägg till</button>
      </form>

      {todos.length === 0 ? (
        <p>Inget att göra än.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              onRemove={() => removeTodo(todo.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todo;






