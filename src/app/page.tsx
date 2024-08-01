import ArticleCard from "@/app/components/ArticleCard";
import RotateOnScroll from "@/app/components/RotateOnScroll";

const content = [{
  year: 553,
  title: "Αρχίζει στην Κωνσταντινούπολη η Ε΄ Αγία Οικουμενική Σύνοδος.",
  id: 1
},
{
  year: 1260,
  title: "Ο Κουμπλάι Χαν γίνεται κυβερνήτης της Μογγολικής αυτοκρατορίας.",
  id: 2
},
{
  year: 1494,
  title: "Ο Χριστόφορος Κολόμβος αποβιβάζεται στην Τζαμάικα και τη διεκδικεί για την Ισπανία.",
  id: 3
},
{
  year: 1762,
  title: "Η Ρωσία και η Πρωσία υπογράφουν τη συνθήκη της Αγίας Πετρούπολης.",
  id: 4
}]

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="w-2/12 bg-sidePanelsColor">
      </div>
      <div className="flex overflow-x-hidden flex-col w-10/12 min-h-screen justify-center items-center bg-customGray" >
        {content.map((c)=> <ArticleCard key={c.id} content={c}/>)}
      </div>
      <div className=" w-2/12 bg-sidePanelsColor">   
      <RotateOnScroll position={"-top-24"}/>   
      <RotateOnScroll position={"-bottom-24"}/>   
      </div>
    </main>
  );
}
