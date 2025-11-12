export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-42 md:py-28">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-6xl font-semibold text-transparent md:text-7xl"
              data-aos="fade-up"
            >
              Russu Iulia
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-18 text-2xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Fullstack developer
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center "
                data-aos="fade-up">
                <a
                  href="#work"
                  className="w-55 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group bg-gradient-to-br from-[#6258a6] to-[#446b9e] group-hover:from-[#7166b5] group-hover:to-[#4f7cb2] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-[#64748b] dark:focus:ring-[#64748b] shadow-md"
                >
                  <span className="w-55 relative px-8 py-3 transition-all ease-in duration-150 bg-[#1e293b] dark:bg-[#0f172a] rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent text-lg ">
                    My experience
                  </span>
                </a>
                <div className="px-3"></div>
                <a
                  href="#contact"
                  className="w-55 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100 rounded-full group bg-gradient-to-br from-[#6258a6] to-[#446b9e] group-hover:from-[#7166b5] group-hover:to-[#4f7cb2] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-[#64748b] dark:focus:ring-[#64748b] shadow-md"
                >
                  <span className="w-55 relative px-8 py-3 transition-all ease-in duration-150 bg-[#1e293b] dark:bg-[#0f172a] rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent text-lg ">
                    Contacts
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
