import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import
import userimage from '/stories/p9.jpg'; // Your user image
import Content from './Post';// Assuming 'Content' is a content-related component

const initialStories = [
  { name: 'Barack Obama', image: '/stories/p5.jpg' },
  { name: 'Donald Trump', image: '/stories/p6.jpg' },
  { name: 'Beyoncé', image: '/stories/p7.jpg' },
  { name: 'Mike Adenuga', image: '/stories/p8.jpg' },
  { name: 'Jeff Bezos', image: '/stories/p9.jpg' },
];

const Home = () => {
  const [newPost, setNewPost] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState(initialStories);
  const [newStory, setNewStory] = useState({ name: '', image: '' });
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [storyImage, setStoryImage] = useState(null);
  const navigate = useNavigate();  // useNavigate hook to navigate

  // Add a new post to the posts state
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post at the beginning of the list
  };

  // Handle text input change for a new post
  const handleNewPostChange = (e) => setNewPost(e.target.value);

  // Handle image upload for the post
  const handlePostImageUpload = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
    setShowImageUpload(false); // Hide image upload after selecting an image
  };

  // Handle creating a new post
  const handleCreatePost = () => {
    if (newPost.trim() === '') return; // Don't do anything if input is empty

    const newPostObj = {
      user: { name: 'Nancy', image: '/stories/p9.jpg' },
      location: 'London',
      time: 'Just now',
      content: { text: newPost, image: postImage },
    };

    addPost(newPostObj);  // Add the new post
    setNewPost('');  // Clear the input field
    setPostImage(null);  // Clear the image
    setShowImageUpload(false);  // Hide the image upload field
  };

  return (
    <div className="app">
      {/* Stories Section */}
      <div className="stories">
        <div className="story create-story" onClick={() => alert('Create story logic')}>
          <img src={userimage} alt="Create Story" />
          <button>+</button>
          <p>Create Story</p>
        </div>

        {stories.map((story, index) => (
          <div key={index} className="story">
            <img src={story.image} alt={story.name} />
            <p>{story.name}</p>
          </div>
        ))}
      </div>

      {/* Post Input Section */}
      <div className="post-input">
        <div className="post-input-content">
          <img src={userimage} alt="User" />
          <input
            type="text"
            value={newPost}
            onChange={handleNewPostChange}
            placeholder="What's on your mind?"
          />
          <button onClick={handleCreatePost} disabled={newPost.trim() === ''}>
            Post
          </button>
        </div>

        {showImageUpload && (
          <div className="post-image-upload">
            <input type="file" onChange={handlePostImageUpload} accept="image/*" />
          </div>
        )}
      </div>

      {/* Render Posts */}
      <div className="posts">
        {posts.map((post, index) => (
          <Content key={index} user={post.user} location={post.location} time={post.time} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
