import logo from "../assets/icons/get-started/app-logo.svg";
import patients from "../assets/icons/get-started/for-patients.svg";
import doctors from "../assets/icons/get-started/for-doctors.svg";
import { useContext } from "react";
import UserRoleContext from "../context/UserRoleContext";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const { setRole } = useContext(UserRoleContext);
  return (
    <div className="font-Open-sans">
      <div>
        <div className="w-11/12 mx-auto my-5">
          <img src={logo} alt="DiaCura-Med logo" />
          <div className="xl:w-3/5 mx-auto mt-6">
            <h3 className="text-center font-semibold xl:text-[32px] xl:leading-[43.58px] text-[#107BC0]">
              Select the one that best applies to you and Dive into a
              Personalized Login Experience!
            </h3>
          </div>
          <div className="bg-[#BBE1F61A] w-11/12 mx-auto xl:flex gap-16 rounded-[20px] p-6 xl:py-[93px] xl:px-[71px] mt-5 box-shadow">
            <Link to="/signup">
              <div
                role="button"
                className="get-started mb-6 xl:mb-0"
                onClick={() => setRole("PATIENT")}
              >
                <div className="xl:w-1/2 w-5/6 mx-auto">
                  <img src={patients} alt="Get started for patients" />
                </div>
                <div className="mt-5">
                  <h4 className="get-startedHeader">For Patients</h4>
                  <p className="xl:text-lg font-normal">
                    Get access to your Dashboard where you can get access to
                    Doctor&apos;s, get personalized Treatment plans, Blood Sugar
                    monitoring, download medical reports and many more.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/signup">
              <div
                role="button"
                className="get-started h-full"
                onClick={() => setRole("DOCTOR")}
              >
                <div className="w-1/2 mx-auto">
                  <img src={doctors} alt="Get started for doctors" />
                </div>
                <div className="mt-5">
                  <h4 className="get-startedHeader">For Doctors</h4>
                  <p className="text-lg font-normal">
                    Get access to your dashboard where you can monitor the
                    treatment plans of patients, reschedule consultations, edit
                    medical report, attend to emergencies and many more.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
