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
    <p>A continuación tienes <strong>todos</strong> los números del 1 al 20, uno por uno:</p>
    <table>
      <tr><th>Número</th><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>1</td><td>one</td><td>uno</td></tr>
      <tr><td>2</td><td>two</td><td>dos</td></tr>
      <tr><td>3</td><td>three</td><td>tres</td></tr>
      <tr><td>4</td><td>four</td><td>cuatro</td></tr>
      <tr><td>5</td><td>five</td><td>cinco</td></tr>
      <tr><td>6</td><td>six</td><td>seis</td></tr>
      <tr><td>7</td><td>seven</td><td>siete</td></tr>
      <tr><td>8</td><td>eight</td><td>ocho</td></tr>
      <tr><td>9</td><td>nine</td><td>nueve</td></tr>
      <tr><td>10</td><td>ten</td><td>diez</td></tr>
      <tr><td>11</td><td>eleven</td><td>once</td></tr>
      <tr><td>12</td><td>twelve</td><td>doce</td></tr>
      <tr><td>13</td><td>thirteen</td><td>trece</td></tr>
      <tr><td>14</td><td>fourteen</td><td>catorce</td></tr>
      <tr><td>15</td><td>fifteen</td><td>quince</td></tr>
      <tr><td>16</td><td>sixteen</td><td>dieciséis</td></tr>
      <tr><td>17</td><td>seventeen</td><td>diecisiete</td></tr>
      <tr><td>18</td><td>eighteen</td><td>dieciocho</td></tr>
      <tr><td>19</td><td>nineteen</td><td>diecinueve</td></tr>
      <tr><td>20</td><td>twenty</td><td>veinte</td></tr>
    </table>
    <p>Nota que del 13 al 19 todos terminan en <strong>-teen</strong>, con dos ligeras irregularidades
    ortográficas: <strong>thirteen</strong> (no "threeteen") y <strong>fifteen</strong> (no "fiveteen").
    Además, <strong>eleven</strong> y <strong>twelve</strong> son completamente irregulares, no siguen
    ningún patrón.</p>
    <p>Ahora todas las decenas del 20 al 100, una por una:</p>
    <table>
      <tr><th>Número</th><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>20</td><td>twenty</td><td>veinte</td></tr>
      <tr><td>30</td><td>thirty</td><td>treinta</td></tr>
      <tr><td>40</td><td>forty</td><td>cuarenta</td></tr>
      <tr><td>50</td><td>fifty</td><td>cincuenta</td></tr>
      <tr><td>60</td><td>sixty</td><td>sesenta</td></tr>
      <tr><td>70</td><td>seventy</td><td>setenta</td></tr>
      <tr><td>80</td><td>eighty</td><td>ochenta</td></tr>
      <tr><td>90</td><td>ninety</td><td>noventa</td></tr>
      <tr><td>100</td><td>one hundred</td><td>cien</td></tr>
    </table>
    <p>Nota las irregularidades ortográficas: <strong>forty</strong> pierde la "u" de "four",
    y <strong>fifty</strong> cambia "five" a "fif-".</p>
    <p>Para formar números compuestos (21-99), se combina la decena + guion + la unidad.
    Aquí tienes <strong>todo</strong> el patrón completo del 21 al 29 como ejemplo — el mismo
    patrón se repite exactamente igual para el 31-39 (thirty-one, thirty-two...), 41-49 (forty-one,
    forty-two...) y así sucesivamente hasta el 91-99:</p>
    <table>
      <tr><th>Número</th><th>Inglés</th><th>Traducción</th></tr>
      <tr><td>21</td><td>twenty-one</td><td>veintiuno</td></tr>
      <tr><td>22</td><td>twenty-two</td><td>veintidós</td></tr>
      <tr><td>23</td><td>twenty-three</td><td>veintitrés</td></tr>
      <tr><td>24</td><td>twenty-four</td><td>veinticuatro</td></tr>
      <tr><td>25</td><td>twenty-five</td><td>veinticinco</td></tr>
      <tr><td>26</td><td>twenty-six</td><td>veintiséis</td></tr>
      <tr><td>27</td><td>twenty-seven</td><td>veintisiete</td></tr>
      <tr><td>28</td><td>twenty-eight</td><td>veintiocho</td></tr>
      <tr><td>29</td><td>twenty-nine</td><td>veintinueve</td></tr>
    </table>
    <p>Ejemplo aplicando el mismo patrón en otra decena: <strong>45 = forty-five</strong> (cuarenta y cinco),
    <strong>78 = seventy-eight</strong> (setenta y ocho), <strong>93 = ninety-three</strong> (noventa y tres).</p>
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
