import home from "./pages-data/home";
import contacts from "./pages-data/contacts";
import cases from "./pages-data/cases";
import casesDetail from "./pages-data/cases-detail";
import articles from "./pages-data/articles";
import articleDetail from "./pages-data/article-detail";
import productsAndServices from "./pages-data/products-and-services";
import services from "./pages-data/services";
import products from "./pages-data/products";
import serviceDetail from "./pages-data/service-detail";
import subserviceDetail from "./pages-data/subservice-detail";

const pagesConfig = {
  ...home,
  ...contacts,
  ...cases,
  ...casesDetail,
  ...articles,
  ...articleDetail,
  ...productsAndServices,
  ...services,
  ...products,
  ...serviceDetail,
  ...subserviceDetail,
};

export default pagesConfig;
