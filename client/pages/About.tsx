import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import DotsPattern from "../components/DotsPattern";

export default function About() {
  return (
    <div className="min-h-screen bg-dev-bg text-dev-white font-fira-code">
      {/* Background decorations */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[283px] left-[31px]">
          <DotsPattern rows={5} cols={2} />
        </div>
        <div className="absolute top-[488px] right-[77px] w-[155px] h-[155px] border border-dev-gray" />
        <div className="absolute bottom-[103px] left-[26px]">
          <DotsPattern rows={5} cols={3} />
        </div>
      </div>

      <div className="max-w-[1366px] mx-auto px-4 lg:px-[171px]">
        <Header active="about-me" />

        <div className="mb-10">
          <div className="flex items-center gap-2 text-dev-white font-fira-code text-base">
            <span className="text-dev-primary">/</span>
            <span>about-me</span>
          </div>
          <p className="text-dev-gray font-fira-code text-sm mt-2">who am i?</p>
        </div>

        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
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
          </div>
          <div className="relative">
            <img
              src="/images/me2.png"
              alt="About Yash"
              className="w-full max-w-[339px] h-auto object-cover mx-auto"
            />
            <DotsPattern className="absolute top-12 -left-4" rows={5} cols={5} />
            <DotsPattern className="absolute bottom-48 right-5" rows={4} cols={5} />
            <div className="absolute bottom-0 left-12 w-[271px] h-px bg-dev-primary" />
          </div>
        </section>

        <section className="mb-24">
          <SectionHeader title="skills" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-dev-gray p-4">
              <h3 className="text-dev-white font-fira-code font-bold mb-2">Languages</h3>
              <div className="w-full h-px bg-dev-gray mb-2" />
              <div className="text-dev-gray">TypeScript,C++, Python, JavaScript</div>
            </div>
            <div className="border border-dev-gray p-4">
              <h3 className="text-dev-white font-fira-code font-bold mb-2">Databases</h3>
              <div className="w-full h-px bg-dev-gray mb-2" />
              <div className="text-dev-gray">SQLite, PostgreSQL, Mongo,PgLite</div>
            </div>
            <div className="border border-dev-gray p-4">
              <h3 className="text-dev-white font-fira-code font-bold mb-2">Frameworks</h3>
              <div className="w-full h-px bg-dev-gray mb-2" />
              <div className="text-dev-gray">React, Vue, Node.js, Express.js</div>
            </div>
          </div>
        </section>

        {/* Fun facts */}
        <section className="mb-24 relative">
          <SectionHeader title="my-fun-facts" className="mb-6" />
          {/* Decorative outline */}
          <img
            src="/images/style-outline.svg"
            alt=""
            className="hidden md:block absolute right-24 -top-6 w-[53px] h-[53px] opacity-90"
          />
          <div className="flex flex-wrap gap-3">
            {[
              "I like summer more than winter",
              "I often go out with my friends for fun activities(🍺)",
              "I like pizza and pasta",
              "BIG BIG MARVEL GEEK!",
              "My favorite time is my sleep time",
              "Recent graduate from MIT Manipal",
              "I mostly spend time on my phone, browsing the internet.",
            ].map((fact) => (
              <span
                key={fact}
                className="border border-dev-gray text-dev-gray px-3 py-1 inline-flex items-center text-sm"
              >
                {fact}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


