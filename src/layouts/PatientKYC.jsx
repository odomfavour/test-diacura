import logo from "../assets/images/patients-kyc/logo.svg";
import PropTypes from "prop-types";
import Progress from "../components/patients-kyc/Progress";

const PatientKYC = ({ children, heading, current}) => {
  return (
    <div className="bg-[#F6FCFF] py-[1.75rem] px-[1.5rem] md:pt-[1.75rem] md:pb-[6.56rem] md:px-[3.75rem]">
      {/* Header */}
      <div className="pb-[1.5rem] md:pb-[2.5rem]">
        <img src={logo} alt="Dia-cura Med logo" />
      </div>
      <div className="max-w-[70.8125rem] mx-auto mb-[2.69rem] text-center">
        <h1 className="text-primary-color-light-blue-300 text-[1.4rem] md:text-[2rem] font-semibold leading-normal mb-[1.5rem] md:mb-[2rem]">
          {heading}
        </h1>
        
        {/* Steps progress bar */}
        <Progress current={current} />
      </div>

      {children}
    </div>
  );
};

PatientKYC.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  current: PropTypes.number,
};
export default PatientKYC;
