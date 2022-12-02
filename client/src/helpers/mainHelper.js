import axios from "axios";

const addAssignmentFunction = async (body) => {
  let response;

  const options = {
    method: "POST",
    data: body,
    url: "http://localhost:3001/add-assignment",
  };

  try {
    response = await axios(options);
  } catch (err) {
    console.log(err);
  }

  return response.data;
};

const getAssignments = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:3001/get-all-assignments",
  };

  let response;
  try {
    response = await axios(options);
  } catch (err) {
    console.log(err);
  }
  return response.data;
};

const login = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:3001/login",
  };
  await axios(options);
};

const isLoggedIn = async () => {
  let response;
  const options = {
    method: "GET",
    url: "http://localhost:3001/loggedIn",
  };

  try {
    response = await axios(options);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }

  return response.data;
};

const updateAssignments = async (body) => {
  let response;
  const options = {
    method: "POST",
    data: body,
    url: "http://localhost:3001/update",
  };

  try {
    response = await axios(options);
  } catch (err) {
    console.log(err);
  }

  return response.data;
};

const deleteAssignments = async (body) => {
  let response;
  const options = {
    method: "POST",
    data: body,
    url: "http://localhost:3001/delete",
  };

  try {
    response = await axios(options);
  } catch (err) {
    console.log(err);
  }

  return response.data;
};

const helper = {
  getAssignments,
  addAssignmentFunction,
  deleteAssignments,
  updateAssignments,
  login,
  isLoggedIn,
};

export default helper;
