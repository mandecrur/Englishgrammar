window.EXERCISE_DATA = {
  title: "Simple Present: he / she / it (+s)",
  translation: "Presente simple con he/she/it (añade -s/-es)",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "watch", es: "ver (TV) / mirar" },
    { en: "go", es: "ir" },
    { en: "do", es: "hacer" },
    { en: "wash", es: "lavar" },
    { en: "fix", es: "arreglar" },
    { en: "rain", es: "llover" },
    { en: "cook", es: "cocinar" },
    { en: "drive", es: "conducir / manejar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada verbo en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["watch", "ver / mirar"], ["go", "ir"], ["do", "hacer"],
          ["wash", "lavar"], ["cook", "cocinar"], ["drive", "conducir / manejar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Con <strong>he, she, it</strong>, se añade <strong>-s</strong> al verbo en presente simple:
    <strong>he works</strong>, <strong>she plays</strong>.</p>
    <table>
      <tr><th>Regla</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Regla general: +s</td><td>She works.</td><td>Ella trabaja.</td></tr>
      <tr><td>Termina en -s, -sh, -ch, -x, -o: +es</td><td>He watches TV. / She goes home.</td><td>Él ve TV. / Ella va a casa.</td></tr>
      <tr><td>Consonante + y → y cambia a i + es</td><td>She studies English.</td><td>Ella estudia inglés.</td></tr>
    </table>
    <p><strong>Negativo:</strong> <em>doesn't</em> (does not) + verbo base.<br>
    <strong>Pregunta:</strong> <em>Does</em> + sujeto + verbo base.</p>
    <p>Ejemplo: <strong>He doesn't cook.</strong> (Él no cocina.) —
    <strong>Does she drive?</strong> (¿Ella maneja?)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta del verbo.",
      type: "mc",
      questions: [
        { prompt: "She ___ TV every night.", options: ["watch", "watches", "watching"], correct: 1,
          explanation: "'Watch' termina en -ch, así que se añade '-es': watches." },
        { prompt: "He ___ to school by bus.", options: ["go", "goes", "going"], correct: 1,
          explanation: "'Go' termina en -o, así que se añade '-es': goes." },
        { prompt: "It ___ a lot in winter.", options: ["rain", "rains", "raining"], correct: 1,
          explanation: "Con 'it' se añade '-s' al verbo base: rains." },
        { prompt: "She ___ her car every weekend.", options: ["wash", "washes", "washing"], correct: 1,
          explanation: "'Wash' termina en -sh, así que se añade '-es': washes." },
        { prompt: "He ___ not like vegetables.", options: ["do", "does", "is"], correct: 1,
          explanation: "Con 'he' en negativo se usa 'does not' (doesn't)." },
        { prompt: "___ she cook every day?", options: ["Do", "Does", "Is"], correct: 1,
          explanation: "Con 'she' en preguntas se usa 'Does'." },
        { prompt: "He ___ his homework after school.", options: ["do", "does", "doing"], correct: 1,
          explanation: "Con 'he' se usa 'does' como verbo principal (hacer)." },
        { prompt: "She ___ English very well.", options: ["study", "studies", "studying"], correct: 1,
          explanation: "'Study' termina en consonante+y, así que cambia a 'studies'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma correcta del verbo (con -s o -es).",
      type: "fill",
      questions: [
        { prompt: "He ___ (play) soccer on Saturdays.", correct: ["plays"], explanation: "Regla general: se añade '-s'." },
        { prompt: "She ___ (not/like) spicy food.", correct: ["doesn't like"], explanation: "Negación con 'doesn't' + verbo base." },
        { prompt: "It ___ (rain) a lot here.", correct: ["rains"], explanation: "Con 'it' se añade '-s'." },
        { prompt: "He ___ (fix) cars for a living.", correct: ["fixes"], explanation: "'Fix' termina en -x, se añade '-es'." },
        { prompt: "___ she ___ (drive) to work?", correct: ["does she drive"], explanation: "Pregunta: Does + sujeto + verbo base." },
        { prompt: "She ___ (go) to the gym every day.", correct: ["goes"], explanation: "'Go' termina en -o, se añade '-es'." },
        { prompt: "He ___ (cook) dinner every night.", correct: ["cooks"], explanation: "Regla general: se añade '-s'." },
        { prompt: "My mother ___ (study) at night.", correct: ["studies"], explanation: "'Study' cambia y→ies (consonante+y)." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["She", "watches", "TV", "every", "night", "."], translation: "Ella ve televisión todas las noches.",
          explanation: "Orden: sujeto + verbo (+es) + objeto + frecuencia." },
        { words: ["He", "goes", "to", "work", "by", "car", "."], translation: "Él va al trabajo en carro.",
          explanation: "Orden: sujeto + verbo (+es) + lugar + medio." },
        { words: ["Does", "she", "cook", "dinner", "?"], translation: "¿Ella cocina la cena?",
          explanation: "Pregunta: Does + sujeto + verbo base." },
        { words: ["He", "doesn't", "like", "coffee", "."], translation: "A él no le gusta el café.",
          explanation: "Negación con 'doesn't' antes del verbo base." },
        { words: ["It", "rains", "a", "lot", "in", "April", "."], translation: "Llueve mucho en abril.",
          explanation: "Orden: sujeto (it) + verbo (+s) + cantidad + tiempo." },
        { words: ["She", "studies", "English", "every", "day", "."], translation: "Ella estudia inglés todos los días.",
          explanation: "Orden: sujeto + verbo (studies) + objeto + frecuencia." },
        { words: ["He", "washes", "his", "car", "on", "Sundays", "."], translation: "Él lava su carro los domingos.",
          explanation: "Orden: sujeto + verbo (+es) + objeto + tiempo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada verbo base con su forma correcta para he/she/it.",
      type: "match",
      questions: [
        { pairs: [
            ["play", "plays"], ["study", "studies"], ["go", "goes"],
            ["watch", "watches"], ["fix", "fixes"], ["cook", "cooks"], ["wash", "washes"],
          ],
          explanation: "Reglas: -s regular, -es tras sibilantes (sh/ch/x/o), y→ies tras consonante." }
      ]
    }
  ]
};
