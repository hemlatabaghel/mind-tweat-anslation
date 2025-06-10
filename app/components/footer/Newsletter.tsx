const Newsletter = () => {
    return (
      <div className="relative z-10 -mb-32"> {/* Negative margin pulls newsletter upward */}
        <section className="bg-[#FFAF61] py-10 px-4 shadow-lg  mx-auto rounded-md w-[667] relative">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-[32px] font-semibold text-white  mb-2">Join Our NewsLetter</h3>
            <p className="text-[16px] text-white mb-4">
            Provides regular email update sent to subscribers, featuring exclusive discounts, special offers, and the latest deals available on the platform.
            </p>
           
            <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
            <p className="text-[20px] text-white mb-2">
            For latest updates, send email
            </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Newsletter;