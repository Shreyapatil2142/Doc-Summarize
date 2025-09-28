import { Link } from "react-router-dom";

export function MainCta() {
  return (
    <div className="absolute bg-[#7650f5] hover:bg-[#5a3edc] transition-colors duration-300 box-border content-stretch flex gap-[48px] items-start left-[91px] px-[16px] py-[10px] rounded-[32px] shadow-[0px_4px_8px_0px_rgba(118,80,245,0.3)] cursor-pointer top-[500px] w-[280px]" 
          data-name="Main CTA">
      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[18px]  text-center text-white tracking-[-0.54px] w-[248px]">
         <Link to="/home" className="font-bold text-white text-lg tracking-[-0.54px]">
    Explore Chat BOT
  </Link>
      </div>
    </div>
  );
}