$(() => {

$('.header-text').fadeTo(2500, 1);
// const downArrow = $('#down-arrow')
// function blink_text() {
//   $('.blink').fadeOut(800);
//   $('.blink').fadeIn(800);
// }
// blink_text(downArrow);

const $navButtons = $('nav button');
const $nav = $('nav');
$navButtons.on('click', () => {
    $nav.toggleClass('open');
})

$('nav a').on('click', () => {
  $nav.removeClass('open');
})

const sheeturl = 'https://docs.google.com/spreadsheets/d/1NUb3ItyA8V8SGU0L5x5_jv8-cgFimgmCXIixEU4SGxA/edit?usp=sharing';
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1NUb3ItyA8V8SGU0L5x5_jv8-cgFimgmCXIixEU4SGxA/od6/public/values?alt=json';

$.ajax({
    url: sheetAsJSON
}).then((data) => {
    console.log('data', data)
    const projects = data.feed.entry.map( project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
        }
    })
    app(projects)
})
.catch(err => console.log('err', err));

function app(projectsArr) {
    console.log('inside app - projectsArr', projectsArr)
    projectsArr.forEach( project => {
        let thumbnail =$('<div>').addClass('project-thumbnail')
        let title =$('<h3>')
        let anchorTag =$('<a>').addClass('project-anchor').attr({'href':project.image,'data-lightbox':'portfolio-previews','data-title':project.title})
        let image =$('<img>').attr('src',project.image).addClass('project-image')
        let description = $('<p>')
        title.text(project.title)
        anchorTag.html(image,title)
        description.text(project.description)
        anchorTag.append(description)
        thumbnail.append(anchorTag).addClass('project-description')

        $('.project-flexbox').append(thumbnail)
    })
}


})