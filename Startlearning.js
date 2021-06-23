import React, { useState, useEffect } from 'react';
import "./Pagination.css";
import "./App.css";
import ReactPlayer from "react-player"
import "./Post.css"



const url = 'https://raw.githubusercontent.com/santoshrachakonda7/santosh/master/data.json';


function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
  
    function goToNextPage() {
       // not yet implemented
       setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
       // not yet implemented
       setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
       // not yet implemented
       const pageNumber = Number(event.target.textContent);
       setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
       // not yet implemented
       const startIndex = currentPage * dataLimit - dataLimit;
       const endIndex = startIndex + dataLimit;
       return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
       // not yet implemented
       let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
       return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    return (
      <div>
      <h1>{title}</h1>
  
      {/* show the posts, 10 posts at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
  
      {/* show the pagiantion
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>
  
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
  
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
      );
    }

export default function Startlearning() {
        const [posts, setPosts] = useState([]);
        const [error, setError] = useState('');
      
        useEffect(() => {
          fetch(url)
            .then((response) => {
              if (response.ok) return response.json();
              throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message));
        }, []);
      
        if (error) return <h1>{error}</h1>;
      
        return (
          <div>
            {posts.length > 0 ? (
              <>
                <Pagination
                  data={posts}
                  RenderComponent={Post}
                  title="Learning Objectives"
                  pageLimit={2}
                  dataLimit={1}
                />
              </>
            ) : (
             <h1>No Posts to display</h1>
            )}
      
          </div>
          );
      }


function Post(props) {
        const { title, url, image, body, link } = props.data;
        
        return (
            <div className="post" >
              
              {title && <h1>{title}</h1>}
              {url && <span><ReactPlayer url = {url} /></span>}
              
              {image && <span><img src = {image} alt=""/></span>}
              {body && <p>{body}</p>}
              {link && <p><a href = {link} target="_blank" rel="noreferrer"> Click Here </a>for further information</p>}
            </div>
        )
        
    }    