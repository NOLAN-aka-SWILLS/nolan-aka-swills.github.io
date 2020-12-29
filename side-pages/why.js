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
  .typeString('Why: <br />')
  .pauseFor(300)
  .typeString('<a><ul><li>Simply, I enjoy it. It\'s a form of meditation to me.</li><li>Gives me problems to overcome, and makes me think.</li><li>More practice makes mastery. My ultimate goal is mastery of a language or two(or more of course).</li></ul></a>')

  .pauseFor(1000)
