import { Link } from "react-router-dom";


const DoctorsKycButtons = ({ previous, next }) => {
  return (
    <div className="flex justify-center items-center gap-[1rem] mt-[2rem]">
      <Link to={`/${previous}`}>
        <button
          type="button"
          className="px-[1.5rem] py-[.2rem] rounded-[.2rem] sm:px-[2.5rem] md:px-[3.5rem] border border-primary-color-light-blue-300 text-primary-color-light-blue-300 font-bold text-[1.25rem] hover:text-white hover:bg-primary-color-light-blue-300 transition-all duration-300 ease-in-out"
        >
          Back
        </button>
      </Link>

      <Link to={`/${next}`}>
      <button
        type="submit"
        className="px-[1.5rem] py-[.2rem] rounded-[.2rem] sm:px-[2.5rem] md:px-[3.5rem] border border-primary-color-light-blue-300 text-white font-bold text-[1.25rem] bg-primary-color-light-blue-300 hover:text-primary-color-light-blue-300 hover:bg-transparent"
      >
        Next
      </button>
      </Link>
    </div>
  );
};


export default DoctorsKycButtons;
