import React from 'react';
import BookCard from '../components/BookCard';

const getBooks = async () => {
  const res = await fetch('http://localhost:5000/books', {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error('Faild to fetch books');
  }

  return res.json();
};

const booksPage = async () => {
  const books = await getBooks();
  return (
    <div>
      <h2>Our Books</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default booksPage;
