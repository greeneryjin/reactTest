import { useState } from "react";


const Login = () => {

	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");

    return(
        <div>
            <input type="text" placeholder="아이디 입력" value={id} />
            <input type="text" placeholder="이름을 입력" value={pwd}/>
            <input type="text" placeholder="비밀번호 입력" value={name} />
            <button>저장</button>
        </div>
    );
};

export default Login;