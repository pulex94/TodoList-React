import React, { cloneElement } from "react";
import ReactDOM from "react-dom/client";

import { Container, Box } from "@mui/material";
import Head from "./components/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Head></Head>
      </Box>
    </Container>
  </React.StrictMode>
);
