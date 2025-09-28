import imgArtwork from "@/assets/Browser.png";
import { Group47194 } from "./BrowserScreens";

export function MaskGroup4() {
  return (
    <div className="absolute contents top-[312.77px]" data-name="Mask Group" style={{ left: "calc(75% + 14.238px)" }}>
      <div className="absolute flex h-[435.271px] items-center justify-center top-[312.77px] w-[266.695px]" style={{ left: "calc(75% + 14.238px)" }}>
        <div className="flex-none rotate-[11.847deg]">
          <div className="h-[405.434px] w-[187.467px]" data-name="image 62" />
        </div>
      </div>
    </div>
  );
}

export function Group824() {
  return (
    <div className="absolute contents top-[312.77px]" style={{ left: "calc(75% + 14.238px)" }}>
      <MaskGroup4 />
    </div>
  );
}

export function Browser() {
  return (
    <div className="absolute contents top-[-12.51px]" data-name="Browser" style={{ left: "calc(41.667% + 9.774px)" }}>
      <Group47194 />
      <div className="absolute flex h-[680.908px] items-center justify-center top-[120.19px] w-[575.67px]" style={{ left: "calc(41.667% + 10.863px)" }}>
        <div className="flex-none rotate-[25.5deg] skew-x-[23.649deg]">
          <div className="h-[407.943px] relative rounded-bl-[7.932px] rounded-br-[7.932px] w-[572.451px]" data-name="ARTWORK">
            <img src={imgArtwork} alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[7.932px] rounded-br-[7.932px] size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}