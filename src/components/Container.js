import * as React from "react";
import { Button, OutlinedInput, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Head() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoButton = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodoButton = () => {
    const newTodo = [...todos, { name: todo, id: uuidv4() }];
    setTodos(newTodo);
    setTodo("");
  };

  function handleDeletBtn(id) {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 50,
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <OutlinedInput
          variant="outlined"
          sx={{
            width: "80%",
            marginRight: "10px",
          }}
          onChange={handleTodoButton}
          value={todo}
        ></OutlinedInput>
        <Button variant="contained" onClick={handleAddTodoButton}>
          New Todo
        </Button>
      </Box>
      <Typography
        variant="h4"
        sx={{ marginTop: "100px", marginBottom: "20px" }}
      >
        TODO LIST:
      </Typography>
      <Box>
        {todos.map((element) => (
          <Box key={element.id}>
            <Typography sx={{ textAlign: "center", margin: 2 }}>
              {element.name}
              <Button
                onClick={() => {
                  handleDeletBtn(element.id);
                }}
                variant="contained"
                size="small"
                sx={{ margin: 2 }}
              >
                X
              </Button>
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
