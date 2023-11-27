import React from 'react'

const DoctorsKycStep4 = () => {
  return (
    <div>
      <h3 className='text-left'>DiaCura-<span>Med</span></h3>
      

      <p>Step 4 of 6</p>
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

     <div className='border rounded-[.4rem]shadow-lg '>
      <p>Consent and Agreement</p>

      <p>I, Jacinta Rhodes,hereby consent to Diacura-Med’s terms and conditions. I understand that the information provided is confidential and will be used for the purpose of managing my diabetes related services.</p>

     <div>
        <input type="checkbox" name="" id="" />
        <p>I agree to receive important notifications and updates via email.</p>
     </div>
     <div>
        <input type="checkbox" name="" id="" />
        <p></p>
     </div>

    <h3>Kindly provide details of your HOD</h3>

     <form action="">
      <div>
        <label htmlFor="">First Name</label>
        <input 
        type="text" 
        id='firstName'
        name='firstName'
        />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input 
        type="text" 
        id='lastName'
        name='lastName'
        />
      </div>
      <div>
        <label htmlFor="">Email Address</label>
        <input 
        type="email" 
        id='email'
        name='email'
        />
      </div>
      <div>
        <label htmlFor="">Phone Number</label>
        <input 
        type="number" 
        id='phoneNumber'
        name='phoneNumber'
        />
      </div>
     </form>
     <div className='ml-auto'>
         <button>Back</button>
         <button>Next</button>
        </div>
     </div>
    </div>
  )
}

export default DoctorsKycStep4