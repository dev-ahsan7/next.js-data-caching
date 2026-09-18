import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          className="w-full h-50 object-cover"
          src={book.coverImage}
          alt="Shoes"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{book.description}</p>
        <div className="card-actions mb-3">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>

        <div>
          <Link href={`books/${book.id}`}>
            <button className="btn btn-primary">View More →</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
