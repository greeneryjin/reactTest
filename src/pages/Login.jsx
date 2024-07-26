import { useState } from "react";
import axios from "axios";

const Login = () => {

	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");

    const changeSetId = (event) => {
        setId(event.target.value);
    }

    const changeSetPwd = (event) => {
        setPwd(event.target.value);
    }

    const changeSetName = (event) => {
        setName(event.target.value);
    }

    const Login = async () => {
		const req = {
			id: id,
			password: pwd,
            name: name,
		}

		await axios.post("http://localhost:8989/user/login", req)
		.then((resp) => {
			console.log("[Login.js] login() success :D");
			console.log(resp.data);

				alert(resp.data.email + "님, 성공적으로 로그인 되었습니다 🔐");

				// JWT 토큰 저장
				localStorage.setItem("bbs_access_token", resp.data.token);
				localStorage.setItem("id", resp.data.email);

				setAuth(resp.data.email); // 사용자 인증 정보(아이디 저장)
				setHeaders({"Authorization": `Bearer ${resp.data.toekn}`}); // 헤더 Authorization 필드 저장

				navigate("/bbslist");
			

		}).catch((err) => {
			console.log("[Login.js] login() error :<");
			console.log(err);

			alert("⚠️ " + err.response.data);
		});
    }

    return(
        <div>
            <input type="text" placeholder="아이디 입력" value={id} onChange={changeSetId} />
            <input type="text" placeholder="이름을 입력" value={pwd} onChange={changeSetPwd} />
            <input type="text" placeholder="비밀번호 입력" value={name} onChange={changeSetName} />
            <button onClick={Login}>저장</button>
        </div>
    );
};

export default Login;