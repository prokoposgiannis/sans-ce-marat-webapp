import React from 'react';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  url: string;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal, url }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal}>Close</button>
        <iframe src={url} width="100%" height="500px" title="external-site"></iframe>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 800px;
        }
      `}</style>
    </div>
  );
};

export default Modal;