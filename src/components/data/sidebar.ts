import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PageviewIcon from "@mui/icons-material/Pageview";
import HistoryIcon from "@mui/icons-material/History";
import TvIcon from "@mui/icons-material/Tv";
const sidebar = [
  {
    url: "/",
    title: "Halaman Depan",
    icon: HomeIcon,
  },
  {
    url: "/movie",
    title: "Film pendek",
    icon: YouTubeIcon,
  },
  {
    url: "/tv-show",
    title: "Tv Shows",
    icon: TvIcon,
  },
  {
    url: "/search",
    title: "Mencari",
    icon: PageviewIcon,
  },
  // {
  //     url:'/history',
  //     title:'History',
  //     icon:HistoryIcon
  // }
];

export default sidebar;
