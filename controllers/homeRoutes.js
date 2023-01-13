const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['content',]
        }
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['content', 'date_created'],
          include: [{
            model: User,
            attributes: ['name'],
          }],
        }
      ],
    });

    const post = postData.get({ plain: true });
    console.log('post', post);
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['content', 'date_created'],
          include: [{
            model: User,
            attributes: ['name'],
          }],
        }
      ],
    });

    const post = postData.get({ plain: true });
    console.log('post', post);
    res.render('edit-post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put('posts/:id', withAuth, async (req, res) => {
//   // try {
//   //   const newPost = await Post.create({
//   //     ...req.body,
//   //     user_id: req.session.user_id,
//   //   });

//   //   res.status(200).json(newPost);
//   // } catch (err) {
//   //   res.status(400).json(err);
//   // }
//   try {
//     const postData = await Post.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     if (!postData[0]) {
//       console.log('postData[0]', postData[0])
//       res.status(404).json({ message: 'No post with this id!' });
//       return;
//     }
//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }

// });

router.get('/comments/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Post,
          attributes: ['title', 'content']
        }
      ],
    });

    const comment = commentData.get({ plain: true });
    console.log('comment', { comment });

    res.render('comment', {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/new-post', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render('new-post', {
        logged_in: true
      });
      return;
    }
  }
  catch {
    res.status(500).json(err);
  }

})

module.exports = router;
