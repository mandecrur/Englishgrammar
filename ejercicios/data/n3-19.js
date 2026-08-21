window.EXERCISE_DATA = {
  title: "Irregular Comparatives",
  translation: "Comparativos irregulares",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "far", es: "lejos" },
    { en: "little (amount)", es: "poco (cantidad)" },
    { en: "quality", es: "calidad" },
    { en: "distance", es: "distancia" },
    { en: "improve", es: "mejorar" },
    { en: "worsen", es: "empeorar" },
    { en: "further", es: "más lejos / además" },
    { en: "less", es: "menos" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["far", "lejos"], ["quality", "calidad"], ["distance", "distancia"],
          ["improve", "mejorar"], ["further", "más lejos"], ["less", "menos"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Algunos adjetivos no siguen las reglas regulares de comparativos (-er / more).
    Deben memorizarse.</p>
    <table>
      <tr><th>Adjetivo</th><th>Comparativo</th><th>Traducción</th></tr>
      <tr><td>good</td><td>better</td><td>bueno → mejor</td></tr>
      <tr><td>bad</td><td>worse</td><td>malo → peor</td></tr>
      <tr><td>far</td><td>farther / further</td><td>lejos → más lejos</td></tr>
      <tr><td>little (cantidad)</td><td>less</td><td>poco → menos</td></tr>
      <tr><td>many/much</td><td>more</td><td>mucho → más</td></tr>
    </table>
    <p>Ejemplo: <strong>This coffee is better than that one.</strong> (Este café es mejor que ese.)<br>
    <strong>My house is farther from here than yours.</strong> (Mi casa está más lejos de aquí que la tuya.)</p>
    <p>Nota: <strong>farther</strong> se usa para distancia física, mientras que
    <strong>further</strong> se usa también en sentido figurado (más información, etc.), aunque
    en el uso cotidiano muchas veces se intercambian.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el comparativo irregular correcto.",
      type: "mc",
      questions: [
        { prompt: "This is ___ than that one. (good)", options: ["gooder", "better", "more good"], correct: 1,
          explanation: "'Good' es irregular: better." },
        { prompt: "The weather is ___ today. (bad)", options: ["badder", "worse", "more bad"], correct: 1,
          explanation: "'Bad' es irregular: worse." },
        { prompt: "My house is ___ than yours. (far)", options: ["farer", "farther", "more far"], correct: 1,
          explanation: "'Far' es irregular: farther/further." },
        { prompt: "I have ___ money than you. (little)", options: ["littler", "less", "more little"], correct: 1,
          explanation: "'Little' (cantidad) es irregular: less." },
        { prompt: "She has ___ books than me. (many)", options: ["manyer", "more", "much"], correct: 1,
          explanation: "'Many' es irregular: more." },
        { prompt: "This test was ___ than expected. (bad)", options: ["worse", "badder", "more bad"], correct: 0,
          explanation: "'Bad' es irregular: worse." },
        { prompt: "He is ___ at math than his brother. (good)", options: ["gooder", "better", "more good"], correct: 1,
          explanation: "'Good' es irregular: better." },
        { prompt: "We need ___ information. (much)", options: ["much", "more", "manyer"], correct: 1,
          explanation: "'Much' es irregular: more." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma comparativa irregular correcta.",
      type: "fill",
      questions: [
        { prompt: "This restaurant is ___ (good) than that one.", correct: ["better"], explanation: "'Good' irregular: better." },
        { prompt: "My grades are ___ (bad) than last year.", correct: ["worse"], explanation: "'Bad' irregular: worse." },
        { prompt: "The store is ___ (far) than I thought.", correct: ["farther", "further"], explanation: "'Far' irregular: farther/further." },
        { prompt: "I have ___ (little) time than you.", correct: ["less"], explanation: "'Little' irregular: less." },
        { prompt: "She has ___ (many) friends than him.", correct: ["more"], explanation: "'Many' irregular: more." },
        { prompt: "This coffee tastes ___ (good) than that one.", correct: ["better"], explanation: "'Good' irregular: better." },
        { prompt: "The traffic is ___ (bad) today.", correct: ["worse"], explanation: "'Bad' irregular: worse." },
        { prompt: "We need ___ (much) practice.", correct: ["more"], explanation: "'Much' irregular: more." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "coffee", "is", "better", "than", "that", "one", "."], translation: "Este café es mejor que ese.",
          explanation: "'Better' es el comparativo irregular de 'good'." },
        { words: ["The", "weather", "is", "worse", "today", "."], translation: "El clima está peor hoy.",
          explanation: "'Worse' es el comparativo irregular de 'bad'." },
        { words: ["My", "house", "is", "farther", "than", "yours", "."], translation: "Mi casa está más lejos que la tuya.",
          explanation: "'Farther' es el comparativo irregular de 'far'." },
        { words: ["I", "have", "less", "money", "than", "him", "."], translation: "Tengo menos dinero que él.",
          explanation: "'Less' es el comparativo irregular de 'little'." },
        { words: ["She", "has", "more", "experience", "than", "me", "."], translation: "Ella tiene más experiencia que yo.",
          explanation: "'More' es el comparativo irregular de 'much'." },
        { words: ["He", "is", "better", "at", "sports", "than", "me", "."], translation: "Él es mejor en deportes que yo.",
          explanation: "'Better' es el comparativo irregular de 'good'." },
        { words: ["This", "situation", "is", "worse", "than", "before", "."], translation: "Esta situación es peor que antes.",
          explanation: "'Worse' es el comparativo irregular de 'bad'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo con su comparativo irregular.",
      type: "match",
      questions: [
        { pairs: [
            ["good", "better"], ["bad", "worse"], ["far", "farther / further"],
            ["little", "less"], ["many", "more"], ["much", "more"], ["worse than before", "peor que antes"],
          ],
          explanation: "Estos comparativos no siguen ninguna regla, hay que memorizarlos." }
      ]
    }
  ]
};
