import { useEffect, useState } from "react";

async function getBooks()  {
  const request = await fetch(`http://localhost:3000/books`)
  const response = await request.json();
  return response;
} 

const BookShelf = (props) => {
  const {shelfName, id} = props;

  const [books, setBooks] = useState([]);
   

  useEffect (() => {
    
    getBooks().then((books) => {
      console.log(books);
      if(id === 1) {
        setBooks(books.filter((book) => book.shelf === 'currentlyReading'));
      } else if(id === 2){
        setBooks(books.filter((book) => book.shelf === 'read'));
      } else if (id === 3){
        setBooks(books.filter((book) => book.shelf === 'wantToRead'));
      }
    })
  
  },[])  


  return (  
    <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((books) => (
                      <li key={books.id}>                      
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style=
                            {{width:128,
                            height:193,
                            backgroundImage:`url(${books.imageLinks.thumbnail})` }  }                          
                            
                          ></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled="">Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{books.title}</div>
                        <div className="book-authors">{books.authors}</div>
                      </div>
                    </li>

                    ))}
                    
                    
                  </ol>
                </div>
              </div>
  );
}
 
export default BookShelf;