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
  const [userAddressDetail, setUserAddressDetail] = useState<string>("");

  const handleSignUp = () => {
    const data = {
      userEmail,
      userPassword,
      userPasswordCheck,
      userNickname,
      userPhoneNumber,
      userAddress,
      userAddressDetail,
    };

    axios
      .post("http://localhost:4000/api/auth/signUp", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`${err} :: 회원가입 실패`);
      });
  };

  return (
    <_.SignUpContainer>
      <_.SignUpForm>
        <_.SignUpInput
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <_.SignUpInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <_.SignUpInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 확인해주세요"
          onChange={(e) => {
            setUserPasswordCheck(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          onChange={(e) => {
            setUserNickname(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="phoneNumber"
          placeholder="휴대폰번호를 입력해주세요"
          onChange={(e) => {
            setUserPhoneNumber(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="address"
          placeholder="주소를 입력해주세요"
          onChange={(e) => {
            setUserAddress(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="addressDetail"
          placeholder="상세주소를 입력해주세요"
          onChange={(e) => {
            setUserAddressDetail(e.target.value);
          }}
        />
        <_.SignUpButton onClick={() => handleSignUp()}>회원가입</_.SignUpButton>
      </_.SignUpForm>
    </_.SignUpContainer>
  );
};

export default SignUp;
