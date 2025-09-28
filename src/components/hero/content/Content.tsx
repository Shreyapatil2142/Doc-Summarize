import { MainCta } from "./MainCta";

export function Content() {
  return (
      <div className="flex flex-col gap-10" data-name="">
 <div className="font-poppins flex flex-col gap-7" data-name="Content">
  <h2 className="font-semibold text-[#251485] text-3xl tracking-[-0.54px]">
    Simplify Today, Scale Tomorrow
  </h2>
  
 <h1 className="font-bold text-7xl  text-gray-900 tracking-[-1.5px]">
  Unleash Smarter <span className="block">Automation</span>
</h1>


  <p className="font-source text-xl text-zinc-900 leading-relaxed">
    Transform your workflow with intelligent, data-driven solutions
  </p>
</div>
<a href="/home"><button className=" bg-[#7650f5] hover:bg-[#5a3edc] transition-colors duration-300 box-border content-stretch px-[16px] py-[10px] rounded-[32px] shadow-[0px_4px_8px_0px_rgba(118,80,245,0.3)] cursor-pointer top-[500px] w-[280px] text-white font-bold text-center text-xl">Explore Chat Bot</button></a>
    </div >
  );
}