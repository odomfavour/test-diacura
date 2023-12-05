import React from 'react'
import DoctorsKYC from '../../layouts/DoctorsKYC'
import DoctorsKycButtons from './DoctorsKycButtons'


const DoctorsKycStep3 = () => {

  return (
 <section>
  <DoctorsKYC current={3}>
  <div className='text-center'>
    <div>

    <div className='border rounded-[.8rem] shadow-lg mt-[1rem] text-center py-[2rem] px-[2rem] parent max-w-[27.125rem] min-h-[7.4375rem] mx-auto sm:min-h-[27.4375rem] sm:max-w-[47.125rem] lg:max-w-[57.125rem]' style={{background:'rgba(207, 229, 242, 0.30)'}}>
        <p className='text-[#107bc0]'>Take a Selfie</p>
          <p className='text-[.7rem]'>Capture your face by facing your camera and placing your face within the oval.</p>

         <figure className='border-dashed border-[.2rem] rounded-[.4rem] mt-[1rem] lg:py-[6rem] sm:py-[6rem] py-[3rem]'>
          <img src="path/to/your/image.jpg" alt="Selfie" className='mx-auto'/>
          <figcaption className='text-[.9rem]'><strong>Drop your image here or <span className='text-[#107bc0]'>browse</span></strong></figcaption>
          <p className='text-[.6rem] pt-[.3rem]'>Supports: JPG, JPEG, PNG</p>
        </figure>

        {/* <div className='flex justify-center gap-[1rem] mt-[2rem]'>
         <button className='px-[2.5rem] py-[.2rem] rounded-[.2rem] bg-[transparent] text-[#107bc0] border-[.08rem] border-[#107bc0]'>Back</button>

         <button className='px-[2.5rem] py-[.2rem] rounded-[.2rem] bg-[#107BC0] text-white'>Next</button>
        </div> */}
        <div>
        <DoctorsKycButtons previous={"doctors-kyc-step-2"} next={"doctors-kyc-step-4"}/>
        </div>
    </div>
  </div>
  </div>

  </DoctorsKYC>
  </section>
    
  )
}

export default DoctorsKycStep3