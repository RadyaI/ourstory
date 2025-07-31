import Menu from "@/components/element/Menu";
import CircleOne from "../components/rootPage/sticker";
import FotoData from "@/components/rootPage/PhotoRender";
import StoryCard from "@/components/story/storyCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <CircleOne />
      <Menu />

      <div className="text-white py-12 px-4">

        <div className="relative w-6/8 mx-auto h-fit">
          <h1 className="mx-auto w-fit cursor-pointer text-center text-5xl font-semibold tracking-wide text-white" style={{ fontFamily: "Great Vibes, cursive" }}>
            <span className="text-pink-300">Our</span> Story
            <hr />
          </h1>
        </div>

        <Suspense fallback={<p className="text-white">Sabar yaaa datanya lagi diambil...</p>}>
          <FotoData />
        </Suspense>

        <StoryCard />

      </div>
    </>
  );
}


