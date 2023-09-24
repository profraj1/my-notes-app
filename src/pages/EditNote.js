import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useCreateDate from "../hooks/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);

  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteDetails, setNoteDetails] = useState(note.details);
  const titleLen = note.title.length;
  const detailsLen = note.details.length;

  const date = useCreateDate();
  const navigate = useNavigate();

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (noteTitle && noteDetails) {
      let edited = false;

      if (noteTitle.length !== titleLen || noteDetails.length !== detailsLen) {
        edited = true;
      }
      const newNote = {
        id: id,
        title: noteTitle,
        details: noteDetails,
        date: date,
        edited: edited,
      };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDeleteNote = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header ">
        <Link to="/" className="btn">
          <IoMdArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleEditSubmit}>
          Save
        </button>
        <button className="btn danger" onClick={handleDeleteNote}>
          <RiDeleteBin6Fill />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleEditSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Your Note Title"
          defaultValue={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Your Note Details..."
          defaultValue={noteDetails}
          onChange={(e) => setNoteDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
