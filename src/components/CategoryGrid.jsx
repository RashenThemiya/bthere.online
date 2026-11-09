import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { categories, categorySubservices } from "../data.js";

export default function CategoryGrid() {
  const categoryList = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Cleaning");
  const selectedSubservices = categorySubservices[selectedCategory] ?? [];

  return (
    <>
      <div className="explore-category-wrap">
        <div className="explore-categories" role="tablist" aria-label="Explore service categories" ref={categoryList}>
          {categories.map(({ name, icon: Icon }) => (
            <motion.button
              className={`explore-category ${selectedCategory === name ? "explore-category-active" : ""}`}
              key={name}
              id={`explore-tab-${name.replaceAll(" ", "-")}`}
              type="button"
              role="tab"
              aria-selected={selectedCategory === name}
              aria-controls="explore-subservices"
              onClick={() => setSelectedCategory(name)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
            >
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </motion.button>
          ))}
        </div>
        <button
          className="explore-category-next"
          type="button"
          aria-label="Scroll categories right"
          onClick={() => categoryList.current?.scrollBy({ left: 240, behavior: "smooth" })}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="explore-card-grid" id="explore-subservices" role="tabpanel" aria-labelledby={`explore-tab-${selectedCategory.replaceAll(" ", "-")}`}>
        {selectedSubservices.map((service, index) => (
          <motion.article
            className="explore-card"
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .4, delay: index * .06, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="explore-card-media">
              <img src={service.image} alt={service.title} loading="lazy" />
              <span>{service.title}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
