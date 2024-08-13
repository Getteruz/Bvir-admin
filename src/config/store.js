import { configureStore } from "@reduxjs/toolkit";
import vacancy from "./vacancy";
import leader from "./leader";
import reigional1 from "./reigional1";
import reigional2 from "./reigional2";
import news from "./news";
import banner from "./banner";
import central from "./central";
import fastnews from "./fastnews";
import agencyStatis from "./agency-statis";
import usefulLink from "./usefulLink";
import vacancy2 from "./vacancy2";
import event from "./event.js";
import photo from "./photo.js";
import openD from "./opend.js";
import agency from "./agency.js";
import ourveter from "./OurVeterans.js";
import photoGalery from "./photoGalery.js";
import videoGalery from "./videoGalery.js";
import uploadFile from "./uploadFile.js";
import statistic from "./statstic.js";
import comunacation from "./comunacation.js";
import aditional from "./aditional.js";
import edit1 from "./edit1.js";
import edit2 from "./edit2.js";
import edit3 from "./edit3.js";
export const store = configureStore({
  reducer: {
    vacancy,
    leader,
    reigional1,
    reigional2,
    news,
    banner,
    agencyStatis,
    central,
    fastnews,
    usefulLink,
    vacancy2,
    event,
    photo,
    openD,
    agency,
    ourveter,
    photoGalery,
    uploadFile,
    videoGalery,
    statistic,
    comunacation,
    aditional,
    edit1,
    edit2,
    edit3,
  },
});
