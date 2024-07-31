import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

	const [userId, setUserId] = useState("");
	const [userPw, setUserPw] = useState("");
	const navigate = useNavigate();

    const changeSetId = (event) => {
        setUserId(event.target.value);
    }

    const changeSetPwd = (event) => {
        setUserPw(event.target.value);
    }

    const Login = async () => {
		const req = {
			userId: userId,
			userPw: userPw,
		}

		await axios.post("http://localhost:8080/api/login", req)
		.then((resp) => {
			console.log("[Login.js] login() success :D");
			console.log(resp.data);

			alert(resp.data.name + "님, 성공적으로 로그인 되었습니다 🔐");

			// JWT 토큰 저장
			localStorage.setItem("token", resp.data.token);
			localStorage.setItem("id", resp.data.accountId);

			navigate("/home");
			
		}).catch((err) => {
			console.log("[Login.js] login() error :<");
			console.log(err);

			alert("⚠️ " + err.response.data);
		});
    }

    return(
        <div>
            <input type="text" placeholder="아이디 입력" value={userId} onChange={changeSetId} />
            <input type="text" placeholder="이름을 입력" value={userPw} onChange={changeSetPwd} />
            <button onClick={Login}>저장</button>
        </div>
    );
};

export default Login;