import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  //const [test, setTest] = useState(""); //for testing
  
  function addNote(newNote) {
    setNotes(preValue => {
      return [...preValue, newNote];
    });
    //const notesString = JSON.stringify(notes); //for testing
    //setTest(notesString); //for testing
  }
  
  function deleteNote(deleteId) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== deleteId;
      });
    });
  }
  
  return (
    <div>
      <Header />
      {/*for testing
      <p>Notes array length = {notes.length}</p>
      <p>{test}</p>
      */}
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return <Note 
          key={index}
          id={index}
          title={note.title} 
          content={note.content}
          onDelete={deleteNote}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
