window.EXERCISE_DATA = {
  title: "Be Used To vs Get Used To",
  translation: "Estar acostumbrado vs acostumbrarse",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "accustomed", es: "acostumbrado" },
    { en: "adapt", es: "adaptarse" },
    { en: "strange at first", es: "extraño al principio" },
    { en: "gradually", es: "gradualmente" },
    { en: "climate", es: "clima" },
    { en: "culture", es: "cultura" },
    { en: "lifestyle", es: "estilo de vida" },
    { en: "eventually", es: "eventualmente / con el tiempo" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["accustomed", "acostumbrado"], ["adapt", "adaptarse"], ["gradually", "gradualmente"],
          ["climate", "clima"], ["culture", "cultura"], ["eventually", "eventualmente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estas dos expresiones son diferentes de "used to" (hábito pasado) y tienen significados propios.</p>
    <table>
      <tr><th>Expresión</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td><strong>be used to</strong></td><td>estado — ya estar acostumbrado</td><td>I am used to cold weather.</td></tr>
      <tr><td><strong>get used to</strong></td><td>proceso — acostumbrarse (con el tiempo)</td><td>I am getting used to the new job.</td></tr>
    </table>
    <p>Ambas van seguidas de <strong>sustantivo</strong> o <strong>verbo + -ing</strong> (no verbo base):</p>
    <p><strong>She is used to working long hours.</strong> (Ella está acostumbrada a trabajar muchas horas.)<br>
    <strong>He is getting used to living abroad.</strong> (Él se está acostumbrando a vivir en el extranjero.)</p>
    <p>Diferencia clave: <strong>be used to</strong> describe un estado ya establecido (ya es normal para ti),
    mientras que <strong>get used to</strong> describe el proceso de adaptación (te estás acostumbrando,
    puede que aún no sea totalmente normal).</p>
    <p>Comparación con "used to" (sin "be/get"): <strong>I used to live there</strong> (hábito pasado, ya no)
    vs. <strong>I am used to living there</strong> (estoy acostumbrado ahora — presente).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "I am used to ___ (work) at night.", options: ["work", "working", "worked"], correct: 1,
          explanation: "Después de 'used to' se usa el verbo en -ing." },
        { prompt: "She is getting used to ___ (live) here.", options: ["live", "living", "lived"], correct: 1,
          explanation: "Después de 'used to' se usa el verbo en -ing." },
        { prompt: "He ___ used to the cold weather now.", options: ["is", "was", "used"], correct: 0,
          explanation: "'Is used to' expresa un estado ya establecido." },
        { prompt: "We are ___ used to the new schedule.", options: ["get", "getting", "got"], correct: 1,
          explanation: "'Are getting used to' expresa el proceso de adaptación." },
        { prompt: "They are used to ___ (eat) spicy food.", options: ["eat", "eating", "ate"], correct: 1,
          explanation: "Después de 'used to' se usa el verbo en -ing." },
        { prompt: "I'm still getting used to ___ (drive) here.", options: ["drive", "driving", "drove"], correct: 1,
          explanation: "Después de 'used to' se usa el verbo en -ing." },
        { prompt: "She is used to the ___ (noise) here.", options: ["noise", "noisy", "noised"], correct: 0,
          explanation: "'Used to' puede ir seguido de un sustantivo directamente." },
        { prompt: "He is not used to ___ (wake up) early.", options: ["wake up", "waking up", "woke up"], correct: 1,
          explanation: "Después de 'used to' se usa el verbo en -ing." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con be used to o get used to correctamente.",
      type: "fill",
      questions: [
        { prompt: "I ___ (be used to) the cold weather now.", correct: ["am used to"], explanation: "Estado establecido: am used to." },
        { prompt: "She ___ (get used to) the new job.", correct: ["is getting used to"], explanation: "Proceso: is getting used to." },
        { prompt: "We are used to ___ (work) long hours.", correct: ["working"], explanation: "Verbo en -ing después de 'used to'." },
        { prompt: "He is not used to ___ (drive) on the left.", correct: ["driving"], explanation: "Verbo en -ing después de 'used to'." },
        { prompt: "They ___ (get used to) the new culture.", correct: ["are getting used to"], explanation: "Proceso: are getting used to." },
        { prompt: "I ___ (be used to) living alone.", correct: ["am used to"], explanation: "Estado establecido: am used to." },
        { prompt: "She is used to ___ (eat) breakfast early.", correct: ["eating"], explanation: "Verbo en -ing después de 'used to'." },
        { prompt: "Are you ___ (get used to) your new schedule?", correct: ["getting used to"], explanation: "Proceso: getting used to." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "used", "to", "cold", "weather", "."], translation: "Estoy acostumbrado al clima frío.",
          explanation: "Estado establecido con 'am used to'." },
        { words: ["She", "is", "getting", "used", "to", "the", "job", "."], translation: "Ella se está acostumbrando al trabajo.",
          explanation: "Proceso con 'is getting used to'." },
        { words: ["He", "is", "used", "to", "working", "long", "hours", "."], translation: "Él está acostumbrado a trabajar muchas horas.",
          explanation: "'Used to' + verbo-ing para estado establecido." },
        { words: ["We", "are", "getting", "used", "to", "the", "culture", "."], translation: "Nos estamos acostumbrando a la cultura.",
          explanation: "Proceso con 'are getting used to'." },
        { words: ["They", "aren't", "used", "to", "the", "noise", "."], translation: "Ellos no están acostumbrados al ruido.",
          explanation: "Negación: aren't used to + sustantivo." },
        { words: ["I'm", "still", "getting", "used", "to", "driving", "here", "."], translation: "Todavía me estoy acostumbrando a manejar aquí.",
          explanation: "'Still getting used to' + verbo-ing." },
        { words: ["She", "is", "used", "to", "waking", "up", "early", "."], translation: "Ella está acostumbrada a despertarse temprano.",
          explanation: "'Used to' + verbo-ing para estado establecido." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada expresión con su significado.",
      type: "match",
      questions: [
        { pairs: [
            ["be used to", "estado establecido"], ["get used to", "proceso de adaptación"],
            ["used to (sin be/get)", "hábito pasado, ya no"], ["I am used to it", "Estoy acostumbrado"],
            ["I am getting used to it", "Me estoy acostumbrando"], ["gradually", "gradualmente"], ["eventually", "eventualmente"],
          ],
          explanation: "Tres estructuras distintas con la misma palabra clave 'used'." }
      ]
    }
  ]
};
