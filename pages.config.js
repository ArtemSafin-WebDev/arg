import home from "./pages-data/home";
import contacts from "./pages-data/contacts";
import cases from "./pages-data/cases";
import casesDetail from "./pages-data/cases-detail";
import articles from "./pages-data/articles";
import articleDetail from "./pages-data/article-detail";

const pagesConfig = {
  ...home,
  ...contacts,
  ...cases,
  ...casesDetail,
  ...articles,
  ...articleDetail,
};

export default pagesConfig;
