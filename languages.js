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
  .typeString('Languages(Knowledge ranking soon): <br />')
  .pauseFor(300)
  .typeString('<a><ul><li>Python</li><li>JavaScript</li><li>HTML</li><li>PHP</li><li>SQL</li><li>LUA</li><li>C+/#/~</li><li>Java</li></a>')

  .pauseFor(1000)
