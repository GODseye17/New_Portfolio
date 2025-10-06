import Logo from "../components/Logo";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import DotsPattern from "../components/DotsPattern";
import Header from "../components/Header";

export default function Projects() {
  return (
    <div className="min-h-screen bg-dev-bg text-dev-white font-fira-code">
      {/* Background decorative elements (reuse style from home) */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[283px] left-[31px]">
          <DotsPattern rows={5} cols={2} />
        </div>
        <div className="absolute top-[1622px] right-[83px]">
          <DotsPattern rows={5} cols={4} />
        </div>
        <div className="absolute bottom-[103px] left-[26px]">
          <DotsPattern rows={5} cols={3} />
        </div>
        <div className="absolute top-[1453px] left-0 w-[155px] h-[155px] border border-dev-gray" />
        <div className="absolute top-[488px] right-[77px] w-[155px] h-[155px] border border-dev-gray" />
        <div className="absolute top-0 right-[77px] w-[91px] h-[91px] border border-dev-gray" />
      </div>

      <div className="max-w-[1366px] mx-auto px-4 lg:px-[171px]">
        {/* Header (reused layout – mark works active) */}
        <Header active="projects" />

        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-dev-white font-fira-code text-base">
            <span className="text-dev-primary">/</span>
            <span>projects</span>
          </div>
          <p className="text-dev-gray font-fira-code text-sm mt-2">list of my projects</p>
        </div>

        {/* Complete Apps */}
        <SectionHeader title="complete-apps" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
            liveLink="https://qna-ai-xi.vercel.app/"
            codeLink="https://github.com/GODseye17/qna_AI.git"
          />
          <ProjectCard
            title="Stock Portfolio"
            description="Stock Portfolio Tracker"
            technologies={["Next.js","Websockets","TailwindCSS","Typescript","Google Finance API"]}
            image="/images/Stock.png"
            liveLink="https://stock-portfolio-red.vercel.app/"
            codeLink="https://github.com/GODseye17/Stock_Portfolio.git"
          />
          <ProjectCard
            title="Patient Care App"
            description="Patient Tracking Dashboard"
            technologies={["React.js", "TailwindCSS", "JS","Pglite"]}
            image="/images/patient.png"
            liveLink="https://medblocks-patient-app-eight.vercel.app/"
            codeLink="https://github.com/GODseye17/medblocks-patient-app.git"
          />
          <ProjectCard
            title="Portfolio"
            description="You’re using it rn"
            technologies={["React.js", "TS", "Figma"]}
            image="/images/PortImg.png"
            
            
          />
        </div>

        {/* Small Projects */}
        <SectionHeader title="small-projects" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          <ProjectCard
            title="Infinite Calendar"
            description="Minimal infinite-scrolling calendar UI"
            technologies={["TypeScript", "Vite", "TailwindCSS"]}
            image="/images/calendar.png"
            liveLink="https://infinite-calendar-sooty.vercel.app/"
            codeLink="https://github.com/GODseye17/Infinite_Calendar.git"
          />
          <ProjectCard
            title="Fork-N-Cork Company website"
            description="Restaurant and bar website"
            technologies={["TypeScript", "Vite", "TailwindCSS"]}
            image="/images/com.png"
            liveLink="https://fncranchi.com/"
            codeLink="https://github.com/GODseye17/fork-n-cork-luxe-site.git"
          />
          <ProjectCard
            title="E-commerce Website Landing"
            description="Landing page for an e-commerce app"
            technologies={["Next.js", "TailwindCSS", "TypeScript"]}
            image="/images/landas.png"
            liveLink="https://supercoder-project-nu.vercel.app/"
            codeLink="https://github.com/GODseye17/Supercoder-Project.git"
          />
          <ProjectCard
            title="AI News Anchor"
            description="AI-generated news anchor demo"
            technologies={["Streamlit", "Python"]}
            image="/placeholder.svg"
            codeLink="https://github.com/GODseye17/AI-News-Anchor.git"
          />
          <ProjectCard
            title="Vibe coded 3js Portfolio"
            description="3D portfolio built with three.js"
            technologies={["Three.js", "React", "Vite"]}
            image="/images/3js.png"
            liveLink="https://portfolio-3js-one.vercel.app/"
            codeLink="https://github.com/GODseye17/Portfolio-3js.git"
          />
        </div>

        {/* Footer slice */}
        <footer className="border-t border-dev-gray pt-8 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Logo />
                  <span className="text-dev-white font-fira-code text-base font-medium">
                    Yash
                  </span>
                </div>
                <a href="mailto:yshankaram17@gmail.com" className="text-dev-gray font-fira-code text-base">
                  yshankaram17@gmail.com
                </a>
              </div>
              <p className="text-dev-white font-fira-code text-base">
                Fullstack Developer and AI Engineering
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-dev-white font-fira-code text-2xl font-medium">
                Media
              </h3>
              <div className="flex gap-2">
                <a href="https://github.com/GODseye17" target="_blank" rel="noreferrer"><img src="/images/GGithub.svg" alt="GitHub" className="w-8 h-8" /></a>
                <a href="https://www.linkedin.com/in/yash-shankaram-035426237/" target="_blank" rel="noreferrer"><img src="/images/Llinkedin.svg" alt="LinkedIn" className="w-8 h-8" /></a>
                <a href="mailto:yshankaram17@gmail.com"><img src="/images/mail.svg" alt="Email" className="w-8 h-8" /></a>
                
              </div>
            </div>
          </div>

          
        </footer>
      </div>
    </div>
  );
}

