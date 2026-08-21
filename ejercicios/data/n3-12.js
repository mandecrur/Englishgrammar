window.EXERCISE_DATA = {
  title: "Count vs Noncount Nouns",
  translation: "Sustantivos contables e incontables",
  level: "Nivel 3 · Básico 2 (A2)",

  vocabulary: [
    { en: "water", es: "agua" },
    { en: "rice", es: "arroz" },
    { en: "sugar", es: "azúcar" },
    { en: "furniture", es: "muebles (en general)" },
    { en: "advice", es: "consejo (en general)" },
    { en: "information", es: "información" },
    { en: "money", es: "dinero" },
    { en: "bread", es: "pan" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["water", "agua"], ["rice", "arroz"], ["sugar", "azúcar"],
          ["furniture", "muebles"], ["information", "información"], ["money", "dinero"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <p>Los sustantivos <strong>contables</strong> se pueden contar (one book, two books).
    Los <strong>incontables</strong> no se pueden contar directamente, no tienen plural y no
    llevan "a/an".</p>
    <table>
      <tr><th>Contables</th><th>Incontables</th></tr>
      <tr><td>a book, two books</td><td>water, rice, sugar (sin plural)</td></tr>
      <tr><td>How many books?</td><td>How much water?</td></tr>
      <tr><td>a few books</td><td>a little water</td></tr>
    </table>
    <p>Sustantivos incontables más comunes, uno por uno:</p>
    <table>
      <tr><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>water</td><td>agua</td></tr>
      <tr><td>rice</td><td>arroz</td></tr>
      <tr><td>sugar</td><td>azúcar</td></tr>
      <tr><td>money</td><td>dinero</td></tr>
      <tr><td>information</td><td>información</td></tr>
      <tr><td>advice</td><td>consejo</td></tr>
      <tr><td>furniture</td><td>muebles</td></tr>
      <tr><td>homework</td><td>tarea</td></tr>
      <tr><td>news</td><td>noticias</td></tr>
      <tr><td>bread</td><td>pan</td></tr>
      <tr><td>milk</td><td>leche</td></tr>
      <tr><td>time</td><td>tiempo</td></tr>
      <tr><td>music</td><td>música</td></tr>
      <tr><td>traffic</td><td>tráfico</td></tr>
      <tr><td>luggage / baggage</td><td>equipaje</td></tr>
    </table>
    <p>Esta no es una lista cerrada (hay más sustantivos incontables), pero son los más usados en
    conversaciones diarias. Ninguno de ellos lleva "a/an" ni "-s" en plural.</p>
    <p>Para cuantificarlos se usan expresiones como <strong>a glass of water</strong> (un vaso de agua),
    <strong>a piece of advice</strong> (un consejo), <strong>a piece of furniture</strong> (un mueble),
    <strong>a loaf of bread</strong> (una barra de pan), <strong>a cup of milk</strong> (una taza de leche).</p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la opción correcta.",
      type: "mc",
      questions: [
        { prompt: "How ___ water do you drink daily?", options: ["many", "much"], correct: 1,
          explanation: "'Water' es incontable, se usa 'much'." },
        { prompt: "How ___ books do you have?", options: ["many", "much"], correct: 0,
          explanation: "'Books' es contable, se usa 'many'." },
        { prompt: "I need some ___ (advice/advices).", options: ["advice", "advices"], correct: 0,
          explanation: "'Advice' es incontable, no tiene plural." },
        { prompt: "She gave me a lot of ___ (information/informations).", options: ["information", "informations"], correct: 0,
          explanation: "'Information' es incontable, no tiene plural." },
        { prompt: "We bought ___ (a furniture/some furniture) for the house.", options: ["a furniture", "some furniture"], correct: 1,
          explanation: "'Furniture' es incontable, no lleva 'a'." },
        { prompt: "I have ___ (a money/some money) in my pocket.", options: ["a money", "some money"], correct: 1,
          explanation: "'Money' es incontable, no lleva 'a'." },
        { prompt: "There are ___ (many/much) apples in the basket.", options: ["many", "much"], correct: 0,
          explanation: "'Apples' es contable, se usa 'many'." },
        { prompt: "There isn't ___ (many/much) rice left.", options: ["many", "much"], correct: 1,
          explanation: "'Rice' es incontable, se usa 'much'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Completa con many, much, a o some según corresponda.",
      type: "fill",
      questions: [
        { prompt: "How ___ money do you have?", correct: ["much"], explanation: "'Money' es incontable." },
        { prompt: "How ___ students are there?", correct: ["many"], explanation: "'Students' es contable." },
        { prompt: "I need ___ information about the trip.", correct: ["some"], explanation: "'Some' funciona con incontables." },
        { prompt: "We don't have ___ time left.", correct: ["much"], explanation: "'Time' es incontable." },
        { prompt: "There are ___ chairs in the room.", correct: ["many"], explanation: "'Chairs' es contable." },
        { prompt: "Can I have ___ water, please?", correct: ["some"], explanation: "'Some' funciona con incontables." },
        { prompt: "How ___ sugar do you want in your coffee?", correct: ["much"], explanation: "'Sugar' es incontable." },
        { prompt: "She has ___ friends in the city.", correct: ["many"], explanation: "'Friends' es contable." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["How", "much", "water", "do", "you", "drink", "?"], translation: "¿Cuánta agua tomas?",
          explanation: "'How much' con sustantivo incontable." },
        { words: ["How", "many", "books", "do", "you", "have", "?"], translation: "¿Cuántos libros tienes?",
          explanation: "'How many' con sustantivo contable." },
        { words: ["I", "need", "some", "advice", "."], translation: "Necesito un consejo.",
          explanation: "'Some' funciona con incontables como 'advice'." },
        { words: ["We", "bought", "new", "furniture", "."], translation: "Compramos muebles nuevos.",
          explanation: "'Furniture' es incontable, sin artículo 'a'." },
        { words: ["There", "isn't", "much", "rice", "left", "."], translation: "No queda mucho arroz.",
          explanation: "'Rice' es incontable, se usa 'much'." },
        { words: ["I", "have", "a", "lot", "of", "homework", "."], translation: "Tengo mucha tarea.",
          explanation: "'Homework' es incontable." },
        { words: ["There", "are", "many", "apples", "here", "."], translation: "Hay muchas manzanas aquí.",
          explanation: "'Apples' es contable, se usa 'many'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada sustantivo con su categoría (contable/incontable).",
      type: "match",
      questions: [
        { pairs: [
            ["book", "contable"], ["water", "incontable"], ["chair", "contable"],
            ["money", "incontable"], ["apple", "contable"], ["information", "incontable"], ["furniture", "incontable"],
          ],
          explanation: "Los incontables no se pueden contar directamente ni llevar 'a/an'." }
      ]
    }
  ]
};
