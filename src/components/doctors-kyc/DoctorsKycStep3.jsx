import React from 'react'

const DoctorsKycStep3 = () => {
  return (
    <div className='text center'>
      <h3 className='text-left'>DiaCura-<span>Med</span></h3>

      <p>Step 3 of 6</p>
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <div className='border rounded-[.4rem]shadow-lg '>
        <p>Take a Selfie</p>
        <p>Capture your face by facing your camera and placing your face within the oval.</p>

        <div>
            <img src="" alt="" />
            <div></div>
            <p>Image uploading...</p>
            <p>Supports: JPG,JPEG,PNG</p>
        </div>
        <div>
         <button>Back</button>
         <button>Next</button>
        </div>
        
    </div>
    </div>
  )
}

export default DoctorsKycStep3