import React from 'react'
import NotificationIcon from '../../assets/images/NotificationIcon.svg'
import LogOutBtn from '../../components/LogOutBtn'
import { Outlet, useNavigate } from 'react-router-dom';
import noNotification from '../../assets/images/noNotification.svg'
import SupportIcon from '../../assets/images/SupportIcon.svg'
import DownIcon from '../../assets/images/NavDownIcon.svg'
import { useState } from 'react';
import first from '../../assets/images/first.svg'
import Marvin from '../../assets/images/marvin.svg'
import Jane from '../../assets/images/Jane.svg'
import Cody from '../../assets/images/Cody.svg'
import Bessie from '../../assets/images/Bessie.svg'
import Leslie from '../../assets/images/Leslie.svg'
import Guy from '../../assets/images/Guy.svg'
import Theresa from '../../assets/images/Theresa.svg'
import Jerome from '../../assets/images/Jerome.svg'
import Savannah from '../../assets/images/Savannah.svg'
import Wade from '../../assets/images/Wade.svg'
import Annette from '../../assets/images/Annette.svg'

function Teachers() {
  const navigate = useNavigate();
  function handleAddTeacherClick() {
    navigate('/add-teacher');
  }
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = teachers.filter(
    teacher =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const TeachersData = [
    {
      id: 1,
      img: first,
      name: "Kristin Watson",
      Subject: "Chemistry",
      Class: "J SS 2",
      Email: "michelle.rivera@example.com",
      Gender: "Female",
    },
    {
      id: 2,
      img: Marvin,
      name: "Marvin McKinney",
      Subject: "French",
      Class: "JSS 3",
      Email: "debbie.baker@example.com",
      Gender: "Female",
    },
    {
      id: 3,
      img: Jane,
      name: "Jane Cooper",
      Subject: "Maths",
      Class: "JSS 3",
      Email: "kenzi.lawson@example.com",
      Gender: "Female",
    },
    {
      id: 4,
      img: Cody,
      name: "Cody Fisher",
      Subject: "English",
      Class: "SS 3",
      Email: "nathan.roberts@example.com",
      Gender: "Female",
    },
    {
      id: 5,
      img: Bessie,
      name: "Bessie Cooper",
      Subject: "Social studies",
      Class: "SS 3",
      Email: "felicia.reid@example.com",
      Gender: "Male",
    },
    {
      id: 6,
      img: Leslie,
      name: "Leslie Alexander",
      Subject: "Home economics",
      Class: "SS 3",
      Email: "tim.jennings@example.com",
      Gender: "Male",
    },
    {
      id: 7,
      img: Guy,
      name: "Guy Hawkins",
      Subject: "Geography",
      Class: "JSS 1",
      Email: "alma.lawson@example.com",
      Gender: "Male",
    },
    {
      id: 8,
      img: Theresa,
      name: "Theresa Webb",
      Subject: "Pschology",
      Class: "JSS 3",
      Email: "debra.holt@example.com",
      Gender: "Female",
    },
    {
      id: 9,
      img: Jerome,
      name: "Jerome Bell",
      Subject: "Physic",
      Class: "J SS 4",
      Email: "deanna.curtis@example.com",
      Gender: "Male",
    },
    {
      id: 10,
      img: Savannah,
      name: "Savannah Nguyen",
      Subject: "Accounting",
      Class: "J SS 4",
      Email: "georgia.young@example.com",
      Gender: "Female",
    },
    {
      id: 11,
      img: Wade,
      name: "Wade Warren",
      Subject: "C.R.s",
      Class: "JSS 5",
      Email: "jackson.graham@example.com",
      Gender: "Male",
    },
    {
      id: 12,
      img: Annette,
      name: "Annette Black",
      Subject: "Politics",
      Class: "JSS 1",
      Email: "dolores.chambers@example.com",
      Gender: "Female",
    },
  ]

  return (
    <div className='w-[1200px]'>
      <div className='flex float-right'>
        <img className='ml-[1070px] inline mt-[19px]' src={NotificationIcon} alt="Notification Icon" />
        <LogOutBtn />
      </div>
      <div className='w-[1300px] h-[69px] flex ml-[38px] mt-[30px]'>
        <h2 className='font-[Kumbh Sans] font-medium text-[20px] leading-[24.8px] text-center text-[#4F4F4F] mt-[22px] '>Teachers</h2>
        <button onClick={handleAddTeacherClick} className='ml-[960px] mt-[14px] w-[118px] h-[41px] rounded-[4px] bg-[#509CDB] font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-center text-[#FCFAFA]'>Add Teachers</button>
      </div>
      <input onChange={handleSearch} className='w-[1160px] h-[49px] rounded-[8px] bg-[#FCFAFA] font-[Kumbh Sans] font-medium text-[14px] leading-[17.36px] text-[#8A8A8A] pl-[48px] ml-[38px] border-none' placeholder='Search for a student by name or email' type="text" />
      <div className='w-[1160px] h-[419px] ml-[40px] mt-[30px] bg-[#FCFAFA]'>
        <img className='mt-[14px] ml-[320px] ' src={noNotification} alt="Image" />
        <h1 className='w-[712px] h-[35px] font-[Kumbh Sans] font-semibold text-[28px] leading-[34.73px] text-[#4F4F4F] ml-[125px] mt-[9px] text-center '>No Teachers at this time</h1>
        <p className='font-[Kumbh Sans] font-medium text-[14px] leading-[17.36px] text-[#4F4F4F] ml-[300px] mt-[5px]'>Teachers will appear here after they enroll in your school.  </p>
        <button className=' relative left-[910px] flex w-[181px] h-[60px] rounded-[30px] bg-[#152259] '>
          <img className='mt-[22px] ml-[24px]  ' src={SupportIcon} alt="Operator Icon" />
          <span className='mt-[21px] ml-[8px] font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-[#FCFAFA] '>Support</span>
          <img className='ml-[39px] mt-[23px] ' src={DownIcon} alt="Down Icon" />
        </button>
      </div>
        {/* <table className='ml-[32px]'>
          <tr className=' flex gap-[120px]'>
            <th>Name</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Email Adress</th>
            <th>Gender</th>
          </tr>
        </table> */}
      <Outlet />
    </div>
  )
}

export default Teachers