import React from 'react'
import DoctorsKYC from '../../layouts/DoctorsKYC'
import DoctorsKycButtons from './DoctorsKycButtons'

const DoctorsKycStep4 = () => {
  return (
  <section>
   <DoctorsKYC current={4}>
     <div>
     <div className='border rounded-[.8rem] shadow-lg mt-[1rem] text-left py-[2rem] px-[2rem] parent max-w-[27.125rem] min-h-[7.4375rem] mx-auto sm:min-h-[27.4375rem] sm:max-w-[47.125rem] lg:max-w-[57.125rem]' style={{background:'rgba(207, 229, 242, 0.30)'}}>
      <p className='text-[1rem] text-[#107bc0] font-bold'>Consent and Agreement</p>

      <p className='mt-[.5rem] text-[.8rem]'>I, Jacinta Rhodes,hereby consent to Diacura-Med’s terms and conditions. I understand that the information provided is confidential and will be used for the purpose of managing my diabetes related services.</p>

     <div className='flex items-center gap-[1rem] mt-[1.5rem]'>
        <input type="checkbox" name="" id="" />
        <p className='text-[.65rem]'>I agree to receive important notifications and updates via email.</p>
     </div>
     <div className='flex items-center gap-[1rem] mt-[.5rem]'>
        <input type="checkbox" name="" id="" className=''/>
        <p className='text-[.65rem]'>I agree to receive promotional materials related to diabetes management products and services.</p>
     </div>

    <h3 className='text-[.8rem] mt-[1rem] text-[#107bc0] font-semibold'>Kindly provide details of your HOD</h3>

    <form action="" className='flex flex-wrap mt-[1rem]'>
  <div className='w-full sm:w-1/2 sm:pr-[1rem]'>
    <label htmlFor="firstName" className='text-[.8rem]'>First Name</label>
    <input 
      type="text" 
      id='firstName'
      name='firstName'
      placeholder='First name'
      className='rounded-[.4rem] py-[.3rem] w-full px-[.3rem] text-[.8rem]'
    />
  </div>
  <div className='w-full sm:w-1/2 sm:pl-[1rem]'>
    <label htmlFor="lastName" className='text-[.8rem]'>Last Name</label>
    <input 
      type="text" 
      id='lastName'
      name='lastName'
      placeholder='Last name'
      className='rounded-[.4rem] py-[.3rem] w-full px-[.3rem] text-[.8rem]'
    />
  </div>
  <div className='w-full sm:w-1/2 sm:pr-[1rem] mt-[1rem] sm:mt-0'>
    <label htmlFor="email" className='text-[.8rem]'>Email Address</label>
    <input 
      type="email" 
      id='email'
      name='email'
      placeholder='Enter email address'
      className='rounded-[.4rem] py-[.3rem] w-full px-[.3rem] text-[.8rem]'
    />
  </div>
  <div className='w-full sm:w-1/2 sm:pl-[1rem] mt-[1rem] sm:mt-0'>
    <label htmlFor="phoneNumber" className='text-[.8rem]'>Phone Number</label>
    <input 
      type="number" 
      id='phoneNumber'
      name='phoneNumber'
      placeholder='Phone number'
      className='rounded-[.4rem] py-[.3rem] w-full px-[.3rem] text-[.8rem]'
    />
  </div>
</form>


     <div className='flex justify-end'>
     <DoctorsKycButtons previous={"doctors-kyc-step-3"} next={"doctors-kyc-step-5"}/>
        </div>
     </div>
    </div>
   </DoctorsKYC>
   </section>
  )
}

export default DoctorsKycStep4