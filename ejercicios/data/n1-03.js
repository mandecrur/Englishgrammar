window.EXERCISE_DATA = {
  title: "Basic Greetings and Introductions",
  translation: "Saludos y presentaciones básicas",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "hello / hi", es: "hola" },
    { en: "goodbye / bye", es: "adiós / chao" },
    { en: "name", es: "nombre" },
    { en: "morning", es: "mañana" },
    { en: "afternoon", es: "tarde" },
    { en: "evening", es: "noche (al saludar)" },
    { en: "friend", es: "amigo/a" },
    { en: "welcome", es: "bienvenido/a" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["hello / hi", "hola"], ["goodbye / bye", "adiós / chao"], ["name", "nombre"],
          ["morning", "mañana"], ["afternoon", "tarde"], ["welcome", "bienvenido/a"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estas son las frases más comunes para saludar y presentarte en inglés.</p>
    <table>
      <tr><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>Hello / Hi</td><td>Hola</td></tr>
      <tr><td>Good morning</td><td>Buenos días</td></tr>
      <tr><td>Good afternoon</td><td>Buenas tardes</td></tr>
      <tr><td>Good evening</td><td>Buenas noches (al llegar/saludar)</td></tr>
      <tr><td>What's your name?</td><td>¿Cómo te llamas?</td></tr>
      <tr><td>My name is...</td><td>Me llamo...</td></tr>
      <tr><td>Nice to meet you</td><td>Mucho gusto</td></tr>
      <tr><td>How are you?</td><td>¿Cómo estás?</td></tr>
      <tr><td>I'm fine, thank you</td><td>Estoy bien, gracias</td></tr>
      <tr><td>Goodbye / Bye</td><td>Adiós / Chao</td></tr>
    </table>
    <p>Diferencia importante: <strong>Good evening</strong> se usa para saludar por la noche (al llegar),
    mientras que <strong>Good night</strong> se usa solo para despedirse antes de dormir.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta para completar cada frase.",
      type: "mc",
      questions: [
        { prompt: "___ your name?", options: ["What's", "Who's", "Where's"], correct: 0,
          explanation: "'What's your name?' pregunta por el nombre." },
        { prompt: "Nice to ___ you.", options: ["meet", "know", "see"], correct: 0,
          explanation: "'Nice to meet you' es la frase estándar al conocer a alguien." },
        { prompt: "Good ___ (por la mañana).", options: ["morning", "night", "afternoon"], correct: 0,
          explanation: "'Good morning' se usa por la mañana." },
        { prompt: "How ___ you?", options: ["is", "are", "am"], correct: 1,
          explanation: "'How are you?' usa 'are' con 'you'." },
        { prompt: "I'm fine, ___ you.", options: ["thank", "thanks", "please"], correct: 0,
          explanation: "'Thank you' es la forma correcta de agradecer." },
        { prompt: "Good ___ (antes de dormir).", options: ["evening", "night", "morning"], correct: 1,
          explanation: "'Good night' se usa solo para despedirse antes de dormir." },
        { prompt: "___ is my friend, John.", options: ["This", "These", "That"], correct: 0,
          explanation: "'This is...' se usa para presentar a alguien cercano." },
        { prompt: "See you ___! (pronto)", options: ["later", "before", "yesterday"], correct: 0,
          explanation: "'See you later' significa 'nos vemos luego'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada frase con la palabra correcta.",
      type: "fill",
      questions: [
        { prompt: "My ___ is Carlos.", correct: ["name"],
          explanation: "'My name is...' significa 'Me llamo...'." },
        { prompt: "___ to meet you!", correct: ["nice"],
          explanation: "'Nice to meet you' es la expresión estándar." },
        { prompt: "Good ___, everyone! (por la tarde)", correct: ["afternoon"],
          explanation: "'Good afternoon' se usa por la tarde." },
        { prompt: "How are ___?", correct: ["you"],
          explanation: "'How are you?' pregunta por el estado de la otra persona." },
        { prompt: "I am ___ , thank you. (bien)", correct: ["fine"],
          explanation: "'I'm fine' es una respuesta común y educada." },
        { prompt: "___ , see you tomorrow! (adiós)", correct: ["bye", "goodbye"],
          explanation: "'Bye' o 'Goodbye' se usan para despedirse." },
        { prompt: "This is my ___ , Ana. (amiga)", correct: ["friend"],
          explanation: "'Friend' significa 'amigo/a'." },
        { prompt: "___ to our school! (bienvenido)", correct: ["welcome"],
          explanation: "'Welcome' significa 'bienvenido/a'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["What", "is", "your", "name", "?"], translation: "¿Cuál es tu nombre?",
          explanation: "Pregunta: What + is + your + name." },
        { words: ["My", "name", "is", "Laura", "."], translation: "Mi nombre es Laura.",
          explanation: "Afirmación simple para presentarse." },
        { words: ["Nice", "to", "meet", "you", "."], translation: "Mucho gusto en conocerte.",
          explanation: "Expresión fija usada al conocer a alguien." },
        { words: ["How", "are", "you", "today", "?"], translation: "¿Cómo estás hoy?",
          explanation: "Pregunta común para saludar." },
        { words: ["I", "am", "fine", "thank", "you", "."], translation: "Estoy bien, gracias.",
          explanation: "Respuesta educada y común a 'How are you?'." },
        { words: ["This", "is", "my", "friend", "."], translation: "Este es mi amigo.",
          explanation: "Frase para presentar a alguien." },
        { words: ["See", "you", "later", "!"], translation: "¡Nos vemos luego!",
          explanation: "Despedida informal y común." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada frase en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["Hello", "Hola"], ["How are you?", "¿Cómo estás?"], ["Nice to meet you", "Mucho gusto"],
            ["Goodbye", "Adiós"], ["Good morning", "Buenos días"], ["See you later", "Nos vemos luego"],
            ["Welcome", "Bienvenido"],
          ],
          explanation: "Estas expresiones se usan tal cual, conviene memorizarlas." }
      ]
    }
  ]
};
