import React from "react";

import TopBar from "./TopBar";
import InProgress from "./InProgress";
import EmptyPage from "./EmptyPage";
import Completed from "./Completed";
import BottomBar from "./BottomBar";

function Home() {
  return (
    <div>
      <TopBar />
      <InProgress />
      <EmptyPage />
      <Completed />
      <BottomBar />
    </div>
  );
}

export default Home;
