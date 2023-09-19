import axios from "axios";
import React, { useState } from "react";
import * as _ from "./style";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>("");
  const [userNickname, setUserNickname] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");

  const handleSignUp = () => {
    axios
      .post("http://127.0.0.1:4000/api/auth/signUp", {})
      .then((response) => {
        console.log("Success");
      })
      .catch((error) => {
        console.log("Fail");
      });
  };
  return (
    <_.SignUpContainer>
      <_.SignUpForm>
        <_.SignUpInput
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
        />
        <_.SignUpInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <_.SignUpInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 확인해주세요"
        />
        <_.SignUpInput
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
        />
        <_.SignUpInput
          type="text"
          name="phoneNumber"
          placeholder="휴대폰번호를 입력해주세요"
        />
        <_.SignUpInput
          type="text"
          name="address"
          placeholder="주소를 입력해주세요"
        />
        <_.SignUpInput
          type="text"
          name="addressDetail"
          placeholder="상세주소를 입력해주세요"
        />
        <_.SignUpButton>회원가입</_.SignUpButton>
      </_.SignUpForm>
    </_.SignUpContainer>
  );
};

export default SignUp;
