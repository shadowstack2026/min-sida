import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), text: text }]);
    setText("");
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
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






