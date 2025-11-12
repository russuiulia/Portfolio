import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import Spotlight from './spotlight';

export default function Features() {


  return (
    <section className="relative" id='about' data-aos="fade-up">

      <div className="mx-auto max-w-6xl px-4 sm:px-6" >
        <div className="border-t pt-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12" >
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                My journey
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-6xl font-semibold text-transparent md:text-5xl">
              About me
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pb-12">
          <Spotlight className='col-span-3 md:col-span-2'>
            {/* Card 1 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br p-6">
                <p className="mb-4 text-lg leading-relaxed">
                  I'm a <span className="font-semibold text-indigo-400">Fullstack Developer </span>
                  with 5+ years of experience in web development. I specialize in building scalable applications, designing intuitive user interfaces,
                  and integrating APIs using <span className="font-semibold text-indigo-400">React, Next.js, Firebase, and TypeScript</span>.
                  I am passionate about improving system performance and creating seamless user experiences.
                </p>

                <h2 className="text-2xl font-semibold mb-2 text-indigo-400">Work Experience</h2>
                <ul className="mb-4 space-y-4 list-disc list-inside">
                  <li>
                    <span className="font-semibold">iAsig</span> (12/2023 - 11/2025): Developed the first fully digital insurance platform in Moldova,
                    including RESTful APIs, frontend/backend with React/Next.js/Firebase, a Telegram mini-app, and dynamic content via Sanity.io.
                    <a href="https://iasig.md/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline ml-1">Contacts</a>
                  </li>
                  <li>
                    <span className="font-semibold">iShunea Tech Solutions</span> (06/2023 - 11/2023): Built EasyReserv, a React/Node.js restaurant management app with pixel-perfect frontend, interactive drag-and-drop table layout system, and mentoring interns.
                    <a href="https://ishunea.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline ml-1">Contacts</a>
                  </li>
                  <li>
                    <span className="font-semibold">Wonki.md</span> (10/2022 - 02/2023): Enhanced a kindergarten website with React components and MySQL integration.
                    <a href="https://brainstorm.md/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline ml-1">Contacts</a>
                  </li>
                  <li>
                    <span className="font-semibold">Labs42</span> (05/2018 - 08/2020): Developed and optimized Angular/Express.js apps with responsive design and RESTful APIs.
                    <a href="https://labs42.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline ml-1">Contacts</a>
                  </li>
                </ul>
                {/* 
                <h2 className="text-2xl font-semibold mb-2 text-indigo-400">Education</h2>
                <ul className="mb-4 space-y-4 list-disc list-inside">
                  <li>
                    <span className="font-semibold">Bachelor’s Degree in Information Technologies</span><br />
                    <i>Technical University of Moldova</i>
                  </li>
                  <li>
                    <span className="font-semibold">Diploma of Professional Studies in Web Development</span><br />
                    <i>Center of Excellence in Informatics and Information Technologies</i>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2 text-indigo-400">Achievements</h2>
                <ul className="list-disc list-inside mb-4 space-y-4">
                  <li>Awarded 1st place in ethical hacking contest (2022)
                    <br />
                    <i>UTM CTF contest participant</i>
                  </li>
                </ul>


                <h2 className="text-2xl font-semibold mb-2 text-indigo-400">Languages</h2>
                <ul className="mb-4 space-y-4">
                  <li><span className="font-semibold">English:</span> Full Professional Proficiency</li>
                  <li><span className="font-semibold">Russian:</span> Full Professional Proficiency</li>
                  <li><span className="font-semibold">Romanian:</span> Native or Bilingual Proficiency</li>
                </ul> */}

                <div className="py-6">
                  {["Typescript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Cloudflare",
                    "Firebase",
                    "MongoDB",
                    "TailwindCSS",
                    "Bootstrap",
                    "Problem solving",
                    "Quick learner"].map((item: any, i: any) => {
                      return (
                        <span key={i} className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            {item}
                          </span>
                        </span>)
                    })}

                </div>
              </div>
            </div>
          </Spotlight>

          <div className="col-span-3 md:col-span-1">
            <div className="flex justify-center md:items-center items-start h-full">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                View CV
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
