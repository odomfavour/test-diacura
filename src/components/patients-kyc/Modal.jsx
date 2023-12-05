import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Modal = ({ toDashboard }) => {
  return (
    <section className=" absolute top-0 bg-[#3D444880]   container lg:max-w-[100%] lg:h-[110%]  z-1000">
      <div className="flex justify-items-center justify-center lg:mt-[240px]">
        <div className="lg:flex mx:auto lg:justify-center lg:mt-[90px] shadow-lg rounded-3xl px-7 bg-[#FFF] lg:w-[500px] lg:h-[250px]">
          <div>
            <div className="flex justify-between p-3 text-[16px] text-[#107BC0]">
              <p>Successful Registration</p>
              <IoMdClose onClick={() => toDashboard} />
            </div>

            <p className="text-[#107BC0]  lg:w-[436px] lg:h-[72px] text-[24px] font-open-sans px-[0px] font-semibold mt-[20px] flex mx-auto text-center">
              Welcome to Diacura Med! We are excited to have you on board
            </p>
            <div className="flex justify-end ">
              <button
                onClick={() => toDashboard}
                className=" bg-[#107BC0] mt-7 w-[100px] h-[40px] rounded text-[16px] font-dm-sans text-[#FFFF]"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
