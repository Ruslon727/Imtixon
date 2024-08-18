import React from 'react'
import NotificationIcon from '../../assets/images/NotificationIcon.svg'
import LogOutButton from '../../components/LogOutButton'
import AdminIcon from '../../assets/images/AdminIcon.svg'
import ClassIcon from '../../assets/images/ClassIcon.svg'
import StudentsIcon from '../../assets/images/StudentsIcon.svg'
import SupportIcon from '../../assets/images/SupportIcon.svg'
import DownIcon from '../../assets/images/NavDownIcon.svg'


function Dashboard() {
  return (
    <>
      <div className='flex w-[1298px] h-[95px]  '>
        <ul className='w-[583px] h-[66px] ml-[154px] mt-[29px]'>
          <p className='mt-[15px] ml-[23.5px] font-[Kumbh Sans] font-medium text-[16px] leading-[19.84px] text-[#424242]'>Learn  how to launch faster <br />
            watch our webinar for tips from our experts and get a limited time offer.</p>
        </ul>
        <img className='w-[28px] h-[28px] mt-[40px] ml-[168px] ' src={NotificationIcon} alt="Icon" />
        <LogOutButton />
      </div>
      <h1 className='w-[755px] h-[45px] font-[Kumbh Sans] font-semibold text-[36px] leading-[44.65px] text-center text-[#4F4F4F] mt-[53px] ml-[140px] '>Welcome to your dashboard, Udemy school</h1>
      <h3 className='font-[Kumbh Sans] font-semibold text-[24px] leading-[29.77px] text-[#4F4F4F] ml-[240px] mt-[23px] '>Uyo/school/@teachable.com</h3>
      <div className='w-[758px] h-[458px] bg-[#FFFFFF] ml-[130px] mt-[6px] '>
        <img className='ml-[90px] mt-[68px] inline' src={AdminIcon} alt="Admin Icon" />
        <span className='inline relative top-[38px] left-[20px] font-[Kumbh Sans] font-medium text-[24px] leading-[29.77px] text-[#4F4F4F] '>Add other admins</span>
        <p className='w-[514px] font-[Kumbh Sans] font-normal text-[14px] leading-[18.63px] text-[#4F4F4F] ml-[146px]
        mt-[10px]'>Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!</p>
        <img className='ml-[90px] mt-[68px] inline' src={ClassIcon} alt="Admin Icon" />
        <span className='inline relative top-[38px] left-[20px] font-[Kumbh Sans] font-medium text-[24px] leading-[29.77px] text-[#4F4F4F] '>Add classes</span>
        <p className='w-[514px] font-[Kumbh Sans] font-normal text-[14px] leading-[18.63px] text-[#4F4F4F] ml-[146px]
        mt-[10px]'>Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!</p>
        <img className='ml-[90px] mt-[68px] inline' src={StudentsIcon} alt="Admin Icon" />
        <span className='inline relative top-[38px] left-[20px] font-[Kumbh Sans] font-medium text-[24px] leading-[29.77px] text-[#4F4F4F] '>Add students</span>
        <p className='w-[514px] font-[Kumbh Sans] font-normal text-[14px] leading-[18.63px] text-[#4F4F4F] ml-[146px]
        mt-[10px]'>Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!</p>
      </div>
      <button className=' relative left-[900px] bottom-[85px] flex w-[181px] h-[60px] rounded-[30px] bg-[#152259] '>
        <img className='mt-[22px] ml-[24px]  ' src={SupportIcon} alt="Operator Icon" />
        <span className='mt-[21px] ml-[8px] font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-[#FCFAFA] '>Support</span>
        <img className='ml-[39px] mt-[23px] ' src={DownIcon} alt="Down Icon" />
      </button>
    </>
  )
}

export default Dashboard