import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/patients-kyc/logo.svg";
import { progressBar } from "../../utils/data";
import { UsePatientKycContext } from "../../context/PatientKycContext";

//Default form and form error values
const defaultPersonalInformation = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOfBirth: "",
  age: "",
  gender: "",
};

const errors = {
  firstName: false,
  lastName: false,
  phoneNumber: false,
  dateOfBirth: false,
  age: false,
  gender: false,
};

const PatientsKycStepOne = () => {
  const [personalInformation, setPersonalInformation] = useState(
    defaultPersonalInformation
  );
  const [formErrors, setFormErrors] = useState(errors);
  const { dispatch } = UsePatientKycContext();
  const navigate = useNavigate();

  //Form validation regular expressions
  const NAME_REGEX = /^[a-zA-Z][a-zA-Z]{2,}$/;
  const PHONE_REGEX = /^\d{11}$/;
  const AGE_REGEX = /^\d{1,3}$/;

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

    if (!AGE_REGEX.test(personalInformation.age.trim())) {
      validateForm = { ...validateForm, age: true };
      isFormValidated = false;
    } else {
      validateForm = { ...validateForm, age: false };
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
        payload: personalInformation,
      });
      setPersonalInformation(defaultPersonalInformation);
      navigate("/patients-kyc-step-two");
    } else {
      return;
    }
  };

  return (
    <section>
      <div className="bg-[#F6FCFF] py-[1.75rem] px-[1.5rem] md:pt-[1.75rem] md:pb-[6.56rem] md:px-[3.75rem] ">
        {/* Header */}
        <div>
          <div className="pb-[1.5rem] md:pb-[2.5rem]">
            <img src={logo} alt="Dia-cura Med logo" />
          </div>
          <div className="max-w-[70.8125rem] mx-auto mb-[2.69rem] text-center">
            <h1 className="text-primary-color-light-blue-300 text-[1.4rem] md:text-[2rem] font-semibold leading-normal mb-[1.5rem] md:mb-[2rem]">
              I am Dr. Diacura-Med Tracker in order to be useful, I need to get
              to know you better.
            </h1>
            <h3 className="text-[#020D14] text-[1.1rem] md:text-[1.5rem] font-semibold leading-normal mb-[1rem]">
              Step 1 of 6
            </h3>

            {/* steps progress bar */}
            <ul className="flex items-center justify-center gap-[2px]">
              {progressBar.map((step) => (
                <li
                  key={step.step}
                  className={`max-w-[8.1875rem] w-1/6 h-[0.9375rem] ${
                    step.step === 1
                      ? "bg-primary-color-light-blue-300"
                      : "bg-[#CFE5F2]"
                  }`}
                ></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Personal information */}
        <div className="max-w-[67.125rem] min-h-[37.4375rem] mx-auto py-[2rem] px-[1.3rem] md:px-[2rem] lg:px-[3.88rem] md:py-[2.88rem] rounded-[1.25rem] bg-light-blue shadow-xxl">
          <h2 className="text-primary-color-light-blue-300 text-[1.2rem] md:text-[1.5rem] font-semibold leading-normal mb-[2rem] md:mb-[4rem]">
            Personal Information
          </h2>

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
                      formErrors.firstName
                        ? "border-red-600"
                        : "border-[#94A3B8]"
                    }`}
                    id="firstName"
                    name="firstName"
                    value={personalInformation.firstName}
                    onChange={setProperty}
                  />
                  <span
                    className={`text-red-600 ${
                      formErrors.firstName ? "block" : "hidden"
                    }`}
                  >
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
                      formErrors.lastName
                        ? "border-red-600"
                        : "border-[#94A3B8]"
                    }`}
                    id="lastName"
                    name="lastName"
                    value={personalInformation.lastName}
                    onChange={setProperty}
                  />
                  <span
                    className={`text-red-600 ${
                      formErrors.lastName ? "block" : "hidden"
                    }`}
                  >
                    Last name Must be more than 2 characters, letters only
                  </span>
                </div>
              </div>
              <div className="patient-kyc-input-row">
                <div className="patient-kyc-input-col">
                  <label htmlFor="phoneNumber" className="patient-kyc-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`patient-kyc-input ${
                      formErrors.phoneNumber
                        ? "border-red-600"
                        : "border-[#94A3B8]"
                    }`}
                    id="phoneNumber"
                    name="phoneNumber"
                    value={personalInformation.phoneNumber}
                    onChange={setProperty}
                  />
                  <span
                    className={`text-red-600 ${
                      formErrors.phoneNumber ? "block" : "hidden"
                    }`}
                  >
                    Phone number must consist of 11 digits
                  </span>
                </div>
                <div className="patient-kyc-input-col">
                  <label htmlFor="dateOfBirth" className="patient-kyc-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className={`patient-kyc-input ${
                      formErrors.dateOfBirth
                        ? "border-red-600"
                        : "border-[#94A3B8]"
                    }`}
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={personalInformation.dateOfBirth}
                    onChange={setProperty}
                  />
                  <span
                    className={`text-red-600 ${
                      formErrors.dateOfBirth ? "block" : "hidden"
                    }`}
                  >
                    Enter a valid date of birth
                  </span>
                </div>
              </div>
              <div className="patient-kyc-input-row">
                <div className="patient-kyc-input-col">
                  <label htmlFor="age" className="patient-kyc-label">
                    Age
                  </label>
                  <input
                    type="text"
                    placeholder="Age"
                    className={`patient-kyc-input ${
                      formErrors.age ? "border-red-600" : "border-[#94A3B8]"
                    }`}
                    id="age"
                    name="age"
                    value={personalInformation.age}
                    onChange={setProperty}
                  />
                  <span
                    className={`text-red-600 ${
                      formErrors.age ? "block" : "hidden"
                    }`}
                  >
                    Enter a valid age, age must consist of digits only.
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
                    }`}
                  >
                    Please select your gender
                  </span>
                </div>
              </div>
            </div>

            {/* buttons container */}
            <div className="flex justify-end items-center gap-[1rem]">
              <Link to={"/"}>
                <button
                  type="button"
                  className="w-[10rem] h-[3rem] md:h-[3.5rem] rounded-[0.25rem] border border-primary-color-light-blue-300 text-primary-color-light-blue-300 font-bold text-[1.25rem] hover:text-white hover:bg-primary-color-light-blue-300 transition-all duration-300 ease-in-out"
                >
                  Back
                </button>
              </Link>
              <button
                type="submit"
                className="w-[10rem] h-[3rem] md:h-[3.5rem] rounded-[0.25rem] border border-primary-color-light-blue-300 text-white font-bold text-[1.25rem] bg-primary-color-light-blue-300 hover:text-primary-color-light-blue-300 hover:bg-transparent"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PatientsKycStepOne;
