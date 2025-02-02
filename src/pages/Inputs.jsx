import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const TOKEN = localStorage.getItem('token');

const Inputs = () => {

    //초기 값을 지정하고 값이 변경되면 set로 변경
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");
    const navigate = useNavigate();

    const changeTitle = (event) => {
        setTitle(event.target.value);
    };
    
    const changeContent = (event) => {
        setContent(event.target.value);
    };

    const changeWrite = (event) => {
        setWriter(event.target.value);
    };

    const createBbs = async () => {

        if(!TOKEN) {
            navigate("/login");
        } else {
            const req = {
                title: title,
                content: content,
                writer: writer
              };
      
              try {
                  const response = await axios.post('http://localhost:8080/api/write', req);
                  console.log(response.data);
              } catch (error) {
                  console.error("There was an error creating the 작성 불가!", error);
              }
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
                        <input value={writer} type="text" placeholder="이름 입력" onChange={changeWrite} />
                    </td>
                </tr>    
            </table>
        </div>
            <button onClick={createBbs}>생성</button>
        </>
    );
};

export default Inputs;