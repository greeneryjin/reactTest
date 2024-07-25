import React, { useState, useEffect } from 'react';
import axios from "axios";

const Search = () => {

    const [searchLists, setSearchList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //검색어를 가지고 서버에게 요청을 보냄 
    const changeSearchList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:8080/api/search');
            setSearchList(response.data);
        } catch (error) {
             setError('Error fetching List');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        changeSearchList();
    }, []);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {searchLists.map(searchList => (
                    <div key={searchList.id}>
                        <p>제목: {searchList.title}</p>
                        <p>내용: {searchList.content}</p>
                        <p>작성자: {searchList.writer}</p>
                        <p>작성일: {searchList.regDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
