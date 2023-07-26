import React,{useState} from 'react'
import Modal from './Modal'

function CustomButton() {
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
    return (
        <>
        <div className='button'>
            <button onClick={toggleModal} className='btn-modal'>Buy Tickets</button>
            <button onClick={toggleModal} className='btn-modal'>Get free</button>
        </div>

        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2>OUT OF TICKETS</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
                </p>
                <button className="close-modal" onClick={toggleModal}>
                X
                </button>
            </div>
            </div>
        )}
        </>
    )
}

export default CustomButton