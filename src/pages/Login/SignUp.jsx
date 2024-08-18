import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div className='w-[1440px] h-[789px] bg-[#FCFAFA]'>
    
    <h1 className='font-[Kumbh Sans] font-semibold text-[36px] leading-[44.65px] text-center text-[#4F4F4F] pt-[98px] '>Welcome, Sign Up</h1>
    <form onSubmit={handleSubmit} className='w-[512px] h-[494px] mx-auto mt-[53px] bg-[#FFFFFF] '>
        <p className='w-[238px] h-[58px] pt-[72px] ml-[132px] font-[Inter] font-medium text-[16px] leading-[25px] text-center text-[#667085] '>It is our great pleasure to have you on board!</p>
        <Input extraStyle="mt-[106px] ml-[132px] pl-[13px]" placeholder={"Enter your Email"} type={"email"} name={"email"} isRuquired={true}/>
        <Input extraStyle="mt-[14px] ml-[132px] pl-[13px]" placeholder={"Create your Login"} type={"text"} name={"login"} isRuquired={true}/>
        <Input extraStyle="mt-[14px] ml-[132px] pl-[13px]" placeholder={"Create your Password"} type={"password"} name={"password"} isRuquired={true}/>
        <Button extraStyle="ml-[135px] border-solid border-[0.5px] border-[#A7A7A7] mt-[34px] rounded-[5px]" title={"Sign up"} />
    </form>
    </div>
  )
}

export default SignUp