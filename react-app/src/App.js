// imports from React and MUI
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function App() {
  // State variables for form fields
  const [name, setName] = useState(""); // empty strings as initial values
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // When the user clicks submit button
  // Check if all fields are filled
  function handleSubmit() {
    if (!name || !email || !message) {
      alert("Please fill everything before submitting!");
    } else {
      alert(`
      Thank you for your message, ${name}!`);
    }
  }

  // The form UI
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
      {/* input fields */}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // update state on change
        variant="outlined"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // update state on change
        variant="outlined"
      />
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // update state on change
        variant="outlined"
        multiline
        rows={4}
      />

      {/* submit button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
