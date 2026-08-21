window.EXERCISE_DATA = {
  title: "Prepositions of Place (in, on, under, next to)",
  level: "Nivel 1 · Beginners",
  subtitle: "Preposiciones básicas de lugar.",
  theory: `
    <table>
      <tr><td><strong>in</strong></td><td>dentro de (algo cerrado)</td><td>The book is in the bag.</td></tr>
      <tr><td><strong>on</strong></td><td>sobre/encima (con contacto)</td><td>The book is on the table.</td></tr>
      <tr><td><strong>under</strong></td><td>debajo de</td><td>The cat is under the chair.</td></tr>
      <tr><td><strong>next to</strong></td><td>al lado de</td><td>She is next to the door.</td></tr>
      <tr><td><strong>between</strong></td><td>entre (dos cosas)</td><td>It's between the two houses.</td></tr>
    </table>
  `,
  questions: [
    { type: "mc", prompt: "The keys are ___ the table (encima).", options: ["on", "in", "under"], correct: 0,
      explanation: "'On' se usa cuando hay contacto con una superficie, como estar 'encima de' la mesa." },
    { type: "mc", prompt: "The dog is ___ the bed (debajo).", options: ["on", "under", "next to"], correct: 1,
      explanation: "'Under' significa 'debajo de'." },
    { type: "fill", prompt: "The milk is ___ the fridge (dentro de).", correct: ["in"],
      explanation: "'In' se usa para lugares cerrados, como dentro del refrigerador." },
    { type: "fill", prompt: "The chair is ___ the desk (al lado de).", correct: ["next to"],
      explanation: "'Next to' significa 'al lado de'." },
    { type: "match", pairs: [["in","dentro"],["on","sobre"],["under","debajo"],["between","entre"]],
      explanation: "Preposiciones de lugar más comunes." }
  ]
};
