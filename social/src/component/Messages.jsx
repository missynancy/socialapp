import React, { useState } from 'react';
import MessageItem from './MessagesItems';


const messages = [
  { name: 'Donald Trump', message: 'How is election going?', imgSrc: '/stories/p5.jpg', isActive: true, isRead: false },
  { name: 'Elon Musk', message: 'How are you friend', imgSrc: '/stories/p2.jpg', isActive: false, isRead: true },
  { name: 'Mark Zuckerberg', message: "Let's meet tonight Mark!", imgSrc: '/stories/p12.jpg', isActive: true, isRead: false },
  { name: 'Rihanna', message: 'Hope your night was good!', imgSrc: '/stories/p10.jpg', isActive: false, isRead: true },
  { name: 'Bill Gates', message: 'My good friend!', imgSrc: '/stories/p11.jpg', isActive: true, isRead: false },
  { name: 'Aliko Dangote', message: 'Get me 20 bags of cement!', imgSrc: '/stories/p3.jpg', isActive: false, isRead: false },
];

const Messages = () => {
  const [activeTab, setActiveTab] = useState('Request');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="messages">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'Primary' ? 'active' : ''}`}
          onClick={() => handleTabClick('Primary')}
        >
          Primary
        </button>
        <button
          className={`tab ${activeTab === 'General' ? 'active' : ''}`}
          onClick={() => handleTabClick('General')}
        >
          General
        </button>
        <button
          className={`tab ${activeTab === 'Request' ? 'active' : ''}`}
          onClick={() => handleTabClick('Request')}
        >
          Request <span>(5)</span>
        </button>
      </div>
      <div className="message-list">
        {messages.map((msg, index) => (
          <MessageItem key={index} {...msg} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
