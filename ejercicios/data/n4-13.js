window.EXERCISE_DATA = {
  title: "Passive Voice (Present / Past)",
  translation: "Voz pasiva en presente y pasado",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "built", es: "construido" },
    { en: "made", es: "hecho / fabricado" },
    { en: "produced", es: "producido" },
    { en: "invented", es: "inventado" },
    { en: "discovered", es: "descubierto" },
    { en: "manufactured", es: "manufacturado" },
    { en: "factory", es: "fábrica" },
    { en: "worldwide", es: "mundialmente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["built", "construido"], ["made", "hecho"], ["produced", "producido"],
          ["invented", "inventado"], ["discovered", "descubierto"], ["factory", "fábrica"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>La voz pasiva se usa cuando el <strong>foco está en la acción o el objeto</strong>, no en
    quién la realiza. Se forma con <strong>to be + participio pasado</strong>.</p>
    <table>
      <tr><th>Tiempo</th><th>Activa</th><th>Pasiva</th></tr>
      <tr><td>Presente</td><td>They make cars here.</td><td>Cars are made here.</td></tr>
      <tr><td>Pasado</td><td>They built this house in 1990.</td><td>This house was built in 1990.</td></tr>
    </table>
    <p>Estructura: <strong>sujeto + to be (am/is/are/was/were) + participio pasado</strong>.
    Si se quiere mencionar quién hizo la acción, se usa <strong>by</strong>:
    <strong>The book was written by an American author.</strong>
    (El libro fue escrito por un autor estadounidense.)</p>
    <p>Se usa mucho cuando no se sabe (o no importa) quién hizo la acción:
    <strong>My phone was stolen.</strong> (Me robaron el teléfono — no importa quién.)</p>
    <p>Ejemplo comparativo: <strong>Someone cleans this office every day</strong> (activa, enfoque en
    "alguien") vs. <strong>This office is cleaned every day</strong> (pasiva, enfoque en "la oficina").</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma pasiva correcta.",
      type: "mc",
      questions: [
        { prompt: "Cars ___ made in this factory.", options: ["is", "are", "was"], correct: 1,
          explanation: "'Cars' es plural, se usa 'are'." },
        { prompt: "This house ___ built in 1990.", options: ["is", "are", "was"], correct: 2,
          explanation: "Pasado con sujeto singular: 'was'." },
        { prompt: "English ___ spoken in many countries.", options: ["is", "are", "was"], correct: 0,
          explanation: "'English' es singular en este contexto: 'is'." },
        { prompt: "The book ___ (write) by a famous author.", options: ["write", "wrote", "written"], correct: 2,
          explanation: "Voz pasiva: to be + participio 'written'." },
        { prompt: "These products ___ (make) in China.", options: ["make", "made", "making"], correct: 1,
          explanation: "Voz pasiva: to be + participio 'made'." },
        { prompt: "My phone ___ stolen yesterday.", options: ["is", "are", "was"], correct: 2,
          explanation: "Pasado con sujeto singular: 'was'." },
        { prompt: "This bridge ___ (build) last year.", options: ["build", "built", "building"], correct: 1,
          explanation: "Voz pasiva: to be + participio 'built'." },
        { prompt: "The results ___ announced tomorrow.", options: ["is", "are", "was"], correct: 1,
          explanation: "'Results' es plural, se usa 'are'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con la voz pasiva correcta.",
      type: "fill",
      questions: [
        { prompt: "Cars ___ (make) in this factory.", correct: ["are made"], explanation: "are + participio pasivo presente." },
        { prompt: "This house ___ (build) in 1990.", correct: ["was built"], explanation: "was + participio pasivo pasado." },
        { prompt: "The letter ___ (write) yesterday.", correct: ["was written"], explanation: "was + participio pasivo pasado." },
        { prompt: "English ___ (speak) in many countries.", correct: ["is spoken"], explanation: "is + participio pasivo presente." },
        { prompt: "My car ___ (steal) last night.", correct: ["was stolen"], explanation: "was + participio pasivo pasado." },
        { prompt: "These shoes ___ (make) in Italy.", correct: ["are made"], explanation: "are + participio pasivo presente." },
        { prompt: "The movie ___ (direct) by Spielberg.", correct: ["was directed"], explanation: "was + participio pasivo pasado." },
        { prompt: "This app ___ (use) by millions of people.", correct: ["is used"], explanation: "is + participio pasivo presente." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Cars", "are", "made", "in", "this", "factory", "."], translation: "Los carros se fabrican en esta fábrica.",
          explanation: "Voz pasiva presente: are + participio." },
        { words: ["This", "house", "was", "built", "in", "1990", "."], translation: "Esta casa fue construida en 1990.",
          explanation: "Voz pasiva pasado: was + participio." },
        { words: ["The", "book", "was", "written", "by", "her", "."], translation: "El libro fue escrito por ella.",
          explanation: "Voz pasiva con 'by' para indicar quién hizo la acción." },
        { words: ["My", "phone", "was", "stolen", "yesterday", "."], translation: "Me robaron el teléfono ayer.",
          explanation: "Voz pasiva pasado, sin mencionar quién." },
        { words: ["English", "is", "spoken", "worldwide", "."], translation: "El inglés se habla en todo el mundo.",
          explanation: "Voz pasiva presente: is + participio." },
        { words: ["This", "bridge", "was", "built", "last", "year", "."], translation: "Este puente fue construido el año pasado.",
          explanation: "Voz pasiva pasado: was + participio." },
        { words: ["These", "products", "are", "sold", "worldwide", "."], translation: "Estos productos se venden mundialmente.",
          explanation: "Voz pasiva presente: are + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración activa con su versión pasiva.",
      type: "match",
      questions: [
        { pairs: [
            ["They make cars here", "Cars are made here"], ["They built it in 1990", "It was built in 1990"],
            ["Someone stole my phone", "My phone was stolen"], ["They speak English here", "English is spoken here"],
            ["by the author", "por el autor"], ["worldwide", "mundialmente"], ["factory", "fábrica"],
          ],
          explanation: "La voz pasiva cambia el enfoque de quién hace la acción al objeto/resultado." }
      ]
    }
  ]
};
