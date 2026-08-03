import React, { useState, useEffect } from 'react';
import { useUser } from '../../../context/userContext';
import Avatar from '../CustomAvatar';
import { API_BASE_URL } from '../../../config/api';

const Comments = ({ postSlug }) => {
  const { user, handleLogout } = useUser();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!postSlug) return;
    setIsLoading(true);

    fetch(`${API_BASE_URL}/api/comments/${postSlug}`, {
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          setComments([]);
        }
      })
      .catch((error) => {
        console.warn('Unable to load comments from backend:', error.message);
        setComments([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postSlug]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!user) return alert('Please log in to comment.');

    try {
      const response = await fetch(`${API_BASE_URL}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          postSlug,
          text: newComment,
          userId: user?.userId || JSON.parse(localStorage.getItem('user'))?.user?.userId,
        }),
      });

      if (response.status === 401) {
        const data = await response.json();
        if (data.message === 'Token expired' || data.message === 'Unauthorized, No token') {
          handleLogout();
          alert('Session expired. Please log in again.');
          return;
        }
      }

      if (!response.ok) {
        throw new Error(`Failed to add comment: ${response.statusText}`);
      }

      const data = await response.json();
      setComments((prev) => [...prev, data]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to post comment. Backend server might be unavailable.');
    }
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 text-black dark:text-white">
        Discussion &amp; Feedback
      </h3>

      {user ? (
        <form onSubmit={handleAddComment} className="space-y-4 mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            rows={3}
            className="w-full p-3 bg-white dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
            placeholder="Write your comment here..."
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-yellow-400 text-black font-extrabold uppercase text-xs tracking-wider brutalist-border brutalist-shadow-sm hover:bg-yellow-300 transition-colors"
          >
            Add Comment
          </button>
        </form>
      ) : (
        <div className="bg-neutral-100 dark:bg-neutral-800 p-4 brutalist-border mb-8 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300">
            Log in to join the conversation
          </p>
          <a
            href="/login"
            className="px-4 py-1.5 bg-black text-white dark:bg-[#EBD3F8] dark:text-black font-mono text-xs uppercase font-extrabold brutalist-border"
          >
            Login
          </a>
        </div>
      )}

      {isLoading ? (
        <p className="text-xs font-mono uppercase text-gray-500">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-xs font-mono uppercase text-gray-500">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment._id || Math.random()}
              className="p-4 bg-white dark:bg-neutral-900 brutalist-border brutalist-shadow-sm flex gap-3 items-start"
            >
              <div className="flex-shrink-0">
                <Avatar
                  size={40}
                  name={comment.userId?.username || 'Anonymous'}
                />
              </div>
              <div className="flex-grow">
                <strong className="block font-bold text-sm uppercase text-black dark:text-white">
                  {comment.userId?.username || 'Anonymous'}
                </strong>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mt-1">
                  {comment.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
