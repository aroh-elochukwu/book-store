import React from 'react';
import './App.css';
import Header from './components/Header'
import BooksSection from './components/BooksSection';
import SearchColumn from './components/SearchColumn';


function App() {
  return (  
    <div id='root'>
      <div className='app'>
        <div className='list-books'>
          <Header/>
          <BooksSection/>
          <SearchColumn/>
        </div>
      </div>
    </div>  
     
  );
}

export default App;
