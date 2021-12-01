import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';

function RecommendationCard(props) {
  const [show, setShow] = useState(false);

  function handleShow() {
    return setShow(true);
  }
  function handleClose() {
    return setShow(false);
  }
    let {name, company, designation, message} = props.recommendation;
    let half_mes = message
    if (half_mes.length >= 35) {
      half_mes = message.slice(0, 30) + "....";
    }
    return (
        <div className="col-12 col-md-4" onClick={handleShow} style={{cursor: "pointer"}}>
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{half_mes}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">{designation} At {company}</p>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body className = "text-center pb-0">{name}</Modal.Body>
        <Modal.Body className = "text-center pt-0">{designation} At {company}</Modal.Body>
        <Modal.Footer>
            Press Esc Key To Close
        </Modal.Footer>
      </Modal>
        </div>
    );
}
export default RecommendationCard;
