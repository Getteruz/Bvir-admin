import {
  BarIcon1,
  BarIcon10,
  BarIcon11,
  BarIcon12,
  BarIcon13,
  BarIcon14,
  BarIcon15,
  BarIcon16,
  BarIcon17,
  BarIcon18,
  BarIcon2,
  BarIcon3,
  BarIcon4,
  BarIcon5,
  BarIcon6,
  BarIcon7,
  BarIcon8,
  BarIcon9,
  Icon,
} from "../assets/img/img";

export const bar = [
  {
    id: 1,
    title: "Agentlik",
    items: [
      { text: "Agentlik haqida", img: Icon, path: "/dash/agency" },
      { text: "Faxriylarimiz", img: BarIcon1, path: "/dash/veterans" },
      { text: "Rahbariyat", img: BarIcon1, path: "/dash/leader" },
      { text: "Markaziy apparat", img: BarIcon2, path: "/dash/central" },
      { text: "Hududlar", img: BarIcon3, path: "/dash/reg" },
      { text: "Hududiy bo’linmalar", img: BarIcon3, path: "/dash/regdivison" },
      // { text: "Xalqaro aloqalar", img: BarIcon4, path: "international" }, //yoq
      { text: "Aloqa vositalari", img: BarIcon5, path: "/dash/communication" },
      { text: "Normativ hujjatlar", img: BarIcon6, path: "/dash/regdoc" },
      { text: "Ochiq ma’lumotlar", img: BarIcon6, path: "/dash/opendata" },
    ],
  },
  // {
  //   id: 2,
  //   // title: "Subsiyda va kredit",
  //   items: [
  //     // { text: "Subsiyda", img: BarIcon7, path: "subs" }, //yoq
  //     // { text: "Online kredit", img: BarIcon8, path: "kredit" }, //yoq
  //   ],
  // },
  {
    id: 3,
    title: "Axborot xizmati",
    items: [
      { text: "Yangiliklar", img: BarIcon9, path: "/dash/news" },
      { text: "E'lonlar", img: BarIcon10, path: "/dash/events" },
      { text: "Tadbirlar", img: BarIcon11, path: "/dash/vacancy" },
      { text: "Bo'sh ish o'rinlari", img: BarIcon12, path: "/dash/vacancy2" },
      { text: "Mediagalereya", img: BarIcon13, path: "/dash/galery" }, //hisob
      { text: "Statistika", img: BarIcon14, path: "/dash/statistic" },
    ],
  },
  {
    id: 4,
    title: "Saytdagilar",
    items: [
      { text: "Banner", img: BarIcon15, path: "/dash/banner" },
      { text: "Foydali havolalar", img: BarIcon16, path: "/dash/uselink" },
      { text: "Tezkor yangilik", img: BarIcon17, path: "/dash/fastnews" },
      { text: "Qo'shimcha sahifa", img: BarIcon18, path: "/dash/additional" },
    ],
  },
];
