import ArticleCard from "@/app/components/ArticleCard";
import RotateOnScroll from "@/app/components/RotateOnScroll";
import { cnt } from "@/app/firebase"

export default async function Home() {

  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="w-2/12 bg-sidePanelsColor">
      </div>
      <div className="flex overflow-x-hidden flex-col w-10/12 min-h-screen justify-center items-center bg-customGray" >
        {cnt.map((c)=> <ArticleCard key={c.id} content={c}/>)}
      </div>
      <div className=" w-2/12 bg-sidePanelsColor">   
      <RotateOnScroll position={"-top-24"}/>   
      <RotateOnScroll position={"-bottom-24"}/>   
      </div>
    </main>
  );
}
