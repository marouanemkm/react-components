import {useState} from 'react';
import './Modal.css';

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">Open</button>
            {modal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2> Hello Modal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button onClick={toggleModal} className="close-modal">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

};
