import ArticleCard from "@/app/components/ArticleCard";
import RotateOnScroll from "@/app/components/RotateOnScroll";

const content = {
  title: "Sample Title",
  description: "This is a sample description.",
  id: 4
};

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="w-2/12 bg-sidePanelsColor">
      </div>

      <div id="main" className="flex flex-col w-10/12 min-h-screen justify-center items-center bg-red-400">
        <ArticleCard content={content}/>
        <ArticleCard content={content}/>
        <ArticleCard content={content}/>
        <ArticleCard content={content}/>
        {/*katw deksia panw aristera style={{ clipPath: 'inset(0 50% 0 0)' }}*/}
        
      </div>
      <div className="relative w-2/12 bg-sidePanelsColor">   
      <RotateOnScroll/>   
      </div>
    </main>
  );
}
