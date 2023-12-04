import React from 'react';
import { TbLogout } from "react-icons/tb";
import propTypes from 'prop-types';
import { AdminMenuContextProvider } from '../../context/AdminSidebarContext';

const LogOutPopup = () => {
    const { isLogout, setisLogout } = AdminMenuContextProvider();
    return (
        <div className='relative'>
            <div className='flex items-center justify-center bg-[#020d1444] fixed left-0 top-0 w-full h-full z-20'>
                <div className='bg-[#FFFFFF] rounded-[20px] shadow-xxl w-[1/2]'>
                    <div className='bg-[#FFF5F5] p-5 rounded-t-[20px] text-center w-full'>
                        <p className='text-[#EB3434] font-bold text-base'>SIGN OUT OF ACCOUNT</p>
                    </div>
                    <div className='text-center p-10'>
                        <div className=''>
                            <h2 className='text-[#666666] mb-3 font-bold text-xl'>ARE YOU SURE?</h2>
                            <p className='text-[#666666] font-normal text-base'>
                                You will be logged out from your account.
                            </p>
                        </div>
                        <div className='mt-7 flex items-center justify-between'>
                            <div className=''>
                                <button onClick={() => setisLogout(false)} className='text-[#999999] font-semibold text-xl py-[18px] px-8 border-2 border-[#CFE5F2] rounded-[4px] cursor-pointer'>
                                    Cancel
                                </button>
                            </div>
                            <div>
                                <button onClick={() => setisLogout(false)} className='text-white flex gap-3 items-center bg-[#EB3434] rounded-[4px] py-4 px-2'>
                                    <TbLogout className='text-3xl' />
                                    <span className='font-semibold text-lg'>
                                        Log Out
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
};
    
LogOutPopup.propTypes = {
    setisaccountDelete: propTypes.node,
};

export default LogOutPopup