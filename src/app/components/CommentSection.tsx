"use client"

import { useState } from 'react';
import Heading4 from './Heading4';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8 mx-10">
      <Heading4 text="Share Your Thoughts:"   />
      <textarea
        className="w-full p-2 border border-gray-300 rounded "
        rows={4}
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={handleAddComment}
        className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-pink-600"
      >
        Post Comment
      </button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-300 py-2 text-white">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
