import AccordionGallery from "../ui/AccordionGallery";
import categoriesData from "../../constants/gallery";
import { useNavigate } from "react-router-dom";

export default function CategoryAccordion() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/allProducts?category=${category.slug}`)
  };
  return (
    <AccordionGallery
      items={categoriesData}
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
      height={450}
      gap={10}
      radius={16}
      orientation="horizontal"
      className=""
      onItemCLick={handleCategoryClick}
    />
  );
}
