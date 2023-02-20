const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft";

export const getPosts = async () => {
  try {
    const response = await fetch(BASE_URL + '/posts', {
      method: 'GET',
    })
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }

}