import BounceCards from "../ui/BounceCards";
import picsData from "../../constants/heroCardsData";

export default function Hero() {
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <section className="relative mt-20  h-[calc(100vh-100px)] w-full overflow-hidden">
      <h1 className="absolute bg-linear-to-br from-green-300 via-green-100 to-green-50 bg-clip-text text-transparent top-0 left-0 z-10 w-full text-center text-[15vw] font-spray leading-none ">
        R-Market
      </h1>
      <div className="absolute w-[90%] bottom-40 z-20 left-1/2 -translate-x-1/2 gap-2 flex justify-center">
        <div className="w-[40%] flex flex-col items-start justify-center mt-10 ">
          <p className="text-gray-300 font-extrabold text-3xl ">
            Discover what fits your style. <br />
            Shop your favorites, explore new finds,
            <br /> and make every choice count.
          </p>
          <button className="w-[40%] mt-5 px-5 py-3 text-2xl rounded-lg text-green-950 
          font-extrabold text-center hover:bg-green-300/50 hover:text-green-50 duration-900 cursor-pointer bg-green-100/50">
            Login Now
          </button>
        </div>
        <BounceCards
          className="custom-bounceCards  justify-end"
          images={picsData}
          containerWidth={800}
          containerHeight={400}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
    </section>
  );
}
