import React from "react";

/*
=======
Profile
=======
*/

const TodaysSummary = React.lazy(() =>
  import("./views/pages/dashboard/TodaysSummary")
);

const UserInformation = React.lazy(() =>
  import("./views/pages/profile/UserInformation")
);

const UserSetting = React.lazy(() =>
  import("./views/pages/profile/UserSetting")
);
const ProductCreate = React.lazy(() =>
  import("./views/pages/product/ProductCreate")
);
const ProductBarcode = React.lazy(() =>
  import("./views/pages/product/ProductBarcode")
);
const ProductBarcodeSave = React.lazy(() =>
  import("./views/pages/product/ProductBarcodeSave")
);
const Product = React.lazy(() => import("./views/pages/product/Product"));
const ProductReturn = React.lazy(() =>
  import("./views/pages/product/ProductReturn")
);
const ProductBarcodeSuccess = React.lazy(() =>
  import("./views/pages/product/ProductBarcodeSuccess")
);
const ProductBlockingOfGoods = React.lazy(() =>
  import("./views/pages/product/ProductBlockingOfGoods")
);
const ProductDiscontinued = React.lazy(() =>
  import("./views/pages/product/ProductDiscontinued")
);
const ProductFactories = React.lazy(() =>
  import("./views/pages/product/ProductFactories")
);
const ProductReturnToPick = React.lazy(() =>
  import("./views/pages/product/ProductReturnToPick")
);
const ProductMyApplications = React.lazy(() =>
  import("./views/pages/product/ProductMyApplications")
);
const ProductErrorsOnComplaints = React.lazy(() =>
  import("./views/pages/product/ProductErrorsOnComplaints")
);
const ProductSettingDiscount = React.lazy(() =>
  import("./views/pages/price/ProductSettingDiscount")
);
const ProductSettingPrice = React.lazy(() =>
  import("./views/pages/price/ProductPriceSetting")
);
const ProductCancelDiscount = React.lazy(() =>
  import("./views/pages/price/ProductCancelDiscount")
);
const ProductInstallingPromoCodes = React.lazy(() =>
  import("./views/pages/price/ProductInstallingPromoCodes")
);
const ProductCancellationOfPromoCode = React.lazy(() =>
  import("./views/pages/price/ProductCancellationOfPromoCode")
);
const ProductHistoryDownloads = React.lazy(() =>
  import("./views/pages/price/ProductHistoryDownloads")
);
const Notion = React.lazy(() => import("./views/pages/comments/Notion"));
const Questions = React.lazy(() => import("./views/pages/comments/Questions"));
const RequirementsForStickers = React.lazy(() =>
  import("./views/pages/requirements/RequirementsForStickers")
);
const ProductRemainsOfGoods = React.lazy(() =>
  import("./views/pages/product/ProductRemainsOfGoods")
);
const Setting = React.lazy(() => import("./views/pages/settings/Setting"));
const FinancialReports = React.lazy(() =>
  import("./views/pages/price/FinancialReports")
);
const Document = React.lazy(() => import("./views/pages/settings/Document"));
const Support = React.lazy(() => import("./views/pages/settings/Support"));

const CreateRequest = React.lazy(() =>
  import("./views/pages/settings/CreateRequest")
);
const News = React.lazy(() => import("./views/pages/settings/News"));

const routes = [
  { path: "/", exact: true, name: "Asosiy sahifa" },
  {
    path: "/dashboard",
    name: "Foydalunuvchi hisoboti",
    component: TodaysSummary,
  },
  {
    path: "/user-setting",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: UserSetting,
  },
  {
    path: "/user/information",
    name: "Maning kabinetim",
    component: UserInformation,
  },
  {
    path: "/product/create",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductCreate,
  },
  {
    path: "/product",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: Product,
  },
  {
    path: "/product/barcode/generate",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductBarcode,
  },
  {
    path: "/product/barcode/save",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductBarcodeSave,
  },
  {
    path: "/product/barcode/success",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductBarcodeSuccess,
  },
  {
    path: "/product/return",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductReturn,
  },
  {
    path: "/product/blocking-of-goods",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductBlockingOfGoods,
  },
  {
    path: "/product/discontinued",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductDiscontinued,
  },
  {
    path: "/product/factories",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductFactories,
  },
  {
    path: "/product/return-to-pick-up-point",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductReturnToPick,
  },
  {
    path: "/product/my-applications",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductMyApplications,
  },
  {
    path: "/product/errors-on-complaints",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductErrorsOnComplaints,
  },
  {
    path: "/product/setting-discount",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductSettingDiscount,
  },
  {
    path: "/product/setting-price",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductSettingPrice,
  },
  {
    path: "/product/cancel-discount",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductCancelDiscount,
  },
  {
    path: "/product/installing-promo-codes",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductInstallingPromoCodes,
  },
  {
    path: "/product/cancellation-of-promo-code",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductCancellationOfPromoCode,
  },
  {
    path: "/product/history-downloads",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductHistoryDownloads,
  },
  {
    path: "/comment/notion",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: Notion,
  },
  {
    path: "/comment/questions",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: Questions,
  },
  {
    path: "/requirements/for-stickers",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: RequirementsForStickers,
  },
  {
    path: "/product/product-remains",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: ProductRemainsOfGoods,
  },
  {
    path: "/product/setting",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: Setting,
  },
  {
    path: "/financial-reports",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: FinancialReports,
  },
  {
    path: "/document",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: Document,
  },
  {
    path: "/support",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: Support,
  },
  {
    path: "/create-request",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: CreateRequest,
  },
  {
    path: "/news",
    exact: true,
    name: "Foydalunuvchi hisoboti",
    component: News,
  },
];

export default routes;
