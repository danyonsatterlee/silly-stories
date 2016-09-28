// $(document).ready(function() {
// shorthand for document ready:

$(function() {

  // add a click event listener
  let showStoryBtn = document.getElementById('show-story-btn');
  // let showStoryBtn = document.querySelector('#show-story-btn'); query selector selects any CSS like p.show-story-btn this can be more braod
  // you are putting in two arguments, how to make it run/start and what the result is click is the start and displaydate is the result
  showStoryBtn.addEventListener("click", createAndDisplayStory)



  // document.getElementById("myBtn").addEventListener("click", displayDate);
  function createAndDisplayStory(){

    // make button animation
    // $('#show-story-btn').animateCss('pulse');

    //change color of background
    document.querySelector('body').style.backgroundColor =
    '#'+Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h1').style.color =
    '#'+Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('p').style.color =
    'white';

    //get input - gather up the info
    let noun1=document.getElementById('noun1').value;
    let verb1=document.getElementById('verb1').value;
    let adj1=document.getElementById('adj1').value;
    let noun2=document.getElementById('noun2').value;
    let verb2=document.getElementById('verb2').value;
    let name=document.getElementById('name').value;

    let stories=[`Once upon a time there was a baby ${noun1}. This ${noun1} name was ${name}. (S)He was so special because (s)he knew how to ${verb1}. ${name} ${verb1}ed so much (s)he fell on a ${adj1} ${noun2} and broke their nose. ${name} became very ${adj1} and decided not to ${verb1} anymore. `,
    `${name} was hungry and  ${adj1}.  ${name} saw a ${noun2} and began to ${verb1}. The ${noun2} gave ${name} a ${noun1} and they began to ${verb1} together. It was a glorgious day for both ${name} and the ${noun2}.`,
    `A ${noun1} and ${noun2} met one night.  ${noun1}, or ${name}, taught ${noun2}  how to ${verb1}. this made ${noun2}  very ${adj1}. It was a mess to say the least! ${name} decided it was a better idea if they just both ${verb2}. `
  ];

  let storyDiv = document.getElementById('story')
  // storyDiv.textContent = stories[Math.floor(Math.random()* stories.length)]
  storyDiv.innerHTML = `<h2>Your Story</h2><h3 class= "animated fadeInUp">${stories[Math.floor(Math.random()* stories.length)]}</h3>`;

}

$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});

});
