import React, { useState } from 'react';
import userimage from '../assets/female.jpg';

// Sample data for stories
const initialStories = [
  { name: 'Barack Obama', image: '/stories/p5.jpg' },
  { name: 'Donald Trump', image: '/stories/p6.jpg' },
  { name: 'Beyoncé', image: '/stories/p7.jpg' },
  { name: 'Mike Adenuga', image: '/stories/p8.jpg' },
  { name: 'Jeff Bezos', image: '/stories/p9.jpg' },
];

// Post component to display a single post
const Post = ({ user, location, time, content }) => (
  <div className="post">
    <div className="post-header">
      <img src={user.image} alt={user.name} className="user-image" />
      <div>
        <h4>{user.name}</h4>
        <p>{location}, {time}</p>
      </div>
    </div>
    <div className="post-content">
      {content.image && <img src={content.image} alt="Post content" className="post-image" />}
      {content.text && <p className="post-text">{content.text}</p>}
    </div>
  </div>
);

const Home = () => {
  const [newPost, setNewPost] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState(initialStories); // Initialize with default stories
  const [newStory, setNewStory] = useState({ name: '', image: '' });
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [storyImage, setStoryImage] = useState(null);

  // Handle text input change for a new post
  const handleNewPostChange = (e) => setNewPost(e.target.value);

  // Handle image upload for the post
  const handlePostImageUpload = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
    setShowImageUpload(false); // Hide the image upload input after an image is selected
  };

  // Handle creating a new post
  const handleCreatePost = () => {
    if (newPost.trim() === '') return; // Do nothing if the input is empty

    const newPostObj = {
      user: { name: 'Nancy', image: '/stories/p9.jpg' },
      location: 'London',
      time: 'Just now',
      content: { text: newPost, image: postImage },
    };

    setPosts([newPostObj, ...posts]); // Add the new post to the list of posts
    setNewPost(''); // Reset the post text field
    setPostImage(null); // Reset the post image
    setShowImageUpload(false); // Hide the image upload input
  };

  // Handle creating a new story
  const handleCreateStory = () => {
    const storyName = prompt('Enter story name:');
    if (storyName) {
      setNewStory({ ...newStory, name: storyName });
    }
  };

  const handleStoryImageUpload = (e) => {
    setStoryImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveStory = () => {
    if (newStory.name.trim() === '') return;
    const updatedStories = [...stories, { name: newStory.name, image: storyImage }];
    setStories(updatedStories); // Add the new story to the stories array
    setNewStory({ name: '', image: '' }); // Reset the new story input fields
    setStoryImage(null); // Reset story image
  };

  return (
    <div className="app">
      <div className="stories">
        <div className="story create-story" onClick={handleCreateStory}>
          <img src={userimage} alt="Create Story" />
          <button>+</button>
          <p>Create Story</p>
        </div>
        {/* Display default stories */}
        {stories.map((story, index) => (
          <div key={index} className="story">
            <img src={story.image} alt={story.name} />
            <p>{story.name}</p>
          </div>
        ))}
        
        {/* Render the new story form if a new story is being created */}
        {newStory.name && (
          <div className="new-story">
            <input
              type="text"
              placeholder="Enter Story Name"
              value={newStory.name}
              onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
            />
            <div className="story-image-upload">
              <input type="file" onChange={handleStoryImageUpload} accept="image/*" />
              {storyImage && <img src={storyImage} alt="Story Preview" className="story-preview" />}
            </div>
            <button onClick={handleSaveStory}>Save Story</button>
          </div>
        )}
      </div>

      {/* Input section for creating a post */}
      <div className="post-input">
        <div className="post-input-content">
          <img src={userimage} alt="User" />
          <input
            type="text"
            value={newPost}
            onChange={handleNewPostChange}
            placeholder="What's on your mind?"
          />
          <button onClick={() => setShowImageUpload(true)} disabled={newPost.trim() === ''}>
            Post
          </button>
        </div>

        {/* Conditionally render the file upload input */}
        {showImageUpload && (
          <div className="post-image-upload">
            <input type="file" onChange={handlePostImageUpload} accept="image/*" />
          </div>
        )}
      </div>

      {/* Render all posts */}
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
