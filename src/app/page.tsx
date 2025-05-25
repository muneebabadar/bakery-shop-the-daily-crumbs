import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-80">
      <div className="flex w-full h-full">
        {['/sweets.jpg', '/sweets2.jpg', '/sweets3.jpg', '/sweets4.jpg'].map((src, index) => (
      <div key={index} className="relative flex-1 hidden md:block">
        <Image
          src={src}
          alt="baked item"
          fill
          className="object-cover shadow-md"
        />
        
      </div>
      ))}

      {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-6xl antialized font-semibold drop-shadow-lg">Your daily dose of delicious.</span>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mt-16 flex justify-center w-full px-4 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-center text-[#c682b9] mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            At <span className="font-semibold text-[#c682b9] italic">The Daily Crumbs</span>, bakery we believe that life's sweetest moments are often found in the simple pleasure of a perfectly baked treat. Born from a passion for crafting delicious goods, we've dedicated ourselves to bringing you a daily dose of happiness, fresh from our ovens.
            <br /><br />
            From the comforting aroma of our morning pastries to the exquisite taste of our celebratory cakes, every item is made with the finest ingredients and a whole lot of love. We're more than just a bakery; we're a place where neighbors become friends, and where every crumb tells a story of warmth, community, and unforgettable flavor.
          </p>
        </div>
      </div>
    </div>

  );
}
