import React from "react";

import RankChart from "./RankChart";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import ListMusicTop from "./ListMusicTop";
import ListMusicBottom from "./ListMusicBottom";

export default function Content() {
  return (
    <div className="content">
      <div className="bg-green-300">
      <SearchBar />
      <ListMusicTop />
      <RankChart />
      <ListMusicBottom />
      <Footer />
      </div>
    </div>
  );
}