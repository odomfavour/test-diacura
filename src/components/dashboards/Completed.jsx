import { useMemo } from "react";
import { useTable } from "react-table";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Dropdown from "./Dropdown";

const tableData = [
  {
    id: 1,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
  {
    id: 2,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
  {
    id: 3,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
  {
    id: 4,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
  {
    id: 5,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
  {
    id: 6,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
  {
    id: 7,
    ID: "0113",
    Author: "Sugarman",
    content_topic: "Solid principles: Diabetes Introduction 1",
    type: "Article",
    submitted_date: "11/16/2023 - 12:22",
    status: (
      <div className="h-[56px] bg-[#66CC99] text-white font-bold text-lg flex items-center justify-center rounded">
        Completed
      </div>
    ),
    action: "",
  },
];

const Completed = () => {
  const data = useMemo(() => tableData, []);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "ID",
      },
      {
        Header: "Author",
        accessor: "Author",
      },
      {
        Header: "Content Topic",
        accessor: "content_topic",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Submitted date",
        accessor: "submitted_date",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "action",
        Cell: () => <Dropdown />,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="w-full h-fit mt-[10px] overflow-x-auto">
      <div>
        <table
          {...getTableProps()}
          className="w-full table-auto border-separate border-spacing-y-[16px]"
        >
          <thead className="h-[61px] bg-[#F6F6F6] font-Open-sans text-lg ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className="h-16 bg-[#F8F9FA] cursor-pointer hover:bg-gray-200 text-base text-[#666666] font-normal font-Open-sans"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="text-center px-6 whitespace-nowrap  overflow-ellipsis"
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/*table sorting section*/}
      <div className="w-full h-[40px] border-t border-[#E1E2E9] mt-[30px] flex items-center justify-between">
        {/*items per page*/}
        <div className="w-fit flex items-center justify-betwen  gap-[7px]">
          <select
            name="itemsPerPage"
            className="w-[65px] h-[23px] rounded flex items-center justify-center gap-[10px] text-center bg-[#EAF2FC] text-[#8B8D97] font-[600] text-base cursor-pointer outline-none"
          >
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <p className="text-base font-[600] text-[#107BC0] ">Items per page</p>
        </div>
        {/*current table page details*/}
        <div className="w-fit flex items-center gap-[15px]">
          <div className="flex items-center gap-[7px] w-fit">
            {" "}
            <select
              name="itemsPerPage"
              className="w-[65px] h-[23px] rounded flex items-center justify-center gap-[10px] text-center bg-gray-100 text-[#8B8D97] font-[600] text-base cursor-pointer outline-none"
            >
              <option value="5">1</option>
              <option value="7">2</option>
              <option value="10">3</option>
              <option value="20">4</option>
            </select>
            <p className="text-base font-[600] text-[#107BC0] ">of 44 pages</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <PiCaretLeftBold className="text-[#666666] text-base cursor-pointer" />
            <PiCaretRightBold className="text-[#666666] text-base cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
