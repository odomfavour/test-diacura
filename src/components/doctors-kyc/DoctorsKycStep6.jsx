import React from 'react'
import DoctorsKYC from '../../layouts/DoctorsKYC'
import frame from '../../assets/Icons/frame.png'


const DoctorsKycStep6 = () => {

  return (
 <section>
  <DoctorsKYC current={6}>
  <div className='text-center'>
    <div>

    <div className='border rounded-[.8rem] shadow-lg mt-[1rem] text-left py-[2rem] px-[2rem] parent max-w-[27.125rem] min-h-[7.4375rem] mx-auto sm:min-h-[27.4375rem] sm:max-w-[47.125rem] lg:max-w-[57.125rem]' style={{background:'rgba(207, 229, 242, 0.30)'}}>
        <p className='text-[#107bc0] font-semibold'>Upload Medical Evaluation Assessment Result</p>
          <p className='text-[.7rem] mt-[1rem]'>Kindly upload the result of your medical evaluation assessment..</p>

         <figure className='border-dashed border-[.2rem] rounded-[.4rem] mt-[1rem] lg:py-[6rem] sm:py-[6rem] py-[3rem] text-center'>
          <img src={frame} alt="cloud" className='mx-auto'/>
          <figcaption className='text-[.8rem]'><strong>Drag and drop files or <span className='text-[#107bc0]'>browse</span></strong></figcaption>
          <p className='text-[.6rem] pt-[.3rem]'>(jpg, png, or pdf format only)</p>
        </figure>

        
    </div>
  </div>
  </div>

  </DoctorsKYC>
  </section>
    
  )
}

export default DoctorsKycStep6