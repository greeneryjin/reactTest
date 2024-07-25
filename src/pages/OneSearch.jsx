import React, { useState } from "react";
import axios from "axios";

const OneSearch = () => {

    const [searchList, setSearchList] = useState([]);
    
    //검색어 Hook
    const [searchVal, setSearchVal] = useState("");

    //검색어를 저장
    const changeSearch = (event) => {
        setSearchVal(event.target.value);
    };

    //검색어를 가지고 서버에게 요청을 보냄 
    const oneSearch = async () => {
        try {
        const response = await axios.get('http://localhost:8080/api/search', {
            params: {
                title: searchVal,
                content: searchVal,
            },
        });
        console.log(response.data);
        setSearchList(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    return (
    <>
      <div>
        <table className="oneSearch">
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="검색어" value={searchVal} onChange={changeSearch}/>
                    </td>
                    <td>
                        <button onClick={oneSearch} >검색</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>작성자</th>
                </tr>
            </thead>
            <tbody>
                {searchList && searchList.map((bbs, idx) => (
                    <tr key={idx}>
                        <td>{bbs.id}</td>
                        <td>{bbs.title}</td>
                        <td>{bbs.content}</td>
                        <td>{bbs.writer}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
    );
};

export default OneSearch;