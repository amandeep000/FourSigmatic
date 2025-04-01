const MushroomLegacy = () => {
  return (
    <section>
      <div className="flex flex-col relative justify-center items-center">
        <div className="w-full py-6 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center gap-y-3">
            <div className="px-[38px] overflow-hidden h-64 w-full relative md:hidden">
              <picture className="block w-full h-full">
                <source
                  srcSet="/public/content/min-1025.webp"
                  media="(min-width:1025px)"
                />
                <source
                  srcSet="/public/content/ml640-820.webp"
                  media="(min-width:641px) and (max-width:820px)"
                />
                <source
                  srcSet=""
                  media="(min-width:821px) and (max-width:1024px)"
                />
                <img
                  src="/public/content/defaultml.webp"
                  alt="mushroom founder image"
                  className="w-full h-full object-cover rounded-xl"
                />
              </picture>
            </div>
            <div className="px-[38px]">
              <h2 className="text-[32px] font-bold text-[#59432D] px-2 pb-[6px] mx-8">
                Mushroom Legacy Beyond a Decade
              </h2>
            </div>
          </div>
          {/* journey text section */}
          <div className="px-[38px] py-6 max-h-[500px] overflow-scroll flex flex-col relative w-full">
            <div className="border-l-2 border-[#F2983DFF] max-w-[900px] flex flex-col justify-center items-center w-full gap-y-3">
              <div className="flex flex-col items-start w-full justify-start gap-y-4">
                <p className="underline pl-7">2012-2017: Finnish Funguys</p>

                <p className="pl-7">
                  Founded by a 13th-gen farmer Tero Isokauppila and team of
                  Finnish Funguys
                </p>

                <p className="pl-7">
                  After years of perfecting, Mushroom Coffee was born!
                </p>

                <p className="pl-7">
                  From freezing Finland to sunny California, we made the leap
                </p>

                <p className="pl-7">
                  Tero’s book 'Healing Mushrooms' became an Amazon bestseller
                  pl-7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MushroomLegacy;
