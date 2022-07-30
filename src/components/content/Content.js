import React from "react";

import RankChart from "./RankChart";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import ListMusicTop from "./ListMusicTop";
import ListMusicBottom from "./ListMusicBottom";

export default function Content() {
  return (
    <div className="content">
      <SearchBar />
      <ListMusicTop />
      <RankChart />
      <ListMusicBottom />
      <Footer />
    </div>
  );
}