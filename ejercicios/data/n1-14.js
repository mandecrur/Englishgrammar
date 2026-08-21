window.EXERCISE_DATA = {
  title: "Basic Plurals (-s)",
  translation: "Cómo formar el plural de los sustantivos",
  level: "Nivel 1 · Beginners",

  vocabulary: [
    { en: "box", es: "caja" },
    { en: "city", es: "ciudad" },
    { en: "baby", es: "bebé" },
    { en: "toy", es: "juguete" },
    { en: "dish", es: "plato" },
    { en: "key", es: "llave" },
    { en: "class", es: "clase" },
    { en: "watch", es: "reloj" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su significado",
    instructions: "Une cada palabra en inglés con su traducción correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["box", "caja"], ["city", "ciudad"], ["baby", "bebé"],
          ["toy", "juguete"], ["dish", "plato"], ["key", "llave"],
        ],
        explanation: "Vocabulario que usaremos en los ejercicios de este tema." }
    ]
  },

  theory: `
    <table>
      <tr><th>Regla</th><th>Ejemplo</th><th>Traducción</th></tr>
      <tr><td>Regla general: +s</td><td>book → books</td><td>libro → libros</td></tr>
      <tr><td>Termina en -s, -sh, -ch, -x, -z: +es</td><td>box → boxes</td><td>caja → cajas</td></tr>
      <tr><td>Consonante + y → y cambia a i + es</td><td>city → cities</td><td>ciudad → ciudades</td></tr>
      <tr><td>Vocal + y: solo +s</td><td>toy → toys</td><td>juguete → juguetes</td></tr>
    </table>
    <p>Algunos plurales son <strong>irregulares</strong> y no siguen ninguna regla, hay que memorizarlos:</p>
    <table>
      <tr><td>man → men</td><td>hombre → hombres</td></tr>
      <tr><td>woman → women</td><td>mujer → mujeres</td></tr>
      <tr><td>child → children</td><td>niño → niños</td></tr>
      <tr><td>person → people</td><td>persona → personas</td></tr>
    </table>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el plural correcto.",
      type: "mc",
      questions: [
        { prompt: "one box, two ___", options: ["boxs", "boxes", "boxies"], correct: 1,
          explanation: "'Box' termina en -x, así que el plural es 'boxes'." },
        { prompt: "one city, two ___", options: ["citys", "cities", "cityes"], correct: 1,
          explanation: "'City' termina en consonante+y, así que cambia a 'cities'." },
        { prompt: "one toy, two ___", options: ["toies", "toys", "toyes"], correct: 1,
          explanation: "'Toy' termina en vocal+y, así que solo se añade '-s'." },
        { prompt: "one child, two ___", options: ["childs", "children", "childes"], correct: 1,
          explanation: "'Child' es irregular: su plural es 'children'." },
        { prompt: "one watch, two ___", options: ["watchs", "watches", "watchies"], correct: 1,
          explanation: "'Watch' termina en -ch, así que el plural es 'watches'." },
        { prompt: "one man, two ___", options: ["mans", "men", "manes"], correct: 1,
          explanation: "'Man' es irregular: su plural es 'men'." },
        { prompt: "one dish, two ___", options: ["dishs", "dishes", "dishies"], correct: 1,
          explanation: "'Dish' termina en -sh, así que el plural es 'dishes'." },
        { prompt: "one baby, two ___", options: ["babys", "babies", "babyes"], correct: 1,
          explanation: "'Baby' termina en consonante+y, así que cambia a 'babies'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma plural correcta.",
      type: "fill",
      questions: [
        { prompt: "one dog, two ___", correct: ["dogs"], explanation: "Plural regular: se añade solo '-s'." },
        { prompt: "one key, two ___", correct: ["keys"], explanation: "'Key' termina en vocal+y, solo se añade '-s'." },
        { prompt: "one class, two ___", correct: ["classes"], explanation: "'Class' termina en -s, se añade '-es'." },
        { prompt: "one woman, two ___", correct: ["women"], explanation: "'Woman' es irregular: su plural es 'women'." },
        { prompt: "one house, two ___", correct: ["houses"], explanation: "Plural regular: se añade solo '-s'." },
        { prompt: "one person, two ___", correct: ["people"], explanation: "'Person' es irregular: su plural es 'people'." },
        { prompt: "one country, two ___", correct: ["countries"], explanation: "'Country' termina en consonante+y, cambia a 'countries'." },
        { prompt: "one bus, two ___", correct: ["buses"], explanation: "'Bus' termina en -s, se añade '-es'." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["I", "have", "two", "dogs", "."], translation: "Tengo dos perros.",
          explanation: "Orden: sujeto + verbo + número + sustantivo plural." },
        { words: ["She", "has", "three", "children", "."], translation: "Ella tiene tres hijos.",
          explanation: "'Children' es el plural irregular de 'child'." },
        { words: ["There", "are", "many", "boxes", "here", "."], translation: "Hay muchas cajas aquí.",
          explanation: "'There are' se usa con sustantivos plurales." },
        { words: ["We", "visited", "five", "cities", "."], translation: "Visitamos cinco ciudades.",
          explanation: "'Cities' es el plural de 'city'." },
        { words: ["The", "babies", "are", "sleeping", "."], translation: "Los bebés están durmiendo.",
          explanation: "'Babies' es el plural de 'baby'." },
        { words: ["He", "has", "two", "watches", "."], translation: "Él tiene dos relojes.",
          explanation: "'Watches' es el plural de 'watch'." },
        { words: ["Many", "people", "live", "here", "."], translation: "Muchas personas viven aquí.",
          explanation: "'People' es el plural irregular de 'person'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra en singular con su plural correcto.",
      type: "match",
      questions: [
        { pairs: [
            ["book", "books"], ["dish", "dishes"], ["baby", "babies"], ["key", "keys"],
            ["man", "men"], ["child", "children"], ["person", "people"],
          ],
          explanation: "Books (regular), dishes (-sh→es), babies (consonante+y→ies), keys (vocal+y→s), y tres irregulares." }
      ]
    }
  ]
};
