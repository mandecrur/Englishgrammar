window.EXERCISE_DATA = {
  title: "Contrast Connectors",
  translation: "Conectores de contraste",
  level: "Nivel 5 · Intermedio Alto (B2)",

  vocabulary: [
    { en: "although", es: "aunque" },
    { en: "even though", es: "aunque / a pesar de que" },
    { en: "despite", es: "a pesar de" },
    { en: "in spite of", es: "a pesar de" },
    { en: "however", es: "sin embargo" },
    { en: "on the other hand", es: "por otro lado" },
    { en: "but", es: "pero" },
    { en: "nevertheless", es: "no obstante" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["although", "aunque"], ["despite", "a pesar de"], ["however", "sin embargo"],
          ["on the other hand", "por otro lado"], ["nevertheless", "no obstante"], ["even though", "aunque"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estos conectores expresan <strong>contraste</strong> entre dos ideas, pero con estructuras
    gramaticales distintas.</p>
    <table>
      <tr><th>Conector</th><th>Seguido de</th><th>Ejemplo</th></tr>
      <tr><td><strong>although / even though</strong></td><td>sujeto + verbo (cláusula)</td><td>Although it was raining, we went out.</td></tr>
      <tr><td><strong>despite / in spite of</strong></td><td>sustantivo o gerundio</td><td>Despite the rain, we went out.</td></tr>
      <tr><td><strong>however</strong></td><td>oración nueva, con coma después</td><td>It was raining. However, we went out.</td></tr>
      <tr><td><strong>but</strong></td><td>conecta dos oraciones cortas</td><td>It was raining, but we went out.</td></tr>
    </table>
    <p>Error muy común: usar "despite" o "in spite of" seguido de una cláusula completa
    (sujeto + verbo). Es incorrecto decir <em>"Despite it was raining"</em> ❌ —
    lo correcto es <strong>"Despite the rain"</strong> ✓ o <strong>"Despite it raining"</strong> ✓
    (con gerundio, no con verbo conjugado).</p>
    <p>Ejemplo: <strong>Although she was tired, she kept working.</strong>
    (Aunque estaba cansada, siguió trabajando.) vs.
    <strong>Despite her tiredness, she kept working.</strong>
    (A pesar de su cansancio, siguió trabajando.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el conector correcto según la estructura.",
      type: "mc",
      questions: [
        { prompt: "___ it was raining, we went out. (+ cláusula)", options: ["Although", "Despite"], correct: 0,
          explanation: "'Although' va seguido de una cláusula completa." },
        { prompt: "___ the rain, we went out. (+ sustantivo)", options: ["Although", "Despite"], correct: 1,
          explanation: "'Despite' va seguido de un sustantivo." },
        { prompt: "She was tired. ___, she kept working.", options: ["However", "But"], correct: 0,
          explanation: "'However' inicia una nueva oración, con coma después." },
        { prompt: "It was cold, ___ we went swimming.", options: ["however", "but"], correct: 1,
          explanation: "'But' conecta dos partes de la misma oración." },
        { prompt: "___ being tired, she finished the race.", options: ["Although", "Despite"], correct: 1,
          explanation: "'Despite' + gerundio funciona correctamente." },
        { prompt: "___ he studied hard, he failed the exam.", options: ["Even though", "In spite of"], correct: 0,
          explanation: "'Even though' va seguido de una cláusula completa." },
        { prompt: "___ his effort, he didn't succeed.", options: ["Although", "In spite of"], correct: 1,
          explanation: "'In spite of' va seguido de un sustantivo." },
        { prompt: "It was expensive. ___, we bought it.", options: ["Nevertheless", "But"], correct: 0,
          explanation: "'Nevertheless' inicia una nueva oración." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el conector correcto.",
      type: "fill",
      questions: [
        { prompt: "___ it was late, we kept working. (+ cláusula)", correct: ["although", "even though"], explanation: "Va seguido de sujeto+verbo." },
        { prompt: "___ the traffic, we arrived on time. (+ sustantivo)", correct: ["despite", "in spite of"], explanation: "Va seguido de sustantivo." },
        { prompt: "He was sick. ___, he went to work.", correct: ["however"], explanation: "Inicia nueva oración con coma." },
        { prompt: "She's smart, ___ she doesn't study much.", correct: ["but"], explanation: "'But' conecta dos partes de la oración." },
        { prompt: "___ being expensive, the trip was worth it.", correct: ["despite"], explanation: "'Despite' + gerundio." },
        { prompt: "___ he apologized, she was still angry.", correct: ["although", "even though"], explanation: "Va seguido de sujeto+verbo." },
        { prompt: "___ our differences, we are good friends.", correct: ["despite", "in spite of"], explanation: "Va seguido de sustantivo." },
        { prompt: "It rained all day. ___, the event continued.", correct: ["nevertheless", "however"], explanation: "Inicia nueva oración." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["Although", "it", "was", "raining", ",", "we", "went", "out", "."], translation: "Aunque estaba lloviendo, salimos.",
          explanation: "'Although' + cláusula completa." },
        { words: ["Despite", "the", "rain", ",", "we", "went", "out", "."], translation: "A pesar de la lluvia, salimos.",
          explanation: "'Despite' + sustantivo." },
        { words: ["She", "was", "tired", ",", "but", "she", "kept", "working", "."], translation: "Estaba cansada, pero siguió trabajando.",
          explanation: "'But' conecta dos partes de la oración." },
        { words: ["It", "was", "cold", ".", "However", ",", "we", "went", "swimming", "."], translation: "Hacía frío. Sin embargo, fuimos a nadar.",
          explanation: "'However' inicia una nueva oración." },
        { words: ["Despite", "being", "tired", ",", "she", "finished", "."], translation: "A pesar de estar cansada, terminó.",
          explanation: "'Despite' + gerundio." },
        { words: ["Even", "though", "he", "studied", ",", "he", "failed", "."], translation: "Aunque estudió, reprobó.",
          explanation: "'Even though' + cláusula completa." },
        { words: ["In", "spite", "of", "his", "effort", ",", "he", "failed", "."], translation: "A pesar de su esfuerzo, falló.",
          explanation: "'In spite of' + sustantivo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada conector con su estructura correcta.",
      type: "match",
      questions: [
        { pairs: [
            ["although", "+ cláusula (sujeto+verbo)"], ["despite", "+ sustantivo/gerundio"],
            ["however", "nueva oración, con coma"], ["but", "conecta dos partes"],
            ["even though", "+ cláusula"], ["in spite of", "+ sustantivo"], ["nevertheless", "nueva oración"],
          ],
          explanation: "Cada conector de contraste requiere una estructura gramatical específica." }
      ]
    }
  ]
};
