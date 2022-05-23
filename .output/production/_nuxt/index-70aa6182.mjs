import {
  _ as r,
  o as s,
  c as i,
  a as t,
  n as u,
  t as d,
  b as x,
  d as f,
  A as _,
  e as l,
  F as b,
  r as w,
  f as m,
  g as S,
} from "./entry-60ec2731.mjs";
const y = {},
  V = { class: "w-11/12 flex flex-col items-center my-20" },
  k = t("div", { class: "h-1 w-4/5 bg-white" }, null, -1),
  $ = t("div", { class: "h-0.5 w-3/5 mt-3 md:mt-5 bg-white" }, null, -1),
  C = [k, $];
function z(a, o) {
  return s(), i("div", V, C);
}
var M = r(y, [["render", z]]);
const j = {
    props: ["detail"],
    setup(a, { expose: o }) {
      o();
      const e = { props: a };
      return (
        Object.defineProperty(e, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        e
      );
    },
  },
  F = { class: "flex flex-col items-center justify-start" },
  B = { class: "title mt-10 text-3xl sm:text-4xl font-semibold" },
  E = ["href"],
  R = { class: "description1 mt-10 text-xl md:px-28" },
  I = { class: "description2 mt-5 text-xl" },
  J = ["href"],
  A = t("span", { class: "underline" }, "Source.", -1),
  D = [A];
function N(a, o, c, e, h, v) {
  return (
    s(),
    i("div", F, [
      t(
        "div",
        {
          class: "img h-64 w-80 sm:w-3/5 rounded-md",
          style: u({
            "background-image": "url(./images/" + e.props.detail.imageSRC + ")",
            "background-size": "cover",
            "background-position": "center",
          }),
        },
        null,
        4
      ),
      t("div", B, [
        t(
          "a",
          { target: "_blank", href: e.props.detail.live },
          d(e.props.detail.title),
          9,
          E
        ),
      ]),
      t("div", R, d(e.props.detail.description[0]), 1),
      t("div", I, [
        x(d(e.props.detail.description[1]) + " ", 1),
        t("a", { target: "_blank", href: e.props.detail.repo }, D, 8, J),
      ]),
    ])
  );
}
var P = r(j, [["render", N]]);
const H = f({
    created() {
      _.init();
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Journal",
            description: [
              "A blog application with proper authorization & authentication, crud, comment & many more.",
              "Made with django & nuxt.",
            ],
            live: "https://blog.alvereduan.me/",
            repo: "https://github.com/reduan2660/Journal",
            imageSRC: "Journal.png",
            alt: "Journal",
          },
          {
            id: 2,
            title: "Rubfs",
            description: [
              "A application which solves a 2x2x2 rubiks cube with BFS to get the idea of bfs.",
              "Made with Nuxt & ThreeJS.",
            ],
            live: "#",
            repo: "#",
            imageSRC: "Rubfs.png",
            alt: "Rubfs",
          },
          {
            id: 3,
            title: "Sorting Visulaization",
            description: [
              "A software to better visualize different sorting techniques to help get the ideas of sorting mechanism.",
              "Made with Vanilla Javascript.",
            ],
            live: "https://reduan2660.github.io/Sort/",
            repo: "https://github.com/reduan2660/Sort",
            imageSRC: "Sort.png",
            alt: "Sorting Visulaization",
          },
          {
            id: 4,
            title: "Eratosthenes",
            description: [
              "A software to better visualize how to find prime numbers using eratosthenes algorithm.",
              "Made with Vanilla Javascript.",
            ],
            live: "https://reduan2660.github.io/Eratosthenes/",
            repo: "https://github.com/reduan2660/Eratosthenes",
            imageSRC: "Eratosthenes.png",
            alt: "Eratosthenes",
          },
          {
            id: 5,
            title: "Exam Management",
            description: [
              "A software to manage exams where teachers can create exams and students can participate in it.",
              "Made for college with Java & JavaFX.",
            ],
            live: "#",
            repo: "https://github.com/reduan2660/Exam-Management",
            imageSRC: "ExamManagement.png",
            alt: "Exam Management",
          },
        ],
      };
    },
  }),
  L = {
    class:
      "flex flex-col items-center bg-black text-white font-body font-medium overflow-hidden",
  },
  O = m(
    '<div class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"><div class="h-64"></div></div><div id="Intro" class="select-none grid grid-cols-4 md:grid-cols-2 gap-y-20 md:gap-y-48 pt-12 md:pt-48 px-6 text-xl md:text-4xl"><div></div><div class="col-span-3 md:col-span-1 md:col-start-2"><span class="font-semibold">Student</span>, BSc Hon\u2019s (Ongoing)<br> University of Dhaka </div><div class="col-span-3 md:col-span-1 text-right"> I love to develop softwares. <br> I use <span class="font-semi-bold text-blue"> django </span>to build web backend. </div><div></div><div></div><div class="col-span-3 md:col-span-1"><span class="font-semi-bold text-blue">Vue</span> &amp; <span class="font-semi-bold text-blue">Nuxt</span> are my first choices for building front end stuffs. </div><div data-aos="fade-right" class="col-span-3 md:col-span-1 text-right"> I try hard to solve problems efficiently.<br> I participate in <span class="font-semi-bold text-blue">Comeptitive Programming</span>. </div><div></div><div></div><div data-aos="fade-left" class="col-span-3 md:col-span-1"> I designed and developed secure and scalable architecture on <span class="font-semi-bold text-blue">AWS</span> . </div><div data-aos="fade-right" class="col-span-3 md:col-span-1 text-right"> I love challenging problems<br> &amp; to Build Beautiful Solutions. </div><div></div><div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="col-span-4 md:col-span-2 text-base md:text-2xl text-center"> For a detailed description,<a href="https://drive.google.com/file/d/1-Wgbkt-Slj1d501_C6XoL5x4SqX4PLN7/view?usp=sharing"><span class="underline underline-offset-2"> Find my CV </span></a>. </div></div>',
    2
  ),
  T = { id: "Project" },
  X = t(
    "div",
    { class: "md:col-span-2 text-center text-3xl md:text-4xl select-none" },
    " Project Showcase ",
    -1
  ),
  q = { class: "grid sm:grid-cols-2 gap-28 mt-28 sm:px-20" },
  W = m(
    '<div id="Reach-me"><div data-aos="fade-up" class="grid grid-cols-1 sm:grid-cols-2 gap-y-20 md:gap-20 md:gap-x-40 mb-8 select-none"><div data-aos-anchor-placement="top-bottom" class="md:col-span-2 text-center text-3xl md:text-4xl"> Reach me </div><div class="text-2xl md:text-3xl text-center mt-5"> If you\u2019ve something to share <br> you could <a href="mailto:contact@alvereduan.me"><span class="underline underline-offset-2"> Email me. </span></a></div><div class="text-2xl md:text-3xl text-center md:mt-5"> I live in Dhaka, Bangladesh. <br> DM me <a target="_blank" href="https://www.facebook.com/reddddddddd9/"><svg class="h-10 w-10 inline mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00D1FF" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a><a target="_blank" href="https://www.twitter.com/reddddddddd99"><svg class="h-10 w-10 inline mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00D1FF" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a><a target="_blank" href="https://www.linkedin.com/in/alve-reduan"><svg class="h-10 w-10 inline mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00D1FF" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a> . </div><div class="md:col-span-2 text-center text-xl md:text-2xl font-display mt-10"> That\u2019s it from me. Stay Safe. </div></div></div>',
    1
  );
function U(a, o, c, e, h, v) {
  const p = M,
    g = P;
  return (
    s(),
    i("div", L, [
      O,
      l(p),
      t("div", T, [
        X,
        t("div", q, [
          (s(!0),
          i(
            b,
            null,
            w(
              a.projects,
              (n) => (
                s(),
                i(
                  "div",
                  {
                    "data-aos": "fade-up",
                    key: n.id,
                    class: S(
                      n.id == a.projects.length && a.projects.length % 2 == 1
                        ? "flex flex-col items-center justify-start px-12 sm:px-96 text-center sm:col-span-2 "
                        : "flex flex-col items-center justify-start px-12 sm:px-0 text-center"
                    ),
                  },
                  [l(g, { detail: n }, null, 8, ["detail"])],
                  2
                )
              )
            ),
            128
          )),
        ]),
      ]),
      l(p),
      W,
    ])
  );
}
var K = r(H, [["render", U]]);
export { K as default };
