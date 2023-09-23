import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";

import useCreateDate from "../hooks/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDetails, setnoteDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleNoteSubmit = (e) => {
    e.preventDefault();

    if (noteTitle && noteDetails) {
      const note = {
        id: uuid(),
        title: noteTitle,
        details: noteDetails,
        date: date,
        edited: false,
      };
      setNotes((prevNote) => [note, ...prevNote]);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header ">
        <Link to="/" className="btn">
          <IoMdArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleNoteSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleNoteSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Your Note Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Your Note Details..."
          value={noteDetails}
          onChange={(e) => setnoteDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
