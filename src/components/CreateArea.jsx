import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"; //can be used instead of a button
//import Zoom from "@material-ui/core/Zoom"; //adds zoom animation when page is loaded for example when wraps Fab component

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  }); //stateful constants
  
  const [inputExpended, setInputExpended] = useState(false);
  
  function handleChange(event) {
    const {name, value} = event.target;
    setNewNote(preValue => { //arrow function
      return {
        ...preValue, //spread operator
        [name]: value //[] insert the value of the varibale name
      };
    });
  }
  
  function expandInput() {
    setInputExpended(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {
          inputExpended ? <input
            name="title"
            onChange={handleChange} 
            placeholder="Title"
            value={newNote.title}
          /> : null
        }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expandInput}
          placeholder="Take a note..."
          rows={inputExpended ? 3 : 1}
          value={newNote.content}
        />
        {/*<Zoom in={true}>*/}
        {
          inputExpended ? <Fab
            onClick={(event) => {
              props.onAdd(newNote);
              setNewNote({
                title: "",
                content: "",
              });
              setInputExpended(false);
              event.preventDefault(); //to prevent refreshing of the whole website when add button inside the form is pressed (form's default behaviour)
            }}
          >
            <AddIcon />
          </Fab> : null
        }
        {/*</Zoom>*/}
      </form>
    </div>
  );
}

export default CreateArea;