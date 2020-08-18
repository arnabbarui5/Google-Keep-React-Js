import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(false);
  };

  return (
    <React.Fragment>
      <div className="main_note" onDoubleClick={btoNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note....."
            onClick={expandIt}
          />

          {expand ? (
            <Button class="button" onClick={addEvent}>
              <span className="btn">ADD</span>
            </Button>
          ) : null}
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateNote;
