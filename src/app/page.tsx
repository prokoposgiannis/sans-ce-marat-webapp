import ArticleCard from "@/app/components/ArticleCard";

const content = {
  title: "Sample Title",
  description: "This is a sample description.",
  id: 4
};

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-2/12 bg-sidePanelsColor">
      
      </div>
      <div className="flex flex-col w-10/12 min-h-screen justify-center items-center bg-customGray">
        <ArticleCard content={content}/>
        <ArticleCard content={content}/>
        <ArticleCard content={content}/>
        <ArticleCard content={content}/>
      </div>
      <div className="w-2/12 bg-sidePanelsColor">
      </div>
    </main>
  );
}
