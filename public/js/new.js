const createNewPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-name').value.trim();
  // const needed_funding = document.querySelector('#posts-funding').value.trim();
  const content = document.querySelector('#post-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', createNewPost);
