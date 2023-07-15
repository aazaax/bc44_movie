import Header from "../../components/Header/Header";
import React from "react";
import ListMovie from "./ListMovie/ListMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <Header />
      <ListMovie />
      <TabsMovie />
      <Footer />
    </div>
  );
}
