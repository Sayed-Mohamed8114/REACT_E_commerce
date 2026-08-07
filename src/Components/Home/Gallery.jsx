import AccordionGallery from "../../Components/ui/AccordionGallery";
import picsData from "../../constants/gallery";
export default function Gallery() {
  return (
    <div className="w-[90%] ">
      <AccordionGallery
        items={picsData}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
        accentColor="#ffffff"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale
        showLabels
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        tilt={8}
        stagger={0.06}
        height={460}
        gap={10}
        radius={16}
        orientation="horizontal"
      />
    </div>
  );
}
