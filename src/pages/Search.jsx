import React, { useState, useEffect } from 'react';
import axios from "axios";

const Search = () => {

    const [searchLists, setSearchList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [size] = useState(10);
    const [totalElements, setTotalElements] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    //검색어를 가지고 서버에게 요청을 보냄 
    const changeSearchList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:8080/api/search', {
                params: { page, size }
              });
              console.log(response.data);
              setSearchList(response.data);
              setTotalPages(response.data.totalPages);
              setTotalElements(response.data.totalElements);
        } catch (error) {
             setError('Error fetching List');
        } finally {
            setIsLoading(false);
        }
    };

    //사이드 임팩트
    useEffect(() => {
        changeSearchList(page, size);
    }, [page, size]);

    const handlePreviousPage = () => {
        setPage(prev => Math.max(prev - 1, 1));
      };
    
      const handleNextPage = () => {
        setPage(prev => Math.min(prev + 1, totalPages));
      };

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {searchLists.map(searchList => (
                    <div key={searchList.writeId}>
                        <p>제목: {searchList.title}</p>
                        <p>내용: {searchList.content}</p>
                        <p>작성자: {searchList.writer}</p>
                        <p>작성일: {searchList.regDate}</p>
                    </div>
                ))}
            </div>

            <div>
                <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                <span>Page {page} of {totalPages} ({totalElements} items)</span>
                <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default Search;
