import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import check_icon from "../../src/assets/images/check_icon.svg";
import PropTypes from "prop-types";

function LoginSuccess({ isUserLoggedIn }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  useEffect(() => {
    setIsOpen(isUserLoggedIn);
  }, [isUserLoggedIn]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-[50vh] max-w-md transform overflow-hidden rounded-2xl bg-[#BBE1F6] flex flex-col lg:p-3 p-5 items-center justify-center shadow-xl transition-all">
                  <img
                    src={check_icon}
                    alt="check-icon"
                    className="lg:h-[45px] lg:w-[45px] h-[32px] w-[32px] mt-2"
                  />
                  <Dialog.Title
                    as="h3"
                    className="lg:text-lg text-[16.5px] font-bold text-[#107BC0]"
                  >
                    You have successfully log in into your dia-cura account!
                  </Dialog.Title>
                  <div className=" mt-3">
                    <p className=" lg:text-sm text-xs text-[#107BC0]">
                      Feel free to explore and make the most of our services.
                      Thank you
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

LoginSuccess.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
};
export default LoginSuccess;
