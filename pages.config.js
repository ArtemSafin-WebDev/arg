import home from "./pages-data/home";
import contacts from "./pages-data/contacts";
import cases from "./pages-data/cases";
import casesDetail from "./pages-data/cases-detail";

const pagesConfig = {
  ...home,
  ...contacts,
  ...cases,
  ...casesDetail,
};

export default pagesConfig;
