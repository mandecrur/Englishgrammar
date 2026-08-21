window.EXERCISE_DATA = {
  title: "Gerunds as Subjects and Objects",
  translation: "Gerundios como sujeto u objeto de la oración",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "swimming", es: "nadar (como actividad)" },
    { en: "reading", es: "leer (como actividad)" },
    { en: "smoking", es: "fumar (como actividad)" },
    { en: "enjoy", es: "disfrutar" },
    { en: "avoid", es: "evitar" },
    { en: "hobby", es: "pasatiempo" },
    { en: "activity", es: "actividad" },
    { en: "healthy", es: "saludable" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["swimming", "nadar (actividad)"], ["reading", "leer (actividad)"], ["enjoy", "disfrutar"],
          ["avoid", "evitar"], ["hobby", "pasatiempo"], ["healthy", "saludable"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El <strong>gerundio</strong> (verbo + -ing) puede funcionar como <strong>sustantivo</strong>
    en una oración: como sujeto o como objeto.</p>
    <table>
      <tr><th>Función</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Sujeto</td><td>Swimming is good exercise.</td><td>Nadar es buen ejercicio.</td></tr>
      <tr><td>Objeto (después de verbo)</td><td>I enjoy reading.</td><td>Disfruto leer.</td></tr>
      <tr><td>Objeto (después de preposición)</td><td>She is good at cooking.</td><td>Ella es buena cocinando.</td></tr>
    </table>
    <p>Cuando el gerundio es el <strong>sujeto</strong> de la oración, va al inicio y el verbo
    concuerda en singular: <strong>Reading books helps you learn.</strong>
    (Leer libros te ayuda a aprender.)</p>
    <p>Después de <strong>preposiciones</strong> (in, at, about, for, of...) siempre se usa
    gerundio, nunca infinitivo: <strong>I'm interested in learning English.</strong>
    (Estoy interesado en aprender inglés — no "to learn").</p>
    <p>Algunos verbos comunes que van seguidos de gerundio como objeto: <strong>enjoy, avoid, finish,
    mind, suggest, practice, imagine, quit</strong>.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "___ (swim) is good exercise.", options: ["Swim", "Swimming", "To swim"], correct: 1,
          explanation: "El gerundio funciona como sujeto de la oración." },
        { prompt: "I enjoy ___ (read) books.", options: ["read", "reading", "to read"], correct: 1,
          explanation: "'Enjoy' va seguido de gerundio." },
        { prompt: "She is good at ___ (cook).", options: ["cook", "cooking", "to cook"], correct: 1,
          explanation: "Después de preposiciones (at) se usa gerundio." },
        { prompt: "___ (smoke) is bad for your health.", options: ["Smoke", "Smoking", "To smoke"], correct: 1,
          explanation: "El gerundio funciona como sujeto." },
        { prompt: "He avoids ___ (eat) junk food.", options: ["eat", "eating", "to eat"], correct: 1,
          explanation: "'Avoid' va seguido de gerundio." },
        { prompt: "I'm interested in ___ (learn) English.", options: ["learn", "learning", "to learn"], correct: 1,
          explanation: "Después de preposiciones (in) se usa gerundio." },
        { prompt: "___ (travel) opens your mind.", options: ["Travel", "Traveling", "To travel"], correct: 1,
          explanation: "El gerundio funciona como sujeto." },
        { prompt: "They finished ___ (clean) the house.", options: ["clean", "cleaning", "to clean"], correct: 1,
          explanation: "'Finish' va seguido de gerundio." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el gerundio correcto.",
      type: "fill",
      questions: [
        { prompt: "___ (swim) is my favorite hobby.", correct: ["swimming"], explanation: "Gerundio como sujeto." },
        { prompt: "I enjoy ___ (dance).", correct: ["dancing"], explanation: "'Enjoy' + gerundio." },
        { prompt: "She's good at ___ (paint).", correct: ["painting"], explanation: "Preposición + gerundio." },
        { prompt: "___ (exercise) is important for health.", correct: ["exercising"], explanation: "Gerundio como sujeto." },
        { prompt: "He avoids ___ (drive) at night.", correct: ["driving"], explanation: "'Avoid' + gerundio." },
        { prompt: "I'm tired of ___ (wait).", correct: ["waiting"], explanation: "Preposición + gerundio." },
        { prompt: "They practice ___ (speak) English every day.", correct: ["speaking"], explanation: "'Practice' + gerundio." },
        { prompt: "___ (learn) a new language takes time.", correct: ["learning"], explanation: "Gerundio como sujeto." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Swimming", "is", "good", "exercise", "."], translation: "Nadar es buen ejercicio.",
          explanation: "Gerundio como sujeto de la oración." },
        { words: ["I", "enjoy", "reading", "books", "."], translation: "Disfruto leer libros.",
          explanation: "'Enjoy' + gerundio como objeto." },
        { words: ["She", "is", "good", "at", "cooking", "."], translation: "Ella es buena cocinando.",
          explanation: "Preposición 'at' + gerundio." },
        { words: ["Smoking", "is", "bad", "for", "your", "health", "."], translation: "Fumar es malo para tu salud.",
          explanation: "Gerundio como sujeto de la oración." },
        { words: ["He", "avoids", "eating", "junk", "food", "."], translation: "Él evita comer comida chatarra.",
          explanation: "'Avoid' + gerundio como objeto." },
        { words: ["I'm", "interested", "in", "learning", "English", "."], translation: "Estoy interesado en aprender inglés.",
          explanation: "Preposición 'in' + gerundio." },
        { words: ["Traveling", "opens", "your", "mind", "."], translation: "Viajar abre tu mente.",
          explanation: "Gerundio como sujeto de la oración." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada uso con su ejemplo.",
      type: "match",
      questions: [
        { pairs: [
            ["gerund as subject", "Swimming is fun"], ["gerund after verb", "I enjoy reading"],
            ["gerund after preposition", "good at cooking"], ["avoid + gerund", "avoid eating sugar"],
            ["finish + gerund", "finish cleaning"], ["a hobby", "un pasatiempo"], ["an activity", "una actividad"],
          ],
          explanation: "El gerundio se comporta como un sustantivo en estas tres posiciones." }
      ]
    }
  ]
};
