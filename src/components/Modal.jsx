import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;
  function cancelFn() {
    console.log("hello");
    setTimeout(() => {
      window.localStorage.clear();
      navigate("/");
      window.location.reload();
    }, 3000);
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Rostan ham chiqib ketmoqchimisiz?</h2>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={cancelFn}
          >
            Ha
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Yo'q
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
