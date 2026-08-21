window.EXERCISE_DATA = {
  title: "Would (Requests and Preferences)",
  translation: "Would — peticiones educadas y preferencias",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "prefer", es: "preferir" },
    { en: "rather", es: "mejor / preferiblemente" },
    { en: "like to", es: "gustar hacer algo" },
    { en: "mind", es: "importar (molestia)" },
    { en: "offer", es: "ofrecer" },
    { en: "invitation", es: "invitación" },
    { en: "polite", es: "educado" },
    { en: "instead", es: "en cambio" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["prefer", "preferir"], ["rather", "mejor / preferiblemente"], ["mind", "importar (molestia)"],
          ["offer", "ofrecer"], ["invitation", "invitación"], ["instead", "en cambio"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Would</strong> tiene varios usos importantes: hacer peticiones educadas, ofrecer algo,
    invitar a alguien, y expresar preferencias.</p>
    <table>
      <tr><th>Uso</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Petición educada</td><td>Would you close the door, please?</td><td>¿Podrías cerrar la puerta, por favor?</td></tr>
      <tr><td>Ofrecimiento/invitación</td><td>Would you like some coffee?</td><td>¿Te gustaría un café?</td></tr>
      <tr><td>Preferencia</td><td>I would rather stay home.</td><td>Preferiría quedarme en casa.</td></tr>
    </table>
    <p><strong>Would like</strong> es una forma educada de decir "want" (querer):
    <strong>I would like a coffee.</strong> (Quisiera un café — más educado que "I want a coffee".)</p>
    <p><strong>Would rather</strong> expresa preferencia entre opciones: <strong>I would rather walk
    than drive.</strong> (Preferiría caminar que manejar.)</p>
    <p>La contracción de "would" es <strong>'d</strong>: <strong>I'd like...</strong>,
    <strong>I'd rather...</strong> Esto es muy común en el habla cotidiana.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "___ you close the door, please?", options: ["Would", "Do", "Are"], correct: 0,
          explanation: "'Would' se usa para peticiones educadas." },
        { prompt: "___ you like some tea?", options: ["Would", "Do", "Are"], correct: 0,
          explanation: "'Would you like...?' es la forma educada de ofrecer." },
        { prompt: "I ___ like a glass of water. (quisiera)", options: ["would", "will", "am"], correct: 0,
          explanation: "'Would like' es más educado que 'want'." },
        { prompt: "I would ___ stay home tonight. (preferiría)", options: ["rather", "prefer to", "like"], correct: 0,
          explanation: "'Would rather' + verbo base expresa preferencia." },
        { prompt: "She'd ___ (like) some help.", options: ["like", "likes", "liking"], correct: 0,
          explanation: "Después de 'would' se usa el verbo base." },
        { prompt: "___ you mind helping me?", options: ["Would", "Do", "Are"], correct: 0,
          explanation: "'Would you mind...?' es una petición muy educada." },
        { prompt: "I would rather walk ___ drive.", options: ["than", "that", "then"], correct: 0,
          explanation: "'Would rather...than' compara dos opciones." },
        { prompt: "We ___ like to order now.", options: ["would", "will", "are"], correct: 0,
          explanation: "'Would like to' + verbo base." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con would.",
      type: "fill",
      questions: [
        { prompt: "___ you help me, please?", correct: ["would"], explanation: "Petición educada con 'would'." },
        { prompt: "I ___ (like) a coffee, please.", correct: ["would like"], explanation: "'Would like' para pedir educadamente." },
        { prompt: "She ___ (rather) stay home tonight.", correct: ["would rather"], explanation: "'Would rather' para preferencias." },
        { prompt: "___ you like some dessert?", correct: ["would"], explanation: "Ofrecimiento educado con 'would'." },
        { prompt: "I ___ (rather) walk than drive.", correct: ["would rather"], explanation: "'Would rather...than' compara opciones." },
        { prompt: "___ you mind opening the window?", correct: ["would"], explanation: "Petición muy educada con 'would mind'." },
        { prompt: "We ___ (like) to visit Cusco someday.", correct: ["would like"], explanation: "'Would like to' para expresar deseo educadamente." },
        { prompt: "He ___ (rather) not talk about it.", correct: ["would rather"], explanation: "'Would rather' para preferencias, incluso negativas." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Would", "you", "close", "the", "door", "?"], translation: "¿Podrías cerrar la puerta?",
          explanation: "Petición educada con 'would'." },
        { words: ["Would", "you", "like", "some", "coffee", "?"], translation: "¿Te gustaría un café?",
          explanation: "Ofrecimiento educado con 'would like'." },
        { words: ["I", "would", "like", "a", "glass", "of", "water", "."], translation: "Quisiera un vaso de agua.",
          explanation: "'Would like' para pedir educadamente." },
        { words: ["I", "would", "rather", "stay", "home", "."], translation: "Preferiría quedarme en casa.",
          explanation: "'Would rather' + verbo base para preferencias." },
        { words: ["Would", "you", "mind", "helping", "me", "?"], translation: "¿Te importaría ayudarme?",
          explanation: "'Would you mind' + verbo-ing, muy educado." },
        { words: ["I", "would", "rather", "walk", "than", "drive", "."], translation: "Preferiría caminar que manejar.",
          explanation: "'Would rather...than' compara dos opciones." },
        { words: ["We", "would", "like", "to", "order", "now", "."], translation: "Quisiéramos ordenar ahora.",
          explanation: "'Would like to' + verbo base." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["Would you...?", "petición educada"], ["Would you like...?", "ofrecimiento"],
            ["I would like", "quisiera"], ["I would rather", "preferiría"],
            ["Would you mind...?", "¿te importaría...?"], ["I'd", "contracción de I would"], ["instead", "en cambio"],
          ],
          explanation: "'Would' tiene múltiples usos educados y de preferencia." }
      ]
    }
  ]
};
