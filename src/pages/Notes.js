/* eslint-disable */
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [serachBar, setSerachBar] = useState(false);
  const [serachText, setSerachText] = useState("");
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSerachButton = () => {
    const newFilterNotes = notes.filter((note) => {
      if (note.title.toLowerCase().match(serachText.toLowerCase())) {
        return note;
      }
      return "";
    });

    setFilterNotes(newFilterNotes);
  };

  useEffect(handleSerachButton, [serachText]);

  return (
    <section>
      <header className="notes__header ">
        {serachBar ? (
          <input
            type="text"
            autoFocus
            placeholder="Search your Notes..."
            value={serachText}
            onChange={(e) => {
              setSerachText(e.target.value);
              handleSerachButton();
            }}
          />
        ) : (
          <h2>My Notes</h2>
        )}

        <button className="btn" onClick={() => setSerachBar(!serachBar)}>
          {serachBar ? (
            <MdClose onClick={() => setFilterNotes(notes)} />
          ) : (
            <CiSearch />
          )}
        </button>
      </header>
      <div className="notes__container">
        {filterNotes.length === 0 ? (
          <p className="empty__notes">No Notes Found.</p>
        ) : (
          ""
        )}
        {filterNotes.map((note) => {
          return <NoteItem key={note.id} note={note} />;
        })}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
