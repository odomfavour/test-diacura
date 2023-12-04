import { useState } from "react";
import Settings from "./AdminSettings";
import AccountManagement from "./AccountManagement";
import NotificationPref from "./NotificationPref";
import { SavePopup, SavePasswordPopup } from "./SavePopup";
import DeleteAccount from "./DeleteAccount";


const SettingsTab = () => {
  const [displayTab, setdisplayTab] = useState('settings');
  const [isSaved, setisSaved] = useState(false);
  const [isaccountDelete, setisaccountDelete] = useState(false);

    const handleDisplayTab = (tab) => {
    setdisplayTab(tab);
  }

  return (
    <div className="mt-8 relative">
      {isSaved && (
        displayTab === 'settings' ? (
          <SavePopup comment={'changes'} />      
        ) : (
          <SavePasswordPopup />
        )
      )
      }
      <div className="flex items-center justify-between">
        <div role="button" className={`${displayTab === 'settings' ? 'active' : 'inActive'} w-2/6 text-center py-6 px-[6px]`} onClick={() => handleDisplayTab('settings')}>
          <h5 className={`font-bold lg:text-lg text-xs`}>Admin Settings</h5>
        </div>
        <div role="button" className={`${displayTab === 'account' ? 'active' : 'inActive'} w-2/6 text-center py-4 lg:py-6 px-[6px] active:text-[#107BC0] active:border-[#107BC0] active:border-b-[3px]`} onClick={() => handleDisplayTab('account')}>
          <h5 className={`font-bold lg:text-lg text-xs`}>Account Management</h5>
        </div>
        <div role="button" className={`${displayTab === 'notification' ? 'active' : 'inActive'} w-2/6 text-center py-4 lg:py-6 px-[6px]`} onClick={() => handleDisplayTab('notification')}>
          <h5 className={`font-bold lg:text-lg text-xs`}>Notification Preferences</h5>
        </div>
      </div>
      <div>
        {
          displayTab === 'settings' && (
            <Settings isSaved={isSaved} setisSaved={setisSaved} />
          )
        }
        {
          displayTab === 'account' && (
            <AccountManagement isSaved={isSaved} setisSaved={setisSaved}
              isaccountDelete={isaccountDelete} setisaccountDelete={setisaccountDelete}  
            />
          )
        }
        {
          displayTab === 'notification' && (
            <NotificationPref />
          )
        }
      </div>
      {isaccountDelete && (
        <div className=''>
          <DeleteAccount setisaccountDelete={setisaccountDelete} />
        </div>
      )}
    </div>
  )
}

export default SettingsTab