import React, { Component, useCallback, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AddAssignment from "./components/addAssignment";
import SelectAssignment from "./components/SelectAssignment";
import helper from "./helpers/mainHelper";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function App() {
  // let defaultState = {
  //   events: [
  //     {
  //       start: moment().toDate(),
  //       end: moment().add(1, "days").toDate(),
  //       title: "Some title",
  //     },
  //   ],
  // };

  let defaultState = {};

  let [showAdd, setAdd] = useState(false);
  let [showDelete, setDelete] = useState(false);
  let [state, setState] = useState(defaultState);
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // console.log("HERE:", await helper.getAssignments());
    // setState(helper.getAssignments());
    const fetchData = async () => {
      try {
        const existingData = await helper.getAssignments();
        const isLoggedIn = await helper.isLoggedIn();
        setLoggedIn(isLoggedIn.isLoggedIn);
        let newState = {
          events: JSON.parse(existingData),
        };
        setState(newState);
        //console.log(state);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleAdd = (newData) => {
    //let eventsJSON = JSON.parse(state).events;
    //setState(JSON.stringify(newData));
    let newState = {
      events: JSON.parse(newData),
    };
    setState(newState);
  };

  let handleLogin = async (event) => {
    event.preventDefault();
    setLoggedIn(true);
    await helper.login();
  };

  //console.log(showAdd);

  return (
    <>
      {loggedIn && (
        <div className="App">
          <button onClick={() => setAdd((showAdd = true))}>
            Add Assignment
          </button>
          <button onClick={() => setDelete((showDelete = true))}>
            Edit Assignment
          </button>
          <button onClick={() => setLoggedIn(false)}>Log Out</button>

          {showAdd && <AddAssignment handleAdd={setAdd} />}
          {showDelete && (
            <SelectAssignment
              handleDelete={setDelete}
              eventData={state.events}
            />
          )}

          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            // onDoubleClickEvent={handleClick}
            // onSelectSlot={handleClick}
            defaultView="month"
            selectable
            events={state.events}
            style={{ height: "80vh", width: "80vh" }}
          />
        </div>
      )}
      {!loggedIn && (
        <div>
          <h2>Log in</h2>
          <form onSubmit={handleLogin}>
            <label>
              <input type="text" name="username" placeholder="username" />{" "}
              <br />
              <input type="password" name="password" placeholder="password" />
            </label>
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </>
  );
}

export default App;
