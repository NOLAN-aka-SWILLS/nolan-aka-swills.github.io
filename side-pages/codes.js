var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 30,
  autoStart: true,
  cursor: '█',
  strings: ['//~Initiating Launch Sequence~\\\\']
});

typewriter
  .deleteAll(1)
  .typeString('Take a gander at some code: <br />')
  .pauseFor(300)
  .typeString('<a href="/Codes/SudokuSolver"target="_blank">Sudoku Solver</a> <br />')
  .typeString('<a href="/index">Many Many more programs/scripts coming soon. Working on getting them all set up in a different format!</a>')

  .pauseFor(1000)
