"use client";
import { useState, useEffect } from "react";
import Event from "@/app/components/Event";
import { EventContent } from "./types/types";
import { fetchDateData } from "@/app/firebase";
import Modal from "@/app/components/Modal"

export default function EventsListContainer() {
  const [dayData, setDayData] = useState<EventContent[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [externalUrl, setExternalUrl] = useState<string>('');

  const defaultData: EventContent[] = [
    {
      anchor: "#",
      imageUrl: "https://el.wikipedia.org/static/images/icons/wikipedia.png",
      year: "-",
      id: 1,
      tags: [{
        type: "text",
        text: "  Loading..",
      }],
    },
  ];

  const openModalWithUrl = (url: string) => {
    setExternalUrl(url);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(dayData)

      const data: EventContent[] = await fetchDateData("2008");
      setDayData(data.length ? data : defaultData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex overflow-x-hidden flex-col w-10/12 min-h-screen justify-center items-center bg-customGray">
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} url={externalUrl} />
      {dayData.map((c) => (
        <Event key={c.id} content={c} openModalWithUrl={openModalWithUrl}/>
      ))}
    </div>
  );
}
