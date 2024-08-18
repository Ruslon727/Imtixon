import React, { useContext } from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { Context } from "../../context/context";


function SignIn() {
  const { setToken } = useContext(Context);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value.trim(),
    };
    if (data.login === "Ruslan" && data.password === "12345") {
      setToken(data);

      e.target.reset();
    } else {
      alert("Xatolik bor");
    }
  };
  return (
    <>
      <h1 className='font-[Kumbh Sans] text-center leading-[44.65px] font-semibold text-[36px] text-[#4F4F4F] mt-[184px] '>Welcome, Log into you account</h1>
      <form onSubmit={handleSubmitLogin} className='w-[512px] h-[382px] mx-auto mt-[53px] '>
        <p className='mt-[72px] ml-[132px] h-[58px] w-[238px] font-medium text-[16px] leading-[25px] font-[Inter] text-center text-[#667085]'>It is our great pleasure to have you on board! </p>
        <Input extraStyle="mt-[14px] block ml-[130px] pl-[13px] " placeholder={"Enter your Login"} type={"text"} name={"login"} isRuquired={true}/>
        <Input extraStyle="mt-[14px] block ml-[130px] pl-[13px] " placeholder={"Enter Password"} type={"password"} name={"password"} isRuquired={true}/>
        <Button extraStyle="mt-[14px] ml-[132px] block rounded-[5px]" title={"Login"}/>
        <Link className='w-[253px] h-[31px] ml-[131px] font-[Inter] mt-[14px] font-bold relative top-[14px] left-[100px] text-[12px] leading-[24px] text-[#2D88D4] ' to={'/sign-up'}>Sign Up</Link>
      </form>
    </>
  )
}

export default SignIn