import SectionLabel from "../SectionLabel";
const Brands = () => {
    return (
      <section className="bg-white py-18">
        <div className="text-justifyn">
          {/* <h2 className="text-xs text-green-900 tracking-widest font-medium">OUR BRANDS</h2> */}
          <SectionLabel title="OUR BRANDS"/>
          <p className=" mx-auto text-[16px] font-[Inter] text-black-700 mt-12 px-14">
          Discover the names redefining quality, style, and innovation. In this space, we shine a spotlight on our most-loved and trusted brands — the ones that consistently deliver the best in design, performance, and customer satisfaction. Whether you're looking for timeless fashion, cutting-edge tech, premium beauty, or home essentials, explore the stories behind the labels that our customers can’t stop talking about. Handpicked for their excellence, our top brands are more than just names — they’re experiences worth sharing.
          </p>
        </div>
        <div className=" flex justify  gap-20 mt-6 flex px-14">
          <img src="/brands/microsoft.png" alt="Microsoft" className="h-20 w-40" />
          <img src="/brands/walmart.png" alt="Walmart" className="h-20 w-40" />
          <img src="/brands/shopify.png" alt="Shopify" className="h-20 w-40" />
          <img src="/brands/buzzfeed.png" alt="BuzzFeed" className="h-20 w-40" />
          <img src="/brands/levis.png" alt="Levi's" className="h-20 w-40" />
          <img src="/brands/hsbc.png" alt="HSBC" className="h-20 w-40" />
        </div>
      </section>
    );
  };
  
  export default Brands;
  