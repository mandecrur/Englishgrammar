window.EXERCISE_DATA = {
  title: "Colors, Shapes, Sizes",
  translation: "Colores, formas y tamaños",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "color", es: "color" },
    { en: "shape", es: "forma" },
    { en: "circle", es: "círculo" },
    { en: "square", es: "cuadrado" },
    { en: "triangle", es: "triángulo" },
    { en: "big / large", es: "grande" },
    { en: "small / little", es: "pequeño" },
    { en: "round", es: "redondo" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["circle", "círculo"], ["square", "cuadrado"], ["triangle", "triángulo"],
          ["big", "grande"], ["small", "pequeño"], ["round", "redondo"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p><strong>Colores comunes:</strong> red (rojo), blue (azul), green (verde), yellow (amarillo),
    black (negro), white (blanco), orange (naranja), purple (morado), pink (rosado), brown (café/marrón).</p>
    <p><strong>Formas:</strong> circle (círculo), square (cuadrado), triangle (triángulo),
    rectangle (rectángulo), star (estrella).</p>
    <p><strong>Tamaños:</strong> big / large (grande), small / little (pequeño), tall (alto),
    short (bajo/corto), long (largo).</p>
    <p>En inglés, los adjetivos (color, forma, tamaño) van <strong>antes</strong> del sustantivo,
    al contrario que en español:</p>
    <table>
      <tr><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>a big red circle</td><td>un círculo rojo grande</td></tr>
      <tr><td>a small blue square</td><td>un cuadrado azul pequeño</td></tr>
    </table>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "The sky is ___.", options: ["blue", "square", "tall"], correct: 0,
          explanation: "'Blue' (azul) es un color, no una forma ni tamaño." },
        { prompt: "A stop sign has the shape of an ___.", options: ["octagon", "circle", "line"], correct: 0,
          explanation: "Las señales de 'stop' tienen forma de octágono." },
        { prompt: "An elephant is very ___.", options: ["big", "square", "yellow"], correct: 0,
          explanation: "'Big' significa 'grande'." },
        { prompt: "A ball has a ___ shape.", options: ["square", "round", "triangular"], correct: 1,
          explanation: "Una pelota tiene forma redonda." },
        { prompt: "Bananas are usually ___.", options: ["yellow", "square", "small"], correct: 0,
          explanation: "Las bananas suelen ser amarillas." },
        { prompt: "A mouse is very ___.", options: ["big", "tall", "small"], correct: 2,
          explanation: "Un ratón es pequeño." },
        { prompt: "This box has a ___ shape.", options: ["square", "round", "circular"], correct: 0,
          explanation: "Una caja suele tener forma cuadrada o rectangular." },
        { prompt: "Grass is usually ___.", options: ["green", "purple", "square"], correct: 0,
          explanation: "El pasto suele ser verde." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa cada oración con la palabra correcta.",
      type: "fill",
      questions: [
        { prompt: "An elephant is very ___. (grande)", correct: ["big", "large"],
          explanation: "'Big' o 'large' significan 'grande'." },
        { prompt: "A ball is ___. (forma redonda)", correct: ["round"],
          explanation: "'Round' significa 'redondo'." },
        { prompt: "The sun is ___. (amarillo)", correct: ["yellow"],
          explanation: "'Yellow' significa 'amarillo'." },
        { prompt: "This pencil is very ___. (pequeño)", correct: ["small", "little"],
          explanation: "'Small' o 'little' significan 'pequeño'." },
        { prompt: "The flag is red, white and ___. (azul)", correct: ["blue"],
          explanation: "'Blue' significa 'azul'." },
        { prompt: "A pizza has a ___ shape. (circular)", correct: ["circular", "round"],
          explanation: "Una pizza tiene forma circular/redonda." },
        { prompt: "That building is very ___. (alto)", correct: ["tall"],
          explanation: "'Tall' significa 'alto'." },
        { prompt: "Chocolate is usually ___. (café)", correct: ["brown"],
          explanation: "'Brown' significa 'café' o 'marrón'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "a", "big", "red", "car", "."], translation: "Tengo un carro rojo grande.",
          explanation: "Orden: tamaño antes que color, ambos antes del sustantivo." },
        { words: ["The", "ball", "is", "round", "."], translation: "La pelota es redonda.",
          explanation: "Oración simple con el verbo 'to be'." },
        { words: ["She", "has", "a", "small", "blue", "bag", "."], translation: "Ella tiene una bolsa azul pequeña.",
          explanation: "Orden: tamaño + color + sustantivo." },
        { words: ["This", "box", "is", "very", "big", "."], translation: "Esta caja es muy grande.",
          explanation: "Adjetivo con intensificador 'very' antes del adjetivo." },
        { words: ["The", "flag", "is", "red", "and", "white", "."], translation: "La bandera es roja y blanca.",
          explanation: "Dos colores unidos con 'and'." },
        { words: ["I", "like", "yellow", "flowers", "."], translation: "Me gustan las flores amarillas.",
          explanation: "Orden: sujeto + verbo + color + sustantivo." },
        { words: ["That", "triangle", "is", "small", "."], translation: "Ese triángulo es pequeño.",
          explanation: "Oración simple describiendo una forma." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra en inglés con su traducción.",
      type: "match",
      questions: [
        { pairs: [
            ["red", "rojo"], ["green", "verde"], ["purple", "morado"], ["orange", "naranja"],
            ["rectangle", "rectángulo"], ["star", "estrella"], ["tall", "alto"],
          ],
          explanation: "Vocabulario de colores y formas más usado." }
      ]
    }
  ]
};
