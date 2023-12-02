import { useEffect } from 'react';
import Delete from '../../assets/icons/admin-dashboard/Delete';
import Save from '../../assets/icons/admin-dashboard/Save';
import Updates from '../../assets/icons/admin-dashboard/updates';
import Toggleslider from './toggleslider/Toggleslider';
import propTypes from 'prop-types';

const AccountManagement = ({ isSaved, setisSaved }) => {
  
  const savePassword = () => {
    setisSaved(true)
    setTimeout(() => {
      setisSaved(isSaved);
    }, 3000);
  } 
    return (
      <div>
        <div className="mt-8">
          <div className='flex justify-between items-center border-b border-[#CFE5F2]'>
            <h2 className="font-bold text-[#020D14] text-2xl">Security and Privacy</h2>
            <div className=''>
                <button onClick={savePassword} className='cursor-pointer flex items-center gap-2 bg-[#CFE5F2] py-[18px] px-8 rounded'>
                  <Save />
                  <span className='text-[#107BC0] font-bold text-base'>Save Changes</span>
                </button>
            </div>
          </div>
          <div className='mt-5'>
            <h4 className='font-bold text-xl text-[#666666]'>Change password</h4>
            <div className='patient-kyc-input-row mt-4'>
              <div className='patient-kyc-input-col'>
                <label htmlFor="password" className="admin-kyc-label">Current password</label>  
                <input type="password" name="password" id="password" placeholder='***********' className='patient-kyc-input admin-input' />              
              </div>
              <div className='patient-kyc-input-col'>
                <label htmlFor="newpassword" className="admin-kyc-label">New Password</label>  
                <input type="password" name="newpassword" id="newpassword" placeholder='***********' className='patient-kyc-input admin-input' />              
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <h4 className='font-bold text-xl text-[#666666]'>Two-factor authentication settings</h4>
            <div className='flex justify-between items-center mt-3'>
              <p className='w-3/5 font-semibold text-[#999999] text-base'>
                Boost account security with Two-Factor Authentication (2FA)! Activate for an extra layer of protection. 
                Receive a unique code on your email or phone for added peace of mind
              </p>
              <Toggleslider />
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <div>
            <div className='border-b p-2 border-[#CFE5F2]'>
              <h2 className="font-bold text-[#020D14] text-2xl">App Version and Updates</h2>            
            </div>
          </div>
          <div className='mt-5'>  
            <h4 className='font-bold text-xl text-[#666666]'>Check for app updates</h4> 
            <div className='flex justify-between items-end'>                
                <p className='text-[#999999] font-semibold text-lg'>Your app is currently up-to-date (v1.0.0)</p> 
                <div>
                  <button className='bg-[#107BC0] py-[18px] px-8 border border-[#107BC0] flex gap-2 items-center'>
                    <Updates />
                    <span className='text-[#CFE5F2] font-bold text-base'>Check for updates</span>
                  </button>
                </div>                
            </div>     
          </div>
          <div className='mt-10'>  
            <h4 className='font-bold text-xl text-[#666666]'>Delete your account</h4> 
            <div className='flex justify-between items-end mt-4'>                
                <p className='text-[#999999] font-semibold text-lg w-3/5'>Using this action will delete your account permanently, including all your saved data&apos;s.</p> 
                <div className='w-[295px]'>
                  <button className='w-full bg-white py-[18px] px-8 border border-[#EB3434] flex gap-2 items-center justify-center'>
                    <Delete />
                    <span className='text-[#EB3434] font-bold text-base'>Delete</span>
                  </button>
                </div>                
            </div>     
          </div>
        </div>        
      </div>
    )
  };

  AccountManagement.propTypes = {
    isSaved: propTypes.bool,
    setisSaved: propTypes.node
  }
  
  export default AccountManagement