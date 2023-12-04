import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import propTypes from 'prop-types';

const DeleteAccount = ({ setisaccountDelete }) => {
  return (
    <div className='relative'>
        <div className='flex items-center justify-center text-center bg-[#020d1444] fixed left-0 top-0 w-full h-full z-20'>
            <div className='bg-[#FFFFFF] rounded-[20px] shadow-xxl w-4/5 xl:w-2/5'>
                <div className='bg-[#FFF5F5] p-3 xl:p-5 rounded-t-[20px] text-center w-full'>
                    <p className='text-[#EB3434] font-bold text-sm xl:text-base'>DELETE ACCOUNT PERMANENTLY</p>
                </div>
                <div className='text-center p-3 xl:p-10'>
                    <div className=''>
                        <h2 className='text-[#666666] mb-3 font-bold text-sm xl:text-xl'>ARE YOU SURE?</h2>
                        <p className='text-[#666666] font-normal text-xs xl:text-base'>
                            Deleting your account permanently erases all your data, and recovery is not possible. Please consider this carefully before proceeding.
                        </p>
                    </div>
                    <div className='mt-7 flex items-center justify-between'>
                        <div className=''>
                            <button onClick={() => setisaccountDelete(false)} className='text-[#999999] font-semibold text-xs xl:text-xl p-2 xl:py-[18px] xl:px-8 border-2 border-[#CFE5F2] rounded-[4px] cursor-pointer'>
                                No, Cancel
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setisaccountDelete(false)} className='text-white flex gap-3 items-center bg-[#EB3434] rounded-[4px] p-2 xl:py-4 xl:px-2'>
                                <RiDeleteBin6Line className='xl:text-3xl' />
                                <span className='font-semibold text-xs xl:text-lg'>
                                    Delete account
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
DeleteAccount.propTypes = {
    setisaccountDelete: propTypes.node,
}

export default DeleteAccount