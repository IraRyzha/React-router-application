const getPosts = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return data.slice(0, 12);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getPosts;
