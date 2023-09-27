import { IconButton, Tooltip } from "@material-tailwind/react";
import { sideText } from "config/SideGNB";

const SideFooter = () => {
  return (
    <section className="absolute left-0 right-0 bottom-3">
      <div className="flex justify-center gap-8 mb-5">
        <Tooltip content="010-5415-1303">
          <IconButton className="rounded-full bg-white  hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
            <i className="text-2xl text-blue-500 fas fa-mobile" />
          </IconButton>
        </Tooltip>
        <Tooltip content="chod1510@gmail.com">
          <IconButton className="rounded-full bg-white  hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
            <i className="text-2xl text-blue-500 fas fa-envelope" />
          </IconButton>
        </Tooltip>
        <Tooltip content="CHOsangok">
          <a href="https://github.com/CHOsanok" target="_blank">
            <IconButton className="rounded-full bg-white  hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
              <i className="text-2xl text-blue-500 fab fa-github" />
            </IconButton>
          </a>
        </Tooltip>
      </div>
      <p className="text-xs text-center text-gray-300">
        &copy; {sideText.footText}
      </p>
    </section>
  );
};

export default SideFooter;
