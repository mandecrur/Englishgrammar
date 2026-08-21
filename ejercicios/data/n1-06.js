window.EXERCISE_DATA = {
  title: "Colors, Shapes, Sizes",
  level: "Nivel 1 · Beginners",
  subtitle: "Colores, formas y tamaños básicos.",
  theory: `
    <p><strong>Colores:</strong> red, blue, green, yellow, black, white, orange, purple, pink, brown.</p>
    <p><strong>Formas:</strong> circle (círculo), square (cuadrado), triangle (triángulo), rectangle (rectángulo).</p>
    <p><strong>Tamaños:</strong> big/large (grande), small/little (pequeño), tall (alto), short (bajo/corto).</p>
    <p>Estos adjetivos van antes del sustantivo: <strong>a big red circle</strong>.</p>
  `,
  questions: [
    { type: "mc", prompt: "The sky is ___.", options: ["blue", "square", "tall"], correct: 0,
      explanation: "'Blue' (azul) es un color, no una forma ni tamaño." },
    { type: "mc", prompt: "A stop sign has the shape of an ___.", options: ["octagon", "circle", "line"], correct: 0,
      explanation: "Las señales de 'stop' tienen forma de octágono." },
    { type: "fill", prompt: "An elephant is very ___ (grande).", correct: ["big", "large"],
      explanation: "'Big' o 'large' significan 'grande'." },
    { type: "fill", prompt: "A ball is ___ (forma redonda).", correct: ["round", "circular"],
      explanation: "Una pelota tiene forma redonda: 'round' o 'circular'." },
    { type: "match", pairs: [["red","rojo"],["square","cuadrado"],["small","pequeño"],["yellow","amarillo"]],
      explanation: "Vocabulario básico de colores y formas." }
  ]
};
