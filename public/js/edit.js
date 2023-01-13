// post_id value
const id = document.querySelector('#id').value;

// edits the post after user enters new title or post contents
const editPost = async (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#post-name').value.trim();
 
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

// deletes current post
const delButtonHandler = async (event) => {

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
};

document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.new-post-form')
  .addEventListener('submit', editPost);