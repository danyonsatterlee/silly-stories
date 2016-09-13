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

  let stories=[`Once upon a time there was a baby ${noun1}. This ${noun1} was so special because it knew how to ${verb1}. It would ${verb1}ed so much it fell on a ${adj1} ${noun2} and broke it's nose`,
  `A ${noun1} was hungry and  ${adj1}. It saw  ${noun2} and began to ${verb1}. ${noun2} gave ${noun1} food and they ${verb1}ed together.`,
  `A ${noun1} and ${noun2} met one night.  ${noun1} taught ${noun2}  how to ${verb1}. this made ${noun2}  very ${adj1}`
];

let storyDiv=document.getElementById('story')
storyDiv.textContent=stories[Math.floor(Math.random()* stories.length)]




}



});
