import React, { useEffect, useState } from "react";
import {  Routes, Route, HashRouter } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNotes from "./pages/CreateNote";
import EditNotes from "./pages/EditNote";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const storeInLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(storeInLocalStorage, [notes]);

  return (
    <main id="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNotes setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNotes notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
