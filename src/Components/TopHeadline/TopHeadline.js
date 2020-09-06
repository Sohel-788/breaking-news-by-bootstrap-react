import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles]= useState([]);
    const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=e892ab7de87f4bc9a1d2e35c9c17e50e'
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setArticles(data.articles))
    },[])
    return (
        <div style={{ width:'90%', margin:'0 auto'}}>
            {
                articles.map(article=><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;