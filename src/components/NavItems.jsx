import React from "react";
import { NavLink } from "react-router-dom";

function NavItems({item}) {
  return (
    <li className="ml-[16px] mt-[8px] h-[40px]">
      <NavLink to={item.path} className={"flex dark:text-white items-center space-x-5"}>
        {item.icon}
            <span className="font-[Kumbh Sans] font-semibold text-[14px] leading-[17.36px] text-[#FFFFFF] ml-[16px] ">
          {item.title}
        </span>
      </NavLink>
    </li>
  );
}

export default NavItems;