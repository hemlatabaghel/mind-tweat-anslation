const Footer = () => {
    return (
      <footer className="bg-[#C3FF93] px-4 pt-36 pb-5 text-sm relative z-0"> {/* Padding top adjusted to accommodate newsletter overlap */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div>
            <h4 className="font-bold text-[32px] font-[inter] mb-1">MIND TWEAT</h4>
            <p className="text-[16px] font-[inter] mb-4">Echoes of Thought. <br /> Powered by Tweets.</p>
            <div className="font-bold text-[20px] font-[inter] mb-1 mt-12">
            <h5 className=" mb-4">Follow US On </h5>
            </div>
            <div className="flex gap-4 text-xl">

            <a href="https://facebook.com"><img src="/icons/vectorFB.png" alt="Facebook" className="h-5 w-5" /></a>
            <a href="https://pinterest.com"><img src="/icons/vectorP.png" alt="Pinterest" className="h-5 w-5" /></a>
            <a href="https://twitter.com"><img src="/icons/vectorX.png" alt="X/Twitter" className="h-5 w-5" /></a>
            <a href="https://linkedin.com"><img src="/icons/vectorIN.png" alt="LinkedIn" className="h-5 w-5" /></a>
            </div>
          </div>
  
          <div className="text-base font-[500]">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Projects</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Social</a>
          <a href="#" className="block">Live Chat</a>
          <a href="#" className="block">Privacy Policy</a>
          <a href="#" className="block">Mobile</a>
          </div>
  
          <div className="text-base font-[500]">
          <a href="#" className="block">Social</a>
          <a href="#" className="block">Live Chat</a>
          <a href="#" className="block">Privacy Policy</a>
          <a href="#" className="block">Mobile</a>
          <a href="#" className="block">Lifestyle</a>
          <a href="#" className="block">Beauty</a>
          </div>
  
          <div className="text-base font-[500]">
          <a href="#" className="block">Privacy Policy</a>
          <a href="#" className="block">Mobile</a>
          <a href="#" className="block">Lifestyle</a>
          <a href="#" className="block">Beauty</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;