"use client"
import PopUp from "@/components/PopUp";
import Posts from "@/components/Posts";
import { useState } from "react";
export default function Home() {
let [showPopup,setShowPopUp]=useState(true);

  return (
    <div >
      { showPopup && <PopUp close={()=>setShowPopUp(false)}/>}
      <Posts/>
    </div>
  );
}
