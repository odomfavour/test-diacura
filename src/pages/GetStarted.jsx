import logo from '../assets/icons/get-started/app-logo.svg';
import patients from '../assets/icons/get-started/for-patients.svg';
import doctors from '../assets/icons/get-started/for-doctors.svg';

const GetStarted = () => {
  return (
    <div className='font-Open-sans'>
        <div>
            <div className='w-11/12 mx-auto my-5'>
                <img src={logo} alt="DiaCura-Med logo" />
                <div className='w-3/5 mx-auto mt-6'>
                    <h3 className='text-center font-semibold text-[32px] leading-[43.58px] text-[#107BC0]'>
                        Select the one that best applies to you and Dive into a Personalized Login Experience!
                    </h3>
                </div>
                <div className='bg-[#BBE1F61A] w-11/12 mx-auto flex gap-16 rounded-[20px] py-[93px] px-[71px] mt-5 box-shadow'>
                    <div role='button' className='get-started'>
                        <div className='w-1/2 mx-auto'>
                            <img src={patients} alt="Get started for patients" />
                        </div>
                        <div className='mt-5'>
                            <h4 className='get-startedHeader'>For Patients</h4>
                            <p className='text-lg font-normal'>
                                Get access to your Dashboard where you can get access to Doctor&apos;s, get personalized Treatment plans, Blood Sugar monitoring, download medical reports and many more. 
                            </p>
                        </div>
                    </div>
                    <div role='button' className='get-started'>
                        <div className='w-1/2 mx-auto'>
                            <img src={doctors} alt="Get started for doctors" />
                        </div>
                        <div className='mt-5'>
                            <h4 className='get-startedHeader'>For Doctors</h4>
                            <p className='text-lg font-normal'>
                                Get access to your dashboard where you can monitor the treatment plans of patients, reschedule consultations, edit medical report, attend to emergencies and many more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted