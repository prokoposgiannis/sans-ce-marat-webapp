import RotateOnScroll from "@/app/components/RotateOnScroll";
import CardsList from "@/app/components/CardsList"

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="w-2/12 bg-sidePanelsColor">
      </div>
      <CardsList/>
      <div className=" w-2/12 bg-sidePanelsColor">   
      <RotateOnScroll position={"-top-24"}/>   
      <RotateOnScroll position={"-bottom-24"}/>   
      </div>
    </main>
  );
}
