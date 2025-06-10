import Image from "next/image";
import Header from "./components/Headers";
import MainStories from "./components/MainStories";
import FreshSidebar from "./components/FreshSideBar";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/footer/Newsletter";
import Brands from "./components/footer/Brands";
// import MainStoriesSection from "./components/MainStories";

import MainStoriesSection from "./components/MainStoriesSection";

export default function Home() {
  return (
  
    <main >
        <Header/>
        <MainStoriesSection/>

        <Brands/> 
        <Newsletter/>
       <Footer/>
  </main>
);
}
