import { useState } from "react";
import axios from "axios";

const SignUp = () => {

	const [userId, setUserId] = useState("");
	const [userPw, setUserPw] = useState("");
    const [name, setName] = useState("");

    const changeSetId = (event) => {
        setUserId(event.target.value);
    }

    const changeSetPwd = (event) => {
        setUserPw(event.target.value);
    }

    const changeSetName = (event) => {
        setName(event.target.value);
    }

    const signUp = async () => {
		const req = {
			userId: userId,
			userPw: userPw,
            name: name
		}

		await axios.post("http://localhost:8080/api/signUp", req)
		.then((resp) => {
			console.log("signUp() success :D");
			console.log(resp.data);

		}).catch((err) => {
			console.log("[signUp.js] signUp() error :<");
			console.log(err);

			alert("⚠️ " + err.response.data);
		});
    }

    return(
        <div>
            <input type="text" placeholder="이름을 입력" value={name} onChange={changeSetName} />
            <input type="text" placeholder="아이디 입력" value={userId} onChange={changeSetId} />
            <input type="text" placeholder="비밀번호 입력" value={userPw} onChange={changeSetPwd} />
            <button onClick={signUp}>저장</button>
        </div>
    );

};

export default SignUp;