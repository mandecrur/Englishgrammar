window.EXERCISE_DATA = {
  title: "Basic Plurals (-s)",
  level: "Nivel 1 · Beginners",
  subtitle: "Cómo formar el plural de sustantivos.",
  theory: `
    <p>La mayoría de sustantivos forman el plural añadiendo <strong>-s</strong>: book → books.</p>
    <p>Si terminan en -s, -sh, -ch, -x, -z, se añade <strong>-es</strong>: box → boxes, watch → watches.</p>
    <p>Si terminan en consonante + y, la y cambia a i y se añade -es: city → cities.</p>
    <p>Si terminan en vocal + y, solo se añade -s: toy → toys.</p>
  `,
  questions: [
    { type: "mc", prompt: "one box, two ___", options: ["boxs", "boxes", "boxies"], correct: 1,
      explanation: "'Box' termina en -x, así que el plural es 'boxes'." },
    { type: "mc", prompt: "one city, two ___", options: ["citys", "cities", "cityes"], correct: 1,
      explanation: "'City' termina en consonante+y, así que cambia a 'cities'." },
    { type: "fill", prompt: "one dog, two ___", correct: ["dogs"],
      explanation: "Plural regular: se añade solo '-s'." },
    { type: "fill", prompt: "one toy, two ___", correct: ["toys"],
      explanation: "'Toy' termina en vocal+y, así que solo se añade '-s'." },
    { type: "match", pairs: [["book","books"],["dish","dishes"],["baby","babies"],["key","keys"]],
      explanation: "Books (regular), dishes (-sh→es), babies (consonante+y→ies), keys (vocal+y→s)." }
  ]
};
