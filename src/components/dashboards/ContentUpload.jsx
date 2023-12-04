import { RxCaretDown } from "react-icons/rx";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import text_editor from "../../assets/images/admin-dashboard/text_editor.svg";
import { GoPlus } from "react-icons/go";
import SelectOpt from "./Select";
import MultiSelect from "./MultiSelect";
import Toggle from "./Toggle";

const ContentUpload = () => {
  return (
    <section>
      <header className="w-full h-[56px] flex items-center justify-between  mt-[20px]">
        <div>
          <h3 className="font-semibold text-2xl">Content Upload</h3>
          <p className="text-[#999999] text-base font-semibold">
            Drop a content and Upload
          </p>
        </div>
        <div className="flex gap-[16px] items-center">
          <button className="w-[153px] h-[56px] rounded border border-[#999999] flex gap-[8px] items-center justify-center text-lg font-semibold text-[#999999]">
            English
            <RxCaretDown className="h-[20px] w-[20px]" />
          </button>
          <button className="w-[153px] h-[56px] rounded border border-[#999999] flex gap-[8px] items-center justify-center text-lg font-semibold text-[#999999]">
            <MdOutlineRemoveRedEye />
            Preview
          </button>
          <button className="w-[111px] h-[56px] rounded bg-[#107BC0] flex gap-[8px] items-center justify-center text-lg font-semibold text-white">
            Save
          </button>
        </div>
      </header>
      <main className="mt-[25px] flex justify-between">
        <img src={text_editor} className="w-[775px] h-[642px]" />
        <section className="w-[255px] h-fit  flex flex-col gap-[15px]">
          <div className="w-full h-[72px] flex flex-col gap-[3px]">
            <p className="text-sm font-semibold text-[#33607E]">Author</p>
            <SelectOpt />
          </div>
          <div className="w-full h-[72px] flex flex-col gap-[3px]">
            <p className="text-sm font-semibold text-[#33607E]">Post Date</p>
            <input
              type="date"
              className="w-full h-[48px] border border-[#94A3B8] text-[#7090A5] rounded-lg px-3 text-sm cursor-pointer outline-blue-500"
            />
          </div>
          <div className="w-full h-[72px] flex flex-col gap-[3px]">
            <p className="text-sm font-semibold text-[#33607E]">Time</p>
            <input
              type="time"
              className="w-full h-[48px] border border-[#94A3B8] text-[#7090A5] rounded-lg px-3 text-sm  cursor-pointer outline-blue-500"
            />
          </div>
          <div className="w-full h-[72px] flex flex-col gap-[3px]">
            <p className="text-sm font-semibold text-[#33607E]">Category</p>
            <MultiSelect />
          </div>
          <div className="w-full h-[72px] flex flex-col gap-[3px]">
            <p className="text-sm font-semibold text-[#33607E]">Tag</p>
            <MultiSelect />
          </div>
          <div className="w-full  flex items-center justify-between">
            <p className="text-sm text-[#767171]">Published globally</p>
            <Toggle />
          </div>
          <div className="w-full  flex items-center justify-between">
            <p className="text-sm text-[#767171]">Published in English</p>
            <Toggle />
          </div>
        </section>
      </main>
      <button className="w-[152px] h-[56px] rounded flex gap-[8px] items-center justify-center border-2 border-[#107BC0]  text-[#107BC0] font-semibold text-sm mt-[45px]">
        <GoPlus className="h-[20px] w-[20px] text-[20px]" />
        Add Block
      </button>
    </section>
  );
};

export default ContentUpload;
