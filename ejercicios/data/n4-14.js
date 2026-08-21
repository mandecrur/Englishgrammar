window.EXERCISE_DATA = {
  title: "Passive with Modals",
  translation: "Voz pasiva con modales (can/must/should be)",
  level: "Nivel 4 · Intermedio Bajo (B1)",

  vocabulary: [
    { en: "solve", es: "resolver" },
    { en: "fix", es: "arreglar" },
    { en: "complete", es: "completar" },
    { en: "submit", es: "entregar / enviar" },
    { en: "handle with care", es: "manejar con cuidado" },
    { en: "recycle", es: "reciclar" },
    { en: "repair", es: "reparar" },
    { en: "return", es: "devolver" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["solve", "resolver"], ["fix", "arreglar"], ["complete", "completar"],
          ["submit", "entregar / enviar"], ["recycle", "reciclar"], ["return", "devolver"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Cuando se combina un modal (can, must, should, will...) con la voz pasiva, se usa
    <strong>modal + be + participio pasado</strong>.</p>
    <table>
      <tr><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>This problem can be solved.</td><td>Este problema se puede resolver.</td></tr>
      <tr><td>The homework must be submitted by Friday.</td><td>La tarea debe entregarse para el viernes.</td></tr>
      <tr><td>This should be fixed soon.</td><td>Esto debería arreglarse pronto.</td></tr>
      <tr><td>The package will be delivered tomorrow.</td><td>El paquete será entregado mañana.</td></tr>
    </table>
    <p>El modal no cambia con el pronombre; el verbo <strong>be</strong> se mantiene siempre en su
    forma base (no "is" ni "was") porque va después de un modal.</p>
    <p>Negativo: <strong>modal + not + be + participio</strong>: <strong>This can't be fixed.</strong>
    (Esto no se puede arreglar.)</p>
    <p>Se usa mucho en instrucciones, reglas y avisos generales: <strong>Glass must be handled
    with care.</strong> (El vidrio debe manejarse con cuidado.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "This problem can ___ solved.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be' (forma base)." },
        { prompt: "The homework must ___ submitted by Friday.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be'." },
        { prompt: "This should ___ (fix) soon.", options: ["fix", "fixed", "fixing"], correct: 1,
          explanation: "'Be' + participio pasado 'fixed'." },
        { prompt: "The package will ___ (deliver) tomorrow.", options: ["deliver", "delivered", "delivering"], correct: 1,
          explanation: "'Be' + participio pasado 'delivered'." },
        { prompt: "Glass must ___ handled with care.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be'." },
        { prompt: "This can't ___ (fix).", options: ["fix", "fixed", "fixing"], correct: 1,
          explanation: "'Be' + participio pasado 'fixed'." },
        { prompt: "The form should ___ completed carefully.", options: ["be", "is", "was"], correct: 0,
          explanation: "Después de un modal se usa 'be'." },
        { prompt: "These items may ___ (recycle).", options: ["recycle", "recycled", "recycling"], correct: 1,
          explanation: "'Be' + participio pasado 'recycled'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con modal + be + participio.",
      type: "fill",
      questions: [
        { prompt: "This problem ___ (can/solve).", correct: ["can be solved"], explanation: "can + be + participio." },
        { prompt: "The homework ___ (must/submit) by Friday.", correct: ["must be submitted"], explanation: "must + be + participio." },
        { prompt: "This ___ (should/fix) soon.", correct: ["should be fixed"], explanation: "should + be + participio." },
        { prompt: "The package ___ (will/deliver) tomorrow.", correct: ["will be delivered"], explanation: "will + be + participio." },
        { prompt: "Glass ___ (must/handle) with care.", correct: ["must be handled"], explanation: "must + be + participio." },
        { prompt: "This ___ (can/not/fix).", correct: ["can't be fixed"], explanation: "can't + be + participio." },
        { prompt: "The form ___ (should/complete) carefully.", correct: ["should be completed"], explanation: "should + be + participio." },
        { prompt: "These bottles ___ (can/recycle).", correct: ["can be recycled"], explanation: "can + be + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["This", "problem", "can", "be", "solved", "."], translation: "Este problema se puede resolver.",
          explanation: "can + be + participio." },
        { words: ["The", "homework", "must", "be", "submitted", "."], translation: "La tarea debe entregarse.",
          explanation: "must + be + participio." },
        { words: ["This", "should", "be", "fixed", "soon", "."], translation: "Esto debería arreglarse pronto.",
          explanation: "should + be + participio." },
        { words: ["The", "package", "will", "be", "delivered", "tomorrow", "."], translation: "El paquete será entregado mañana.",
          explanation: "will + be + participio." },
        { words: ["Glass", "must", "be", "handled", "with", "care", "."], translation: "El vidrio debe manejarse con cuidado.",
          explanation: "must + be + participio." },
        { words: ["This", "can't", "be", "fixed", "."], translation: "Esto no se puede arreglar.",
          explanation: "can't + be + participio." },
        { words: ["The", "form", "should", "be", "completed", "carefully", "."], translation: "El formulario debe completarse con cuidado.",
          explanation: "should + be + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["can be solved", "se puede resolver"], ["must be submitted", "debe entregarse"],
            ["should be fixed", "debería arreglarse"], ["will be delivered", "será entregado"],
            ["can't be fixed", "no se puede arreglar"], ["must be handled with care", "debe manejarse con cuidado"], ["may be recycled", "puede reciclarse"],
          ],
          explanation: "Modal + be + participio combina el matiz del modal con la voz pasiva." }
      ]
    }
  ]
};
