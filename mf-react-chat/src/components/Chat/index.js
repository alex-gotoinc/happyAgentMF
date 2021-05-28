import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments, faUserPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal, ModalBody} from 'react-bootstrap';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const Chat = ({name}) => {
	const [show, setShow] = useState(true);
	const [online, setOnline] = useState(true);
	
	return (
			<>
				
				{/* open chat btn */}
				<Button variant="primary" onClick={() => setShow(true)}>
					<span className="mr-2">mf-react-chat <strong>OPEN</strong></span>
					<FontAwesomeIcon icon={faComments}/>
				</Button>
				
				{/* open chat modal */}
				<Modal show={show}
				       onHide={() => setShow(false)}
				       bsPrefix="chat-modal"
				>
					<Modal.Header bsPrefix="chat-modal-header modal-section">
						
						{/* add user */}
						<button>
							<FontAwesomeIcon icon={faUserPlus}/>
						</button>
						
						{/* user info */}
						<div className="header-info">
							<div className="header-info-name">
								Matt Pears
							</div>
							<div className="header-info-status">
								<span className={`status-circle ${online ? 'online': 'offline'}`} />
								<span className="status-description">Active</span>
							</div>
						</div>
						
						{/*	close chat-modal */}
						<button onClick={() => setShow(false)}>
							<FontAwesomeIcon icon={faTimes}/>
						</button>
					</Modal.Header>
					
					<Modal.Body bsPrefix="modal-section">
						111
					</Modal.Body>
					
					<Modal.Footer bsPrefix="modal-section">
						Footer
					</Modal.Footer>
				</Modal>
			
			</>
	
	)
}

export default Chat;