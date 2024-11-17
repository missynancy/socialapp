import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreatePost = ({ addPost }) => {
  const navigate = useNavigate();
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [file, setFile] = useState(null); // This will hold the file (video or image)
  const [description, setDescription] = useState('');
  
  // Handle selection of post type (video or image)
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setFile(null); // Reset file selection when changing post type
    setDescription(''); // Reset description when changing post type
  };
  
  // Handle file upload (video or image)
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedOption === 'video' && selectedFile.type.startsWith('video/')) {
        setFile(selectedFile);
      } else if (selectedOption === 'image' && selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
      } else {
        alert('Please upload a valid file (video or image).');
        setFile(null);
      }
    }
  };

  // Handle description change
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Handle submission of post (video or image)
  const handleSubmitPost = () => {
    if (file && description) {
      const newPost = {
        user: { name: 'Nancy', image: '/stories/p9.jpg' },  // Example user info
        location: 'London',
        time: 'Just now',
        content: { text: description, image: URL.createObjectURL(file) }
      };

      // Call addPost to update the posts in the parent component
      addPost(newPost);

      alert(`${selectedOption} uploaded with description: ${description}`);
      navigate('/'); // Redirect back to the home page
    } else {
      alert('Please upload a file and provide a description.');
    }
  };

  return (
    <div className="create-post-modal">
      <div className="modal-content">
        <h2>{selectedOption === 'video' ? 'Post a Video' : 'Post an Image'}</h2>
        
        {/* Select File (video or image) */}
        <div className='post-btn'>
          <button onClick={() => handleSelectOption('video')}>Post Video</button>
          <button onClick={() => handleSelectOption('image')}>Post Image</button>
        </div>

        {/* Conditional rendering based on selected post type */}
        {selectedOption === 'video' && (
          <div>
            {/* Video file upload input */}
            <input 
              type="file" 
              accept="video/*"
              onChange={handleFileUpload} 
            />
            
            {file && file.type.startsWith('video/') && (
              <div>
                <p>Video file: {file.name}</p>
                {/* Optional: Display video preview */}
                <video width="200" controls>
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}

        {selectedOption === 'image' && (
          <div>
            {/* Image file upload input */}
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileUpload} 
            />
            
            {file && file.type.startsWith('image/') && (
              <div>
                <p>Image file: {file.name}</p>
                {/* Display image preview */}
                <img 
                  src={URL.createObjectURL(file)} 
                  alt="Preview" 
                  width="200" 
                  height="auto" 
                />
              </div>
            )}
          </div>
        )}
        
        {/* Description input */}
        <textarea 
          placeholder={`Enter a description for your ${selectedOption}...`} 
          value={description} 
          onChange={handleDescriptionChange} 
        />

        {/* Submit button */}
        <button onClick={handleSubmitPost}>Submit {selectedOption}</button>

        {/* Close button */}
        <Link className='post-close' onClick={() => navigate(-1)}>X</Link>
      </div>
    </div>
  );
};

export default CreatePost;
