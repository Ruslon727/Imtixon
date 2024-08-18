import React from 'react'
import LogOutBtn from '../../components/LogOutBtn'
import NotificationIcon from '../../assets/images/NotificationIcon.svg'

function SettingsAndProfile() {
  return (
    <div className=''>
      <h1 className='text-[30px] relative left-[50px] top-[50px]'>Settings And Profile</h1>
      <img className='ml-[1070px] inline ' src={NotificationIcon} alt="Notification Icon" />
      <LogOutBtn />
    </div>
  )
}

export default SettingsAndProfile