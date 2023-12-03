import Select from "react-select";
import { FiPlusCircle } from "react-icons/fi";

const Category = [
  { value: "big_data", label: "Big Data" },
  { value: "small_data", label: "Small Data" },
  // Add more options as needed
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize: "14px",
    height: "48px",
    width: "full",
    cursor: "pointer",
    borderRadius: "8px",
    borderColor: "#7090A5",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
  multiValue: (provided) => ({
    ...provided,
    background: "#ECF7FD",
    borderRadius: "12px",
    padding: "0px 3px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#94A3B8",
  }),
};

const DropdownIndicator = () => {
  return (
    <FiPlusCircle className="mr-[10px] text-[#7090A5] w-[18px] h-[18px]" />
  );
};

const MultiSelect = () => {
  const defaultValues = [Category[0]];

  return (
    <Select
      defaultValue={defaultValues}
      isMulti
      styles={customStyles}
      name="colors"
      options={Category}
      className=""
      classNamePrefix="select"
      components={{ DropdownIndicator, IndicatorSeparator: () => null }}
    />
  );
};

export default MultiSelect;
