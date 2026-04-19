import Book from "@/components/Book/Book";

/**
 * cache: "no-store" --> it will fetch the data is every request because it will not cache the data. SSR (Server-Side Rendering)
 * 
 * cache: "force-store" --> it will cache the data and will not fetch the data on every request SSG(Static Site Generation)
 * 
 * revalidate: 20 --> it will cache the data for 20 second and it will fetch the data after 20s ISR (Incremental Static Regeneration)
 *  */


const BooksPage = async () => {

    const res = await fetch("http://localhost:5001/books", {cache: "no-store"})
    const books = await res.json()

    return (
        <div>
            <h2>Books: {books.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default BooksPage;