window.EXERCISE_DATA = {
  title: "Need + Gerund vs Passive Infinitive",
  translation: "'Need' con gerundio con significado pasivo",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "needs fixing", es: "necesita repararse" },
    { en: "needs to be fixed", es: "necesita ser reparado" },
    { en: "repair", es: "reparar" },
    { en: "washing", es: "lavado" },
    { en: "cutting", es: "corte" },
    { en: "cleaning", es: "limpieza" },
    { en: "maintenance", es: "mantenimiento" },
    { en: "equivalent", es: "equivalente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["needs fixing", "necesita repararse"], ["repair", "reparar"], ["washing", "lavado"],
          ["cutting", "corte"], ["cleaning", "limpieza"], ["maintenance", "mantenimiento"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Con el verbo <strong>need</strong>, existe una estructura especial donde el gerundio
    tiene <strong>significado pasivo</strong>, aunque no lo parezca gramaticalmente.</p>
    <table>
      <tr><th>Estructura</th><th>Ejemplo</th><th>Significado</th></tr>
      <tr><td>need + gerundio</td><td>The car needs washing.</td><td>El carro necesita ser lavado.</td></tr>
      <tr><td>need + to be + participio</td><td>The car needs to be washed.</td><td>El carro necesita ser lavado. (mismo significado)</td></tr>
    </table>
    <p>Ambas formas significan exactamente lo mismo — son <strong>intercambiables</strong>.
    <strong>My hair needs cutting</strong> = <strong>My hair needs to be cut.</strong>
    (Mi cabello necesita corte / necesita ser cortado.)</p>
    <p>Este patrón también funciona con <strong>want</strong> en inglés informal británico:
    <strong>This room wants cleaning.</strong> (Este cuarto necesita limpieza.)</p>
    <p>Nota: aunque "washing", "cutting", "cleaning" son gramaticalmente gerundios activos, aquí
    tienen sentido pasivo — es una excepción especial que hay que memorizar.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "The car needs ___ (wash). (gerundio con sentido pasivo)", options: ["washing", "to washing"], correct: 0,
          explanation: "'Need + gerundio' con significado pasivo." },
        { prompt: "My hair needs ___ (cut).", options: ["cutting", "cut"], correct: 0,
          explanation: "'Need + gerundio' con significado pasivo." },
        { prompt: "The house needs ___ (paint).", options: ["painting", "paint"], correct: 0,
          explanation: "'Need + gerundio' con significado pasivo." },
        { prompt: "The car needs ___ (wash). (versión con infinitivo)", options: ["to be washed", "to wash"], correct: 0,
          explanation: "'Need + to be + participio' es la forma equivalente." },
        { prompt: "This room needs ___ (clean).", options: ["cleaning", "clean"], correct: 0,
          explanation: "'Need + gerundio' con significado pasivo." },
        { prompt: "These shoes need ___ (repair).", options: ["repairing", "repair"], correct: 0,
          explanation: "'Need + gerundio' con significado pasivo." },
        { prompt: "The grass needs ___ (cut).", options: ["cutting", "cut"], correct: 0,
          explanation: "'Need + gerundio' con significado pasivo." },
        { prompt: "The windows need ___ (clean). (versión con infinitivo)", options: ["to be cleaned", "to clean"], correct: 0,
          explanation: "'Need + to be + participio' es la forma equivalente." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con need + gerundio (significado pasivo).",
      type: "fill",
      questions: [
        { prompt: "The car needs ___ (wash).", correct: ["washing"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "My hair needs ___ (cut).", correct: ["cutting"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "The house needs ___ (paint).", correct: ["painting"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "This room needs ___ (clean).", correct: ["cleaning"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "These shoes need ___ (repair).", correct: ["repairing"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "The grass needs ___ (cut).", correct: ["cutting"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "The bike needs ___ (fix).", correct: ["fixing"], explanation: "need + gerundio con sentido pasivo." },
        { prompt: "The plants need ___ (water).", correct: ["watering"], explanation: "need + gerundio con sentido pasivo." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["The", "car", "needs", "washing", "."], translation: "El carro necesita lavarse.",
          explanation: "'Need' + gerundio con sentido pasivo." },
        { words: ["My", "hair", "needs", "cutting", "."], translation: "Mi cabello necesita corte.",
          explanation: "'Need' + gerundio con sentido pasivo." },
        { words: ["The", "house", "needs", "painting", "."], translation: "La casa necesita pintura.",
          explanation: "'Need' + gerundio con sentido pasivo." },
        { words: ["The", "car", "needs", "to", "be", "washed", "."], translation: "El carro necesita ser lavado.",
          explanation: "Forma equivalente con infinitivo pasivo." },
        { words: ["This", "room", "needs", "cleaning", "."], translation: "Este cuarto necesita limpieza.",
          explanation: "'Need' + gerundio con sentido pasivo." },
        { words: ["These", "shoes", "need", "repairing", "."], translation: "Estos zapatos necesitan reparación.",
          explanation: "'Need' + gerundio con sentido pasivo." },
        { words: ["The", "grass", "needs", "cutting", "."], translation: "El césped necesita corte.",
          explanation: "'Need' + gerundio con sentido pasivo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada frase con gerundio con su equivalente en infinitivo pasivo.",
      type: "match",
      questions: [
        { pairs: [
            ["needs washing", "needs to be washed"], ["needs cutting", "needs to be cut"],
            ["needs painting", "needs to be painted"], ["needs cleaning", "needs to be cleaned"],
            ["needs repairing", "needs to be repaired"], ["maintenance", "mantenimiento"], ["equivalent", "equivalente"],
          ],
          explanation: "Ambas formas significan exactamente lo mismo." }
      ]
    }
  ]
};
