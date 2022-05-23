import BookShelf from "./BookShelf";


const BooksSection = () => {

  

  return ( 
    <div className="list-books-content">
            <div>
              <BookShelf shelfName='Currently Reading' id={1}/>
              <BookShelf shelfName='Want to Read' id={2}/>
              <BookShelf shelfName='Read' id={3}/>
            </div>
          </div>
   );
}
 
export default BooksSection;