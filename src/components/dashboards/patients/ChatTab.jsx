const ChatTab = () => {
  return (
    <section>
      <div className="p-[0.75rem]">
        {/* Chat tabs */}
        <ul className="px-[1rem] flex items-center gap-[1.84rem]">
          <li>
            <button type="button" className={`text-[#0D67A0] text-[0.875rem] font-bold leading-normal`}>All</button>
          </li>
          <li>
            <button type="button" className={`text-[#262626] text-[0.875rem] font-semibold leading-normal`}>Read</button>
          </li>
          <li>
            <button type="button" className={`text-[#262626] text-[0.875rem] font-semibold leading-normal`}>Unread</button>
          </li>
        </ul>
      </div>
      <div></div>
    </section>
  );
};

export default ChatTab;
