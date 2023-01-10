// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#posts-name').value.trim();
//   const needed_funding = document.querySelector('#posts-funding').value.trim();
//   const description = document.querySelector('#posts-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create posts');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

const commentButton = async (event) => {
  event.preventDefault();
  // if (event.target.hasAttribute('data-id')) {
  console.log('The comment button was clicked');
  const id = document.querySelector('#id').value;
  const content = document.querySelector('#comment-desc').value;

  const response = await fetch(`/api/comments/${id}`, {
    method: 'POST',
    body: JSON.stringify({ content }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // document.location.replace('/profile');
    alert('Response ok');
  } else {
    alert('Failed to comment ');
  }

  // }
};

// document
//   .querySelector('.new-post-form')
//   .addEventListener('submit', newFormHandler);

document
  .querySelector('#comment-button')
  .addEventListener('click', commentButton);