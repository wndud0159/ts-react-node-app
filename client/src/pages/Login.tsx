import { FC } from "react";
import axios from "axios";

declare var Kakao: any;
Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
Kakao.isInitialized();

const Login: FC = () => {
  const KakaoLoginHandler = () => {
    console.log("check");
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/callback/kakao",
    });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center mt-32">
      <div className=" text-center">
        {/* title section */}
        <div className="text-2xl font-bold  py-10">Sosial Login</div>
        {/* login section */}
        <div className=" flex flex-col space-y-3">
          <div onClick={KakaoLoginHandler} className="flex justify-center hover:cursor-pointer">
            <img src="/kakao_login.png" className="w-60 h-auto" alt="ff" />
          </div>
          <div className="flex justify-center hover:cursor-pointer">
            <img src="/google_login.png" className="w-60 h-auto" alt="ff" />
          </div>
          <div className="flex justify-center hover:cursor-pointer">
            <img src="/naver_login.png" className="w-60 h-auto" alt="ff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
