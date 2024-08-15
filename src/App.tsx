import { useEffect, useState } from "react";
import React from 'react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { uploadData } from 'aws-amplify/storage';

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [file, setFile] = React.useState<File>();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <div>
            <input type="file" onChange={handleChange} />
            <button
                onClick={() =>
                    file &&
                    uploadData({
                        path: `photos/${file.name}`,
                        data: file,
                        options: {
                          bucket: 'mybucket1'
                        }
                    })
                }
            >
                Upload
            </button>
        </div>
    </main>
  );
}

export default App;
