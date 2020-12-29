var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 5,
  autoStart: true,
  cursor: '█',
  strings: ['//~Initiating Launch Sequence~\\\\']
});

typewriter
  .deleteAll(1)
  .typeString('About Me: <br />')
  .pauseFor(300)
  .typeString('<a><ul><li>17 years old</li><li>Currently live in Colorado</li><li>I\'ve been coding since before I can remember</li><li>I absolutely love learning new languages. Coding and Lingual!</li><li><span style="color:rgb(185, 180, 169)"</span>Fun fact: <span style="color: rgb(0, 170, 0);"</span>I listen to absolutely every genre of music, even in languages I don\'t understand</li></ul></a>')

  .pauseFor(1000)
