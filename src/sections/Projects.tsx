import { projects } from "../data/projects";
import "../assets/styles/sections-styles/Projects.scss";
import ProjectItem from "../components/ProjectItem";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Projects: React.FC = () => {
  return (
    <section className="projects container" id="projects">
      <h2>Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1650: { slidesPerView: 4 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button href="https://github.com/annakrolikowska">
        Check out my GitHub
      </Button>
    </section>
  );
};

export default Projects;
