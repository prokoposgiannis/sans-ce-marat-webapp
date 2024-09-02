"use client";
import { useState, useEffect } from "react";
import ArticleCard from "@/app/components/ArticleCard";
import { CardContent } from "./types/types";
import { fetchDateData } from "@/app/firebase";

export default function CardsList() {
  const [dayData, setDayData] = useState<CardContent[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      console.log(dayData)

      const data: CardContent[] = await fetchDateData("2008");
      setDayData(data);
      console.log(dayData)

    };

    fetchData();
  }, []);

  return (
    <div className="flex overflow-x-hidden flex-col w-10/12 min-h-screen justify-center items-center bg-customGray">
      {dayData.map((c) => (
        <ArticleCard key={c.id} content={c} />
      ))}
    </div>
  );
}
