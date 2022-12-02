import React, { useState } from "react";
import updateAssignment from "./updateAssignment";
import helper from "../helpers/mainHelper";

function SelectAssignment({ eventData }) {
  let [singleRecord, setSingleRecord] = useState({});

  let handleSubmit = async (event) => {
    event.preventDefault();

    let oldAndNewAssignment = {
      oldAssignment: singleRecord,
      newAssignment: {
        start: event.target.elements.dueDate.value
          ? event.target.elements.dueDate.value
          : singleRecord.start,
        end: event.target.elements.dueDate.value
          ? event.target.elements.dueDate.value
          : singleRecord.end,
        title: event.target.elements.name.value
          ? event.target.elements.name.value
          : singleRecord.title,
        priority: event.target.elements.priority.value
          ? event.target.elements.priority.value
          : singleRecord.priority,
      },
    };
    await helper.updateAssignments(oldAndNewAssignment);
  };

  let handleDelete = async () => {
    try {
      await helper.deleteAssignments(singleRecord);
      //handleAdd(response);
    } catch (e) {
      console.log(e);
    }
  };

  // Pull the assignemnts
  // show them to the user
  //let them select one

  return (
    <>
      {singleRecord?.title && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <br />
              <br />
              <br />
              <br />
              <input
                type="text"
                name="name"
                placeholder={singleRecord.title}
              />{" "}
              <br />
              <input
                type="text"
                name="priority"
                placeholder={singleRecord.priority}
              />{" "}
              <br />
              <input
                type="date"
                id="start"
                name="dueDate"
                placeholder={singleRecord.start}
                min="2022-11-01"
                max="2022-12-31"
              ></input>
            </label>
            <input type="submit" value="Update" />
          </form>
          <button onClick={() => handleDelete()}>Delete Assignment</button>
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
      {!singleRecord?.title && (
        <div>
          <h2>Find Event</h2>

          <table>
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Priority</th>
                <th>Date</th>
              </tr>
            </thead>
            {eventData.map((assignment, index) => (
              <tbody key={index}>
                <tr
                  onClick={() => {
                    setSingleRecord(assignment);
                  }}
                >
                  <td>{assignment.title}</td>
                  <td>{assignment.priority}</td>
                  <td>{assignment.start}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
}

export default SelectAssignment;
