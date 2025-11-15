import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6" id='work'>
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Work Experience
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-6xl font-semibold text-transparent md:text-5xl">
              Projects
            </h2>

          </div>
          {/* Spotlight items */}
          <div className="text-white-900 group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">

            <Spotlight>
              {/* Card 1 */}
              <div
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br ">
                  <div className="p-6">
                    <div className="flex items-center gap-3 pb-4">
                      <img
                        src="https://iasig.md/favicon-32x32.png"
                        alt="Logo"
                        className="w-7 h-7 object-contain"
                      />
                      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-3xl">
                        iAsig
                      </h2>
                    </div>
                    <p className="text-indigo-200/65">
                      The first fully digital service in the Republic of Moldova.</p>
                    <div className="mb-3">
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          Next.js
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          React
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          Firebase
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          TailwindCSS
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mb-8 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          TypeScript
                        </span>
                      </span>
                      <br />
                      <a href="https://iasig.md/" target="_blank"
                        rel="noopener noreferrer" className="relative z-50 mt-5 text-indigo-300 font-nacelle text-lg md:text-lg pointer-events-auto">
                        View project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Spotlight>
            {/* ==== */}
            <Spotlight>
              <div
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br ">
                  <div className="p-6">
                    <div className="flex items-center gap-3 pb-4">
                      <img
                        src="/images/easyreservLogo.png"
                        alt="Logo"
                        className="w-7 h-7 object-contain"
                      />
                      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-3xl">
                        EasyReserv
                      </h2>
                    </div>
                    <p className="text-indigo-200/65">
                      Booking app for any type of business. Restaurants, hotels, gyms and more.
                    </p>
                    <div className="mb-3">
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          React
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          Material UI
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          MySQL
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mb-8 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          TypeScript
                        </span>
                      </span>
                      <br />
                      <a href="https://easyreserv.io/" target="_blank"
                        rel="noopener noreferrer" className="relative z-50 mt-5 text-indigo-300 font-nacelle text-lg md:text-lg pointer-events-auto">
                        View project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Spotlight>

            {/* ==== */}
            <Spotlight>

              <div
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br ">
                  <div className="p-6">
                    <div className="flex items-center gap-3 pb-4">
                      <img
                        src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/288760386_162905246237458_7205974536096114806_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LE6qbOPMFBEQ7kNvwHGtGrK&_nc_oc=AdlYlreJRy5w8xc8OEGjNFxjw8NnZKOHBqvAJ9LGDWEIKenpw0_Ns6jesaXd7_Gc1Vo&_nc_zt=23&_nc_ht=scontent-otp1-1.xx&_nc_gid=1Cz3as3DHZJySJ9ULzgEVw&oh=00_Afgp1ALry5fJxuNKfmLzWEC_FRyZoRXYxbp44IMOsjEj8w&oe=6919DF63"
                        alt="Logo"
                        className="w-7 h-7 object-contain"
                      />
                      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-3xl">
                        Wonki
                      </h2>
                    </div>
                    <p className="text-indigo-200/65">
                      Private kindergarden in Scandinavian style with unique programs. </p>
                    <div className="mb-3">
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          React
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          Bootstrap
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          MySQL
                        </span>
                      </span>
                      <span className="border border-indigo-500 mr-3 mb-8 mt-4 btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-lg font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          TypeScript
                        </span>
                      </span>
                      <br />
                      <a href="https://brainstorm.md/" target="_blank"
                        rel="noopener noreferrer" className="relative z-50 mt-5 text-indigo-300 font-nacelle text-lg md:text-lg pointer-events-auto">
                        View project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
