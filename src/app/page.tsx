import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex flex-col mx-auto ">
       <NavBar />
      <div>
       <SideBar />
      </div>
    </main>
  );
}
