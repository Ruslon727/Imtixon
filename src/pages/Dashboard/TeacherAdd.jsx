import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogOutBtn from '../../components/LogOutBtn';
import NotificationIcon from '../../assets/images/NotificationIcon.svg'

const AddTeacher = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    about: '',
    class: '',
    gender: '',
    age: '',
    img: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (file && !file.type.startsWith('image/')) {
        setImageError('Invalid image type. Please select an image file.');
        return;
      }
      setImageError('');
      setFormData({ ...formData, img: file });
      setImagePreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
   

  const handleClearImage = () => {
    setFormData({ ...formData, img: null });
    setImagePreview(null);
    setImageError('');
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.email || !formData.subject) {
      alert('Please fill out all required fields.');
      return;
    }
    const newTeacher = {
      ...formData,
      imgPreview: imagePreview
    };
    localStorage.setItem('newTeacher', JSON.stringify(newTeacher));
    navigate('/');
  };

  return (
    <div className="w-[1200px] ml-[45px]">
      <div className='float-right flex relative bottom-[20px]'>
        <img className='mt-[19px]' src={NotificationIcon} alt="Notification Icon" />
        <LogOutBtn />
      </div>
      <div className=" relative top-[10px] items-center  mt-[20px]">
        <h1 className=" relative top-[50px] font-[Kumbh Sans] font-medium text-[20px] leading-[24.8px] text-[#4F4F4F] pt-[10px] ">Add teacher</h1>
        <div className='flex justify-end relative top-[15px]'>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate('/teachers')}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
      <form className='w-[1100px] mt-[70px] h-[600px]'>
        <div className=" w-[410px]">
          <label htmlFor="fullName" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            placeholder='Full Name'
            onChange={handleChange}
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
            required
          />
        </div>
        <div className=" float-right relative bottom-[68px] right-[107px] w-[410px]">
          <label htmlFor="class" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Class</label>
          <input
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder='Class'
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
            required
          />
        </div>
        <div className=" relative top-[32px] w-[410px]">
          <label htmlFor="email" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email address'
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
            required
          />
        </div>
        <div className="w-[410px] float-right relative bottom-[32px] right-[107px]">
          <label htmlFor="gender" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className=" relative top-[59px] w-[410px]">
          <label htmlFor="subject" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
            required
          />
        </div>
        <div className="float-right relative bottom-[5px] right-[107px]  w-[410px] ">
          <label htmlFor="age" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            placeholder='Age'
            onChange={handleChange}
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
            required
          />
        </div>
        <div className=" relative top-[100px] w-[410px]">
          <label htmlFor="about" className="w-[112px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">About</label>
          <input
            id="about"
            name="about"
            value={formData.about}
            placeholder='About'
            onChange={handleChange}
            className="border-[0.5px] border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[172px]"
            required
          />
        </div>
        <div className="float-right w-[410px] relative bottom-[90px] right-[110px]">
          <label htmlFor="img" className="w-[112px] ml-[10px] font-medium text-[#8A8A8A] text-[14px] font-[Kumbh Sans] ">Import Img</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={handleChange}
            className="border-none border-[#A7A7A7] pl-[10px] rounded-[4px] w-[410px] h-[42px]"
          />
          {imageError && <p className="text-red-500 mt-2">{imageError}</p>}
          {imagePreview && (
            <div className="relative mt-2">
              <img src={imagePreview} alt="Preview" className="w-[400px] h-[400px] object-cover rounded" />
              <button
                type="button"
                onClick={handleClearImage}
                className="absolute w-[30px] top-2 right-2 bg-red-500 text-white rounded-[10px] p-1"
              >
                &times;
              </button>
            </div>
          )}
        </div>

      </form>
    </div>
  );
};

export default AddTeacher;
