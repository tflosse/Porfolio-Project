console.log('hello')

// $(() => {

//   const $navButtons = $('nav button');
//   const $nav = $('nav');
//   $navButtons.on('click', () => {
//       $nav.toggleClass('open');
//   })
//   $(window).on('resize', () => {
//       console.log(window.innerWidth);
//       if (window.innerWidth >768) {
//           $nav.remove('open');
//       }
//   })

// })

$('.header-text').fadeTo(2500, 1);

const $navButtons = $('nav button');
const $nav = $('nav');
$navButtons.on('click', () => {
    $nav.toggleClass('open');
})

// $('nav a').on('click', () => {
//   $nav.remove('open');
// })