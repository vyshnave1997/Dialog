// App.js
import React from "react";
import "./App.css"; // Import the updated CSS
import Dialog from "./Dialog";

const App = () => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <div className="container">
      <button onClick={openDialog}>Open Dialog</button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <h2>Dialog Title</h2>
        <p>This is a dialog content.</p>
      </Dialog>
    </div>
  );
};

export default App;
