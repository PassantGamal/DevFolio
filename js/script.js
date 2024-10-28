var sentences = ["Photographer","Designer","Developer","Freelancer"];
var currentSentence = 0;
var currentSentenceChar = 0;
var intervalValue;
var textElement = document.querySelector("#text");
var myCursor = document.querySelector("#cursor");

function TypingEffect()
{
  var text = sentences[currentSentence].substring(0, currentSentenceChar +1);
  textElement.innerHTML = text;
  currentSentenceChar++;
  
  if(text === sentences[currentSentence])
  {
    clearInterval(intervalValue);
    setTimeout(function()
    {
      intervalValue = setInterval(DeletingEffect, 60);
    }, 130);
  }
}

function DeletingEffect()
{
  var text = sentences[currentSentence].substring(0, currentSentenceChar -1);
  textElement.innerHNTML = text;
  currentSentenceChar--;
  
  if(text === '')
  {
    clearInterval(intervalValue);
    if(currentSentence === (sentences.length-1))
       currentSentence = 0;
    else
      currentSentence++;
    
    currentSentenceChar = 0;
    
    setTimeout(function()
    {
      myCursor.style.display = 'inline-block';
      intervalValue = setInterval(TypingEffect,50);
    }, 100);
    
  }
}
intervalValue = setInterval(TypingEffect, 100);
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter:$(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
window.onscroll = function() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "flex";
  } else {
      scrollTopBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}