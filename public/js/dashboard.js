// takes user to new post page on click
const newPost = async (event) => {
  document.location.replace('/new-post');
};

document
  .querySelector('#new-post')
  .addEventListener('click', newPost);
