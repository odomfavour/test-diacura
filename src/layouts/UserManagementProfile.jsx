import profilePicture from "../assets/images/admin-dashboard/profile-picture.svg";
import sendIcon from "../assets/icons/admin-dashboard/send-icon.svg";
import { FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

const UserManagementProfile = ({ children, profile }) => {
  const {
    role,
    name,
    email,
    age,
    gender,
    phoneNumber,
    state,
    registrationDate,
    status,
  } = profile;

  return (
    <section>
      <div>
        {/* Header */}
        <div className="mt-[2.54rem] mb-[2.34rem] text-[#666] flex items-center gap-[1.5rem]">
          <h3 className="leading-normal flex items-center gap-[0.34rem]">
            <span className="lg:text-[1.25rem] text-[1.125rem]  font-bold">
              {role}&apos;s Profile
            </span>
            <FaChevronRight className="text-[0.675rem]" />
          </h3>
          <p className="leading-normal lg:text-[1.125rem] font-semibold">
            {role === "Doctor" ? `Dr ${name}` : name}
          </p>
        </div>

        {/* Profile */}
        <div className="rounded-[1rem] py-[0.56rem] px-[0.56rem] lg:px-0 mb-[1.9rem] shadow-profileInfoBox flex flex-col xl:flex-row items-center">
          <div className="xl:w-1/3 xl:border-r border-r-[#ccc] lg:pt-[3.12rem] lg:pl-[4rem] lg:pr-[3.94rem] pt-[2rem] px-[1.5rem] pb-[2.19rem] flex flex-col items-center">
            <img src={profilePicture} alt="Profile picture" />
            <h2 className="text-black-80 text-[1.5rem] font-extrabold leading-normal mt-[1.56rem] mb-[0.44rem]">
              {name}
            </h2>
            <p className="text-black-80 text-[1.125rem] font-semibold leading-normal mb-[2.56rem]">
              {email}
            </p>
            <button className="px-[2rem] h-[3.75rem] flex items-center justify-center gap-[0.5rem] rounded-[0.25rem] border-2 border-[#107BC0]">
              <img src={sendIcon} alt="send" />{" "}
              <span className="text-[#107BC0] text-[1.25rem] font-bold leading-normal">
                Send Message
              </span>
            </button>
          </div>
          <div className="xl:w-2/3 w-full max-w-[700px] border-t border-t-[#ccc] xl:border-t-0 lg:pt-[3.69rem] lg:pl-[6.62rem] lg:pr-[10.88rem] lg:pb-[3.44rem] pt-[2rem] pl-[1.5rem] pr-[1.5rem] pb-[3.44rem] flex flex-col lg:gap-[3.44rem] gap-[2rem]">
            <div className="personal-information-row">
              <div className="personal-information">
                <h3>Age</h3>
                <p>{age} year old</p>
              </div>
              <div className="personal-information">
                <h3>Gender</h3>
                <p>{gender}</p>
              </div>
            </div>
            <div className="personal-information-row">
              <div className="personal-information">
                <h3>Phone number</h3>
                <p>{phoneNumber}</p>
              </div>
              <div className="personal-information">
                <h3>State</h3>
                <p>{state}</p>
              </div>
            </div>
            <div className="personal-information-row">
              <div className="personal-information">
                <h3>Registration date</h3>
                <p>{registrationDate}</p>
              </div>
              <div className="personal-information">
                <h3>Status</h3>
                <p>{status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="overflow-auto w-full">{children}</div>
      </div>
    </section>
  );
};

UserManagementProfile.propTypes = {
  children: PropTypes.node,
  profile: PropTypes.object,
};
export default UserManagementProfile;
