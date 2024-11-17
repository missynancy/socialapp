import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Importing font-awesome for icons

const Content = ({ user = {}, location, time, content = {} }) => {
  const { image: userImage = 'default-user-image.jpg', name: userName = 'Anonymous' } = user;
  const { text = '', image: contentImage = 'default-content-image.jpg', likes = 0, comments = [] } = content;

  // State for managing likes and comments
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentText, setCommentText] = useState('');
  const [commentSectionVisible, setCommentSectionVisible] = useState(false);
  const [commentsList, setCommentsList] = useState(comments);

  // State to track visibility of reply input for each comment
  const [replyVisible, setReplyVisible] = useState({});

  // Handle like button click
  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1); // Increase the like count
    }
  };

  // Handle comment input change
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  // Handle submitting a comment
  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        text: commentText,
        user: { image: userImage, name: userName }, // Add user info for the comment
        likes: 0,
        replies: [],
        likedByPostCreator: false,
      };
      setCommentsList([...commentsList, newComment]); // Add new comment to the list
      setCommentText(''); // Clear comment input
    }
  };

  // Handle toggling the comment section visibility
  const toggleCommentSection = () => {
    setCommentSectionVisible(!commentSectionVisible);
  };

  // Handle liking a comment
  const handleCommentLike = (index) => {
    const updatedComments = [...commentsList];
    updatedComments[index].likes += 1; // Increase like count for the comment
    setCommentsList(updatedComments);
  };

  // Handle replying to a comment
  const handleReplySubmit = (index, replyText) => {
    if (replyText.trim() !== '') {
      const updatedComments = [...commentsList];
      updatedComments[index].replies.push({
        text: replyText,
        user: { image: userImage, name: userName }, // Add user info for the reply
        likes: 0,
      });
      setCommentsList(updatedComments);
    }
    setReplyVisible({ ...replyVisible, [index]: false }); // Hide the reply input after submission
  };

  // Toggle visibility of reply input for each comment
  const toggleReplyInput = (index) => {
    setReplyVisible({ ...replyVisible, [index]: !replyVisible[index] });
  };

  // Handle liking a comment by the post creator
  const handleCommentLikeByCreator = (index) => {
    const updatedComments = [...commentsList];
    updatedComments[index].likedByPostCreator = !updatedComments[index].likedByPostCreator; // Toggle like by post creator
    setCommentsList(updatedComments);
  };

  return (
    <div className="content">
      <div className="content-header">
        <div className="content-header-content">
          <img src={userImage} alt={userName} className="user-image" />
          <div>
            <h4>{userName}</h4>
            <p>{location} - {time}</p>
          </div>
        </div>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>

      <div className="content-content">
        {text && <p>{text}</p>}
        {contentImage && <img src={contentImage} alt="Post content" className="content-image" />}
      </div>

      <div className="content-footer">
        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <i className="fa fa-thumbs-up"></i> {likeCount} Likes
        </button>

        <button
          className="comment-btn"
          onClick={toggleCommentSection}
        >
          <i className="fa fa-comment"></i> {commentsList.length} Comments
        </button>
      </div>

      {/* Comment Section */}
      {commentSectionVisible && (
        <div className="comment-section">
          <div className="comments-list">
            {commentsList.map((comment, index) => (
              <div key={index} className="comment">
                <div className="comment-header">
                  <div className="comment-header-profile">
                    <img src={comment.user.image} alt={comment.user.name} className="comment-user-image" />
                    <div>
                        <h5>{comment.user.name}</h5>
                        {comment.likedByPostCreator && <span className="liked-by-creator">Liked by Post Creator</span>}
                    </div>
                  </div>
                </div>
                <p>{comment.text}</p>
                <div className="comment-buttons">
                    <button onClick={() => handleCommentLike(index)} className='comment-like-button'>
                    <i className="fa fa-thumbs-up"></i>
                    <p
                        className={`like-btn ${comment.likedByPostCreator ? 'liked' : ''}`}
                        onClick={() => handleCommentLikeByCreator(index)}
                    >{comment.likes} Likes
                    </p>
                    </button>
                    <button className='comment-like-button' onClick={() => toggleReplyInput(index)}>
                        {replyVisible[index] ? 'Cancel' : 'Reply'}
                    </button>
                </div>

                {/* Reply Section */}
                <div className="reply-section">
                  {/* Show the reply input field only when replyVisible for this comment is true */}
                  {replyVisible[index] && (
                    <div className="reply-input">
                      <textarea
                        placeholder="Write a reply..."
                        onBlur={(e) => handleReplySubmit(index, e.target.value)}
                      />
                      <button onClick={() => handleReplySubmit(index, '')}>Reply</button>
                    </div>
                  )}
                  

                  <div className="replies-list">
                    {comment.replies.map((reply, replyIndex) => (
                      <div key={replyIndex} className="reply">
                        <div className="reply-header">
                          <img src={reply.user.image} alt={reply.user.name} className="reply-user-image" />
                          <h6>{reply.user.name}</h6>
                        </div>
                        <p>{reply.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="comment-input">
            <textarea
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Write a comment..."
            />
            <button onClick={handleCommentSubmit}>Post</button>
          </div>

          <button className="close-comments" onClick={toggleCommentSection}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Content;
