import { Link } from "react-router-dom";
import svgPaths from "./svg-1qh9v01azg";
import imgArtwork from "../assets/chatbot.png";
import { imgGroup995 } from "./svg-27tgh";
// Import all components from the hero components directory
import {
  Group46881,
  MaskGroup1,
  MaskGroup2,
  MaskGroup3,
  Scroll,
  Group46889,
  Content,
  Logo,
  SignIn,
  Group824,
} from "../components/hero";
import  Browser from "../components/hero/browser";
const Component14 = () => {
  return (
    <div className="bg-white relative h-screen w-full overflow-hidden" data-name="14">
      <Group46881 />
      <div className="absolute flex h-[1400px] items-center justify-center left-[-300px] top-[-600px] w-[1400px]">
        <div className="flex-none rotate-[126.049deg]">
          <MaskGroup1 />
        </div>
      </div>
      <div className="absolute flex h-[400px] items-center justify-center left-[60px] top-[10px] w-[450px]">
        <div className="flex-none rotate-[205.495deg] scale-y-[-100%]">
          <MaskGroup2 />
        </div>
      </div>
      <div className="absolute flex h-[380px] items-center justify-center top-[-80px] w-[320px]" style={{ left: "calc(66.667% - 7.887px)" }}>
        <div className="flex-none rotate-[276.008deg] scale-y-[-100%]">
          <MaskGroup3 />
        </div>
      </div>
      <Scroll />
      <Group46889 />

      <Logo />
      <SignIn />
      <Group824 />
      <div className="w-full flex justify-around absolute top-1/4 ">
      <Content />
      <Browser />
      </div>

    
    </div>
  );
}

export default Component14;