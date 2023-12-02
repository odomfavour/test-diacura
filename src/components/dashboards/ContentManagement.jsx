import { useState } from "react";
import InProgress from "./InProgress";
import Completed from "./Completed";
import Published from "./Published";

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: "In Progress" },
    { id: 2, name: "Completed" },
    { id: 3, name: "Published" },
  ];
  return (
    <div className="mt-[30px]">
      {/*Tabs*/}
      <div className="w-[351px] h-[32px] flex justify-between relative">
        {tabs.map((tab) => {
          return (
            <div key={tab.id} className="w-[30%]">
              <h5
                className={`text-lg font-[600] cursor-pointer text-center ${
                  activeTab === tab.id ? "text-[#3891CA]" : "text-black"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </h5>
            </div>
          );
        })}
        <div className={`underline menu${activeTab}`} />
      </div>
      {/*Table component*/}
      {activeTab === 1 ? (
        <InProgress />
      ) : activeTab === 2 ? (
        <Completed />
      ) : activeTab === 3 ? (
        <Published />
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentManagement;
