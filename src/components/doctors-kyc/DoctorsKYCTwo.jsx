import DoctorsKYCstep from "../../layouts/doctorsKYC/DoctorsKYCstep";
import cloudUpload from "/src/assets/icons/doctors-kyc/cloud-upload.svg";
import DoctorsKYCButtons from "./DoctorsKYCstepButtons";
import { useNavigate } from "react-router-dom";
import DoctorsKYCFileUpload from "./DoctorsKYCFileUpload";
import axios from 'axios';
import { useState } from "react";

const DoctorsKYCTwo = () => {  
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileCount, setFileCount] = useState(0);

  const handleSubmit = () => {
    navigate("/doctors-kyc-step-3");
  };

  const handleFileUpload = async (files) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(`file${i + 1}`, files[i]);
    }

    try {
      const response = await axios.post('https://diacura-med.onrender.com/api/user/doctor-assessment', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log(response.data);
      setFileCount(files.length);
      setUploadProgress(0);
    } catch (error) {
      console.log('File upload failed due to: ', error);
      alert(`File upload failed due to: ${error}`)
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    handleFileUpload(droppedFiles);
  };

  const handleBrowseClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = e.target.files;
    handleFileUpload(selectedFiles);
  }

  return (
    <section>
        <DoctorsKYCstep current={2}>
          <div>
            <h3 className="text-[#107BC0] font-semibold text-2xl mb-5">Personal Information</h3>  
            <form action="" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center">
              <div className="w-[55%]">
                <h4 className="text-[#404040] font-semibold text-xl">Kindly upload the following proof of Identity.</h4>
                <div className="my-12">
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="hospitalCard" className="upload-checkbox" />
                    <label htmlFor="hospitalCard" className="upload-label">Hospital ID Card</label>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="medCert" className="upload-checkbox" />
                    <label htmlFor="medCert" className="upload-label">Medical Certificate</label>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="nationalID" className="upload-checkbox" />
                    <label htmlFor="nationalID" className="upload-label">National ID</label>
                  </div>
                </div>
                <h4 className="text-[#404040] font-semibold text-xl">Scan and upload the front and back of your proof of identity.</h4>
              </div>
              <div className="w-2/5">
                <div className="border border-dashed border-[#666666] flex gap-3 flex-col items-center justify-center h-[379px] rounded-md w-[408px] text-center">
                <div 
                  style={dropZoneStyle}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <img src={cloudUpload} alt="Upload document here" />
                </div>
                  <p className="font-bold text-base text-[#666666]">
                    Drag & drop files or <span> </span>
                        <label htmlFor="fileInput" style={browseLabelStyle} onClick={handleBrowseClick}>
                           Browse
                        </label>  
                        <input type="file" 
                          id="fileInput"
                          multiple
                          style={fileInputStyle}
                          onChange={handleFileInputChange}
                        />              
                  </p>
                  <p className="font-semibold text-[#666666] text-sm">
                    (jpg, png, or pdf format only)
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b mt-16 border-[#CFE5F2]"></div>
            <DoctorsKYCFileUpload />
            {fileCount > 0 && (
            <div>
              <p>{`${fileCount} file${fileCount !== 1 ? 's' : ''} uploaded`}</p>
              <div style={{
                width: '100%',
                background: '#D9D9D9',
                borderRadius: '4px',
                height: '20px',
                zIndex: -1
              }}>
              <div style={{
                width: `${uploadProgress}%`,
                height: '20px',
                background: 'green',
                borderRadius: '4px',
                transition: 'width 0.3s ease-in-out',
                zIndex: 2
              }}>                
              </div>
              </div>
              <p>{`Uploading ${uploadProgress}%`}</p>
            </div>
            )}
            <div className="mt-10">
              <DoctorsKYCButtons previous={"doctors-kyc-one"} />
            </div>
            </form>
          </div>            
        </DoctorsKYCstep>        
    </section>
  )
};

const browseLabelStyle = {
  cursor: 'pointer',  
  display: 'inline-block',
  color: '#107BC0'
};

const fileInputStyle = {
  opacity: 0,
  display: 'none'
}

const dropZoneStyle = {  
  textAlign: 'center',
  cursor: 'pointer',
  marginTop: '20px'
}

export default DoctorsKYCTwo