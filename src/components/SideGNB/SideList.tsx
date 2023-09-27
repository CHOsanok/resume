import { FaUserCircle } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import { sideText } from "config/SideGNB";
import { List, ListItem } from "@material-tailwind/react";

const SideList = () => {
  return (
    <section>
      <List className="text-white">
        <ListItem className="flex items-center text-xl ">
          <FaUserCircle />
          <h3 className="ml-3">{sideText.firstList}</h3>
        </ListItem>
        <ListItem className="flex items-center text-xl">
          <BsStackOverflow />
          <h3 className="ml-3">{sideText.secondList}</h3>
        </ListItem>
        <ListItem className="flex items-center text-xl">
          <PiProjectorScreenChartDuotone />
          <h3 className="ml-3">{sideText.thirdList}</h3>
        </ListItem>
        <ListItem className="flex items-center text-xl">
          <MdCastForEducation />
          <h3 className="ml-3">{sideText.fourthList}</h3>
        </ListItem>
        <ListItem className="flex items-center text-xl">
          <BiSolidBook />
          <h3 className="ml-3">{sideText.fifthList}</h3>
        </ListItem>
      </List>
    </section>
  );
};

export default SideList;
