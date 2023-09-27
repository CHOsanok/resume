import { sideText } from "config/SideGNB";
import SideList from "./SideList";
import SideFooter from "./SideFooter";

const SideGNB = () => {
  return (
    <aside className="fixed w-[16rem] h-[35rem] py-12 text-white bg-blue-500 rounded-xl">
      <section className="flex flex-col mb-8 text-center">
        <h1 className="mb-3 text-2xl">{sideText.name}</h1>
        <h3 className="ml-24 text-xs">{sideText.subName}</h3>
      </section>
      <section>
        <SideList />
      </section>
      <section>
        <SideFooter />
      </section>
    </aside>
  );
};

export default SideGNB;
