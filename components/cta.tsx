import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const LinkedInIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-6 w-6 mb-2"
      viewBox="0 0 382 382"
    >
      <path
        fill="currentColor"
        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  
      C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  
      H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  
      c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  
      s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  
      c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  
      c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  
      c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  
      L341.91,330.654L341.91,330.654z"
      />
    </svg>
  );

  const EmailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mb-2"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={3}
        y={5}
        width={18}
        height={14}
        rx={2}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );

  const GitHubIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.096.814 2.21 0 1.595-.014 2.88-.014 3.27 0 .32.192.694.8.576C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
    </svg>

  );
  return (
    <section className="relative overflow-hidden py-12 md:py-20" id='contact'>
      {/* Background blur shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w6xl mx-auto">
        <div className="bg-gray-900/50 py-12 md:py-20 rounded-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-6xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Contact me
            </h2>

            {/* Contact links */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mx-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/russu-iulia/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {LinkedInIcon}
                <span className="text-lg font-semibold">LinkedIn</span>
                <span className="mt-1 text-sm text-white/70 group-hover:text-white">
                  Connect with me
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:russuiulia.md@gmail.com"
                className="group bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                {EmailIcon}
                <span className="text-lg font-semibold">Email</span>
                <span className="mt-1 text-sm text-white/70 group-hover:text-white">
                  Send me a message
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/russuiulia"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                {GitHubIcon}

                <span className="text-lg font-semibold">GitHub</span>
                <span className="mt-1 text-sm text-white/70 group-hover:text-white">
                  See my projects
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
