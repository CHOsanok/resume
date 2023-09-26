import { sideText } from "config/SideGNB";
import { FaUserCircle } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";

const SideGNB = () => {
  return (
    <article className="fixed w-48 px-5 py-10 text-white bg-blue-500 rounded-xl">
      <section className="mb-8">
        <h1>{sideText.name}</h1>
        <h3>{sideText.subName}</h3>
      </section>
      <span className="flex items-center my-5 text-xl">
        <FaUserCircle />
        <h3 className="ml-3">{sideText.firstList}</h3>
      </span>
      <span className="flex items-center my-5 text-xl">
        <BsStackOverflow />
        <h3 className="ml-3">{sideText.secondList}</h3>
      </span>
      <span className="flex items-center my-5 text-xl">
        <PiProjectorScreenChartDuotone />
        <h3 className="ml-3">{sideText.thirdList}</h3>
      </span>
      <span className="flex items-center my-5 text-xl">
        <MdCastForEducation />
        <h3 className="ml-3">{sideText.fourthList}</h3>
      </span>
      <span className="flex items-center my-5 text-xl">
        <BiSolidBook />
        <h3 className="ml-3">{sideText.fifthList}</h3>
      </span>
    </article>
  );
};

export default SideGNB;
