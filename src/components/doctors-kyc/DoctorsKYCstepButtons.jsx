import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DoctorsKYCButtons = ({ previous }) => {
  return (
    <>
        <div className="flex items-center justify-end">
              <div className="w-full xl:w-3/5 flex gap-2">
                  <Link to={`/${previous}`} className="w-1/2">
                      <button className="border border-[#107BC0] text-[#107BC0] w-full rounded-[4px] py-[18px]">Back</button>
                  </Link>
                  <div className="w-1/2">
                      <button type="submit" className="text-white bg-[#107BC0] w-full rounded-[4px] py-[18px]">Next</button>
                  </div>
              </div>                
        </div>
    </>
  )
};

DoctorsKYCButtons.propTypes = {
  previous: PropTypes.string,
};
export default DoctorsKYCButtons