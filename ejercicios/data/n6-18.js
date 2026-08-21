window.EXERCISE_DATA = {
  title: "Academic Connectors",
  translation: "Conectores académicos y formales",
  level: "Nivel 6 · Avanzado (C1)",

  vocabulary: [
    { en: "furthermore", es: "además" },
    { en: "moreover", es: "además / es más" },
    { en: "nonetheless", es: "no obstante" },
    { en: "in addition", es: "adicionalmente" },
    { en: "on the contrary", es: "por el contrario" },
    { en: "in conclusion", es: "en conclusión" },
    { en: "notably", es: "notablemente" },
    { en: "subsequently", es: "posteriormente" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["furthermore", "además"], ["moreover", "además / es más"], ["nonetheless", "no obstante"],
          ["in addition", "adicionalmente"], ["on the contrary", "por el contrario"], ["in conclusion", "en conclusión"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Estos conectores se usan en textos <strong>académicos y formales</strong> (ensayos,
    informes, artículos) para conectar ideas de manera más sofisticada que "and" o "but".</p>
    <table>
      <tr><th>Conector</th><th>Función</th><th>Ejemplo</th></tr>
      <tr><td>furthermore / moreover</td><td>añadir información</td><td>The plan is expensive. Furthermore, it's risky.</td></tr>
      <tr><td>nonetheless / nevertheless</td><td>contraste</td><td>It was difficult. Nonetheless, we succeeded.</td></tr>
      <tr><td>on the contrary</td><td>contradecir directamente</td><td>He isn't lazy; on the contrary, he works very hard.</td></tr>
      <tr><td>in conclusion</td><td>concluir un texto</td><td>In conclusion, the results support our hypothesis.</td></tr>
      <tr><td>subsequently</td><td>secuencia temporal formal</td><td>He studied law and subsequently became a judge.</td></tr>
    </table>
    <p>Todos estos conectores van al inicio de una <strong>nueva oración</strong>, seguidos de coma
    (excepto cuando conectan cláusulas con punto y coma).</p>
    <p>Ejemplo: <strong>The study has limitations. Nonetheless, the findings are significant.</strong>
    (El estudio tiene limitaciones. No obstante, los hallazgos son significativos.)</p>
    <p>Estos conectores raramente se usan en conversación cotidiana — son propios de la
    <strong>escritura formal</strong>.</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el conector académico correcto.",
      type: "mc",
      questions: [
        { prompt: "The plan is expensive. ___, it's risky. (añadir)", options: ["Furthermore", "Nonetheless"], correct: 0,
          explanation: "'Furthermore' añade información adicional." },
        { prompt: "It was difficult. ___, we succeeded. (contraste)", options: ["Furthermore", "Nonetheless"], correct: 1,
          explanation: "'Nonetheless' expresa contraste." },
        { prompt: "He isn't lazy; ___, he works very hard. (contradecir)", options: ["on the contrary", "furthermore"], correct: 0,
          explanation: "'On the contrary' contradice directamente." },
        { prompt: "___, the results support our hypothesis. (concluir)", options: ["In conclusion", "Moreover"], correct: 0,
          explanation: "'In conclusion' se usa para concluir." },
        { prompt: "He studied law and ___ became a judge. (secuencia)", options: ["subsequently", "nonetheless"], correct: 0,
          explanation: "'Subsequently' indica secuencia temporal formal." },
        { prompt: "The data is limited. ___, the findings are significant.", options: ["Nonetheless", "Furthermore"], correct: 0,
          explanation: "'Nonetheless' expresa contraste." },
        { prompt: "The company is profitable; ___, it is expanding rapidly.", options: ["moreover", "on the contrary"], correct: 0,
          explanation: "'Moreover' añade información." },
        { prompt: "This is not a minor issue; ___, it's critical.", options: ["on the contrary", "subsequently"], correct: 0,
          explanation: "'On the contrary' contradice directamente." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con el conector académico correcto.",
      type: "fill",
      questions: [
        { prompt: "The results are promising. ___, more research is needed.", correct: ["nonetheless", "however"], explanation: "Contraste con la conclusión positiva." },
        { prompt: "The theory is solid. ___, it has been tested extensively.", correct: ["furthermore", "moreover"], explanation: "Añadir información." },
        { prompt: "He isn't inexperienced; ___, he has ten years in the field.", correct: ["on the contrary"], explanation: "Contradicción directa." },
        { prompt: "___, we can conclude that the hypothesis is valid.", correct: ["in conclusion"], explanation: "Conclusión del texto." },
        { prompt: "She graduated and ___ opened her own company.", correct: ["subsequently"], explanation: "Secuencia temporal formal." },
        { prompt: "The budget is tight. ___, we will proceed with the project.", correct: ["nonetheless", "nevertheless"], explanation: "Contraste." },
        { prompt: "The product is affordable. ___, it is high quality.", correct: ["furthermore", "moreover"], explanation: "Añadir información." },
        { prompt: "This isn't a small problem; ___, it threatens the entire system.", correct: ["on the contrary"], explanation: "Contradicción directa." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["The", "plan", "is", "expensive", ".", "Furthermore", ",", "it's", "risky", "."], translation: "El plan es caro. Además, es arriesgado.",
          explanation: "'Furthermore' añade información." },
        { words: ["It", "was", "difficult", ".", "Nonetheless", ",", "we", "succeeded", "."], translation: "Fue difícil. No obstante, tuvimos éxito.",
          explanation: "'Nonetheless' expresa contraste." },
        { words: ["He", "isn't", "lazy", ";", "on", "the", "contrary", ",", "he", "works", "hard", "."], translation: "Él no es perezoso; por el contrario, trabaja duro.",
          explanation: "'On the contrary' contradice directamente." },
        { words: ["In", "conclusion", ",", "the", "results", "support", "our", "hypothesis", "."], translation: "En conclusión, los resultados apoyan nuestra hipótesis.",
          explanation: "'In conclusion' concluye el texto." },
        { words: ["He", "studied", "law", "and", "subsequently", "became", "a", "judge", "."], translation: "Estudió derecho y posteriormente se hizo juez.",
          explanation: "'Subsequently' indica secuencia temporal." },
        { words: ["The", "data", "is", "limited", ".", "Nonetheless", ",", "it's", "significant", "."], translation: "Los datos son limitados. No obstante, son significativos.",
          explanation: "'Nonetheless' expresa contraste." },
        { words: ["The", "product", "is", "cheap", ".", "Moreover", ",", "it's", "reliable", "."], translation: "El producto es barato. Además, es confiable.",
          explanation: "'Moreover' añade información." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada conector con su función.",
      type: "match",
      questions: [
        { pairs: [
            ["furthermore", "añadir información"], ["nonetheless", "contraste"],
            ["on the contrary", "contradecir directamente"], ["in conclusion", "concluir"],
            ["subsequently", "secuencia temporal"], ["notably", "notablemente"], ["moreover", "es más"],
          ],
          explanation: "Estos conectores son propios de textos formales y académicos." }
      ]
    }
  ]
};
