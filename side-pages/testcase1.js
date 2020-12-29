var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 5,
  autoStart: true,
  cursor: '█',
  strings: [' ']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString('<div style=\"background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;\"><pre style=\"margin: 0; line-height: 125%\"><span style=\"color: #008800; font-weight: bold\">class</span> <span style=\"color: #BB0066; font-weight: bold\">IceCreamMachine</span>:')
  .typeString('    ')
  .typeString('    <span style=\"color: #008800; font-weight: bold\">def</span> <span style=\"color: #0066BB; font-weight: bold\">__init__</span>(<span style=\"color: #007020\">self</span>, ingredients, toppings):')
  .typeString('        <span style=\"color: #007020\">self</span><span style=\"color: #333333\">.</span>ingredients <span style=\"color: #333333\">=</span> ingredients')
  .typeString('        <span style=\"color: #007020\">self</span><span style=\"color: #333333\">.</span>toppings <span style=\"color: #333333\">=</span> toppings')
  .typeString('        ')
  .typeString('    <span style=\"color: #008800; font-weight: bold\">def</span> <span style=\"color: #0066BB; font-weight: bold\">scoops</span>(<span style=\"color: #007020\">self</span>):')
  .typeString('        <span style=\"color: #008800; font-weight: bold\">for</span> i <span style=\"color: #000000; font-weight: bold\">in</span> <span style=\"color: #007020\">self</span><span style=\"color: #333333\">.</span>ingredients:')
  .typeString('            <span style=\"color: #008800; font-weight: bold\">for</span> t <span style=\"color: #000000; font-weight: bold\">in</span> <span style=\"color: #007020\">self</span><span style=\"color: #333333\">.</span>toppings:')
  .typeString('                <span style=\"color: #007020\">print</span>(<span style=\"background-color: #fff0f0\">\"[</span><span style=\"color: #666666; font-weight: bold; background-color: #fff0f0\">\'</span><span style=\"background-color: #fff0f0\">\"</span><span style=\"color: #333333\">+</span>i <span style=\"color: #333333\">+</span> <span style=\"background-color: #fff0f0\">\"</span><span style=\"color: #666666; font-weight: bold; background-color: #fff0f0\">\'</span><span style=\"background-color: #fff0f0\">, </span><span style=\"color: #666666; font-weight: bold; background-color: #fff0f0\">\'</span><span style=\"background-color: #fff0f0\">\"</span> <span style=\"color: #333333\">+</span> t<span style=\"color: #333333\">+</span><span style=\"background-color: #fff0f0\">\"</span><span style=\"color: #666666; font-weight: bold; background-color: #fff0f0\">\'</span><span style=\"background-color: #fff0f0\">]\"</span>)')
  .typeString('')
  .typeString('<span style=\"color: #008800; font-weight: bold\">if</span> __name__ <span style=\"color: #333333\">==</span> <span style=\"background-color: #fff0f0\">\"__main__\"</span>:')
  .typeString('    machine <span style=\"color: #333333\">=</span> IceCreamMachine([<span style=\"background-color: #fff0f0\">\"vanilla\"</span>, <span style=\"background-color: #fff0f0\">\"chocolate\"</span>], [<span style=\"background-color: #fff0f0\">\"chocolate sauce\"</span>, <span style=\"background-color: #fff0f0\">\"marshmallow sauce\"</span>])')
  .typeString('    <span style=\"color: #007020\">print</span>(machine<span style=\"color: #333333\">.</span>scoops()) <span style=\"color: #888888\">#should print[[\'vanilla', \'chocolate sauce\'], [\'chocolate\', \'chocolate sauce\']]</span>')
  .typeString('</pre></div>')
  .pauseFor(1000)
var dt = new Date();
 document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));