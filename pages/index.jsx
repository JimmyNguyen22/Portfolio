import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import Image from "next/image";
import jimmy from "../public/jimmy.jpg";
import shopee from "../public/shopee.png";
import quanlinhanvien from "../public/quanlinhanvien.png";
import sassweb from "../public/sassweb.png";
import samar from "../public/samar.png";
import hoobank from "../public/hoobank.png";
import bootstrap from "../public/bootstrap.png";
import html from "../public/html5.svg";
import css from "../public/css-3.svg";
import bs from "../public/bootstrap-4.svg";
import sass from "../public/sass-1.svg";
import tail from "../public/tailwindcss.svg";
import js from "../public/JavaScript_logo.svg";
import ajax from "../public/ajax.png";
import axios from "../public/axios.png";
import github from "../public/github.png";
import es6 from "../public/es6.svg";
import { Fragment, useState } from "react";
import { Modal } from "../components/Modal";

const project = [
  {
    id: 1,
    name: "Shopee",
    desc: "web product shoe shop get api ",
    tech: "HTML, SCSS, JS ,Axios, Postman",
    img: shopee,
    linkGit: "https://github.com/JimmyNguyen22/shopeeJs",
    linkDemo: "https://jimmynguyen22.github.io/shop/shopee.html",
    linkYouTube: (
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/Kv5NHwKOmzI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 2,
    name: "Staff Management",
    desc: "Employee Payroll Calculate Program and CRUD",
    tech: "HTML/CSS/JS ,Bootstrap",
    img: quanlinhanvien,
    linkGit: "https://github.com/JimmyNguyen22/QuanLyNhanVien_CRUD",
    linkDemo: "https://quanlynhanvien-crud.surge.sh/",
    linkYouTube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hbeDPYq-_Kg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 3,
    name: "E-learning landing page",
    desc: "Build layout professional with sass and rule BEM",
    tech: "SCSS ,JS , OWL carousel, Bootstrap, Swiper",
    img: sassweb,
    linkGit: "https://github.com/JimmyNguyen22/SASS_landingPage",
    linkDemo: "https://jimmynguyen22.github.io/SASS_landingPage/",
    linkYouTube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qskxe6No2qY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 4,
    name: "Samar",
    desc: "Web landing page with modern UI/UX ",
    tech: "HTML/CSS/JS , OWL carousel, Animate, Wowjs, Swiper",
    img: samar,
    linkGit: "https://github.com/JimmyNguyen22/shopeeJs",
    linkDemo: "https://jimmynguyen22.github.io/shop/shopee.html",
    linkYouTube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/d3ACgRob4h8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 5,
    name: "Landing page",
    desc: "Web landing page form layout design",
    tech: "HTML/CSS/JS , Bootstrap",
    img: bootstrap,
    linkGit: "https://github.com/JimmyNguyen22/Capstone_landingPage",
    linkDemo:
      "https://jimmynguyen22.github.io/Capstone_landingPage/capstone.html",
    linkYouTube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fFHA8xBNblA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 6,
    name: "Hoobank",
    desc: "Web fully responsive with a modern UI/UX",
    tech: "Base Reactjs, ViteJs, Tailwindcss",
    img: hoobank,
    linkGit: "https://github.com/JimmyNguyen22/landingPage_reactjs",
    linkDemo: "https://hoobank-ladingpage.surge.sh/",
    linkYouTube: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tRN89QcYhU0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="bg-white px-10 md-px-20 lg:px-40 dark:bg-gray-900 dark:text-white ">
          <section className=" min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">welcome my portfolio</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  ></BsFillMoonStarsFill>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/17qXhVlEGiwcZ4VyTJDMcebCxyNdgmRcF/view?usp=sharing"
                    target="_blank"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8 text-white"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="md:flex">
              <div className="mx-auto overflow-hidden mt-20 md:w-80 sm:w-40">
                <Image src={jimmy} className="rounded-lg"></Image>
              </div>

              <div className="text-center p-10 ">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
                  Lý Vĩnh Phú ( Jimmy )
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl">Fontend Developer</h3>
                <p
                  className="text-md text-left py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto
            dark:text-gray-300"
                >
                  Good day, everyone! I'm often passionate about learning new
                  technologies and always keep concentrated on improving my self
                  skills. Being patient and responsible for working help me
                  implement completely assigned tasks.
                </p>
                <p
                  className="text-md text-left py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto
            dark:text-gray-300"
                >
                  I always put my heart and soul into every single website that
                  I develop. I guess that's all I have to share about myself.
                  Hope that I can contribute to the development of your company.
                  Thank you for reading!
                </p>
              </div>
            </div>

            <div className="text-6xl flex justify-center gap-16 py-3 text-gray-600  ">
              <a href="https://github.com/JimmyNguyen22" target="_blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/v%C4%A9nh-ph%C3%BA-7156b9247/"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a href="#">
                <AiFillYoutube></AiFillYoutube>
              </a>
            </div>
          </section>

          <section>
            <h1 className="text-4xl py-1">My Skills</h1>
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
              Basic knowledge of{" "}
              <span className="text-teal-500">
                HTML5, CSS3, Boostrap 5, SCSS, Javascript (ES5/ES6), AJAX,
                RESTfull API, OOP, Git
              </span>{" "}
            </p>
            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 w-max	">
              <div className="flex gap-10 items-center">
                <span>
                  <Image src={html} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={css} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={bs} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={sass} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={tail} width={50} height={50}></Image>
                </span>
              </div>

              <div className="flex gap-10 items-center mt-5">
                <span>
                  <Image src={js} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={es6} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={ajax} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={axios} width={50} height={50}></Image>
                </span>
                <span>
                  <Image src={github} width={50} height={50}></Image>
                </span>
              </div>
            </div>
          </section>

          <section>
            <h1 className="text-4xl py-1 mt-10">My Projects</h1>

            <div className="flex flex-col gap-7 py-10 lg:flex-row lg:flex-wrap">
              {project.map((item) => {
                return (
                  <div
                    className="w-[380px] h-[510px] relative	shadow-lg overflow-hidden rounded-xl dark:bg-gray-800"
                    key={item.id}
                  >
                    <header className="overlay relative cursor-pointer">
                      <Image
                        src={item.img}
                        className="img rounded-xl object-cover h-[250px]"
                        layout="reponsive"
                      ></Image>
                      <a
                        className="absolute left-[-100%] top-0 bg-red-50 opacity-60 h-full w-full rounded-xl"
                        onClick={() => {
                          setModal(true);
                        }}
                      >
                        <AiOutlinePlayCircle className="play absolute top-[50%] left-[50%]  text-5xl	" />
                      </a>
                    </header>

                    <div className="p-5">
                      <div className="text-2xl text-teal-500 uppercase text-center mb-3">
                        <h1>{item.name}</h1>
                      </div>
                      <p className="text-lg">
                        <span className="text-teal-600 text-xl">
                          - Description:
                        </span>{" "}
                        {item.desc}
                      </p>{" "}
                      <p className="text-lg">
                        <span className="text-teal-600 text-xl">
                          - Technology:
                        </span>{" "}
                        {item.tech}
                      </p>
                    </div>
                    <footer className="absolute bottom-0 left-0 right-0 flex justify-between gap-5 pb-5 pl-5 pr-5">
                      <a
                        href={item.linkGit}
                        target="_blank"
                        className="bg-gradient-to-r min-w-[147px] text-center from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white"
                      >
                        Link Github
                      </a>

                      <a
                        href={item.linkDemo}
                        target="_blank"
                        className="bg-red-600 min-w-[147px] text-center px-4 py-2 rounded-md text-white"
                      >
                        Link Demo
                      </a>
                    </footer>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
      <Modal isVisible={modal} onClose={() => setModal(false)}>
        {project.map((item) => {
          return <div key={item.id}>{item.linkYouTube}</div>;
        })}
      </Modal>
    </Fragment>
  );
}
