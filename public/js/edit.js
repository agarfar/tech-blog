
const id = document.querySelector('#id').value;

const editPost = async (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#post-name').value.trim();
  // const needed_funding = document.querySelector('#posts-funding').value.trim();
  const content = document.querySelector('#post-desc').value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json', },
  })

  console.log(response);

  if (response.ok) {
    document.location.replace(`/posts/${id}`);
  } else {
    alert('Failed to edit post');
  }
};

const delButtonHandler = async (event) => {
  // if (event.target.hasAttribute('#id')) {
  // const id = event.target.getAttribute('#id');

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(response)
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete post');
  }
  // }
};

// if (title && content) {
//   const response = await fetch(`/api/posts`, {
//     method: 'POST',
//     body: JSON.stringify({ title, content }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to create post');
//   }
// }

document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.new-post-form')
  .addEventListener('submit', editPost);