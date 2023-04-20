import React from 'react';
import './Invitation.css';

function Invitation({ subject, to, name, date, location, friends }) {
  return (
    <div className="invitation-container">
      <h2 className="invitation-heading"><b>{subject}</b></h2>
      <p className="invitation-to">To: <b>{to}</b></p>
      <p className="invitation-message">
        Hi, <b>{name}</b>
      </p>
      <p className="invitation-message">
        I am having a <b>birthday party</b> on {date} at my home. Would you like to come? It will be fun. Lots of people from my school are coming. You know some of them - <b>{friends}</b>.
      </p>
      <p className="invitation-message">
        My house is behind our school, near <b>{location}</b>.
      </p>
      <p className="invitation-message">
        I hope you will come and see you soon.
      </p>
      <p className="invitation-message">
        From,
        <br />
        <b>JaGdish</b>
      </p>
    </div>
  );
}

export default Invitation;
