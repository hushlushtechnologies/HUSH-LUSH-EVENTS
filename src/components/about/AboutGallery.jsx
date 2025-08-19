const AboutUsGallery = () => {
  return (
    <section className="bg-[#1a1a1a] text-white overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-light mb-6">
          OUR JOURNEY & CRAFT
        </h2>
        <p className="max-w-3xl text-lg">
          Every creation we make is a reflection of passion, artistry, and
          dedication. Our story is rooted in a love for timeless elegance and
          a commitment to craftsmanship that transforms ideas into
          extraordinary works. From the first sketch to the final stitch,
          every detail is shaped with care to create something truly
          unforgettable.
        </p>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="overflow-x-auto scrollbar-hide px-6 pb-20">
        <div className="flex gap-6">
          <img
            src="/images/gallery1.jpg"
            alt="Craftsmanship 1"
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
          />
          <img
            src="/images/gallery2.jpg"
            alt="Craftsmanship 2"
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
          />
          <img
            src="/images/gallery3.jpg"
            alt="Craftsmanship 3"
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
          />
          <img
            src="/images/gallery4.jpg"
            alt="Craftsmanship 4"
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsGallery;
