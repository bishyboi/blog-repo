var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/bishyboi/shits-n-giggles.git', // Update to point to your repository
    user: {
      name: 'bishyboi', // update to use your name
      email: 'bishoypramanik@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);