import axios from "axios";

const url = `http://birmakon.loko.uz`;

const token = window.localStorage.getItem("@token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const packageData = (data) => {
  const form = new FormData();
  for (const key in data) {
    if (Array.isArray(data[key])) {
      for (const childKey in data[key]) {
        form.append(`${key}[${childKey}]`, data[key][childKey]);
      }
    } else {
      form.append(key, data[key]);
    }
  }
  return form;
};

const requests = {
  auth: (params) => axios.post(`${url}/dashboard/auth`, params, config),
  orders: (params) =>
    axios.get(`${url}/dashboard/order`, { params, ...config }),
  profil: (params) =>
    axios.post(`${url}/dashboard/shop/update`, params, config),
  renameProfile: (params) =>
    axios.post(`${url}/dashboard/profile/update`, params, config),
  product: (params) =>
    axios.get(`${url}/dashboard/product`, { params, ...config }),
  categoryProduct: () =>
    axios.get(`${url}/dashboard/category?type=product`, config),
  profileClient: () => axios.get(`${url}/dashboard/profile`, config),
  categoryRegion: () =>
    axios.get(`${url}/dashboard/category?type=region`, config),
  productLock: (params) =>
    axios.post(`${url}/dashboard/product/lock`, params, config),
  productOnLock: (params) =>
    axios.post(`${url}/dashboard/product/unlock`, params, config),
  deleteProduct: (params) =>
    axios.post(`${url}/dashboard/product/remove`, params, config),
  deleteOrderId: (id) => axios.post(`${url}/dashboard/order/remove/${id}`),
  checkOrder: (params) =>
    axios.post(`${url}/dashboard/order/accept`, params, config),
  declineOrder: (params) =>
    axios.post(`${url}/dashboard/order/decline`, params, config),
  addProduct: (params) =>
    axios.post(`${url}/dashboard/product/create`, packageData(params), config),
  brands: () => axios.get(`${url}/dashboard/brand`, config),
};
export default requests;
