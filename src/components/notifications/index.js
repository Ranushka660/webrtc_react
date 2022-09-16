import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { SocketContext } from "../socketContext";

const CallModel = ({show, handleClose, name}) => {
    const {answerCall} = useContext(SocketContext);
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>{name} is calling......</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel Call
          </Button>
          <Button variant="success" onClick={answerCall}>
            Answer Call
          </Button>
        </Modal.Footer>
      </Modal> 
    )
}

export default CallModel;