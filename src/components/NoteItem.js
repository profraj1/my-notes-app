import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 40
          ? note.title.substr(0, 40) + "...."
          : note.title}
      </h4>
      <div>
        <p>{note.date}</p>
        {note.edited ? <p style={{ float: "right" }}>Edited</p> : ""}
      </div>
    </Link>
  );
};

export default NoteItem;
