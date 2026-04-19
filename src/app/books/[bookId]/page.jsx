/*
    what this part do is that i pre-loades data 
 */
export const generateStaticParams = async ()=>{
    const res = await fetch("http://localhost:5001/books")
    const books = await res.json()

    /*  got to make a object that looks like this
        [{bookId: 1}, {bookId: 2}, .....]
    */
   return books.slice(0,2).map(book => ({bookId: book.id}))
}

const BookDetailPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5001/books/${bookId}`);
    const {title, author, price, category, stock, image, description} = await res.json();
    return (
        <div className="container mx-auto">
            <h2>Book Detail: {bookId}</h2>
            <h3 className="font-bold text-2xl">{title}</h3>
            <p>Author: {author}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default BookDetailPage;
