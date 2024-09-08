import RotateOnScrollGear from "@/app/components/RotateOnScrollGear";
import EventsListContainer from "@/app/components/EventsListContainer"

export default function HomePage() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="w-2/12 bg-sidePanelsColor">
      </div>
      <EventsListContainer/>
      <div className=" w-2/12 bg-sidePanelsColor">   
      <RotateOnScrollGear position={"-top-24"}/>   
      <RotateOnScrollGear position={"-bottom-24"}/>   
      </div>
    </main>
  );
}
