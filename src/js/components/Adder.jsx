import React, { useState } from "react";

const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTask] = useState([]);
    function grabber (e) {
        const newValue = e.target.value;
        setInputValue(newValue);
    };
    function adder () {
        setTask([inputValue, ...tasks]);
        setInputValue("");
    };
    function deleter (deletedItem) {
        const newTasks = tasks.filter((notRelevant, index) => index !== deletedItem);
        setTask(newTasks);
    };

    return (
        <div id="box-container">
            <div>
                <h3>To-Do List</h3>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" placeholder="Add a chore to your list" onChange={grabber} value={inputValue} />
                </div>
                <div className="col">
                    <button type="button" className="btn btn-light" onClick={adder} >Add</button>
                </div>
            </div>
            <div>
                <ul>
                    {tasks.map((item, index) => {
                        return (
                                <li key={index}>{item}
                                    <button type="button" className="btn btn-danger" onClick={() => {deleter(index)}}>X</button>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Todo;