import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase/config';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const BookForm = () => {
  const user = useAuth();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('Want to Read');
  const [genre, setGenre] = useState('Fiction'); // New genre state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (user) {
      try {
        await addDoc(collection(firestore, 'books'), {
          title,
          author,
          status,
          genre,  
          userId: user.uid,
          dateAdded: new Date(),  // Store the date added
        });
  
        setTitle('');
        setAuthor('');
        setStatus('Want to Read');
        setGenre('Fiction');
  
        navigate('/library');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };
  
  return (
    <div>
      <Header />
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>

        {/* New Genre Selector */}
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Romance">Romance</option>
        </select>

        <button type="submit">Add Book</button>

        <button onClick={() => navigate('/library')}>Back to Library</button>
      </form>
    </div>
  );
};

export default BookForm;
