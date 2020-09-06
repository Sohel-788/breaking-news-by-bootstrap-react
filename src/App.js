import React from 'react';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      <TopHeadline></TopHeadline>
      </header>
    </div>
  );
}

export default App;
