import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import action from "../../assets/images/admin-dashboard/action.svg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <img src={action} className="w-[16px] h-[2px] text-[#64748B]" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[157px] h-[102px] rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
          <div className="h-full w-full px-1 py-1 flex flex-col items-center justify-center">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-200" : "bg-white"
                  } group flex gap-[10px] w-full items-center rounded-md px-2 py-2 text-base text-[#525252]`}
                >
                  View
                  <FaRegEyeSlash />
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-200" : "bg-white"
                  } group flex gap-[10px] w-full items-center rounded-md px-2 py-2 text-base text-[#525252]`}
                >
                  Download
                  <HiOutlineDownload />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
