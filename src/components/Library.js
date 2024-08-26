import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase/config';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import Header from './Header';

const Library = () => {
  const user = useAuth();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // State for search input
  const [genreFilter, setGenreFilter] = useState('');  // State for genre filtering
  const [sortBy, setSortBy] = useState('title');  // State for sorting

  useEffect(() => {
    if (user) {
      const q = query(
        collection(firestore, 'books'),
        where('userId', '==', user.uid)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedBooks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(fetchedBooks);
      });

      return () => unsubscribe();
    }
  }, [user]);

  // Filter and sort books
  const filteredBooks = books
    .filter(book => 
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (genreFilter === '' || book.genre === genreFilter)
    )
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'author') {
        return a.author.localeCompare(b.author);
      } else if (sortBy === 'dateAdded') {
        return a.dateAdded - b.dateAdded;
      }
      return 0;
    });

  if (!user) {
    return <h2>Please sign in to see your library.</h2>;
  }

  return (
    <div>
      <Header />
      <h1>Your Library</h1>

      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title or author"
      />

      {/* Genre Filter */}
      <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Romance">Romance</option>
      </select>

      {/* Sort Options */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
        <option value="dateAdded">Sort by Date Added</option>
      </select>

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.status}</p>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}

      <Link to="/add-book">
        <button>Add a New Book</button>
      </Link>
    </div>
  );
};

export default Library;
