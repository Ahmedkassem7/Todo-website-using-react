import React, { useState } from "react";
import Table from "react-bootstrap/Table";

export const Todo = () => {
  const [currentValue, SetcurrentValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currenttime, setcurrenttime] = useState("");
  const [finalTodos, setfinalTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const addtotable = () => {
    if (
      currentValue.trim() !== "" &&
      currentDate.trim() !== "" &&
      currenttime.trim() !== ""
    ) {
      if (editIndex !== -1) {
        const updatedTodos = [...finalTodos];
        updatedTodos[editIndex] = {
          task: currentValue,
          date: currentDate,
          time: currenttime,
        };
        setfinalTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setfinalTodos([
          ...finalTodos,
          { task: currentValue, date: currentDate, time: currenttime },
        ]);
      }
      SetcurrentValue("");
      setCurrentDate("");
      setcurrenttime("");
    }
  };

  const removeTodo = (index) => {
    setfinalTodos(finalTodos.filter((_, i) => i !== index));
  };
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          className="bg-dark fs-4 text-light text-center p-2"
          style={{ fontFamily: "cursive", fontWeight: "600" }}
        >
          Todo App
        </div>
        <div
          className="container border border-DARK"
          style={{
            width: "37rem",
            marginTop: "5rem",
            textAlign: "center",
            padding: "25px",
            borderRadius: "2rem",
            boxShadow: " 0px 0px 29px -13px cornflowerblue",
          }}
        >
          <div>
            <h2 className="mb-3" style={{ color: "#0088ff" }}>
              Add New Task
            </h2>
            <label style={{ marginRight: "1rem" }}>Todo :</label>
            <input
              type="text"
              placeholder="What's the task?"
              style={{ width: "30rem" }}
              onChange={(e) => SetcurrentValue(e.target.value)}
              value={currentValue}
            />
          </div>
          <br />
          <div>
            <label style={{ marginRight: "1rem" }}>Date :</label>
            <input
              type="date"
              style={{ width: "30rem" }}
              onChange={(e) => setCurrentDate(e.target.value)}
              value={currentDate}
            />
          </div>
          <br />

          <div>
            <label style={{ marginRight: "1rem" }}>time :</label>
            <input
              type="time"
              style={{ width: "30rem" }}
              onChange={(e) => setcurrenttime(e.target.value)}
              value={currenttime}
            />
          </div>
          <button
            className="btn mt-2"
            style={{
              width: "10rem",
              backgroundColor: "#0088ff",
              color: "white",
              textTransform: "capitalize",
            }}
            onClick={addtotable}
          >
            Add
          </button>
        </div>

        <div className="container my-5">
          {finalTodos.length > 0 ? (
            <Table className="table " striped>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {finalTodos.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.task}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          setEditIndex(index);
                          SetcurrentValue(item.task);
                          setCurrentDate(item.date);
                          setcurrenttime(item.time);
                        }}
                        style={{ marginRight: "5px" }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeTodo(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div
              class="alert alert-info mt-3 text-center"
              role="alert"
              style={{ textTransform: "capitalize" }}
            >
              You didn't add any tasks today
            </div>
          )}
        </div>
      </div>
    </>
  );
};
