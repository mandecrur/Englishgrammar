window.EXERCISE_DATA = {
  title: "Imperatives",
  translation: "El imperativo — órdenes e instrucciones",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "open", es: "abrir" },
    { en: "close", es: "cerrar" },
    { en: "sit down", es: "sentarse" },
    { en: "stand up", es: "levantarse / pararse" },
    { en: "listen", es: "escuchar" },
    { en: "be quiet", es: "guardar silencio" },
    { en: "wait", es: "esperar" },
    { en: "please", es: "por favor" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["open", "abrir"], ["close", "cerrar"], ["sit down", "sentarse"],
          ["stand up", "levantarse"], ["listen", "escuchar"], ["wait", "esperar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>El imperativo se usa para dar <strong>órdenes, instrucciones o consejos</strong>.
    Se forma con el <strong>verbo base</strong>, sin sujeto.</p>
    <table>
      <tr><th>Forma</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Afirmativa</td><td>Open the door.</td><td>Abre la puerta.</td></tr>
      <tr><td>Negativa</td><td>Don't touch that.</td><td>No toques eso.</td></tr>
    </table>
    <p>Para hacerlo más educado, se puede añadir <strong>please</strong> al inicio o al final:
    <strong>Please sit down.</strong> / <strong>Sit down, please.</strong> (Siéntate, por favor.)</p>
    <p>Para incluirte a ti mismo en la orden (sugerencia), se usa <strong>Let's</strong> + verbo base:
    <strong>Let's go!</strong> (¡Vamos!) — <strong>Let's not argue.</strong> (No discutamos.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "___ the door, please.", options: ["Open", "Opens", "Opening"], correct: 0,
          explanation: "El imperativo usa el verbo base, sin -s ni sujeto." },
        { prompt: "___ touch that! It's hot.", options: ["Don't", "Doesn't", "Not"], correct: 0,
          explanation: "La negación del imperativo se forma con 'Don't' + verbo base." },
        { prompt: "___ down, please.", options: ["Sit", "Sits", "Sitting"], correct: 0,
          explanation: "El imperativo usa el verbo base." },
        { prompt: "___ go to the park!", options: ["Let's", "Lets", "Let"], correct: 0,
          explanation: "'Let's' (Let us) se usa para sugerencias incluyéndote a ti mismo." },
        { prompt: "___ quiet, please.", options: ["Be", "Is", "Are"], correct: 0,
          explanation: "El imperativo del verbo 'to be' es simplemente 'Be'." },
        { prompt: "___ be late!", options: ["Don't", "Not", "No"], correct: 0,
          explanation: "La negación se forma con 'Don't'." },
        { prompt: "___ your homework before dinner.", options: ["Finish", "Finishes", "Finishing"], correct: 0,
          explanation: "El imperativo usa el verbo base, sin -s." },
        { prompt: "___ worry, everything is fine.", options: ["Don't", "Not", "No"], correct: 0,
          explanation: "'Don't worry' significa 'no te preocupes'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada orden con el verbo correcto.",
      type: "fill",
      questions: [
        { prompt: "___ (open) the window, please.", correct: ["open"], explanation: "Imperativo: verbo base, sin sujeto." },
        { prompt: "___ (not/be) late.", correct: ["don't be"], explanation: "Negación: don't + verbo base 'be'." },
        { prompt: "___ (listen) carefully.", correct: ["listen"], explanation: "Imperativo: verbo base." },
        { prompt: "___ (wait) here, please.", correct: ["wait"], explanation: "Imperativo: verbo base." },
        { prompt: "___ (not/touch) the paint.", correct: ["don't touch"], explanation: "Negación: don't + verbo base." },
        { prompt: "___ (close) the door, please.", correct: ["close"], explanation: "Imperativo: verbo base." },
        { prompt: "___'s (go) to the beach! (vamos)", correct: ["let's go"], explanation: "Let's + verbo base para sugerencias." },
        { prompt: "___ (not/worry) about it.", correct: ["don't worry"], explanation: "Negación: don't + verbo base." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Open", "the", "door", ",", "please", "."], translation: "Abre la puerta, por favor.",
          explanation: "Imperativo con 'please' al final." },
        { words: ["Don't", "touch", "that", "!"], translation: "¡No toques eso!",
          explanation: "Negación: Don't + verbo base." },
        { words: ["Sit", "down", ",", "please", "."], translation: "Siéntate, por favor.",
          explanation: "Imperativo simple." },
        { words: ["Let's", "go", "to", "the", "park", "!"], translation: "¡Vamos al parque!",
          explanation: "Let's + verbo base para sugerencias." },
        { words: ["Please", "be", "quiet", "."], translation: "Por favor, guarda silencio.",
          explanation: "'Please' al inicio, seguido del imperativo." },
        { words: ["Don't", "be", "late", "tomorrow", "."], translation: "No llegues tarde mañana.",
          explanation: "Negación: Don't + verbo base 'be'." },
        { words: ["Wait", "for", "me", "here", "."], translation: "Espérame aquí.",
          explanation: "Imperativo simple con complemento." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada orden en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["Open the door", "Abre la puerta"], ["Don't touch that", "No toques eso"],
            ["Sit down, please", "Siéntate, por favor"], ["Let's go!", "¡Vamos!"],
            ["Be quiet", "Guarda silencio"], ["Wait here", "Espera aquí"], ["Don't worry", "No te preocupes"],
          ],
          explanation: "El imperativo se usa para dar instrucciones y órdenes." }
      ]
    }
  ]
};
