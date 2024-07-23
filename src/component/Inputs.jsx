import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Inputs = () => {

    //초기 값을 지정하고 값이 변경되면 set로 변경
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [writeName, setWriteName] = useState("");

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };
    
    const changeContent = (event) => {
        setContent(event.target.value);
    };

    const changeWriteName = (event) => {
        setWriteName(event.target.value);
    };

    const createBbs = async () => {
        const req = {
          title: title,
          content: content,
          writeName: writeName,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/write', req);
            console.log(response.data);
        } catch (error) {
            console.error("There was an error creating the BBS!", error);
        }
    }

    return(
        <>
        <div>
            <table className="table">
                <tr>
                    <th>
                        제목
                    </th>
                    <td>
                        <input value={title} type="text" placeholder ="제목 입력" onChange={changeTitle}  />
                    </td>
                </tr>
                <tr>
                    <th>
                        내용
                    </th>
                    <td>
                        <input value={content} type="text" placeholder ="내용 입력" onChange={changeContent} />
                    </td>
                </tr>
                <tr>
                    <th>
                        작성자
                    </th>
                    <td>
                        <input value={writeName} type="text" placeholder ="이름 입력" onChange={changeWriteName} />
                    </td>
                </tr>    
            </table>
        </div>
            <button onClick={createBbs}>버튼</button>
        </>
    );
};

export default Inputs;