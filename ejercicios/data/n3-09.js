window.EXERCISE_DATA = {
  title: "Must Not vs Don't Have To",
  translation: "Prohibición vs falta de obligación",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "forbidden", es: "prohibido" },
    { en: "prohibited", es: "prohibido" },
    { en: "allowed", es: "permitido" },
    { en: "optional", es: "opcional" },
    { en: "smoke", es: "fumar" },
    { en: "enter", es: "entrar" },
    { en: "sign", es: "letrero / señal" },
    { en: "mandatory", es: "obligatorio" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["forbidden", "prohibido"], ["allowed", "permitido"], ["optional", "opcional"],
          ["smoke", "fumar"], ["enter", "entrar"], ["mandatory", "obligatorio"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estas dos formas negativas tienen significados <strong>muy distintos</strong>, aunque
    parezcan similares.</p>
    <table>
      <tr><th>Must not (mustn't)</th><th>Don't have to</th></tr>
      <tr><td>Prohibición — está prohibido hacerlo</td><td>Falta de obligación — no es necesario, pero se puede</td></tr>
      <tr><td>You mustn't smoke here. (prohibido)</td><td>You don't have to come. (opcional, tu decisión)</td></tr>
    </table>
    <p>Ejemplo comparativo: <strong>You mustn't park here.</strong> (Está prohibido estacionar aquí — hay
    una multa si lo haces) vs. <strong>You don't have to park here.</strong>
    (No es necesario que estaciones aquí — puedes hacerlo en otro lugar si quieres, no es obligatorio.)</p>
    <p>Esta diferencia es muy importante porque confundirlas cambia completamente el significado de la oración.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige mustn't o don't/doesn't have to según el significado.",
      type: "mc",
      questions: [
        { prompt: "You ___ smoke here. It's forbidden.", options: ["mustn't", "don't have to"], correct: 0,
          explanation: "Prohibición: se usa 'mustn't'." },
        { prompt: "You ___ come to the party if you don't want to. (opcional)", options: ["mustn't", "don't have to"], correct: 1,
          explanation: "No es obligatorio, es tu decisión: 'don't have to'." },
        { prompt: "Students ___ cheat on exams. (prohibido)", options: ["mustn't", "don't have to"], correct: 0,
          explanation: "Prohibición: se usa 'mustn't'." },
        { prompt: "She ___ work today, it's her day off. (no es necesario)", options: ["mustn't", "doesn't have to"], correct: 1,
          explanation: "No es obligatorio hoy: 'doesn't have to'." },
        { prompt: "You ___ touch that, it's dangerous. (prohibido)", options: ["mustn't", "don't have to"], correct: 0,
          explanation: "Prohibición por seguridad: 'mustn't'." },
        { prompt: "We ___ bring anything, the host has everything. (no es necesario)", options: ["mustn't", "don't have to"], correct: 1,
          explanation: "No es necesario, es opcional: 'don't have to'." },
        { prompt: "You ___ enter without permission. (prohibido)", options: ["mustn't", "don't have to"], correct: 0,
          explanation: "Prohibición: 'mustn't'." },
        { prompt: "He ___ pay, it's free. (no es necesario)", options: ["mustn't", "doesn't have to"], correct: 1,
          explanation: "No es necesario pagar: 'doesn't have to'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con mustn't o la forma correcta de don't/doesn't have to.",
      type: "fill",
      questions: [
        { prompt: "You ___ (smoke) here. It's forbidden.", correct: ["mustn't smoke"], explanation: "Prohibición: mustn't." },
        { prompt: "You ___ (come) if you're busy. (opcional)", correct: ["don't have to come"], explanation: "No obligatorio: don't have to." },
        { prompt: "Students ___ (cheat) on tests.", correct: ["mustn't cheat"], explanation: "Prohibición: mustn't." },
        { prompt: "She ___ (work) today, it's Sunday.", correct: ["doesn't have to work"], explanation: "No obligatorio: doesn't have to." },
        { prompt: "You ___ (park) here, it's illegal.", correct: ["mustn't park"], explanation: "Prohibición: mustn't." },
        { prompt: "We ___ (bring) food, they have plenty.", correct: ["don't have to bring"], explanation: "No obligatorio: don't have to." },
        { prompt: "You ___ (touch) the paintings.", correct: ["mustn't touch"], explanation: "Prohibición: mustn't." },
        { prompt: "He ___ (pay) for the ticket, it's included.", correct: ["doesn't have to pay"], explanation: "No obligatorio: doesn't have to." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["You", "mustn't", "smoke", "here", "."], translation: "No debes fumar aquí (está prohibido).",
          explanation: "Prohibición con 'mustn't'." },
        { words: ["You", "don't", "have", "to", "come", "."], translation: "No es necesario que vengas.",
          explanation: "Falta de obligación con 'don't have to'." },
        { words: ["Students", "mustn't", "cheat", "on", "exams", "."], translation: "Los estudiantes no deben copiar en los exámenes.",
          explanation: "Prohibición con 'mustn't'." },
        { words: ["She", "doesn't", "have", "to", "work", "today", "."], translation: "Ella no tiene que trabajar hoy.",
          explanation: "Falta de obligación con 'doesn't have to'." },
        { words: ["You", "mustn't", "touch", "that", "."], translation: "No debes tocar eso.",
          explanation: "Prohibición con 'mustn't'." },
        { words: ["We", "don't", "have", "to", "bring", "anything", "."], translation: "No tenemos que traer nada.",
          explanation: "Falta de obligación con 'don't have to'." },
        { words: ["He", "doesn't", "have", "to", "pay", "."], translation: "Él no tiene que pagar.",
          explanation: "Falta de obligación con 'doesn't have to'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada situación con la forma correcta.",
      type: "match",
      questions: [
        { pairs: [
            ["Forbidden by law", "mustn't"], ["Optional, your choice", "don't have to"],
            ["Dangerous action", "mustn't"], ["Not necessary today", "doesn't have to"],
            ["Against the rules", "mustn't"], ["Already included/free", "doesn't have to"], ["No permission", "mustn't"],
          ],
          explanation: "Distingue entre prohibición ('mustn't') y falta de obligación ('don't have to')." }
      ]
    }
  ]
};
