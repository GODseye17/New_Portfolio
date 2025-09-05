import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import DotsPattern from "../components/DotsPattern";
import Logo from "../components/Logo";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-dev-bg text-dev-white font-fira-code">
      {/* Background decorations */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[283px] left-[31px]">
          <DotsPattern rows={5} cols={2} />
        </div>
        <div className="absolute top-0 right-[77px] w-[91px] h-[91px] border border-dev-gray" />
        <div className="absolute bottom-[103px] left-[26px]">
          <DotsPattern rows={5} cols={3} />
        </div>
      </div>

      <div className="max-w-[1366px] mx-auto px-4 lg:px-[171px]">
        <Header active="contacts" />

        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-dev-white font-fira-code text-base">
            <span className="text-dev-primary">/</span>
            <span>contacts</span>
          </div>
          <p className="text-dev-gray font-fira-code text-sm mt-2">Who am i?</p>
        </div>

        {/* Intro + cards */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-8 items-start">
          <p className="text-dev-gray leading-6 max-w-[536px]">
            I'm interested in full-time opportunities. However, if you have other
            request or question, don't hesitate to contact me
          </p>

          

          <div className="border border-dev-gray p-4 w-full md:w-[270px]">
            <div className="text-dev-white font-medium mb-2">Message me here</div>
            <a href="https://github.com/GODseye17" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dev-gray text-sm mb-2">
              <img src="/images/GGithub.svg" alt="GitHub" className="w-5 h-5" /> github.com/GODseye17
            </a>
            <a href="https://www.linkedin.com/in/yash-shankaram-035426237/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dev-gray text-sm mb-2">
              <img src="/images/Llinkedin.svg" alt="LinkedIn" className="w-5 h-5" /> LinkedIn profile
            </a>
            <a href="mailto:yshankaram17@gmail.com" className="flex items-center gap-2 text-dev-gray text-sm mb-2">
              <img src="/images/mail.svg" alt="Email" className="w-5 h-5" /> yshankaram17@gmail.com
            </a>
            
          </div>
        </section>

        {/* All media */}
        <SectionHeader title="all-media" className="mb-6" />
        <div className="flex flex-wrap items-center gap-6 mb-20">
          <a href="https://github.com/GODseye17" target="_blank" rel="noreferrer"><img src="/images/GGithub.svg" alt="GitHub" className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/yash-shankaram-035426237/" target="_blank" rel="noreferrer"><img src="/images/Llinkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="mailto:yshankaram17@gmail.com"><img src="/images/mail.svg" alt="Email" className="w-6 h-6" /></a>
          
        </div>

        {/* Footer slice */}
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
                <a href="mailto:yshankaram17@gmail.com" className="text-dev-gray font-fira-code text-base">yshankaram17@gmail.com</a>
              </div>
              <p className="text-dev-white font-fira-code text-base">
                Web designer and front-end developer
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


