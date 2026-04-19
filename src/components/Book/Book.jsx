import Link from "next/link";
import React from "react";

const Book = ({ book }) => {
    const { id, title, author } = book;
    return (
        <div className="card bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>by {author}</p>
                <div className="justify-end card-actions">
                    <Link className="btn btn-ghost" href={`/books/${id}`}>Show details...</Link>
                </div>
            </div>
        </div>
    );
};

export default Book;
