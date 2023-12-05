import logo from "../../assets/images/patients-kyc/logo.svg";
import PropTypes from "prop-types";

const DoctorsKYC = ({ children }) => {
  return (
    <div className="py-[1.75rem] px-[1.5rem] md:pt-[1.75rem] md:pb-[6.56rem] md:px-[3.75rem]">
      {/* Header */}
      <div className="pb-[1.5rem] md:pb-[2.5rem]">
        <img src={logo} alt="Dia-cura Med logo" />
      </div>      
      {children}
    </div>
  )
};

DoctorsKYC.propTypes = {
    children: PropTypes.node,   
};

export default DoctorsKYC