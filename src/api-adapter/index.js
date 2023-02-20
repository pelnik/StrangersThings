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

export const register = async (user) => {
  try {
    const response = await fetch(BASE_URL + '/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        }
      })
    })
    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}