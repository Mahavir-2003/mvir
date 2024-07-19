"use client"
import LandingPage from "@/components/Home/LandingPage";
import Cursor from "@/components/cursor/Cursor";
import IntroLoader from "@/components/loader/IntroLoader";
import { useEffect } from "react";

// Redirect user to another Website




export default function Home() {

  useEffect(() => {
    window.location.href = "https://mhvr.framer.website/";
  }, []);

  return (
    <div>
      {/* <Cursor />
      <IntroLoader />
      <LandingPage /> */}
    </div>
  )
}
