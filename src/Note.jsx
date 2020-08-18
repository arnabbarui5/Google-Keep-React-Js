import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <React.Fragment>
      <div className="note">
        <h1> {props.title}</h1>
        <br />
        <p>{props.title}</p>
        <DeleteIcon className="deleteIcon" onClick={deleteNote} />
      </div>
    </React.Fragment>
  );
};

export default Note;
