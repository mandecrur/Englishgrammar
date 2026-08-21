window.EXERCISE_DATA = {
  title: "Progressive Modals",
  translation: "Modales progresivos — deducciones sobre acciones en curso",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "right now", es: "ahora mismo" },
    { en: "probably", es: "probablemente" },
    { en: "at this moment", es: "en este momento" },
    { en: "wonder", es: "preguntarse" },
    { en: "assume", es: "asumir" },
    { en: "currently", es: "actualmente" },
    { en: "presumably", es: "presumiblemente" },
    { en: "meanwhile", es: "mientras tanto" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["right now", "ahora mismo"], ["probably", "probablemente"], ["wonder", "preguntarse"],
          ["assume", "asumir"], ["currently", "actualmente"], ["presumably", "presumiblemente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los modales también se pueden combinar con la forma continua para hacer deducciones sobre
    acciones <strong>en curso</strong>. Se forma con <strong>modal + be + verbo-ing</strong>.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>She must be sleeping right now.</td><td>Ella debe estar durmiendo ahora mismo.</td></tr>
      <tr><td>He might be working late.</td><td>Puede que esté trabajando hasta tarde.</td></tr>
      <tr><td>They could be watching TV.</td><td>Podrían estar viendo televisión.</td></tr>
      <tr><td>She can't be sleeping, I just heard her voice.</td><td>No puede estar durmiendo, acabo de oír su voz.</td></tr>
    </table>
    <p>Este formato se usa para especular sobre lo que alguien <strong>probablemente está haciendo
    en este momento</strong>, sin saberlo con certeza.</p>
    <p>Ejemplo de razonamiento: <strong>The lights are on in her room. She must be studying.</strong>
    (Las luces están encendidas en su cuarto. Debe estar estudiando — deducción basada en evidencia
    presente sobre una acción en curso.)</p>
    <p>Estructura: <strong>modal + be + verbo-ing</strong>, igual para todos los pronombres,
    ya que el modal no cambia.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "She must ___ sleeping right now.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be' (forma base)." },
        { prompt: "He might be ___ (work) late tonight.", options: ["work", "working", "worked"], correct: 1,
          explanation: "'Be' + verbo-ing después de un modal." },
        { prompt: "They could be ___ (watch) TV right now.", options: ["watch", "watching", "watched"], correct: 1,
          explanation: "'Be' + verbo-ing después de un modal." },
        { prompt: "She can't be sleeping, I ___ just heard her voice.", options: ["-", "am", "have"], correct: 0,
          explanation: "Frase simple sin verbo auxiliar adicional aquí." },
        { prompt: "The lights are on. She must ___ studying.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be'." },
        { prompt: "He may be ___ (drive) home right now.", options: ["drive", "driving", "drove"], correct: 1,
          explanation: "'Be' + verbo-ing después de un modal." },
        { prompt: "They must ___ having dinner at this hour.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be'." },
        { prompt: "She can't be ___ (work), it's a holiday.", options: ["work", "working", "worked"], correct: 1,
          explanation: "'Be' + verbo-ing después de un modal." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con modal + be + verbo-ing.",
      type: "fill",
      questions: [
        { prompt: "She ___ (must/sleep) right now.", correct: ["must be sleeping"], explanation: "must + be + verbo-ing." },
        { prompt: "He ___ (might/work) late tonight.", correct: ["might be working"], explanation: "might + be + verbo-ing." },
        { prompt: "They ___ (could/watch) a movie right now.", correct: ["could be watching"], explanation: "could + be + verbo-ing." },
        { prompt: "She ___ (can't/sleep), I just heard her.", correct: ["can't be sleeping"], explanation: "can't + be + verbo-ing." },
        { prompt: "He ___ (must/study) — the lights are on.", correct: ["must be studying"], explanation: "must + be + verbo-ing." },
        { prompt: "They ___ (may/have) dinner right now.", correct: ["may be having"], explanation: "may + be + verbo-ing." },
        { prompt: "She ___ (must/drive) home now.", correct: ["must be driving"], explanation: "must + be + verbo-ing." },
        { prompt: "He ___ (can't/work), it's a holiday.", correct: ["can't be working"], explanation: "can't + be + verbo-ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "must", "be", "sleeping", "right", "now", "."], translation: "Ella debe estar durmiendo ahora mismo.",
          explanation: "must + be + verbo-ing." },
        { words: ["He", "might", "be", "working", "late", "."], translation: "Puede que él esté trabajando hasta tarde.",
          explanation: "might + be + verbo-ing." },
        { words: ["They", "could", "be", "watching", "TV", "."], translation: "Podrían estar viendo televisión.",
          explanation: "could + be + verbo-ing." },
        { words: ["She", "can't", "be", "sleeping", "."], translation: "No puede estar durmiendo.",
          explanation: "can't + be + verbo-ing." },
        { words: ["The", "lights", "are", "on", ".", "She", "must", "be", "studying", "."], translation: "Las luces están encendidas. Debe estar estudiando.",
          explanation: "Deducción con evidencia visible." },
        { words: ["He", "may", "be", "driving", "home", "now", "."], translation: "Puede que esté manejando a casa ahora.",
          explanation: "may + be + verbo-ing." },
        { words: ["They", "must", "be", "having", "dinner", "."], translation: "Deben estar cenando.",
          explanation: "must + be + verbo-ing." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["must be sleeping", "debe estar durmiendo"], ["might be working", "puede que esté trabajando"],
            ["could be watching", "podría estar viendo"], ["can't be sleeping", "no puede estar durmiendo"],
            ["right now", "ahora mismo"], ["probably", "probablemente"], ["currently", "actualmente"],
          ],
          explanation: "Modal + be + verbo-ing hace deducciones sobre acciones en curso." }
      ]
    }
  ]
};
