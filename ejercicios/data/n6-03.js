window.EXERCISE_DATA = {
  title: "Cleft Sentences",
  translation: "Oraciones hendidas — énfasis con 'it is/was'",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "emphasize", es: "enfatizar" },
    { en: "highlight", es: "resaltar" },
    { en: "the one who", es: "el que / quien" },
    { en: "what happened", es: "lo que pasó" },
    { en: "point out", es: "señalar" },
    { en: "focus on", es: "enfocarse en" },
    { en: "precisely", es: "precisamente" },
    { en: "specifically", es: "específicamente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["emphasize", "enfatizar"], ["highlight", "resaltar"], ["what happened", "lo que pasó"],
          ["point out", "señalar"], ["focus on", "enfocarse en"], ["precisely", "precisamente"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Las oraciones hendidas ("cleft sentences") dividen una oración simple en dos partes para dar
    <strong>énfasis especial</strong> a un elemento específico.</p>
    <table>
      <tr><th>Oración normal</th><th>Oración hendida (énfasis)</th></tr>
      <tr><td>John broke the window.</td><td>It was John who broke the window.</td></tr>
      <tr><td>She wants a new car.</td><td>What she wants is a new car.</td></tr>
      <tr><td>I need help, not money.</td><td>What I need is help, not money.</td></tr>
    </table>
    <p><strong>It + be + elemento enfatizado + who/that + resto de la oración</strong>:
    enfatiza a la persona o cosa específica: <strong>It was John who broke the window.</strong>
    (Fue John quien rompió la ventana — énfasis en "John", no en la acción.)</p>
    <p><strong>What + sujeto + verbo + be + elemento enfatizado</strong>: enfatiza la acción o cosa
    deseada: <strong>What she wants is a new car.</strong>
    (Lo que ella quiere es un carro nuevo — énfasis en "a new car".)</p>
    <p>Estas estructuras son comunes en el habla formal y escrita para resaltar información
    importante o corregir un malentendido.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "It was John ___ broke the window.", options: ["who", "what"], correct: 0,
          explanation: "'Who' se usa para personas en oraciones hendidas." },
        { prompt: "___ she wants is a new car.", options: ["What", "It"], correct: 0,
          explanation: "'What' inicia la oración hendida enfatizando la acción/cosa." },
        { prompt: "It was ___ the cake that fell, not the plate.", options: ["that", "who"], correct: 0,
          explanation: "'That' se usa para objetos en oraciones hendidas." },
        { prompt: "What I need ___ help, not money.", options: ["is", "are"], correct: 0,
          explanation: "'Is' concuerda con 'help' (singular)." },
        { prompt: "It ___ Maria who called earlier.", options: ["was", "is were"], correct: 0,
          explanation: "'Was' es el verbo correcto en pasado." },
        { prompt: "___ surprised me was his reaction.", options: ["What", "It"], correct: 0,
          explanation: "'What' inicia la oración hendida." },
        { prompt: "It was in 1990 ___ the wall fell.", options: ["that", "who"], correct: 0,
          explanation: "'That' se usa para tiempo/lugar en oraciones hendidas." },
        { prompt: "What we need ___ more time.", options: ["is", "are"], correct: 0,
          explanation: "'Is' concuerda con 'time' (incontable, singular)." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración hendida.",
      type: "fill",
      questions: [
        { prompt: "It was John ___ (who/what) broke it.", correct: ["who"], explanation: "'Who' para personas." },
        { prompt: "___ (What/It) she wants is respect.", correct: ["What"], explanation: "'What' inicia la oración hendida." },
        { prompt: "It ___ (be, pasado) Maria who called.", correct: ["was"], explanation: "'Was' es el verbo correcto en pasado." },
        { prompt: "What I need ___ (be) time.", correct: ["is"], explanation: "'Is' concuerda con el sustantivo enfatizado." },
        { prompt: "It was the coach ___ (who/what) motivated us.", correct: ["who"], explanation: "'Who' para personas." },
        { prompt: "___ (What/It) surprised everyone was the ending.", correct: ["What"], explanation: "'What' inicia la oración hendida." },
        { prompt: "It was yesterday ___ (that/who) it happened.", correct: ["that"], explanation: "'That' para tiempo." },
        { prompt: "What she said ___ (be) not true.", correct: ["was"], explanation: "'Was' concuerda con el tiempo pasado." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["It", "was", "John", "who", "broke", "the", "window", "."], translation: "Fue John quien rompió la ventana.",
          explanation: "It + be + persona + who + resto." },
        { words: ["What", "she", "wants", "is", "a", "new", "car", "."], translation: "Lo que ella quiere es un carro nuevo.",
          explanation: "What + sujeto + verbo + be + elemento enfatizado." },
        { words: ["It", "was", "the", "coach", "who", "motivated", "us", "."], translation: "Fue el entrenador quien nos motivó.",
          explanation: "It + be + persona + who + resto." },
        { words: ["What", "I", "need", "is", "more", "time", "."], translation: "Lo que necesito es más tiempo.",
          explanation: "What + sujeto + verbo + be + elemento enfatizado." },
        { words: ["It", "was", "in", "1990", "that", "the", "wall", "fell", "."], translation: "Fue en 1990 que cayó el muro.",
          explanation: "It + be + tiempo + that + resto." },
        { words: ["What", "surprised", "me", "was", "his", "reaction", "."], translation: "Lo que me sorprendió fue su reacción.",
          explanation: "What + verbo + be + elemento enfatizado." },
        { words: ["It", "was", "Maria", "who", "called", "earlier", "."], translation: "Fue María quien llamó antes.",
          explanation: "It + be + persona + who + resto." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración normal con su versión hendida.",
      type: "match",
      questions: [
        { pairs: [
            ["John broke it", "It was John who broke it"], ["She wants a car", "What she wants is a car"],
            ["I need time", "What I need is time"], ["The coach motivated us", "It was the coach who motivated us"],
            ["emphasize", "enfatizar"], ["highlight", "resaltar"], ["precisely", "precisamente"],
          ],
          explanation: "Las oraciones hendidas resaltan un elemento específico de la oración." }
      ]
    }
  ]
};
