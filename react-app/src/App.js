import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!name || !email || !message) {
      alert("Please fill everything before submitting!");
    } else {
      alert(`
      Thank you for your message, ${name}!`);
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={400}
      margin="0 auto"
      mt={5}
    >
      <h2>React test form</h2>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="outlined"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
