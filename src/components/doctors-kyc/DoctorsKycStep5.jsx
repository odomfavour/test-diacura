import React from 'react'
import DoctorsKYC from '../../layouts/DoctorsKYC'
import envelope from '../../assets/Envelop.svg'

const DoctorsKycStep5 = () => {
  return (
    <section>
    <DoctorsKYC current={5}>
       <div className='border rounded-[.8rem] shadow-lg mt-[1rem] text-center py-[2rem] px-[2rem] parent max-w-[27.125rem] min-h-[7.4375rem] mx-auto sm:min-h-[20.4375rem] sm:max-w-[47.125rem] lg:max-w-[57.125rem]' style={{background:'rgba(207, 229, 242, 0.30)'}}>
         <div className='' >
         <img src={envelope} alt="envelope" className='mx-auto'/>
          <p className='text-[#107bc0] font-bold text-[1.1rem] sm:text-[1.4rem] mt-[.5rem]'> Check your email</p>
          <p className='text-[.8rem] mt-[.5rem] sm:text-[.9rem]'>We have sent a link to take a medical evaluation assessment to your email address. Kindly proceed to take the test, then upload your result.</p>

          <p className='mt-[2rem]'>Didn’t receive the email?Check spam folder or junk</p>

          <button className='rounded-[.2rem] bg-[#107bc0] w-full text-white py-[.3rem] mt-[1rem]'>Resend Email</button>
         </div>
       </div>

    </DoctorsKYC>

    </section>
  )
}

export default DoctorsKycStep5