window.EXERCISE_DATA = {
  title: "Numbers 1-100",
  translation: "Los números del 1 al 100",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "one / two / three", es: "uno / dos / tres" },
    { en: "ten", es: "diez" },
    { en: "twenty", es: "veinte" },
    { en: "hundred", es: "cien" },
    { en: "eleven", es: "once" },
    { en: "twelve", es: "doce" },
    { en: "how many", es: "cuántos" },
    { en: "number", es: "número" },
  ],

  vocabExercise: {
    title: "Relaciona cada número con su forma en inglés",
    instructions: "Une cada número con la palabra correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["5", "five"], ["10", "ten"], ["11", "eleven"], ["12", "twelve"],
          ["20", "twenty"], ["100", "one hundred"],
        ],
        explanation: "Vocabulario numérico básico usado en este tema." }
    ]
  },

  theory: `
    <p>Los números del 1 al 12 son individuales: <strong>one, two, three, four, five, six, seven,
    eight, nine, ten, eleven, twelve</strong>.</p>
    <p>Del 13 al 19 se agrega el sufijo <strong>-teen</strong>: <strong>thirteen (13), fourteen (14),
    fifteen (15)...</strong> Nota que 13 y 15 tienen ligeras irregularidades ortográficas.</p>
    <p>Las decenas terminan en <strong>-ty</strong>: <strong>twenty (20), thirty (30), forty (40),
    fifty (50)...</strong> Nota que 40 (forty) pierde la "u" de "four", y 50 (fifty) cambia "five" a "fif-".</p>
    <p>Los números compuestos se forman con guion: <strong>twenty-one (21), forty-five (45).</strong></p>
    <table>
      <tr><th>Número</th><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>15</td><td>fifteen</td><td>quince</td></tr>
      <tr><td>21</td><td>twenty-one</td><td>veintiuno</td></tr>
      <tr><td>45</td><td>forty-five</td><td>cuarenta y cinco</td></tr>
      <tr><td>100</td><td>one hundred</td><td>cien</td></tr>
    </table>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige la forma correcta en inglés para cada número.",
      type: "mc",
      questions: [
        { prompt: "15 = ___", options: ["fifteen", "fiveteen", "fivety"], correct: 0,
          explanation: "'Fifteen' es la forma correcta para el número 15." },
        { prompt: "100 = ___", options: ["hundred", "one hundred", "hundreds"], correct: 1,
          explanation: "Se dice 'one hundred', incluyendo el 'one'." },
        { prompt: "12 = ___", options: ["twelve", "twelfth", "twenty"], correct: 0,
          explanation: "'Twelve' es irregular, no sigue el patrón -teen." },
        { prompt: "40 = ___", options: ["fourty", "forty", "fourteen"], correct: 1,
          explanation: "40 se escribe 'forty' (sin 'u')." },
        { prompt: "50 = ___", options: ["fivety", "fifteen", "fifty"], correct: 2,
          explanation: "50 se escribe 'fifty'." },
        { prompt: "13 = ___", options: ["thirteen", "threeteen", "thirty"], correct: 0,
          explanation: "13 se escribe 'thirteen'." },
        { prompt: "21 = ___", options: ["twenty one", "twenty-one", "twentyone"], correct: 1,
          explanation: "Los números compuestos se escriben con guion: twenty-one." },
        { prompt: "90 = ___", options: ["ninety", "nineteen", "ninty"], correct: 0,
          explanation: "90 se escribe 'ninety'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe el número en palabras.",
      type: "fill",
      questions: [
        { prompt: "8 = ___", correct: ["eight"], explanation: "8 se escribe 'eight'." },
        { prompt: "11 = ___", correct: ["eleven"], explanation: "11 se escribe 'eleven', es irregular." },
        { prompt: "30 = ___", correct: ["thirty"], explanation: "30 se escribe 'thirty'." },
        { prompt: "45 = forty-___", correct: ["five"], explanation: "45 = forty + five, con guion." },
        { prompt: "60 = ___", correct: ["sixty"], explanation: "60 se escribe 'sixty'." },
        { prompt: "19 = ___", correct: ["nineteen"], explanation: "19 se escribe 'nineteen'." },
        { prompt: "77 = seventy-___", correct: ["seven"], explanation: "77 = seventy + seven." },
        { prompt: "16 = ___", correct: ["sixteen"], explanation: "16 se escribe 'sixteen'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "ten", "dollars", "."], translation: "Tengo diez dólares.",
          explanation: "Orden: sujeto + verbo + número + sustantivo." },
        { words: ["She", "is", "twenty", "years", "old", "."], translation: "Ella tiene veinte años.",
          explanation: "Estructura fija para expresar edad: is + número + years old." },
        { words: ["How", "many", "students", "are", "there", "?"], translation: "¿Cuántos estudiantes hay?",
          explanation: "Pregunta con 'how many' para cantidades contables." },
        { words: ["We", "have", "fifteen", "books", "."], translation: "Tenemos quince libros.",
          explanation: "Orden: sujeto + verbo + número + sustantivo plural." },
        { words: ["There", "are", "one", "hundred", "people", "."], translation: "Hay cien personas.",
          explanation: "'There are' se usa para expresar existencia en plural." },
        { words: ["My", "brother", "is", "twelve", "."], translation: "Mi hermano tiene doce años.",
          explanation: "Estructura para expresar edad, sin 'years old' explícito aquí." },
        { words: ["I", "need", "thirty", "minutes", "."], translation: "Necesito treinta minutos.",
          explanation: "Orden: sujeto + verbo + número + sustantivo." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada número con su forma correcta en inglés.",
      type: "match",
      questions: [
        { pairs: [
            ["25", "twenty-five"], ["33", "thirty-three"], ["48", "forty-eight"],
            ["56", "fifty-six"], ["70", "seventy"], ["82", "eighty-two"], ["99", "ninety-nine"],
          ],
          explanation: "Practica los números compuestos combinando decenas y unidades." }
      ]
    }
  ]
};
