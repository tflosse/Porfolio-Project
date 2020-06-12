# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 0| Reflect on Project, Research Websites, Lay Out Goals and Timeline | Complete
|Day 1| Project Description and Worksheet, Wireframes | Complete
|Day 2| HTML, CSS, and Media Queries - Core Structure | Complete
|Day 3| JS, JQuery functionalities, and User Flow | Complete
|Day 4| MVP & Bug Fixes, including Previous Assignments* | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete

> JS functions: Lapis, Papyrus, Scalpellus
> Finish responsive core structure: Lagoon Template

## Project Description

This Project will make use of methods learn in Unit 1 of the SEIR Program including: HTML, CSS, JavaScript, and JQuery functionalites.

### Youtube Video Link

[Portfolio Site Presentation on YouTube](https://youtu.be/S67C3_wJcg0)

## Google Sheet

[Google Sheet here](https://docs.google.com/spreadsheets/d/1BV9CpblVwe2Lvw4hPV3sp_p-BhjwsQexZS4lm3-Xss8/edit#gid=0) 

## Wireframes

> Made on OneNote using a tablet

- [Mobile & Tablet](https://i.imgur.com/IgcLYEN.png) 
- [Desktop](https://i.imgur.com/NfEBDvx.png)


## Time/Priority Matrix 

[Matrix Screenshot](https://i.imgur.com/XZjn6Xr.png)
[Time-Priority in Google Sheets](https://docs.google.com/spreadsheets/d/1pwvUx73R0Y0-yDb0-0J7X0Ms6VVPs93I9sQJmoaBO4o/edit#gid=0)


### MVP/PostMVP

From Project prep.:
>   - Essential: at minimum what is required by project guidelines, 
>        code is clean and could be easily used by someone else,
>       break-points are correctly established and page is responsive
>    - Optimal: Added features render a professional user experience,
>       aesthetic is fully aligned with personal brand
>       added design elements for personalization

Details in section below.

#### MVP (examples)

- Site is fully responsive
- Navigation makes for better user experience
- Projects are property displayed and accessible
- Contact Forms work and are properly formatted
- Media icons are clickable and interactive

#### PostMVP 

- Add carousels for wireframe design as well as personal art and involvement
- Add animation to the landing page
- Nav turns to horizontal bar at the top of the page once the user scrolls
- Add flex growth to portfolio items
- Sub out Lightbox, and create a carousel within the page
- Project previews fade out on hover
- Formspree pluggins for notifications
- Portfolio project filters

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

>Below are examples from the assignment description
| Component | Priority | Estimated Time | Time Invetsted | Actual Time 
| --- | :---: |  :---: | :---: | :---: 
| Design | M | 3hr | 4hr | 4hr
| HTML Structure | H | 1.5hr | 2hr | 2hr
| Content | M | 2hr | 3hr | 3hr
| Hamburger | H | 1hr | 2hr | 2hr
| Toggle Nav on Mobile | H | 2hr | 3hr | 3hr
| Regular Nav | L | 0.5H | 0hr | 0hr
| Project Previews | H | 3hr | 2hr | 2hr
| Working with API | H | 3hrs| 4hr | 4hr
| Social Media Icons | L | 1hr | 1hr | 1hr
| QR Code | H | 1hr | 0.5hr | 0.5hr
| Adding Form | H | 1.5hr| 1 hr | 1hr
| Carousel | M | 3hr | 5hr | 5hr
| Other sections and flex| M | 3hr | 4hr | 4hr
| Styling | M | 3hr | 5hr | 5hr
| Responsive | H | 3hr | 5hr | 5hr
| Total | H | 31.5hrs| 39.5hrs | 39.5hrs

#### PostMVP

>Below are examples from the assignment description
| Component | Priority | Estimated Time | Time Invetsted | Actual Time 
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | -hr | -hr
| Banner letters wiggle | L | 1hr | -hr | -hr
| Interactive Banner | M | 4hr | -hr | -hr
| Materialize | H | 4hr | -hr | -hr
| Bootstrap | H | 4hr | -hr | -hr
| Make own icon | L | 4hr | -hr | -hr
| Total | H | 20hrs| -hrs | -hrs

## Additional Libraries
 - JQuery
 - Lightbox

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

```
function app(projectsArr) {
    console.log('inside app - projectsArr', projectsArr)
    projectsArr.forEach( project => {
        let thumbnail =$('<div>').addClass('project-thumbnail')
        let anchorTag =$('<a>').addClass('project-anchor').attr({'href':project.image,'data-lightbox':'portfolio-previews','data-title':project.anchor})
        let image =$('<img>').attr('src',project.image).addClass('project-image')
        let title =$('<h3>')
        let description = $('<p>')
        anchorTag.html(image,title,description)
        title.text(project.title).addClass('project-title')
        anchorTag.append(title)
        description.text(project.description).addClass('project-description')
        anchorTag.append(description)
        thumbnail.append(anchorTag)
        $('.project-flexbox').append(thumbnail)
    })
}
```


```
.project-description:hover {
   color: white;
   background: rgba(6,2,80,0.8);
   background: linear-gradient(180deg, rgba(34,24,18,0.9) 0%, rgba(235,215,228,0.6) 70%, rgba(161,98,133,0) 100%);
   transition: 500ms ease;
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**:Tamaras-MBP:portfolio-project tflosse$ git push origin master
Missing or invalid credentials.
Missing pipe
**RESOLUTION**: Git local and remote repos needed to be merged in order to properly push commits to git. Used git push -v after many attempts to use git pull.

**ERROR**: JSON and JQuery syntaxfor pulling Portfolio anchors and images.                           
**RESOLUTION**: Entered title as HTML anchor tag

## Portfolio Samples (as outlined in README)

Link To Site  | One Thing I'd Like To Incorporate | Initial Research On That Item
| ------------- | ------------- | ------------- |
| [Ximena Vengoechea](http://www.ximenavengoechea.com/) | Simplicity and personality of drawings |
| [Eloise Ress-Barrow](http://eloise-ress-barrow.surge.sh/index.html) | Simplicity |
| [Juan Ramirez](https://whoisjuan.me/) | Numerous Animation, but might be too colorful and slightly overwhelming |
| [Devon Stank](https://www.devonstank.com/) | Engaging, crisp, clearly definied sections, clean outline |
| [Liana Penn](https://www.lianapenn.com/) | Header Animation and responsiveness. did not like the project previews as much|