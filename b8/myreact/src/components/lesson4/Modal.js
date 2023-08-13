import React, { useState } from 'react';
import Button from './Button';
import "./Modal.css";
import { useTicketsContext } from '../../TicketsContext';



const Modal = ({ isOpen, onClose, onSubmit }) => {

  const {ticket, updateTickets} = useTicketsContext();

  const [inputValues, setInputValues] = useState({
    numberOfTickets: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleModalSubmit = () => {
    if (ticket<inputValues.numberOfTickets){
      updateTickets(ticket);
      alert("Quantity exceeds the remaining quantity!!!")
    } else{
      updateTickets(ticket - inputValues.numberOfTickets)
    }
    
    onSubmit(inputValues);
    closeModal();
  };

  const closeModal = () => {
    setInputValues({ numberOfTickets: '', email: '' });
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-header">
            <h1>TICKETS</h1>
          </div>
            <form>
              <label>
                Tickets $3 per one:
                <input
                  min={0}
                  type="number"
                  name="numberOfTickets"
                  value={inputValues.numberOfTickets}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={inputValues.email}
                  onChange={handleInputChange}
                />
              </label>
              <div className="pay-button">
                <button type="button" onClick={handleModalSubmit}>Pay</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const RenderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(`Đã đăng ký ${data.numberOfTickets} vé, tin nhắn sẽ được gửi tới ${data.email}`);
  };

  return (
    <div>
      <Button onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default RenderModal;
