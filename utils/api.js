import axios from "axios";

const api = (() => {
  const BASE_URL = "https://jakpost.vercel.app";

  async function getMostViewed() {
    const response = await axios.get(`${BASE_URL}/api/category/most-viewed`);

    const {
      data: { posts },
    } = response;

    return posts;
  }

  async function getCategory() {
    const response = await axios.get(`${BASE_URL}/api/category`);

    const {
      data: { category },
    } = response;

    return category.slice(1);
  }

  async function getDetails(slug) {
    const response = await axios.get(`${BASE_URL}/api/detailpost/${slug}`);

    const {
      data: { detail_post },
    } = response;

    return detail_post;
  }

  async function getPostByCategory(slug) {
    const response = await axios.get(`${BASE_URL}/api/category/${slug}`);

    const {
      data: { featured_post, posts },
    } = response;

    const data = { featured_post, posts };

    return data;
  }

  async function searchPost(keyword, page) {
    const response = await axios.get(
      `${BASE_URL}/api/search/${keyword}/date/${page}`
    );

    const {
      data: { data, pagination },
    } = response;

    const result = { data, pagination };

    return result;
  }

  return {
    getMostViewed,
    getCategory,
    getDetails,
    getPostByCategory,
    searchPost,
  };
})();

export default api;
