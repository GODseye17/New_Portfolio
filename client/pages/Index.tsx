import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import DotsPattern from "../components/DotsPattern";
import SectionHeader from "../components/SectionHeader";
import DevButton from "../components/DevButton";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";

export default function Index() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = ["home", "projects", "about-me", "contacts"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (key: string) =>
    `${active === key ? "text-dev-white" : "text-dev-gray"} font-fira-code text-base font-${
      active === key ? "medium" : "normal"
    }`;

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-dev-bg text-dev-white font-fira-code">
      {/* Background decorative elements */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top left dots */}
        <div className="absolute top-[283px] left-[31px]">
          <DotsPattern rows={5} cols={2} />
        </div>

        {/* Right side dots */}
        <div className="absolute top-[1622px] right-[83px]">
          <DotsPattern rows={5} cols={4} />
        </div>

        {/* Bottom left dots */}
        <div className="absolute bottom-[103px] left-[26px]">
          <DotsPattern rows={5} cols={3} />
        </div>

        {/* Decorative borders */}
        <div className="absolute top-[1453px] left-0 w-[155px] h-[155px] border border-dev-gray" />
        <div className="absolute top-[488px] right-[77px] w-[155px] h-[155px] border border-dev-gray" />
        <div className="absolute top-0 right-[77px] w-[91px] h-[91px] border border-dev-gray" />
      </div>

      {/* Side Media Bar (hidden on mobile) */}
      <div className="hidden md:flex fixed left-4 top-0 h-full flex-col items-center justify-center gap-2 z-10">
        <div className="w-px h-48 bg-dev-gray" />
        <div className="flex flex-col gap-2">
          <a href="https://github.com/GODseye17" target="_blank" rel="noreferrer">
            <img src="/images/GGithub.svg" alt="GitHub" className="w-8 h-8 opacity-70 hover:opacity-100" />
          </a>
          <a href="https://www.linkedin.com/in/yash-shankaram-035426237/" target="_blank" rel="noreferrer">
            <img src="/images/Llinkedin.svg" alt="LinkedIn" className="w-8 h-8 opacity-70 hover:opacity-100" />
          </a>
          <a href="mailto:yshankaram17@gmail.com">
            <img src="/images/mail.svg" alt="Email" className="w-8 h-8 opacity-70 hover:opacity-100" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1366px] mx-auto px-4 lg:px-[171px]">
        {/* Header */}
        <Header active={active} />

        {/* Hero Section */}
        <section id="home" className="flex flex-col lg:flex-row justify-between items-start mb-20 min-h-[423px]">
          <div className="max-w-[537px] pt-[74px]">
            <h1 className="text-dev-white font-fira-code text-[28px] md:text-[32px] font-bold leading-tight md:leading-normal mb-8">
              Yash Shankaram is a <span className="text-dev-primary">Full Stack Developer</span>{" "}
              and <span className="text-dev-primary">Loves AI engineering</span>
            </h1>
            <p className="text-dev-gray font-fira-code text-base font-normal leading-[25px] mb-6 max-w-[463px]">
              He crafts responsive websites where technologies meet creativity
            </p>
            <a href="#contacts"><DevButton>Contact me!!</DevButton></a>
          </div>

          <div className="relative">
            {/* Decorative outline behind photo */}
            <img
              src="/images/style-outline.svg"
              alt=""
              className="hidden md:block absolute bottom-16 left-4 w-[320px] h-auto z-0 pointer-events-none select-none"
            />
            <img
              src="/images/me.png"
              alt="Yash Shankaram profile"
              className="relative z-10 w-full max-w-[457px] h-auto object-cover ml-0 md:ml-3 mx-auto"
            />
            <DotsPattern
              className="absolute bottom-0 right-0"
              rows={5}
              cols={5}
            />

            {/* Status indicator */}
            <div className="md:absolute md:bottom-0 md:left-16 z-20 flex items-center gap-2 p-2 border border-dev-gray bg-dev-bg mt-4 md:mt-0">
              <div className="w-4 h-4 border border-dev-primary bg-dev-primary" />
              <span className="text-dev-gray font-fira-code text-base font-normal">
                Currently working on{" "}
                <span className="text-dev-white font-bold">Vivum.app</span>
              </span>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="flex justify-center mb-24">
          <div className="relative max-w-[712px] border border-dev-gray bg-dev-bg p-8">
            <div className="absolute -top-3 left-8 bg-dev-bg px-2">
              <svg width="42" height="29" viewBox="0 0 42 29" fill="none">
                <rect width="41.472" height="28.704" fill="#282C33" />
                <path
                  d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
                  fill="#ABB2BF"
                />
              </svg>
            </div>

            <p className="text-dev-white font-fira-code text-xl md:text-2xl font-medium text-center">
              With great power comes great responsibility to not push directly to main.
            </p>

            <div className="absolute -bottom-6 right-7 border border-dev-gray bg-dev-bg p-3">
              <span className="text-dev-white font-fira-code text-2xl font-normal">
                - Dr. Me
              </span>
            </div>

            <div className="absolute -bottom-3 right-8 bg-dev-bg px-2">
             
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="flex justify-between items-center mb-12">
            <SectionHeader title="projects" />
            <a
              href="/projects"
              className="text-dev-white font-fira-code text-base font-medium hover:underline"
            >
              View all ~~&gt;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
              title="Vivum.app"
              description="AI Research Assistant"
              technologies={["React.js/Next.js", "TailwindCSS","Typescript", "Python", "Node.js","Langchain","GraphRAG","PostgreSQL"]}
              image="/images/vvium.png"
              liveLink="https://vivum.app"
              
            />

            <ProjectCard
              title="AI Document QnA"
              description="Gemini AI used to answer questions from documents"
              technologies={[
                "Bootstrap",
                "Express.js",
                "Node.js",
                "HTML",
                "CSS",
                "Python",
                "Javascript",
                "Gemini API",
              ]}
              image="/images/AiQnA.png"
              liveLink="https://qna-ai-8wok.vercel.app/"
              codeLink="https://github.com/GODseye17/qna_AI.git"
            />

            <ProjectCard
              title="Stock Portfolio"
              description="Stock Portfolio Tracker"
              technologies={["Next.js","Websockets","TailwindCSS","Typescript","Google Finance API"]}
              image="/images/Stock.png"
              liveLink="https://stock-portfolio-opal-ten.vercel.app/"
              codeLink="https://github.com/GODseye17/Stock_Portfolio.git"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <SectionHeader title="skills" className="mb-12" />

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="relative">
              <DotsPattern className="mb-8" rows={5} cols={5} />
              <DotsPattern rows={5} cols={3} />

              <div className="absolute top-20 left-20 w-[52px] h-[52px] border border-dev-gray" />
              <div className="absolute top-0 left-48 w-[86px] h-[86px] border border-dev-gray" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              <div className="border border-dev-gray p-2">
                <div className="px-2 mb-2">
                  <h3 className="text-dev-white font-fira-code text-base font-bold">
                    Languages
                  </h3>
                </div>
                <div className="w-full h-px bg-dev-gray mb-2" />
                <div className="px-2 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      TypeScript
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      C++
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      Python
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      JavaScript
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-dev-gray p-2">
                <div className="px-2 mb-2">
                  <h3 className="text-dev-white font-fira-code text-base font-bold">
                    Databases
                  </h3>
                </div>
                <div className="w-full h-px bg-dev-gray mb-2" />
                <div className="px-2 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      SQLite
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      PostgreSQL
                    </span>
                  </div>
                  <div>
                    <span className="text-dev-gray font-fira-code text-base">
                      Mongo
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-dev-gray p-2">
                <div className="px-2 mb-2">
                  <h3 className="text-dev-white font-fira-code text-base font-bold">
                    Other
                  </h3>
                </div>
                <div className="w-full h-px bg-dev-gray mb-2" />
                <div className="px-2 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      HTML
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      CSS
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      EJS
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      SCSS
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      REST
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      Websockets
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-dev-gray p-2">
                <div className="px-2 mb-2">
                  <h3 className="text-dev-white font-fira-code text-base font-bold">
                    Tools
                  </h3>
                </div>
                <div className="w-full h-px bg-dev-gray mb-2" />
                <div className="px-2 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      VSCode
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      Cursor
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      Linux
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      Figma
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      Postman
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      Docker
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      Git
                    </span>
                   
                  </div>
                </div>
              </div>

              <div className="border border-dev-gray p-2">
                <div className="px-2 mb-2">
                  <h3 className="text-dev-white font-fira-code text-base font-bold">
                    Frameworks
                  </h3>
                </div>
                <div className="w-full h-px bg-dev-gray mb-2" />
                <div className="px-2 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      React/Next.js
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      FastAPI
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      Disnake
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      Langchain
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-dev-gray font-fira-code text-base">
                      Node.js+Express.js
                    </span>
                    <span className="text-dev-gray font-fira-code text-base">
                      HuggingFace Transformers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="mb-24 scroll-mt-24">
          <SectionHeader title="about-me" className="mb-16" />

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="max-w-[515px]">
            <p className="text-dev-gray font-fira-code text-base leading-[26px] mb-8">
              Hello, i'm Yash!
              <br />
              <br />
              I'm from Ranchi and a 2025 graduate from MIT Manipal in Information Technology. I’m passionate about turning ideas into full-scale applications that solve real problems and create impact.  
              I majorly focus on full-stack development with strong expertise in React, Node.js, and modern web technologies. 
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I always strive to learn
              about the newest technologies and frameworks.
            </p>
              <a href="/about"><DevButton>Read more -&gt;</DevButton></a>
            </div>

            <div className="relative">
              <img
                src="/images/me2.png"
                alt="About Yash"
                className="w-[339px] h-[507px] object-cover"
              />
              <DotsPattern
                className="absolute top-12 -left-4"
                rows={5}
                cols={5}
              />
              <DotsPattern
                className="absolute bottom-48 right-5"
                rows={4}
                cols={5}
              />
              <div className="absolute bottom-0 left-12 w-[271px] h-px bg-dev-primary" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacts" className="mb-24 scroll-mt-24">
          <SectionHeader title="contacts" className="mb-12" />

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-[505px]">
              <p className="text-dev-gray font-fira-code text-base font-medium leading-normal">
                I'm interested in freelance opportunities. However, if you have
                other request or question, don't hesitate to contact me
              </p>
            </div>

            <div className="border border-dev-gray p-4 min-w-[204px]">
              <h3 className="text-dev-white font-fira-code text-base font-bold mb-4">
                Message me here
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-8 h-8 text-dev-gray"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z" />
                  </svg>
                  <span className="text-dev-gray font-fira-code text-base">
                    @godbro17
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-8 h-8 text-dev-gray"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" />
                  </svg>
                  <span className="text-dev-gray font-fira-code text-base">
                    yshankaram17@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-dev-gray pt-8 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Logo />
                  <span className="text-dev-white font-fira-code text-base font-medium">
                    Yash Shankaram
                  </span>
                </div>
                <a href="mailto:yshankaram17@gmail.com" className="text-dev-gray font-fira-code text-base">
                  yshankaram17@gmail.com
                </a>
              </div>
              <p className="text-dev-white font-fira-code text-base">
                Full Stack Developer and AI Engineering
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-dev-white font-fira-code text-2xl font-medium">
                Media
              </h3>
              <div className="flex gap-2">
                <a href="https://github.com/GODseye17" target="_blank" rel="noreferrer">
                  <svg
                    className="w-8 h-8 text-dev-gray hover:text-dev-white transition-colors cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" />
                  </svg>
                </a>
              
                <a href="https://discord.com/users/godbro17" target="_blank" rel="noreferrer">
                  <svg
                    className="w-8 h-8 text-dev-gray hover:text-dev-white transition-colors cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          
        </footer>
      </div>
    </div>
  );
}
