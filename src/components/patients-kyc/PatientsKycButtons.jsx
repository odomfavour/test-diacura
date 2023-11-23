import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PatientsKycButtons = ({ previous }) => {
  return (
    <div className="flex justify-end items-center gap-[1rem]">
      <Link to={`/${previous}`}>
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
  );
};

PatientsKycButtons.propTypes = {
  previous: PropTypes.string,
};
export default PatientsKycButtons;
