const newPost = async (event) => {
  // event.preventDefault();

  // const title = document.querySelector('#post-name').value.trim();
  // // const needed_funding = document.querySelector('#posts-funding').value.trim();
  // const content = document.querySelector('#post-desc').value.trim();
  // const response = await fetch(`/api/posts/new-post`, {
  //   method: 'GET',
  //   // body: JSON.stringify({ title, content }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // if (response.ok) {
  document.location.replace('/new-post');
  // } else {
  //   alert('Failed to create posts');
  // }
}
  ;

// const commentButton = async (event) => {
//   event.preventDefault();
//   // if (event.target.hasAttribute('data-id')) {
//   console.log('The new post button was clicked');
//   const newPostButton = document.querySelector('#comment-desc').value;

//   const response = await fetch(`/api/comments/${id}`, {
//     method: 'POST',
//     body: JSON.stringify({ content }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace(`/posts/${id}`);
//     // alert('Response ok');
//   } else {
//     alert('Failed to comment');
//   }

//   // }
// };

document
  .querySelector('#new-post')
  .addEventListener('click', newPost);

// document
//   .querySelector('.post-list')
//   .addEventListener('click', delButtonHandler);

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


