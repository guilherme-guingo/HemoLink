import error from "../../assets/error.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export const PageNotFound = () => {
  return (
    <div>
      <DotLottieReact data={error} loop autoplay />
    </div>
  );
};
