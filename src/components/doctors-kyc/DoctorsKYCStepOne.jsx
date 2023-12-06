import DoctorsKYCstep from "../../layouts/doctorsKYC/DoctorsKYCstep";
//import { UseDoctorKycContext } from "../../context/DoctorsKycContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DoctorsKYCButtons from "./DoctorsKYCstepButtons";
import { UsePatientKycContext } from "../../context/PatientKycContext";

//Default form and form error values
const defaultPersonalInfo = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    email: "",
    country: "",
    city: "",
};

const errors = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    dateOfBirth: false,
    age: false,
    gender: false,
    email: false,
    country: false,
    city: false,
};

/*const countryCities = [
    {
        id: 1,
        title: '',
        city: [
            'Abia', 'Adamawa', 'Akwa-ibom', 'Anambra', 'Bayelsa',
            'Bauchi', 'Maiduguri', 'Cross-River', 'Delta', 'Ebonyi',
            'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
            'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Rivers', 'Abuja' 
        ]
    }
]*/

const DoctorsKYCStepOne = () => {
    const [personalInformation, setPersonalInformation] = useState(defaultPersonalInfo);
    const [formErrors, setFormErrors] = useState(errors);
    const { dispatch } = UsePatientKycContext();
    const navigate = useNavigate();

    //Form validation regular expressions
    const NAME_REGEX = /^[a-zA-Z][a-zA-Z]{2,}$/;
    const PHONE_REGEX = /^\d{11}$/;

    //Set form data properties values
    const setProperty = (e) => {
      setPersonalInformation({
      ...personalInformation,
      [e.target.name]: e.target.value,
      });
    };

    //Handle form submission and validate form data
  const handleSubmit = (e) => {
    e.preventDefault();

    let validateForm = {};
    let isFormValidated = true;

    if (!NAME_REGEX.test(personalInformation.firstName.trim())) {
      validateForm = { ...validateForm, firstName: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, firstName: false };
    }

    if (!NAME_REGEX.test(personalInformation.lastName.trim())) {
      validateForm = { ...validateForm, lastName: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, lastName: false };
    }

    if (!personalInformation.dateOfBirth) {
      validateForm = { ...validateForm, dateOfBirth: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, dateOfBirth: false };
    }

    if (!PHONE_REGEX.test(personalInformation.phoneNumber.trim())) {
      validateForm = { ...validateForm, phoneNumber: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, phoneNumber: false };
    }

    if (!personalInformation.email.trim().includes(".com")) {
        validateForm = { ...validateForm, email: true };
        isFormValidated = false;
    } else {
        validateForm = { ...validateForm, email: false};
    }

    if (personalInformation.age.trim() < 1 || personalInformation.age.trim() > 200) {
      validateForm = { ...validateForm, age: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, age: false };
    }

    if (!personalInformation.country) {
        validateForm = { ...validateForm, country: true};
        isFormValidated = false;
    } else {
        validateForm = { ...validateForm, country: false};
    }

    if (!personalInformation.city) {
        validateForm = { ...validateForm, city: true};
        isFormValidated = false;
    } else {
        validateForm = { ...validateForm, city: false};
    }

    if (!personalInformation.gender) {
      validateForm = { ...validateForm, gender: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, gender: false };
    }
    //Display errors if any
    setFormErrors(validateForm);

    //Submit valid personal information
    if (isFormValidated) {
        dispatch({
          type: "ADD_PERSONAL_INFORMATION",
          payload: {...personalInformation},
        });
        setPersonalInformation(defaultPersonalInfo);
        navigate("/doctor-kyc-two");
    } else {
        return;
    }
  };

  return (
    <section>
        <DoctorsKYCstep current={1}>
            <div>
                <h3 className="text-[#107BC0] font-semibold text-2xl mb-5">Personal Information</h3>

                {/* Form container */}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[1.5rem] md:gap-[1.94rem] mb-[2.5rem] md:mb-[3.25rem]">
                    <div className="patient-kyc-input-row">
                        <div className="patient-kyc-input-col">
                            <label htmlFor="firstName" className="patient-kyc-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className={`patient-kyc-input ${
                                    formErrors.firstName ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                id="firstName"
                                name="firstName"
                                value={personalInformation.firstName}
                                onChange={setProperty}
                            />
                            <span className={`text-red-600 ${
                                formErrors.firstName ? "block" : "hidden"
                            }`}>
                                First name Must be more than 2 characters, letters only
                            </span>
                        </div>
                        <div className="patient-kyc-input-col">
                            <label htmlFor="lastName" className="patient-kyc-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className={`patient-kyc-input ${
                                    formErrors.lastName ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                id="lastName"
                                name="lastName"
                                value={personalInformation.lastName}
                                onChange={setProperty}
                            />
                            <span className={`text-red-600 ${
                                formErrors.lastName ? "block" : "hidden"
                            }`}>
                                Last name Must be more than 2 characters, letters only
                            </span>
                        </div>
                    </div>
                    <div className="patient-kyc-input-row">
                        <div className="patient-kyc-input-col">
                            <label htmlFor="email" className="patient-kyc-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className={`patient-kyc-input ${
                                    formErrors.email ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                id="email"
                                name="email"
                                value={personalInformation.email}
                                onChange={setProperty}
                            />
                            <span className={`text-red-600 ${
                                formErrors.email ? "block" : "hidden"
                            }`}>
                                Please input a valid email address
                            </span>
                        </div>
                        <div className="patient-kyc-input-col">
                            <label htmlFor="country" className="patient-kyc-label">
                                Country of Residence
                            </label>
                            <select
                                className={`patient-kyc-input ${
                                    formErrors.country ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                value={personalInformation.country}
                                onChange={setProperty}
                                name="country" id="country">
                                <option value="">Select country</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Niger">Niger</option>
                                <option value="Morocco">Morocco</option>
                            </select>
                            <span className={`text-red-600 ${
                                formErrors.country ? "block" : "hidden"
                            }`}>
                                Please select your country
                            </span>
                        </div>
                    </div>
                    <div className="patient-kyc-input-row">
                        <div className="patient-kyc-input-col">
                            <label htmlFor="city" className="patient-kyc-label">
                                City of Residence
                            </label>
                            <select
                                className={`patient-kyc-input ${
                                    formErrors.city ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                value={personalInformation.city}
                                onChange={setProperty}
                                name="city" id="city">
                                <option value="">Select city</option>
                                <option value="Lagos">Lagos</option>                                
                                {/*countryCities.map((country) => {
                                    <option key={country.id} value={country.city}>
                                        Lagos
                                    </option>
                                })
                                */}
                            </select>
                            <span className={`text-red-600 ${
                                formErrors.city ? "block" : "hidden"
                            }`}>
                                Please select your city
                            </span>
                        </div>
                        <div className="patient-kyc-input-col">
                            <label htmlFor="phoneNumber" className="patient-kyc-label">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className={`patient-kyc-input ${
                                    formErrors.phoneNumber ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                id="phoneNumber"
                                name="phoneNumber"
                                value={personalInformation.phoneNumber}
                                onChange={setProperty}
                            />
                            <span
                                className={`text-red-600 ${
                                formErrors.phoneNumber ? "block" : "hidden"
                            }`}>
                                Phone number must consist of 11 digits
                            </span>
                        </div>                        
                    </div>              
                    <div className="patient-kyc-input-row">
                        <div className="patient-kyc-input-col">
                            <label htmlFor="dateOfBirth" className="patient-kyc-label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                min={"1850-01-01"}
                                max={ new Date().toISOString().split("T")[0]}
                                className={`patient-kyc-input ${
                                    formErrors.dateOfBirth ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={personalInformation.dateOfBirth}
                                onChange={setProperty}
                            />
                            <span
                                className={`text-red-600 ${
                                    formErrors.dateOfBirth ? "block" : "hidden"
                                }`}>
                                    Enter a valid date of birth
                            </span>
                        </div>
                        <div className="patient-kyc-input-col">
                            <label htmlFor="gender" className="patient-kyc-label">
                                Gender
                            </label>
                            <div
                                className={`w-full flex items-center bg-white border rounded-[0.5rem] ${
                                    formErrors.gender ? "border-red-600" : "border-[#94A3B8]"
                                }`}
                            >
                            <button
                                type="button"
                                onClick={() =>
                                    setPersonalInformation({
                                        ...personalInformation,
                                        gender: "Male",
                                    })
                                }
                                className={`inline-block w-1/2 py-[0.8rem] md:py-[1rem] text-[0.875rem] font-medium leading-[1.25rem] outline-none ${
                                    personalInformation.gender === "Male"
                                    ? "border-b-[0.1875rem] border-b-primary-color-light-blue-300 text-primary-color-light-blue-300"
                                    : "text-[#666]"
                                }`}
                            >
                                Male
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    setPersonalInformation({
                                        ...personalInformation,
                                        gender: "Female",
                                    })
                                }
                                className={`inline-block w-1/2 py-[0.8rem] md:py-[1rem] text-[0.875rem] font-medium leading-[1.25rem] outline-none ${
                                    personalInformation.gender === "Female"
                                    ? "border-b-[0.1875rem] border-b-primary-color-light-blue-300 text-primary-color-light-blue-300"
                                    : "text-[#666]"
                                }`}
                            >
                                Female
                            </button>
                        </div>
                            <span
                                className={`text-red-600 ${
                                    formErrors.gender ? "block" : "hidden"
                                }`}>
                                    Please select your gender
                            </span>
                        </div>
                    </div>
                </div>  
                {/* buttons container */}
                <DoctorsKYCButtons previous={"doctor-kyc-welcome"} />              
            </form>            
            </div>
        </DoctorsKYCstep>
    </section>
  )
}

export default DoctorsKYCStepOne