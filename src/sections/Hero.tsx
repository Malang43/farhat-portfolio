import {
  ArrowRight,
  GraduationCap,
  Network,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import {
  motion,
} from "motion/react";

import FadeIn
  from "../components/FadeIn";

import Magnet
  from "../components/Magnet";

import {
  socialLinks,
} from "../data/socialLinks";


export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B0A09] pt-24"
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <motion.div
          className="absolute right-[-80px] top-[80px] h-[620px] w-[620px] rounded-full bg-[#A94712]/[0.13] blur-[170px]"

          animate={{
            scale: [
              1,
              1.08,
              1,
            ],

            opacity: [
              0.7,
              1,
              0.7,
            ],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <motion.div
          className="absolute bottom-[-180px] left-[-160px] h-[500px] w-[500px] rounded-full bg-[#7A3210]/[0.08] blur-[160px]"

          animate={{
            scale: [
              1,
              1.1,
              1,
            ],
          }}

          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <div
          className="absolute inset-0 opacity-[0.035]"

          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",

            backgroundSize:
              "52px 52px",
          }}
        />

      </div>


      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.15fr_.85fr]">


        {/* ======================================
            LEFT SIDE
        ====================================== */}
        <div>


          {/* HI I'M */}
          <FadeIn
            delay={0}
            y={20}
          >

            <p className="mb-4 text-lg font-medium text-[#D8D0C7]">
              Hi, I'm
            </p>

          </FadeIn>


          {/* NAME */}
          <FadeIn
            delay={0.1}
            y={40}
          >

            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] text-[#F7F3ED] sm:text-6xl lg:text-7xl">

              M Farhat

              <span className="block text-[#E87524]">
                Mehdi
              </span>

            </h1>

          </FadeIn>


          {/* ROLE BADGES */}
          <FadeIn
            delay={0.2}
            y={25}
          >

            <div className="mt-7 flex flex-wrap items-center gap-3">


              <div className="inline-flex items-center gap-2 rounded-full border border-[#E87524]/30 bg-[#E87524]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#FF954D]">

                <GraduationCap
                  size={15}
                />

                Computer Engineering Student

              </div>


              <div className="inline-flex items-center gap-2 rounded-full border border-[#332A24] bg-[#151210] px-4 py-2 text-xs font-semibold text-[#D8D0C7]">

                <Network
                  size={14}
                  className="text-[#E87524]"
                />

                Intelligent Systems Developer

              </div>

            </div>

          </FadeIn>


          {/* MAIN HEADING */}
          <FadeIn
            delay={0.3}
            y={30}
          >

            <h2 className="mt-8 max-w-3xl text-2xl font-semibold leading-[1.4] text-[#E7E0D8] md:text-3xl">

              Building intelligent systems across

              <span className="text-[#FF8A32]">
                {" "}
                AI, automation, robotics and
                embedded technology.
              </span>

            </h2>

          </FadeIn>


          {/* DESCRIPTION */}
          <FadeIn
            delay={0.4}
            y={25}
          >

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#BEB5AC] md:text-lg">

              I combine software intelligence with
              real-world systems — developing
              machine-learning applications,
              AI automation, autonomous robotics
              and embedded intelligent solutions.

            </p>

          </FadeIn>


          {/* DOMAIN PILLS */}
          <FadeIn
            delay={0.5}
            y={20}
          >

            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "AI & Machine Learning",
                "Automation",
                "Robotics",
                "Embedded Systems",
              ].map(
                (
                  area,
                  index,
                ) => (

                  <motion.span
                    key={area}

                    initial={{
                      opacity: 0,
                      y: 10,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      delay:
                        0.55 +
                        index * 0.07,
                    }}

                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}

                    className="cursor-default rounded-lg border border-[#332A24] bg-[#151210] px-4 py-2 text-sm font-medium text-[#D8D0C7] transition-colors hover:border-[#E87524]/50 hover:text-[#FF8A32]"
                  >

                    {area}

                  </motion.span>

                ),
              )}

            </div>

          </FadeIn>


          {/* BUTTONS */}
          <FadeIn
            delay={0.65}
            y={25}
          >

            <div className="mt-10 flex flex-wrap gap-4">


              <motion.a
                href="#projects"

                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="group flex items-center gap-2 rounded-xl bg-[#E87524] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#FF8A32]"
              >

                Explore My Work

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </motion.a>


              <motion.a
                href="#skills"

                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="rounded-xl border border-[#332A24] bg-[#151210] px-6 py-3.5 font-semibold text-[#E7E0D8] transition-colors hover:border-[#E87524]/60 hover:text-[#FF8A32]"
              >

                View Skills

              </motion.a>


              <motion.a
                href={socialLinks.github}

                target="_blank"
                rel="noreferrer"

                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="flex items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-5 py-3.5 font-semibold text-[#E7E0D8] transition-colors hover:border-[#E87524]/60 hover:text-[#FF8A32]"
              >

                <FaGithub
                  size={18}
                />

                GitHub

              </motion.a>

            </div>

          </FadeIn>

        </div>


        {/* ======================================
            RIGHT SIDE / PROFILE
        ====================================== */}

        <FadeIn
          delay={0.45}
          duration={0.9}
          x={50}
          y={15}
        >

          <div className="relative mx-auto w-full max-w-[440px]">


            {/* PROFILE GLOW */}
            <motion.div
              className="absolute -inset-7 rounded-[45px] bg-[#A94712]/[0.14] blur-3xl"

              animate={{
                opacity: [
                  0.5,
                  1,
                  0.5,
                ],

                scale: [
                  0.98,
                  1.05,
                  0.98,
                ],
              }}

              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            <Magnet strength={15}>

              <div className="relative rounded-[30px] border border-[#332A24] bg-[#12100E] p-3 shadow-2xl shadow-black/60">


                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[23px] bg-[#181512]">

                  <motion.img
                    src="/profile/farhat-profile.png"

                    alt="M Farhat Mehdi"

                    className="aspect-[4/5] w-full object-cover object-center"

                    whileHover={{
                      scale: 1.035,
                    }}

                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  />


                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/75 to-transparent px-6 pb-7 pt-28">

                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF8A32]">
                      Computer Engineering
                    </p>

                    <p className="mt-2 text-xl font-bold text-[#F7F3ED]">
                      AI × Automation × Robotics
                    </p>

                  </div>

                </div>


                {/* MINI CARDS */}
                <div className="grid grid-cols-3 gap-2 pt-3">

                  {[
                    [
                      "AI",
                      "Intelligence",
                    ],

                    [
                      "ROS2",
                      "Robotics",
                    ],

                    [
                      "n8n",
                      "Automation",
                    ],
                  ].map(
                    (
                      [
                        title,
                        subtitle,
                      ],
                      index,
                    ) => (

                      <motion.div
                        key={title}

                        initial={{
                          opacity: 0,
                          y: 12,
                        }}

                        animate={{
                          opacity: 1,
                          y: 0,
                        }}

                        transition={{
                          delay:
                            0.8 +
                            index * 0.08,
                        }}

                        whileHover={{
                          y: -3,
                        }}

                        className="rounded-xl border border-[#2A2521] bg-[#151210] p-3 text-center transition-colors hover:border-[#E87524]/50 hover:bg-[#181512]"
                      >

                        <p className="text-sm font-bold text-[#FF8A32]">
                          {title}
                        </p>

                        <p className="mt-1 text-[10px] text-[#AAA198]">
                          {subtitle}
                        </p>

                      </motion.div>

                    ),
                  )}

                </div>

              </div>

            </Magnet>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}