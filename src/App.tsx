import Education from "components/Education";
import Introduction from "components/Introduction";
import Project from "components/Project";
import SideGNB from "components/SideGNB";
import Stack from "components/Stack";
import Study from "components/Study";

function App() {
  return (
    <main className="relative p-5 bg-blue-800 w-screen h-[500vh] flex-wrap">
      <section>
        <SideGNB />
      </section>
      <section className="absolute ml-[16rem]">
        <Introduction />
        <Stack />
        <Project />
        <Study />
        <Education />
      </section>
    </main>
  );
}

export default App;
