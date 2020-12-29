var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 0,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Nolan Taft', 'I\'ve been coding since 10 years old!']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString('I\'m an aspiring computer Engineer/Scientist!')
  .typeString('<br />Studying nearly ever day!')
  .pauseFor(3000)
  .deleteAll(1)
  .typeString('<span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>ls <span id="datetime"></span><br />') 
  .typeString('<a><span style="color:rgb(185, 180, 169)"</span>Choose one of the selections below by clicking on it</a>')
  .typeString(' <br />')
  .pauseFor(300)
  .typeString('<a href="./side-pages/about.html"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>About</a> <br />')
  .typeString('<a href="./side-pages/why.html"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>Why do I code?</a> <br />')
  .typeString('<a href="./side-pages/languages.html"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>Coding Languages</a> <br />')
  .typeString('<a href="https://github.com/StevenHarvey"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>GitHub</a> <br />')
  //.typeString('<a href="codes"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>Codes</a> <br />')
  .typeString('<a href="https://old.nolant.org"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>V1 Website</a> <br />')
  .typeString('<a href="https://trello.com/b/GZ1UJT85/nolantorg"target="_blank"><span style="color:rgb(185, 180, 169)"</span>nolant://~<span style="color: rgb(0, 170, 0);"</span>Roadmap</a><br />')
  .pauseFor(1000)
var dt = new Date();
 document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));