import { FC } from "react";
import queryString from "query-string";

declare var Kakao: any;

const CallbackKakao: FC = () => {
  const { code } = queryString.parse(window.location.search);
  console.log(code);
  if (code) {
    console.log("code access");
  }

  return <div>콜백</div>;
};

export default CallbackKakao;
