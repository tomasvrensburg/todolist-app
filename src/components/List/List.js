import React, { useState } from "react";
// Icons
import pen from '../../images/pen.svg';
import trash from '../../images/trash.svg';
import unchecked from '../../images/unchecked.svg';
import check from '../../images/check.svg';
import closeX from '../../images/close.svg'
// Styling
import './list.css';
import { useDispatch, useSelector } from "react-redux";
import { add, remove, complete, edit, close, changeName, changeDescription } from '../../redux/counter';

export default function List() {
  // Defining variables from store
  const list = useSelector((state) => state.counter.list);
  const itemToEdit = useSelector((state) => state.counter.itemToEdit);
  const displayEditModal = useSelector((state) => state.counter.displayEditModal);
  const dispatch = useDispatch();
  // State for input values
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  // Function to condinionally render modal and content
  function editModal() {
    if (displayEditModal) {
      return (
        <div className="editModal-overlay">
          <div className="editModal">

            {/* Close modal button */}
            <button className="editModal-close list-button" onClick={() => dispatch(close())}>
              <img src={closeX} alt="close" />
            </button>
            <h3>Edit "{list[itemToEdit].content}"</h3>
            <hr />

            <div className="modal-input">
              {/* Change name field */}
              <label htmlFor="name">Name:</label>
              <div className="input">
                <input
                  name="name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <button
                  className="input-button"
                  onClick={(e) => dispatch(changeName({ index: itemToEdit, name: itemName }))}>
                  Enter
                </button>
              </div>
              <label htmlFor="description">Description:</label>

              {/* Change description field */}
              <div className="input">
                <input
                  name="description"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                />
                <button
                  className="input-button"
                  onClick={(e) => dispatch(changeDescription({ index: itemToEdit, description: itemDescription }))}>
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  }

  return (
    <>
      <section id="list">
        {editModal()}

        {list.map((item, index) => (
          <div className={item.completed ? "list-item completed" : "list-item"} key={index}>

            {/* Title */}
            <h5>{item.content}</h5>
            <div className="buttons">

              {/* Edit Button */}
              <button className="list-button" onClick={() => dispatch(edit(index))}>
                {!item.completed && <img src={pen} alt="pen" />}
              </button>

              {/* Delete Button */}
              <button className="list-button" onClick={() => dispatch(remove(index))}>
                {!item.completed && <img src={trash} alt="trash" />}
              </button>

              {/* Complete Button */}
              <button className="list-button" onClick={() => dispatch(complete(index))}>
                {!item.completed && <img src={unchecked} alt="unchecked" />}
                {item.completed && <img src={check} alt="check" />}
              </button>
            </div>

            {/* Description */}
            {!item.completed && <p className="description">{item.description}</p>}
          </div>
        ))}
      </section>
      <div id="blur" />
      <footer>
        {/* Tasks count */}
        <h5 id="tasksLeft">{list.length} tasks left</h5>
        {/* Add task button */}
        <button id="addTask-button" onClick={() => dispatch(add())}>+</button>
      </footer>
    </>
  );
}