import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

function LogoutBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="w-[120px] h-[40px] rounded-[8px] p-[10px] bg-transparent font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-center mt-[19px] text-[#424242] inline"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default LogoutBtn;
