import DoctorsKYC from "./DoctorsKYC"
import PropTypes from "prop-types";
import Progress from "../../components/patients-kyc/Progress";

const DoctorsKYCstep = ({ children, current}) => {    
  return (
    <section>
        <DoctorsKYC>
            <div className={`w-full xl:w-[85%] mx-auto mb-[2.69rem] text-center`}>       
                {/* Steps progress bar */}
                <Progress current={current} />
            </div>
            <div className="bg-[#cfe5f271] shadow-xxl p-5 xl:p-10 rounded-2xl w-full xl:w-[85%] mx-auto">
                {children}                
            </div>
        </DoctorsKYC>
    </section>
  )
};

DoctorsKYCstep.propTypes = {
    children: PropTypes.node,
    heading: PropTypes.string,
    current: PropTypes.number,
};

export default DoctorsKYCstep