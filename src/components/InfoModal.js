import Modal from 'react-bootstrap/Modal';
// Importing Bootstrap for modal styling
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing stylesheet
import './modal.css'
// Importing Icon
import rulebook from '../images/rulebook.svg';
// Importing list icons for how-to explanation
// Icons
import plus from '../images/plus.svg';
import pen from '../images/pen.svg';
import trash from '../images/trash.svg';
import check from '../images/check.svg';

export default function InfoModal(props) {
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img className='modal-icon main-icon' src={rulebook} alt="rulebook" /> How to use the to-do list
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            <span className='modal-bold'>Add </span>
            <img className='modal-icon' src={plus} alt="plus" />
            -click the blue '+' button to add an item to the list.
          </li>
          <li>
            <span className='modal-bold'>Edit </span>
            <img className='modal-icon' src={pen} alt="pen" />
            - click the edit button to edit that specific item.
          </li>
          <li>
            <span className='modal-bold'>Delete </span>
            <img className='modal-icon' src={trash} alt="trash" />
            - click the delete button to erase that specific item from the list.
          </li>
          <li>
            <span className='modal-bold'>Complete </span>
            <img className='modal-icon' src={check} alt="check" />
            - finally, click on the checkbox to mark a specific item as complete, that item will then move to the bottom of the list.
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}