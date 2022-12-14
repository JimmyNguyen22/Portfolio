import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import Image from "next/image";
import {
  jimmy,
  html,
  css,
  bs,
  sass,
  tail,
  js,
  ajax,
  axios,
  github,
  es6,
} from "./api";
import { project } from "./api";
import { Fragment, useState } from "react";
import { Modal } from "../components/Modal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(false);
  const [idModalItem, setIdModalItem] = useState(null);

  const handleModal = (id) => {
    setModal(true);
    const modal = document.querySelector(`#modal_${id}`);
  };

  return (
    <Fragment>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Lý Vĩnh Phú</title>
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
                    href="https://drive.google.com/file/d/12Rg10FjJkdlLw7YJsR1nu7La5mwvZpGm/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
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
                  Good day, everyone! I&apos;m often passionate about learning
                  new technologies and always keep concentrated on improving my
                  self skills. Being patient and responsible for working help me
                  implement completely assigned tasks.
                </p>
                <p
                  className="text-md text-left py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto
            dark:text-gray-300"
                >
                  I always put my heart and soul into every single website that
                  I develop. I guess that&apos;s all I have to share about
                  myself. Hope that I can contribute to the development of your
                  company. Thank you for reading!
                </p>
              </div>
            </div>

            <div className="text-6xl flex justify-center gap-16 py-3 text-gray-600  ">
              <a
                href="https://github.com/JimmyNguyen22"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/v%C4%A9nh-ph%C3%BA-7156b9247/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a
                href="https://www.youtube.com/channel/UC9V1l9M34WbDUWFznrqkDNg/videos"
                rel="noreferrer"
                target="_blank"
              >
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
            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300 sm:w-full lg:w-max">
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
                    <header className="overlay relative">
                      <Image
                        src={item.img}
                        className="img rounded-xl object-cover h-[250px]"
                        layout="reponsive"
                      ></Image>
                      {/* thay div -> a */}
                      <div
                        className="absolute left-[-100%] top-0 bg-red-50 opacity-60 h-full w-full rounded-xl cursor-pointer"
                        onClick={() => {
                          handleModal(item.id);
                        }}
                      >
                        <AiOutlinePlayCircle className="play absolute top-[50%] left-[50%]  text-5xl	" />
                      </div>
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
                        rel="noreferrer"
                        className="bg-gradient-to-r min-w-[147px] text-center from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white"
                      >
                        Link Github
                      </a>

                      <a
                        href={item.linkDemo}
                        target="_blank"
                        rel="noreferrer"
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
        {/* {project.filter((item) => {
          if (item.id === 1) {
            return <div key={item.id}>{item.linkYouTube}</div>;
          }
        })} */}

        {project.map((item) => {
          return (
            <div key={item.id} id={`modal_${item.id}`}>
              {item.linkYouTube}
            </div>
          );
        })}
      </Modal>
    </Fragment>
  );
}
