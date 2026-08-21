window.EXERCISE_DATA = {
  title: "Participial Adjectives (bored / boring)",
  translation: "Adjetivos con -ed y -ing",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "bored", es: "aburrido (que siente)" },
    { en: "boring", es: "aburrido (que causa)" },
    { en: "interested", es: "interesado" },
    { en: "interesting", es: "interesante" },
    { en: "excited", es: "emocionado" },
    { en: "exciting", es: "emocionante" },
    { en: "confused", es: "confundido" },
    { en: "confusing", es: "confuso" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["bored", "aburrido (que siente)"], ["boring", "aburrido (que causa)"], ["interested", "interesado"],
          ["interesting", "interesante"], ["excited", "emocionado"], ["confusing", "confuso"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Muchos adjetivos en inglés vienen en pares: uno terminado en <strong>-ed</strong> y otro en
    <strong>-ing</strong>, con significados relacionados pero distintos.</p>
    <table>
      <tr><th>Terminación</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td><strong>-ed</strong></td><td>describe cómo se SIENTE una persona</td><td>I am bored. (Yo estoy aburrido.)</td></tr>
      <tr><td><strong>-ing</strong></td><td>describe la CAUSA de ese sentimiento</td><td>This movie is boring. (Esta película es aburrida — causa aburrimiento.)</td></tr>
    </table>
    <p>Pares comunes:</p>
    <table>
      <tr><th>-ed (persona)</th><th>-ing (causa)</th></tr>
      <tr><td>bored</td><td>boring</td></tr>
      <tr><td>interested</td><td>interesting</td></tr>
      <tr><td>excited</td><td>exciting</td></tr>
      <tr><td>confused</td><td>confusing</td></tr>
      <tr><td>surprised</td><td>surprising</td></tr>
      <tr><td>tired</td><td>tiring</td></tr>
      <tr><td>annoyed</td><td>annoying</td></tr>
      <tr><td>frightened</td><td>frightening</td></tr>
    </table>
    <p>Ejemplo comparativo: <strong>I am interested in this book.</strong> (Yo — persona — estoy
    interesado) vs. <strong>This book is interesting.</strong> (El libro — causa — es interesante.)
    Error común: decir "I am boring" cuando se quiere decir "estoy aburrido" — eso en realidad
    significa "yo soy una persona aburrida (que aburre a otros)".</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el adjetivo correcto.",
      type: "mc",
      questions: [
        { prompt: "I am ___ (bored/boring). There's nothing to do.", options: ["bored", "boring"], correct: 0,
          explanation: "Describe cómo se siente la persona: 'bored'." },
        { prompt: "This movie is very ___ (bored/boring).", options: ["bored", "boring"], correct: 1,
          explanation: "Describe la causa del aburrimiento: 'boring'." },
        { prompt: "I'm ___ (interested/interesting) in history.", options: ["interested", "interesting"], correct: 0,
          explanation: "Describe cómo se siente la persona: 'interested'." },
        { prompt: "This book is really ___ (interested/interesting).", options: ["interested", "interesting"], correct: 1,
          explanation: "Describe la causa del interés: 'interesting'." },
        { prompt: "We are ___ (excited/exciting) about the trip.", options: ["excited", "exciting"], correct: 0,
          explanation: "Describe cómo se siente la persona: 'excited'." },
        { prompt: "The game was very ___ (excited/exciting).", options: ["excited", "exciting"], correct: 1,
          explanation: "Describe la causa de la emoción: 'exciting'." },
        { prompt: "I am ___ (confused/confusing) by these instructions.", options: ["confused", "confusing"], correct: 0,
          explanation: "Describe cómo se siente la persona: 'confused'." },
        { prompt: "These instructions are ___ (confused/confusing).", options: ["confused", "confusing"], correct: 1,
          explanation: "Describe la causa de la confusión: 'confusing'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la forma -ed o -ing correcta.",
      type: "fill",
      questions: [
        { prompt: "I am ___ (bore) with this class.", correct: ["bored"], explanation: "Persona: -ed." },
        { prompt: "This class is very ___ (bore).", correct: ["boring"], explanation: "Causa: -ing." },
        { prompt: "She is ___ (interest) in art.", correct: ["interested"], explanation: "Persona: -ed." },
        { prompt: "Art is ___ (interest) to her.", correct: ["interesting"], explanation: "Causa: -ing." },
        { prompt: "He was ___ (surprise) by the news.", correct: ["surprised"], explanation: "Persona: -ed." },
        { prompt: "The news was very ___ (surprise).", correct: ["surprising"], explanation: "Causa: -ing." },
        { prompt: "I feel ___ (tire) after work.", correct: ["tired"], explanation: "Persona: -ed." },
        { prompt: "This work is very ___ (tire).", correct: ["tiring"], explanation: "Causa: -ing." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "am", "bored", "right", "now", "."], translation: "Estoy aburrido ahora mismo.",
          explanation: "'-ed' describe cómo se siente la persona." },
        { words: ["This", "movie", "is", "boring", "."], translation: "Esta película es aburrida.",
          explanation: "'-ing' describe la causa." },
        { words: ["I'm", "interested", "in", "science", "."], translation: "Estoy interesado en la ciencia.",
          explanation: "'-ed' describe cómo se siente la persona." },
        { words: ["Science", "is", "very", "interesting", "."], translation: "La ciencia es muy interesante.",
          explanation: "'-ing' describe la causa." },
        { words: ["We", "are", "excited", "about", "the", "trip", "."], translation: "Estamos emocionados por el viaje.",
          explanation: "'-ed' describe cómo se siente la persona." },
        { words: ["The", "trip", "will", "be", "exciting", "."], translation: "El viaje será emocionante.",
          explanation: "'-ing' describe la causa." },
        { words: ["I", "was", "confused", "by", "the", "map", "."], translation: "Estaba confundido por el mapa.",
          explanation: "'-ed' describe cómo se siente la persona." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada adjetivo -ed con su pareja -ing.",
      type: "match",
      questions: [
        { pairs: [
            ["bored", "boring"], ["interested", "interesting"], ["excited", "exciting"], ["confused", "confusing"],
            ["surprised", "surprising"], ["tired", "tiring"], ["annoyed", "annoying"],
          ],
          explanation: "-ed para la persona, -ing para la causa del sentimiento." }
      ]
    }
  ]
};
