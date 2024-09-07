"use client";
import { useState, useEffect } from "react";
import ArticleCard from "@/app/components/ArticleCard";
import { CardContent } from "./types/types";
import { fetchDateData } from "@/app/firebase";
import Modal from "@/app/components/Modal"

export default function CardsList() {
  const [dayData, setDayData] = useState<CardContent[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [externalUrl, setExternalUrl] = useState<string>('');

  const openModalWithUrl = (url: string) => {
    setExternalUrl(url);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(dayData)

      const data: CardContent[] = await fetchDateData("2008");
      setDayData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex overflow-x-hidden flex-col w-10/12 min-h-screen justify-center items-center bg-customGray">
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} url={externalUrl} />
      {dayData.map((c) => (
        <ArticleCard key={c.id} content={c} openModalWithUrl={openModalWithUrl}/>
      ))}
    </div>
  );
}
