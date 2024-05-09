import React from 'react';
import info from '../images/info.svg';
import InfoModal from './InfoModal';

// Creating date variable
const date = new Date();

// Creating array for months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

// Formatting date
const today = `${month} ${day}, ${year}`;

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <header>
        <h6>
          {today}
        </h6>
        <h1>
          My To-Do List
          <button className="info-button" onClick={() => setModalShow(true)}>
            <img src={info} alt="info" />
          </button>
        </h1>
        <InfoModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </header>
    </>
  )
}

export default Header;