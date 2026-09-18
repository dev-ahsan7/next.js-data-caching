import React from 'react';
import Image from 'next/image';

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5000/books');
  const books = await res.json();

  return books.map((book) => ({ bookId: book.id }));
};

const bookDetails = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch book');
  }

  const book = await res.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-slate-500">
          Home <span className="mx-2">/</span>
          Books <span className="mx-2">/</span>
          <span className="font-medium text-slate-800">{book.title}</span>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60">
          <div className="grid md:grid-cols-2">
            {/* Book Cover */}
            <div className="flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-8 md:p-12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={400}
                  height={600}
                  className="h-[450px] w-[300px] object-cover transition duration-500 hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow backdrop-blur">
                  {book.category}
                </span>
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              {/* Category */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                {book.category}
              </p>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                {book.title}
              </h1>

              {/* Author */}
              <p className="mt-4 text-lg text-slate-500">
                by{' '}
                <span className="font-semibold text-slate-800">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-2">
                  <span className="text-lg">★</span>
                  <span className="font-bold text-amber-600">
                    {book.rating}
                  </span>
                </div>

                <span className="text-sm text-slate-500">Customer rating</span>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-xl leading-7 text-slate-600">
                {book.description}
              </p>

              {/* Book Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-slate-100 py-6 sm:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Pages
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {book.pages}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Published
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {book.publishedYear}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Language
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {book.language}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Status
                  </p>
                  <p
                    className={`mt-1 font-semibold ${
                      book.inStock ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {book.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>

              {/* Price + Button */}
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-400">Price</p>
                  <p className="text-3xl font-bold text-slate-900">
                    ${book.price}
                  </p>
                </div>

                <button
                  disabled={!book.inStock}
                  className="rounded-xl bg-slate-900 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {book.inStock ? 'Add to Library' : 'Currently Unavailable'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900">
              Want to discover more books?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Explore our collection and find your next favorite book.
            </p>
          </div>

          <button className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white">
            Browse Books
          </button>
        </div>
      </div>
    </main>
  );
};

export default bookDetails;
