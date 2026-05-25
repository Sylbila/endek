import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CategoryCard = ({ category, onSelect }) => {
  return (
    <article
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={category.motifs?.[0]?.patternImage}
          alt={category.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* TITLE */}
        <div className="absolute bottom-4 left-4">

          <h3 className="text-2xl font-bold text-white">
            {category.title}
          </h3>

        </div>


      </div>

      {/* CONTENT */}
      <div className="p-5">

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {category.short}
        </p>

        <Button
  onClick={() => onSelect(category.key)}
  className="
    w-full
    bg-[#6B3E2E]
    hover:bg-[#5A3225]
    text-white
  "
>
  Lihat Detail

  <ArrowRight className="ml-2 h-4 w-4" />

</Button>

      </div>
    </article>
  );
};