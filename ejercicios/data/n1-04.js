window.EXERCISE_DATA = {
  title: "Numbers 1-100",
  level: "Nivel 1 · Beginners",
  subtitle: "Los números del 1 al 100.",
  theory: `
    <p>Números básicos: one(1), two(2), three(3)... ten(10). A partir de veinte:
    twenty(20), thirty(30)... hundred(100).</p>
    <p>Para números compuestos, se usa un guion: <strong>twenty-one</strong> (21),
    <strong>forty-five</strong> (45). Nota que el número '11' y '12' son irregulares:
    <strong>eleven, twelve</strong> (no siguen el patrón de -teen).</p>
  `,
  questions: [
    { type: "mc", prompt: "15 = ___", options: ["fifteen", "fiveteen", "fivety"], correct: 0,
      explanation: "'Fifteen' es la forma correcta para el número 15." },
    { type: "mc", prompt: "100 = ___", options: ["hundred", "one hundred", "hundreds"], correct: 1,
      explanation: "Se dice 'one hundred', incluyendo el 'one'." },
    { type: "fill", prompt: "21 = twenty-___", correct: ["one"],
      explanation: "Los números compuestos se forman con guion: twenty-one." },
    { type: "fill", prompt: "12 = ___ (número irregular)", correct: ["twelve"],
      explanation: "'Twelve' es irregular, no sigue el patrón -teen." },
    { type: "match", pairs: [["30","thirty"],["40","forty"],["50","fifty"],["90","ninety"]],
      explanation: "Nota que 40 pierde la 'u' de four → forty, y 50 cambia five → fifty." }
  ]
};
