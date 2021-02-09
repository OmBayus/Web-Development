import React from "react";
import notes from "../notes"

function Note() {
  return (
    notes.map(newnote =>(
      <div className="note" key={newnote.key}>
        <h1>{newnote.title}</h1>
        <p>{newnote.content}</p>
    </div>
    ))
    
  );
}

export default Note;
