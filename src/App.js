import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Auth from "./components/auth/Auth.jsx";
import LeaderGet from "./Pages/Leadership/LeaderGet.jsx";
import LeaderPos from "./Pages/Leadership/LeaderPost.jsx";
import { AgencyPagePost } from "./Pages/agency/AgencyPage.jsx";
import CentralPos from "./Pages/Central/CentralPost.jsx";
import CommunicationTools from "./Pages/CommunicationTools/Index.jsx";
import OpenDataGet from "./Pages/OpenData/OpenDataGet.jsx";
import OpenDataPost from "./Pages/OpenData/OpenDataPost.jsx";
import NewsGet from "./Pages/news/NewsGet.jsx";
import NewsPost from "./Pages/news/NewesPost.jsx";
import VacancysGet from "./Pages/Vacancy/VacancysGet.jsx";
import VacancysPost from "./Pages/Vacancy/VacancysPost.jsx";
import EventsGet from "./Pages/Events/EventsGet.jsx";
import EventsPost from "./Pages/Events/EventsPost.jsx";
import VacancysGet2 from "./Pages/Vacancy2/VacancysGet.jsx";
import VacancysPost2 from "./Pages/Vacancy2/VacancysPost.jsx";
import StatisticsGet from "./Pages/Statistic/StatisticsGet.jsx";
import StatisticsPost from "./Pages/Statistic/StatisticsPost.jsx";
import FastNewsGet from "./Pages/FastNews/FastNewsGet.jsx";
import FastNewsPost from "./Pages/FastNews/FastNewsPost.jsx";
import AdditionalPageGet from "./Pages/AdditionalPage/AdditionalGet.jsx";
import AdditionalPagePost from "./Pages/AdditionalPage/AdditionalPost.jsx";
import RegionalDivisonGet from "./Pages/RegionalDivisions/RegionalDGet.jsx";
import RegionalDPost2 from "./Pages/RegionalDivisions/RegionalDPost2.jsx";
import LinksGet from "./Pages/UsefulLink/LinksGet.jsx";
import LinksPost from "./Pages/UsefulLink/LinksPost.jsx";
import V2InputsRu from "./components/vacancy2/post/V2InputsRu.jsx";
import V2InputsUz from "./components/vacancy2/post/V2InputsUz.jsx";
import V2InputsEn from "./components/vacancy2/post/V2InputsEn.jsx";
import LInputUz from "./components/Leader/post/LInputUz.jsx";
import LInputEn from "./components/Leader/post/LInputEn.jsx";
import LInputRu from "./components/Leader/post/LInputRu.jsx";
import BannersGet from "./Pages/Banner/BannersGet.jsx";
import BannersPost from "./Pages/Banner/BannersPost.jsx";
import { AgencyPageGet } from "./Pages/agency/AgencyPageGet.jsx";
import CentralAppGet from "./Pages/Central/CentralGet.jsx";
import CInputUz from "./components/CentralApp/post/CInputUz.jsx";
import CInputRu from "./components/CentralApp/post/CInputRu.jsx";
import CInputEn from "./components/CentralApp/post/CInputEn.jsx";
import MediaGaleryGet from "./Pages/mediaget/MediaGaleryGet.jsx";
import Photo from "./components/mediagalary/get/photo.jsx";
import Video from "./components/mediagalary/get/video.jsx";
import MediaPhotoP from "./Pages/mediaget/MediaPhotoP.jsx";
import MediaVideoP from "./Pages/mediaget/MediaVideoP.jsx";
import OurVeteransPost from "./Pages/OurVeterans/OurVeteransPost.jsx";
import AgencyUz from "./components/agency/post/AgencyUz.jsx";
import AgencyRu from "./components/agency/post/AgencyRu.jsx";
import AgencyEn from "./components/agency/post/AgencyEn.jsx";
import OurUz from "./components/OurVeterans/post/OurUz.jsx";
import OurRu from "./components/OurVeterans/post/OurRu.jsx";
import OurEn from "./components/OurVeterans/post/OurEn.jsx";
import ODataRu from "./components/OpenData/post/ODataRu.jsx";
import ODataEn from "./components/OpenData/post/ODataEn.jsx";
import ODataUz from "./components/OpenData/post/ODataUz.jsx";
import RegDocumGet from "./Pages/RegDocument/RegDocumGet.jsx";
import RegDocumPost from "./Pages/RegDocument/RegDocumPost.jsx";
import RegUz from "./components/RegDocument/post/RegUz.jsx";
import RegRu from "./components/RegDocument/post/RegRu.jsx";
import RegEn from "./components/RegDocument/post/RegEn.jsx";
import PhotoInside from "./components/mediagalary/get/PhotoInside.jsx";
import PhotoPostUz from "./components/mediagalary/post/photo/PhotoPostUz.jsx";
import PhotoPostEn from "./components/mediagalary/post/photo/PhotoPostEn.jsx";
import PhotoPostRu from "./components/mediagalary/post/photo/PhotoPostRu.jsx";
import VideoPostUz from "./components/mediagalary/post/video/videoPostUz.jsx";
import VideoPostRu from "./components/mediagalary/post/video/videoPostRu.jsx";
import VideoPostEn from "./components/mediagalary/post/video/videoPostEn.jsx";
import StatisUz from "./components/Statistic/post/StatisUz.jsx";
import StatisEn from "./components/Statistic/post/StatisEn.jsx";
import StatisRu from "./components/Statistic/post/StatisRu.jsx";
import CommUz from "./components/communication/post/CommUz.jsx";
import CommRu from "./components/communication/post/CommRu.jsx";
import NewPostUz from "./components/news/post/NewPostUz.jsx";
import NewPostRu from "./components/news/post/NewPostRu.jsx";
import NewPostEn from "./components/news/post/NewPostEn.jsx";
import VacancyUz from "./components/vacancy/post/VacancyUz.jsx";
import VacancyRu from "./components/vacancy/post/VacancyRu.jsx";
import VacancyEn from "./components/vacancy/post/VacancyEn.jsx";
import EventPostUz from "./components/events/post/EventPostUz.jsx";
import EventPostRu from "./components/events/post/EventPostRu.jsx";
import EventPostEn from "./components/events/post/EventPostEn.jsx";
import RegionGet from "./Pages/Region/RegionGet.jsx";
import RegionPost from "./Pages/Region/RegionPost.jsx";
import RegionalPost2En from "./components/RegionalDivisions/Post/RegionalPost2En.jsx";
import RegionalPost2Ru from "./components/RegionalDivisions/Post/RegionalPost2Ru.jsx";
import RegionalPost2Uz from "./components/RegionalDivisions/Post/RegionalPost2Uz.jsx";
import RegionUz from "./components/Region/post/RegionUz.jsx";
import RegionRu from "./components/Region/post/RegionRu.jsx";
import RegionEn from "./components/Region/post/RegionEn.jsx";
import FastNewPostUz from "./components/FastNews/post/FastNewsPostUz.jsx";
import FastNewPostRu from "./components/FastNews/post/FastNewsPostRu.jsx";
import FastNewPostEn from "./components/FastNews/post/FastNewsPostEn.jsx";
import LinkPostUz from "./components/UsefulLink/post/LinkPostUz.jsx";
import LinkPostRu from "./components/UsefulLink/post/LinkPostRu.jsx";
import LinkPostEn from "./components/UsefulLink/post/LinkPostEn.jsx";
import OurVeteransGet from "./Pages/OurVeterans/OurVeteransGet.jsx";
import OurVeteranEdit from "./components/OurVeterans/edit/OurVeterans.jsx";
import OurEdRu from "./components/OurVeterans/edit/OurRu.jsx";
import OurEdEn from "./components/OurVeterans/edit/OurEn.jsx";
import OurEdUz from "./components/OurVeterans/edit/OurUz.jsx";
import OurVeteransEdit from "./Pages/OurVeterans/OurVeteransEdit.jsx";
import AdditionalPostUz from "./components/AdditionalPage/post/AdditionalPostUz.jsx";
import AdditionalPostRu from "./components/AdditionalPage/post/AdditionalPostRu.jsx";
import AdditionalPostEn from "./components/AdditionalPage/post/AdditionalPostEn.jsx";
import LeaderEdit from "./Pages/Leadership/LeaderEdit.jsx";
import LInputEdUz from "./components/Leader/edit/LInputEdUz.jsx";
import LInputEdRu from "./components/Leader/edit/LInputEdRu.jsx";
import LInputEdEn from "./components/Leader/edit/LInputEdEn.jsx";
import CentralEd from "./Pages/Central/CentralEdit.jsx";
import CInputEdUz from "./components/CentralApp/edit/CInputUz.jsx";
import CInputEdRu from "./components/CentralApp/edit/CInputRu.jsx";
import CInputEdEn from "./components/CentralApp/edit/CInputEn.jsx";
import RegDocumEdit from "./Pages/RegDocument/RegDocumEdit.jsx";
import RegEdEn from "./components/RegDocument/edit/RegEn.jsx";
import RegEdRu from "./components/RegDocument/edit/RegRu.jsx";
import RegEdUz from "./components/RegDocument/edit/RegUz.jsx";
import OpenDataEdit from "./Pages/OpenData/OpenDataEdit.jsx";
import ODataEdUz from "./components/OpenData/edit/ODataEdUz.jsx";
import ODataEdRu from "./components/OpenData/edit/ODataEdRu.jsx";
import ODataEdEn from "./components/OpenData/edit/ODataEdEn.jsx";
import NewesEdit from "./Pages/news/NewesEdit.jsx";
import NewEdUz from "./components/news/edit/NewEdUz.jsx";
import NewEdRu from "./components/news/edit/NewEdRu.jsx";
import NewEdEn from "./components/news/edit/NewEdEn.jsx";
import VacancyEdit from "./Pages/Vacancy/VacancyEdit.jsx";
import VacEdUz from "./components/vacancy/edit/VacEdUz.jsx";
import VacEdRu from "./components/vacancy/edit/VacEdRu.jsx";
import VacEdEn from "./components/vacancy/edit/VacEdEn.jsx";
import EventsEdit from "./Pages/Events/EventsEdit.jsx";
import EventEdUz from "./components/events/edit/EventEdUz.jsx";
import EventEdRu from "./components/events/edit/EventEdRu.jsx";
import EventEdEn from "./components/events/edit/EventEdEn.jsx";
import Vacancy2Edit from "./Pages/Vacancy2/Vacancy2Edit.jsx";
import V2EdUz from "./components/vacancy2/edit/V2EdUz.jsx";
import V2EdRu from "./components/vacancy2/edit/V2EdRu.jsx";
import V2EdEn from "./components/vacancy2/edit/V2EdEn.jsx";
import PhotoEditUz from "./components/mediagalary/post/photedit/PhotoEditUz.jsx";
import PhotoEditRu from "./components/mediagalary/post/photedit/PhotoEditRu.jsx";
import PhotoEditEn from "./components/mediagalary/post/photedit/PhotoEditEn.jsx";
import MediaPhotoEdit from "./Pages/mediaget/MediaPhotoEdit.jsx";
import MediaVideoEdit from "./Pages/mediaget/MediaVideoEdit.jsx";
import VideoEditUz from "./components/mediagalary/post/videoEdit/videoEditUz.jsx";
import VideoEditRu from "./components/mediagalary/post/videoEdit/videoEditRu.jsx";
import VideoEditEn from "./components/mediagalary/post/videoEdit/videoEditEn.jsx";
import StatisticsEdit from "./Pages/Statistic/StatisticsEdit.jsx";
import StatisEdUz from "./components/Statistic/edit/StatisEdUz.jsx";
import StatisEdRu from "./components/Statistic/edit/StatisEdRu.jsx";
import StatisEdEn from "./components/Statistic/edit/StatisEdEn.jsx";
import LinksEdit from "./Pages/UsefulLink/LinksEdit.jsx";
import LinkEditUz from "./components/UsefulLink/edit/LinkEditUz.jsx";
import LinkEditRu from "./components/UsefulLink/edit/LinkEditRu.jsx";
import LinkEditEn from "./components/UsefulLink/edit/LinkEditEn.jsx";
import FastNewsEdit from "./Pages/FastNews/FastNewsEdit.jsx";
import FastEdUz from "./components/FastNews/edit/FastEdUz.jsx";
import FastEdRu from "./components/FastNews/edit/FastEdRu.jsx";
import FastEdEn from "./components/FastNews/edit/FastEdEn.jsx";
import AdditionalEdit from "./Pages/AdditionalPage/AdditionalEdit.jsx";
import AdditionalEditUz from "./components/AdditionalPage/edit/AdditionalEditUz.jsx";
import AdditionalEditRu from "./components/AdditionalPage/edit/AdditionalEditRu.jsx";
import AdditionalEditEn from "./components/AdditionalPage/edit/AdditionalEditEn.jsx";
import CommEn from "./components/communication/post/CommEn.jsx";
import RegionPageEdit from "./Pages/Region/RegionPageEdit.jsx";
import RegionEdUz from "./components/Region/edit/RegionEdUz.jsx";
import RegionEdRu from "./components/Region/edit/RegionEdRu.jsx";
import RegionEdEn from "./components/Region/edit/RegionEdEn.jsx";
import RegionalEdUz from "./components/RegionalDivisions/edit/RegionalEdUz.jsx";
import RegionalEdRu from "./components/RegionalDivisions/edit/RegionalEdRu.jsx";
import RegionalEdEn from "./components/RegionalDivisions/edit/RegionalEdEn.jsx";
import RegionalDEdit from "./Pages/RegionalDivisions/RegionalDEdit.jsx";
import BannerUz from "./components/banner/post/BannerUz.jsx";
import BannerRu from "./components/banner/post/BannerRu.jsx";
import BannerEn from "./components/banner/post/BannerEn.jsx";
import BannersEdit from "./Pages/Banner/BannersEdit.jsx";
import BannerEdUz from "./components/banner/edit/BannerEdUz.jsx";
import BannerEdRu from "./components/banner/edit/BannerEdRu.jsx";
import BannerEdEn from "./components/banner/edit/BannerEdEn.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
      <Route path="/dash" element={<Layout />}>
        <Route index element={<AgencyPageGet />} />
        <Route path="agency" element={<AgencyPagePost />}>
          <Route index element={<AgencyUz />} />
          <Route path="ru" element={<AgencyRu />} />
          <Route path="en" element={<AgencyEn />} />
        </Route>
        <Route path="veterans" element={<OurVeteransGet />} />
        <Route path="veterans/add" element={<OurVeteransPost />}>
          <Route index element={<OurUz />} />
          <Route path="ru" element={<OurRu />} />
          <Route path="en" element={<OurEn />} />
        </Route>
        <Route path="veterans/edit/:id" element={<OurVeteransEdit />}>
          <Route index element={<OurEdUz />} />
          <Route path="ru" element={<OurEdRu />} />
          <Route path="en" element={<OurEdEn />} />
        </Route>
        <Route path="leader" element={<LeaderGet />} />
        <Route path="leader/add" element={<LeaderPos />}>
          <Route index element={<LInputUz />} />
          <Route path="ru" element={<LInputRu />} />
          <Route path="en" element={<LInputEn />} />
        </Route>
        <Route path="leader/edit/:id" element={<LeaderEdit />}>
          <Route index element={<LInputEdUz />} />
          <Route path="ru" element={<LInputEdRu />} />
          <Route path="en" element={<LInputEdEn />} />
        </Route>
        <Route path="statis/add" element={<AgencyPagePost />} />
        <Route path="central" element={<CentralAppGet />} />
        <Route path="central/add" element={<CentralPos />}>
          <Route index element={<CInputUz />} />
          <Route path="ru" element={<CInputRu />} />
          <Route path="en" element={<CInputEn />} />
        </Route>
        <Route path="central/edit/:id" element={<CentralEd />}>
          <Route index element={<CInputEdUz />} />
          <Route path="ru" element={<CInputEdRu />} />
          <Route path="en" element={<CInputEdEn />} />
        </Route>
        <Route path="communication" element={<CommunicationTools />}>
          <Route index element={<CommUz />} />
          <Route path="ru" element={<CommRu />} />
          <Route path="en" element={<CommEn />} />
        </Route>
        {/* <Route path="communication2" element={<CommunicationTools />} /> */}

        <Route path="regdoc" element={<RegDocumGet />} />
        <Route path="regdoc/edit/:id" element={<RegDocumEdit />}>
          <Route index element={<RegEdUz />} />
          <Route path="ru" element={<RegEdRu />} />
          <Route path="en" element={<RegEdEn />} />
        </Route>
        <Route path="regdoc/add" element={<RegDocumPost />}>
          <Route index element={<RegUz />} />
          <Route path="ru" element={<RegRu />} />
          <Route path="en" element={<RegEn />} />
        </Route>
        <Route path="opendata" element={<OpenDataGet />} />
        <Route path="opendata/edit/:id" element={<OpenDataEdit />}>
          <Route index element={<ODataEdUz />} />
          <Route path="ru" element={<ODataEdRu />} />
          <Route path="en" element={<ODataEdEn />} />
        </Route>
        <Route path="opendata/add" element={<OpenDataPost />}>
          <Route index element={<ODataUz />} />
          <Route path="ru" element={<ODataRu />} />
          <Route path="en" element={<ODataEn />} />
        </Route>
        {/* <Route path="opendata/add" element={<OpenDataPost />} /> */}
        <Route path="news" element={<NewsGet />} />
        <Route path="news/edit/:id" element={<NewesEdit />}>
          <Route index element={<NewEdUz />} />
          <Route path="ru" element={<NewEdRu />} />
          <Route path="en" element={<NewEdEn />} />
        </Route>
        <Route path="news/add" element={<NewsPost />}>
          <Route index element={<NewPostUz />} />
          <Route path="ru" element={<NewPostRu />} />
          <Route path="en" element={<NewPostEn />} />
        </Route>
        <Route path="vacancy" element={<VacancysGet />} />
        <Route path="vacancy/edit/:id" element={<VacancyEdit />}>
          <Route index element={<VacEdUz />} />
          <Route path="ru" element={<VacEdRu />} />
          <Route path="en" element={<VacEdEn />} />
        </Route>
        <Route path="vacancy/add" element={<VacancysPost />}>
          <Route index element={<VacancyUz />} />
          <Route path="ru" element={<VacancyRu />} />
          <Route path="en" element={<VacancyEn />} />
        </Route>
        <Route path="events" element={<EventsGet />} />
        <Route path="events/edit/:id" element={<EventsEdit />}>
          <Route index element={<EventEdUz />} />
          <Route path="ru" element={<EventEdRu />} />
          <Route path="en" element={<EventEdEn />} />
        </Route>
        <Route path="events/add" element={<EventsPost />}>
          <Route index element={<EventPostUz />} />
          <Route path="ru" element={<EventPostRu />} />
          <Route path="en" element={<EventPostEn />} />
        </Route>
        <Route path="vacancy2" element={<VacancysGet2 />} />
        <Route path="vacancy2/edit/:id" element={<Vacancy2Edit />}>
          <Route index element={<V2EdUz />} />
          <Route path="ru" element={<V2EdRu />} />
          <Route path="en" element={<V2EdEn />} />
        </Route>
        <Route path="vacancy2/add" element={<VacancysPost2 />}>
          <Route index element={<V2InputsUz />} />
          <Route path="ru" element={<V2InputsRu />} />
          <Route path="en" element={<V2InputsEn />} />
        </Route>
        <Route path="statistic" element={<StatisticsGet />} />
        <Route path="statistic/edit/:id" element={<StatisticsEdit />}>
          <Route index element={<StatisEdUz />} />
          <Route path="ru" element={<StatisEdRu />} />
          <Route path="en" element={<StatisEdEn />} />
        </Route>
        <Route path="statistic/add" element={<StatisticsPost />}>
          <Route index element={<StatisUz />} />
          <Route path="ru" element={<StatisRu />} />
          <Route path="en" element={<StatisEn />} />
        </Route>
        <Route path="fastnews" element={<FastNewsGet />} />
        <Route path="fastnews/add" element={<FastNewsPost />}>
          <Route index element={<FastNewPostUz />} />
          <Route path="ru" element={<FastNewPostRu />} />
          <Route path="en" element={<FastNewPostEn />} />
        </Route>
        <Route path="fastnews/edit/:id" element={<FastNewsEdit />}>
          <Route index element={<FastEdUz />} />
          <Route path="ru" element={<FastEdRu />} />
          <Route path="en" element={<FastEdEn />} />
        </Route>

        <Route path="additional" element={<AdditionalPageGet />} />
        <Route path="additional/edit/:id" element={<AdditionalEdit />}>
          <Route index element={<AdditionalEditUz />} />
          <Route path="ru" element={<AdditionalEditRu />} />
          <Route path="en" element={<AdditionalEditEn />} />
        </Route>
        <Route path="additional/add" element={<AdditionalPagePost />}>
          <Route index element={<AdditionalPostUz />} />
          <Route path="ru" element={<AdditionalPostRu />} />
          <Route path="en" element={<AdditionalPostEn />} />
        </Route>
        <Route path="regdivison" element={<RegionalDivisonGet />} />
        <Route path="regdivison/add" element={<RegionalDPost2 />}>
          <Route index element={<RegionalPost2Uz />} />
          <Route path="ru" element={<RegionalPost2Ru />} />
          <Route path="en" element={<RegionalPost2En />} />
        </Route>
        <Route path="regdivison/edit/:id" element={<RegionalDEdit />}>
          <Route index element={<RegionalEdUz />} />
          <Route path="ru" element={<RegionalEdRu />} />
          <Route path="en" element={<RegionalEdEn />} />
        </Route>
        <Route path="reg" element={<RegionGet />} />
        <Route path="reg/add" element={<RegionPost />}>
          <Route index element={<RegionUz />} />
          <Route path="ru" element={<RegionRu />} />
          <Route path="en" element={<RegionEn />} />
        </Route>
        <Route path="reg/edit/:id" element={<RegionPageEdit />}>
          <Route index element={<RegionEdUz />} />
          <Route path="ru" element={<RegionEdRu />} />
          <Route path="en" element={<RegionEdEn />} />
        </Route>
        <Route path="uselink" element={<LinksGet />} />
        <Route path="uselink/edit/:id" element={<LinksEdit />}>
          <Route index element={<LinkEditUz />} />
          <Route path="ru" element={<LinkEditRu />} />
          <Route path="en" element={<LinkEditEn />} />
        </Route>
        <Route path="uselink/add" element={<LinksPost />}>
          <Route index element={<LinkPostUz />} />
          <Route path="ru" element={<LinkPostRu />} />
          <Route path="en" element={<LinkPostEn />} />
        </Route>
        <Route path="banner" element={<BannersGet />}></Route>
        <Route path="banner/add" element={<BannersPost />}>
          <Route index element={<BannerUz />} />
          <Route path="ru" element={<BannerRu />} />
          <Route path="en" element={<BannerEn />} />
        </Route>
        <Route path="banner/edit/:id" element={<BannersEdit />}>
          <Route index element={<BannerEdUz />} />
          <Route path="ru" element={<BannerEdRu />} />
          <Route path="en" element={<BannerEdEn />} />
        </Route>
        <Route path="galery" element={<MediaGaleryGet />}>
          <Route index element={<Photo />} />
          <Route path=":id" element={<PhotoInside />} />
          <Route path="video" element={<Video />} />
        </Route>
        <Route path="galery/add" element={<MediaPhotoP />}>
          <Route index element={<PhotoPostUz />} />
          <Route path="ru" element={<PhotoPostRu />} />
          <Route path="en" element={<PhotoPostEn />} />
        </Route>
        <Route path="galery/edit/:id" element={<MediaPhotoEdit />}>
          <Route index element={<PhotoEditUz />} />
          <Route path="ru" element={<PhotoEditRu />} />
          <Route path="en" element={<PhotoEditEn />} />
        </Route>
        <Route path="galery/add/video" element={<MediaVideoP />}>
          <Route index element={<VideoPostUz />} />
          <Route path="ru" element={<VideoPostRu />} />
          <Route path="en" element={<VideoPostEn />} />
        </Route>
        <Route path="galery/video/edit/:id" element={<MediaVideoEdit />}>
          <Route index element={<VideoEditUz />} />
          <Route path="ru" element={<VideoEditRu />} />
          <Route path="en" element={<VideoEditEn />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={<h1 style={{ color: "red" }}>404 not found</h1>}
      />
    </Routes>
  );
};

export default App;
