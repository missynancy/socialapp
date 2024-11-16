import React from 'react';

const MessageItem = ({ name, message, imgSrc, isActive, isRead }) => (
  <div className="message-item">
    <div className="profile-pic-container">
      <img src={imgSrc} alt={name} className="profile-pic" />
      {isActive && <span className="green-dot"></span>}  {/* Green dot for active user */}
    </div>
    <div className="message-content" style={{ fontWeight: isRead ? 'normal' : 'bold' }}>
      <h4>{name}</h4>
      <p>{message}</p>
    </div>
  </div>
);

export default MessageItem;
