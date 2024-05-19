// src/components/Comments.js
import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/userContext';
import { Link } from 'react-router-dom';
import Avatar from 'boring-avatars';


const Comments = ({ postSlug }) => {
  const { user } = useUser();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  useEffect(() => {

    fetch(`${process.env.REACT_APP_BASE_URL}/api/comments/${postSlug}`, {
      credentials: 'include', 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data , "comments")
        setComments(data)
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, [postSlug]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!user) return alert('Please log in to comment.');

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials for cookies
        body: JSON.stringify({ postSlug, text: newComment, userId: user.userId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setComments([...comments, data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h3 className='text-4xl font-bold mb-5'>Comments</h3>
      {user ? (
        <form onSubmit={handleAddComment}  className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your comment here..."
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-[#731FFC] text-white rounded-md hover:bg-[#a873fc] transition duration-300"
          >
            Add Comment
          </button>
        </form>
      ) : (
        <div className="space-y-2">
          <p className="text-gray-700">Please log in to comment.</p>
          <Link to='/login' className="text-blue-500 hover:underline" >Login</Link>
        </div>
          
      )}
      <ul className="space-y-4 mt-6">
        {comments.map(comment => (
          <li 
            key={comment._id}
            className="p-4 border border-gray-200 rounded-md flex"
          >
             <div className="flex-shrink-0 mr-3">
              <Avatar
                size={40}
                name={comment.userId.username}
                variant="beam"
                colors={["#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"]}
              />
            </div>
            <div>
              <strong className="block font-medium text-gray-900" >{comment.userId.username}</strong> 
              <p className="text-gray-700">
                {comment.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
