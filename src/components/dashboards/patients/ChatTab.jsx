const receivedMessages = [
  {
    chatID: 1,
    senderID: {
      userID: 1,
      name: "Phoenix Baker",
      profile_picture: ""
    },
    messages: [
      {
        messageID: 1,
        timestamp: "11:58",
        unread: true,
        body: "Happy to hear that, than..."
      },
    ]

  },
  {
    chatID: 1,
    senderID: {
      userID: 1,
      name: "Eaxi Agu",
      profile_picture: ""
    },
    messages: [
      {
        messageID: 1,
        timestamp: "11:58",
        unread: true,
        body: "Happy to hear that, than..."
      },
    ]

  },
  {
    chatID: 1,
    senderID: {
      userID: 1,
      name: "Isaac Nwachukwu",
      profile_picture: ""
    },
    messages: [
      {
        messageID: 1,
        timestamp: "11:58",
        unread: true,
        body: "Happy to hear that, than..."
      },
    ]

  },
  {
    chatID: 1,
    senderID: {
      userID: 1,
      name: "Comfort Susu",
      profile_picture: ""
    },
    messages: [
      {
        messageID: 1,
        timestamp: "11:58",
        unread: true,
        body: "Happy to hear that, than..."
      },
    ]

  },
  {
    chatID: 1,
    senderID: {
      userID: 1,
      name: "Timi Ibrahim",
      profile_picture: ""
    },
    messages: [
      {
        messageID: 1,
        timestamp: "11:58",
        unread: true,
        body: "Happy to hear that, than..."
      },
    ]

  },
  {
    chatID: 1,
    senderID: {
      userID: 1,
      name: "Godwin Hadol",
      profile_picture: ""
    },
    messages: [
      {
        messageID: 1,
        timestamp: "11:58",
        unread: true,
        body: "Happy to hear that, than..."
      },
    ]

  },
]


const ChatTab = () => {
  return (
    <section>
      <div className="flex gap-[3.12rem]">
        {/* Chat tabs */}
        <div className="bg-white p-[0.75rem] rounded-t-[0.5rem] lg:w-[19.4rem]">
          <ul className="flex items-center gap-[1.94rem] px-[1rem] mb-[0.75rem]">
            <li>
              <button
                type="button"
                className="text-[0.875rem] text-[#0D67A0] font-bold leading-normal"
              >
                All
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-[0.875rem] text-[#262626] font-semibold leading-normal"
              >
                Read
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-[0.875rem] text-[#262626] font-semibold leading-normal"
              >
                Unread
              </button>
            </li>
          </ul>
        </div>

        {/* Conversation container */}
        <div>
          {/* Sender header */}
          <div>
            <div>
              <img src="" alt="" />
              <h3>Phoenix Baker</h3>
            </div>
            <div></div>
          </div>

        {/* Chat area */}
        <div>

        </div>
        {/* input container */}
        <div>
          <form action="">
            <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Type Here..."></textarea>

            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ChatTab;
