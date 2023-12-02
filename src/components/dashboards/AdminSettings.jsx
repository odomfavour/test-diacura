import adminImg from '../../assets/images/admin-dashboard/racheal-ali.png';
import camera from '../../assets/icons/admin-dashboard/camera.svg';
import { Edit } from '../../assets/icons/admin-dashboard/Edit';
import { useState } from 'react';
import Save from '../../assets/icons/admin-dashboard/Save';
import propTypes from 'prop-types';

const Settings = ({ isSaved, setisSaved }) => {
  let adminData = {
    fname: '',
    email: '',
    lname: '', 
    phone: '',  
    country: '',
    company: '', 
    city: '',  
    zipcode: ''    
  }
  const [isformFilled, setisFormFilled] = useState(false);
  const [admin, setAdmin] = useState(adminData)

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSaved(true);
    setTimeout(() => {
      setisSaved(isSaved);
    }, 3000);    
  };

  const handleInputChange = (e) => {
    setAdmin({...admin, [e.target.name]: e.target.value});
    setisFormFilled(true);
  };
  
  return (
    <div>
      <div className='mt-8 flex gap-4 items-center w-2/6'>
        <div className='relative'>
          <img src={adminImg} alt="Admin" />
          <div className='absolute bottom-0 right-0'>
            <img src={camera} alt="" />
          </div>
        </div>
        <div>
          <h1 className='font-bold text-3xl mb-1'>Racheal Ali</h1>
          <p className='font-normal text-lg text-[#595959]'>Administrator</p>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
      <div className='mt-12'>
        <div className='flex justify-between items-center p-2 border-b border-[#CFE5F2]'>
          <h3 className='font-bold text-2xl'>Bio Data</h3>
          {isformFilled ? (
              <div className='-mb-2'>
                <button type='submit' className='cursor-pointer flex items-center gap-2 bg-[#CFE5F2] py-[18px] px-8 rounded'>
                  <Save />
                  <span className='text-[#107BC0] font-bold text-base'>Save Changes</span>
                </button>
              </div>
            ) : (
              <div className='cursor-pointer'>
                <Edit />
              </div>
          )}         
        </div>
        <div className="patient-kyc-input-row mt-7">
          <div className="patient-kyc-input-col">
            <div className='mb-5'>
              <label htmlFor="fname" className="admin-kyc-label">First Name</label>
              <input type="text" name="fname" id="fname" placeholder='Racheal'
                className='patient-kyc-input admin-input'
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="admin-kyc-label">Email Address</label>
              <input type="email" name="email" id="email" placeholder='rachealaill@gmail.com' className='patient-kyc-input admin-input' />
            </div>
          </div>
          <div className="patient-kyc-input-col">
            <div className='mb-5'>
              <label htmlFor="lname" className="admin-kyc-label">Last name</label>
              <input type="text" name="lname" id="lname" placeholder='Ali' className='patient-kyc-input admin-input' />
            </div>
            <div>
              <label htmlFor="phone" className="admin-kyc-label">Phone no.</label>
              <input type="tel" name="phone" id="phone" placeholder='+234' className='patient-kyc-input admin-input' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='flex justify-between items-center p-2 border-b border-[#CFE5F2]'>
          <h3 className='font-bold text-2xl'>Personal Information</h3>
          {isformFilled ? ('') : (
            <div className='cursor-pointer'>
              <Edit />
            </div>
          )}
        </div>
        <div className="patient-kyc-input-row mt-7">
          <div className="patient-kyc-input-col">
            <div className='mb-5'>
              <label htmlFor="country" className="admin-kyc-label">Country of Residence</label>
              <input type="text" name="country" id="country" placeholder='Nigeria' className='patient-kyc-input admin-input' />
            </div>
            <div>
              <label htmlFor="company" className="admin-kyc-label">Company/Hospital name</label>
              <input type="text" name="company" id="company" placeholder='Diacura medical centre' className='patient-kyc-input admin-input' />
            </div>
          </div>
          <div className="patient-kyc-input-col">
            <div className='mb-5'>
              <label htmlFor="city" className="admin-kyc-label">City/State</label>
              <input type="text" name="city" id="city" placeholder='Ikeja, Lagos state.' className='patient-kyc-input admin-input' />
            </div>
            <div>
              <label htmlFor="zipcode" className="admin-kyc-label">Zip code</label>
              <input type="tel" name="zipcode" id="zipcode" placeholder='110001' className='patient-kyc-input admin-input' />
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

Settings.propTypes = {
  isSaved: propTypes.bool,
  setisSaved: propTypes.node
}

export default Settings