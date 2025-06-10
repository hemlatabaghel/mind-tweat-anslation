import MainStoryBlock from "./MainStoryBlock";
import TechStories from "./TechStories";
import FashionStories from "./FashionStories";
import GreenCardGallery from "./GreenCardGallery";
import RecipeGrid from "./RecipeGrid";

export default function MainStoriesSection() {
  return (
    <section className="w-full bg-white py-6 px-4">
       <div className=" px-4">
      <MainStoryBlock />
      {/* <TechStories /> */}
      <FashionStories />
      <GreenCardGallery />
      <RecipeGrid />
      </div>
    </section>
  );
}