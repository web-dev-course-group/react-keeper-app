/*
Web Development Course with Angela Yu
based on Sections 33 - React.js
36-keeper-app-part-3
Started on: 2021-06-02

Current Android system set-up used to develope this app:
Samsung Galaxy S8 - Android 9
Phone model - SM-G950U
Termux v0.101
  -node v14.15.4
  -npm mongodb 3.6.6
  -npm mongoose 5.12.7
Acode v1.2.143

Known bugs:
1. There is a grey square box in the bottom-right corner of each note, should not be there.
2. A blank note can be added.

Possible improvements:
1. Add new note by pressing enter (not just by clicking a button).
2. Ability to edit notes.
3. Selecting and deleting multiple notes at once.
4. Use a database to store notes permanently.
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/