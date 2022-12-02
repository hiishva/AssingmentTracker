import React from "react";
import moment from "moment";
import helper from "../helpers/mainHelper";

function addAssignment({ handleAdd }) {
  let handleSubmit = async (event) => {
    event.preventDefault();
    let body = {
      start: event.target.elements.dueDate.value,
      end: event.target.elements.dueDate.value,
      title: event.target.elements.name.value,
      priority: event.target.elements.priority.value,
    };
    try {
      console.log(body);
      let response = await helper.addAssignmentFunction(body);
      handleAdd(response);
    } catch (e) {
      console.log(e);
    }
  };

  // function handleSubmit(event) {
  //   let body = {
  //     title: "Sample Assignemnt",
  //     priority: "1",
  //     date: "2022-11-18",
  //   };
  //   let response = helper.addAssignmentFunction(body);
  //   console.log(response);
  //   props.func(response);
  // }

  return (
    <>
      <h1>Add Assignment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Assignment Name:
          <input type="text" name="name" />
          Priority:
          <input type="text" name="priority" />
          Date:
          <input
            type="date"
            id="start"
            name="dueDate"
            min="2021-11-01"
            max="2024-12-31"
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default addAssignment;
