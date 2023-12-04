import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import Records from "./Records";
import Notification from "./Notification";
import Account from "./Account";

const PatientSettingsTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      name: "my profile",
    },
    {
      id: 2,
      name: "password",
    },
    {
      id: 3,
      name: "my records",
    },
    {
      id: 4,
      name: "notifications",
    },
    {
      id: 5,
      name: "account settings",
    },
  ];

  return (
    <main className="flex">
      <section className="w-[200px] h-fit  py-9">
        <div className="flex flex-col gap-[32px]">
          {tabs.map((tab) => (
            <h5
              key={tab.id}
              className={`cursor-pointer capitalize text-lg ${
                activeTab === tab.id
                  ? "text-[#107BC0] font-semibold"
                  : "text-[#999999] font-normal"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </h5>
          ))}
        </div>
      </section>
      <section className="flex-1 h-fit border-l border-[#CCCCCC] py-9 px-9">
        {activeTab === 1 && <PersonalInfo />}
        {activeTab === 2 && <Password />}
        {activeTab === 3 && <Records />}
        {activeTab === 4 && <Notification />}
        {activeTab === 5 && <Account />}
      </section>
    </main>
  );
};

export default PatientSettingsTab;
