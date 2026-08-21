window.EXERCISE_DATA = {
  title: "There is / There are (basic)",
  level: "Nivel 1 · Beginners",
  subtitle: "Expresar existencia: 'hay'.",
  theory: `
    <p><strong>There is</strong> se usa con sustantivos singulares o incontables:
    <strong>There is a book on the table.</strong></p>
    <p><strong>There are</strong> se usa con sustantivos plurales:
    <strong>There are three books on the table.</strong></p>
    <p>Negativo: <strong>There isn't / There aren't</strong>.
    Pregunta: <strong>Is there...? / Are there...?</strong></p>
  `,
  questions: [
    { type: "mc", prompt: "___ a cat in the garden.", options: ["There is", "There are", "There am"], correct: 0,
      explanation: "'Cat' es singular, así que se usa 'There is'." },
    { type: "mc", prompt: "___ many students in the class.", options: ["There is", "There are", "There be"], correct: 1,
      explanation: "'Students' es plural, así que se usa 'There are'." },
    { type: "fill", prompt: "___ (hay, singular) a problem.", correct: ["there is"],
      explanation: "Con un sustantivo singular se usa 'there is'." },
    { type: "fill", prompt: "___ (hay, plural) two chairs here.", correct: ["there are"],
      explanation: "Con un sustantivo plural se usa 'there are'." },
    { type: "match", pairs: [["There is","Hay (singular)"],["There are","Hay (plural)"],["Is there...?","¿Hay...? (singular)"],["Are there...?","¿Hay...? (plural)"]],
      explanation: "There is/are cambian según el número del sustantivo que sigue." }
  ]
};
