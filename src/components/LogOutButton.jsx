import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

function LogoutButton() {
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
    <div>
      <button
        className="w-[120px] h-[40px] rounded-[8px] p-[10px] bg-[#509CDB] font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-center text-[#FCFAFA] mt-[34px] ml-[48px]"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default LogoutButton;
