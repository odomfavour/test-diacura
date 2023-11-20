import logo from "../../assets/icons/patients-kyc/logo.svg";

const progressBar = [
  {
    step: 1,
  },
  {
    step: 2,
  },
  {
    step: 3,
  },
  {
    step: 4,
  },
  {
    step: 5,
  },
  {
    step: 6,
  },
];

const progress = [1];

const PatientsKycStepOne = () => {
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
                    progress.includes(step.step)
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
          <form action="">
            <div className="flex flex-col gap-[1.5rem] md:gap-[1.94rem] mb-[2.5rem] md:mb-[3.25rem]">
              <div className="patient-kyc-input-row">
                <div className="patient-kyc-input-col">
                  <label htmlFor="firstName" className="patient-kyc-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="patient-kyc-input"
                    id="firstName"
                  />
                </div>
                <div className="patient-kyc-input-col">
                  <label htmlFor="lastName" className="patient-kyc-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="patient-kyc-input"
                    id="lastName"
                  />
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
                    className="patient-kyc-input"
                    id="phoneNumber"
                  />
                </div>
                <div className="patient-kyc-input-col">
                  <label htmlFor="dateOfBirth" className="patient-kyc-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="patient-kyc-input"
                    id="dateOfBirth"
                  />
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
                    className="patient-kyc-input"
                    id="age"
                  />
                </div>
                <div className="patient-kyc-input-col">
                  <label htmlFor="gender" className="patient-kyc-label">
                    Gender
                  </label>
                  <div className="w-full flex items-center bg-white border border-[#94A3B8] rounded-[0.5rem]">
                    <button className="inline-block w-1/2 py-[0.8rem] md:py-[1rem] text-[0.875rem] text-primary-color-light-blue-300 font-medium leading-[1.25rem] border-b-[0.1875rem] border-b-primary-color-light-blue-300">
                      Male
                    </button>
                    <button className="inline-block w-1/2 py-[0.8rem] md:py-[1rem] text-[0.875rem] text-[#666] font-medium leading-[1.25rem]">
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* buttons container */}
            <div className="flex justify-end items-center gap-[1rem]">
              <button className="w-[10rem] h-[3rem] md:h-[3.5rem] rounded-[0.25rem] border border-primary-color-light-blue-300 text-primary-color-light-blue-300 font-bold text-[1.25rem] hover:text-white hover:bg-primary-color-light-blue-300 transition-all duration-300 ease-in-out">
                Back
              </button>
              <button className="w-[10rem] h-[3rem] md:h-[3.5rem] rounded-[0.25rem] border border-primary-color-light-blue-300 text-white font-bold text-[1.25rem] bg-primary-color-light-blue-300 hover:text-primary-color-light-blue-300 hover:bg-transparent">
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
