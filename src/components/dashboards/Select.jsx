import Select from "react-select";
import author from "../../assets/images/admin-dashboard/author.svg";
import { PiCaretDown } from "react-icons/pi";
const options = [
  { value: "1", label: "Dr Mishan Okwo", icon: author },
  { value: "2", label: "Author 2", icon: author },
  { value: "3", label: "Author 3", icon: author },
];

const DropdownIndicator = () => {
  return <PiCaretDown className="mr-[10px] text-[#7090A5] w-[18px] h-[18px]" />;
};
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isHovered ? "lightgray" : "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    cursor: "pointer",
    color: "white",
  }),
  control: (provided) => ({
    ...provided,
    fontSize: "14px",
    height: "48px",
    width: "full",
    cursor: "pointer",
    borderRadius: "8px",
    borderColor: "#7090A5",
  }),
};

const SelectOpt = () => {
  const defaultValues = [options[0]];
  return (
    <Select
      defaultValue={defaultValues}
      options={options}
      styles={customStyles}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      getOptionLabel={(option) => (
        <div className="flex items-center gap-[10px] cursor-pointer">
          {option.icon && (
            <img src={option.icon} alt="icon" className="w-[31px] h-[31px]" />
          )}
          <span className="text-[#7090A5] text-sm">{option.label}</span>
        </div>
      )}
      getOptionValue={(option) => option.value}
    />
  );
};

export default SelectOpt;
