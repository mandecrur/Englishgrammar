window.EXERCISE_DATA = {
  title: "Irregular Plural Nouns",
  translation: "Sustantivos plurales irregulares",
  level: "Nivel 2 · Básico 1 (A1)",

  vocabulary: [
    { en: "man", es: "hombre" },
    { en: "woman", es: "mujer" },
    { en: "child", es: "niño/a" },
    { en: "person", es: "persona" },
    { en: "foot", es: "pie" },
    { en: "tooth", es: "diente" },
    { en: "mouse", es: "ratón" },
    { en: "fish", es: "pez / pescado" },
  ],

  vocabExercise: {
    title: "Relaciona cada palabra con su plural",
    instructions: "Une cada palabra singular con su forma plural correcta.",
    type: "match",
    questions: [
      { pairs: [
          ["man", "men"], ["woman", "women"], ["child", "children"],
          ["foot", "feet"], ["tooth", "teeth"], ["mouse", "mice"],
        ],
        explanation: "Vocabulario de plurales irregulares que usaremos en este tema." }
    ]
  },

  theory: `
    <p>Algunos sustantivos no siguen ninguna regla para formar el plural — hay que memorizarlos.</p>
    <table>
      <tr><th>Singular</th><th>Plural</th><th>Traducción</th></tr>
      <tr><td>man</td><td>men</td><td>hombre → hombres</td></tr>
      <tr><td>woman</td><td>women</td><td>mujer → mujeres</td></tr>
      <tr><td>child</td><td>children</td><td>niño → niños</td></tr>
      <tr><td>person</td><td>people</td><td>persona → personas</td></tr>
      <tr><td>foot</td><td>feet</td><td>pie → pies</td></tr>
      <tr><td>tooth</td><td>teeth</td><td>diente → dientes</td></tr>
      <tr><td>mouse</td><td>mice</td><td>ratón → ratones</td></tr>
      <tr><td>fish</td><td>fish</td><td>pez → peces (¡no cambia!)</td></tr>
    </table>
    <p>Algunos, como <strong>fish</strong> y <strong>sheep</strong>, tienen la misma forma en singular
    y plural: <strong>one fish, two fish.</strong></p>
  `,

  groups: [
    {
      title: "Selecciona la respuesta correcta",
      instructions: "Elige el plural correcto.",
      type: "mc",
      questions: [
        { prompt: "one man, two ___", options: ["mans", "men", "manes"], correct: 1,
          explanation: "El plural de 'man' es 'men'." },
        { prompt: "one child, two ___", options: ["childs", "children", "childes"], correct: 1,
          explanation: "El plural de 'child' es 'children'." },
        { prompt: "one woman, two ___", options: ["womans", "women", "womens"], correct: 1,
          explanation: "El plural de 'woman' es 'women'." },
        { prompt: "one foot, two ___", options: ["foots", "feet", "footes"], correct: 1,
          explanation: "El plural de 'foot' es 'feet'." },
        { prompt: "one tooth, two ___", options: ["tooths", "teeth", "toothes"], correct: 1,
          explanation: "El plural de 'tooth' es 'teeth'." },
        { prompt: "one person, two ___", options: ["persons", "people", "peoples"], correct: 1,
          explanation: "El plural de 'person' es 'people'." },
        { prompt: "one fish, two ___", options: ["fishs", "fishes", "fish"], correct: 2,
          explanation: "'Fish' no cambia en plural." },
        { prompt: "one mouse, two ___", options: ["mouses", "mice", "mices"], correct: 1,
          explanation: "El plural de 'mouse' es 'mice'." },
      ]
    },
    {
      title: "Completa los espacios",
      instructions: "Escribe la forma plural correcta.",
      type: "fill",
      questions: [
        { prompt: "one man, two ___", correct: ["men"], explanation: "El plural de 'man' es 'men'." },
        { prompt: "one woman, two ___", correct: ["women"], explanation: "El plural de 'woman' es 'women'." },
        { prompt: "one child, two ___", correct: ["children"], explanation: "El plural de 'child' es 'children'." },
        { prompt: "one foot, two ___", correct: ["feet"], explanation: "El plural de 'foot' es 'feet'." },
        { prompt: "one tooth, two ___", correct: ["teeth"], explanation: "El plural de 'tooth' es 'teeth'." },
        { prompt: "one person, two ___", correct: ["people"], explanation: "El plural de 'person' es 'people'." },
        { prompt: "one mouse, two ___", correct: ["mice"], explanation: "El plural de 'mouse' es 'mice'." },
        { prompt: "one fish, two ___", correct: ["fish"], explanation: "'Fish' no cambia en plural." },
      ]
    },
    {
      title: "Ordena las palabras",
      instructions: "Haz clic en las palabras en el orden correcto para formar la oración.",
      type: "order",
      questions: [
        { words: ["There", "are", "three", "men", "here", "."], translation: "Hay tres hombres aquí.",
          explanation: "'Men' es el plural irregular de 'man'." },
        { words: ["She", "has", "two", "children", "."], translation: "Ella tiene dos hijos.",
          explanation: "'Children' es el plural irregular de 'child'." },
        { words: ["My", "feet", "hurt", "a", "lot", "."], translation: "Me duelen mucho los pies.",
          explanation: "'Feet' es el plural irregular de 'foot'." },
        { words: ["Many", "people", "live", "here", "."], translation: "Muchas personas viven aquí.",
          explanation: "'People' es el plural irregular de 'person'." },
        { words: ["I", "caught", "three", "fish", "."], translation: "Pesqué tres peces.",
          explanation: "'Fish' no cambia en plural." },
        { words: ["The", "dentist", "checked", "my", "teeth", "."], translation: "El dentista revisó mis dientes.",
          explanation: "'Teeth' es el plural irregular de 'tooth'." },
        { words: ["There", "are", "two", "mice", "in", "the", "house", "."], translation: "Hay dos ratones en la casa.",
          explanation: "'Mice' es el plural irregular de 'mouse'." },
      ]
    },
    {
      title: "Relaciona los conceptos",
      instructions: "Une cada palabra singular con su plural correcto.",
      type: "match",
      questions: [
        { pairs: [
            ["man", "men"], ["woman", "women"], ["child", "children"], ["person", "people"],
            ["foot", "feet"], ["tooth", "teeth"], ["mouse", "mice"],
          ],
          explanation: "Estos plurales irregulares deben memorizarse, ya que no siguen ninguna regla." }
      ]
    }
  ]
};
