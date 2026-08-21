window.EXERCISE_DATA = {
  title: "Causatives (have/get something done)",
  translation: "Causativos — mandar hacer algo",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "have something done", es: "mandar hacer algo" },
    { en: "get something done", es: "lograr que hagan algo" },
    { en: "hire", es: "contratar" },
    { en: "mechanic", es: "mecánico" },
    { en: "hairdresser", es: "peluquero/a" },
    { en: "professional", es: "profesional" },
    { en: "service", es: "servicio" },
    { en: "delegate", es: "delegar" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["hire", "contratar"], ["mechanic", "mecánico"], ["hairdresser", "peluquero/a"],
          ["professional", "profesional"], ["service", "servicio"], ["delegate", "delegar"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>La estructura causativa se usa cuando <strong>alguien más hace algo por ti</strong> (pagas
    o pides que un profesional lo haga), en vez de hacerlo tú mismo.</p>
    <table>
      <tr><th>Estructura</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>have + objeto + participio</td><td>I had my car repaired.</td><td>Hice reparar mi carro (alguien lo reparó por mí).</td></tr>
      <tr><td>get + objeto + participio</td><td>I got my hair cut.</td><td>Me corté el cabello (en la peluquería).</td></tr>
    </table>
    <p>Diferencia con hacerlo uno mismo: <strong>I repaired my car</strong> (yo lo reparé) vs.
    <strong>I had my car repaired</strong> (alguien más lo reparó, yo pagué/pedí el servicio).</p>
    <p><strong>Have</strong> y <strong>get</strong> significan casi lo mismo en esta estructura;
    "get" es un poco más informal. El verbo principal (have/get) se conjuga según el tiempo:
    <strong>I have my car washed every week.</strong> (presente) —
    <strong>I had my car washed yesterday.</strong> (pasado)</p>
    <p>Ejemplo: <strong>She's having her house painted.</strong>
    (Está mandando pintar su casa.) — <strong>We got our kitchen remodeled.</strong>
    (Mandamos remodelar nuestra cocina.)</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma causativa correcta.",
      type: "mc",
      questions: [
        { prompt: "I had my car ___ (repair) yesterday.", options: ["repair", "repaired"], correct: 1,
          explanation: "'Have + objeto + participio' es la estructura causativa." },
        { prompt: "She got her hair ___ (cut) at the salon.", options: ["cut", "cutting"], correct: 0,
          explanation: "'Get + objeto + participio' es la estructura causativa." },
        { prompt: "We are having our house ___ (paint).", options: ["paint", "painted"], correct: 1,
          explanation: "'Have + objeto + participio' es la estructura causativa." },
        { prompt: "He ___ his suit made by a tailor.", options: ["had", "has"], correct: 0,
          explanation: "'Had' se conjuga según el tiempo de la oración." },
        { prompt: "I need to ___ my phone fixed.", options: ["have", "having"], correct: 0,
          explanation: "'Have' + objeto + participio, forma base después de 'to'." },
        { prompt: "They got their roof ___ (repair) last month.", options: ["repair", "repaired"], correct: 1,
          explanation: "'Get + objeto + participio' es la estructura causativa." },
        { prompt: "She's having her nails ___ (do).", options: ["do", "done"], correct: 1,
          explanation: "'Have + objeto + participio' es la estructura causativa." },
        { prompt: "We had the kitchen ___ (remodel) last year.", options: ["remodel", "remodeled"], correct: 1,
          explanation: "'Had + objeto + participio' es la estructura causativa." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con la estructura causativa correcta.",
      type: "fill",
      questions: [
        { prompt: "I had my car ___ (wash).", correct: ["washed"], explanation: "have + objeto + participio." },
        { prompt: "She got her hair ___ (color).", correct: ["colored"], explanation: "get + objeto + participio." },
        { prompt: "We are having the house ___ (clean) today.", correct: ["cleaned"], explanation: "have + objeto + participio." },
        { prompt: "He had his teeth ___ (check) by the dentist.", correct: ["checked"], explanation: "have + objeto + participio." },
        { prompt: "They got their photos ___ (take) professionally.", correct: ["taken"], explanation: "get + objeto + participio." },
        { prompt: "I need to have my glasses ___ (fix).", correct: ["fixed"], explanation: "have + objeto + participio." },
        { prompt: "She had her dress ___ (make) by a designer.", correct: ["made"], explanation: "have + objeto + participio." },
        { prompt: "We got the walls ___ (paint) blue.", correct: ["painted"], explanation: "get + objeto + participio." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "had", "my", "car", "repaired", "."], translation: "Hice reparar mi carro.",
          explanation: "have + objeto + participio." },
        { words: ["She", "got", "her", "hair", "cut", "."], translation: "Se cortó el cabello (en la peluquería).",
          explanation: "get + objeto + participio." },
        { words: ["We", "are", "having", "our", "house", "painted", "."], translation: "Estamos mandando pintar nuestra casa.",
          explanation: "have + objeto + participio en presente continuo." },
        { words: ["He", "had", "his", "suit", "made", "by", "a", "tailor", "."], translation: "Mandó hacer su traje con un sastre.",
          explanation: "have + objeto + participio + by + agente." },
        { words: ["They", "got", "their", "roof", "repaired", "."], translation: "Mandaron reparar su techo.",
          explanation: "get + objeto + participio." },
        { words: ["She's", "having", "her", "nails", "done", "."], translation: "Se está haciendo las uñas.",
          explanation: "have + objeto + participio en presente continuo." },
        { words: ["We", "had", "the", "kitchen", "remodeled", "."], translation: "Mandamos remodelar la cocina.",
          explanation: "had + objeto + participio." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada oración causativa con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["I had my car repaired", "Hice reparar mi carro"], ["She got her hair cut", "Se cortó el cabello"],
            ["We had the house painted", "Mandamos pintar la casa"], ["hire", "contratar"],
            ["professional", "profesional"], ["service", "servicio"], ["delegate", "delegar"],
          ],
          explanation: "El causativo indica que alguien más realizó la acción para ti." }
      ]
    }
  ]
};
