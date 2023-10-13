"use client";
import Popup from "@/components/Popup";
import Posts from "@/components/Posts";
import { useEffect, useState } from "react";
export default function Home() {
  const [showPopup, setShowPopUp] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("popupShow")) {
      setShowPopUp(true);
      localStorage.setItem("popupShow", "true");
    }
  },[]);

  return (
    <div>
      {showPopup && <Popup close={() => setShowPopUp(false)} />}
      <Posts />
    </div>
  );
}
