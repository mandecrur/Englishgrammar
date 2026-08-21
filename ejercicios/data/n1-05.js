window.EXERCISE_DATA = {
  title: "Days of the Week, Months, Seasons",
  level: "Nivel 1 · Beginners",
  subtitle: "Días, meses y estaciones del año.",
  theory: `
    <p><strong>Días:</strong> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.</p>
    <p><strong>Meses:</strong> January, February, March, April, May, June, July, August, September,
    October, November, December.</p>
    <p><strong>Estaciones:</strong> spring (primavera), summer (verano), autumn/fall (otoño), winter (invierno).</p>
    <p>Los días y meses siempre se escriben con mayúscula inicial en inglés.</p>
  `,
  questions: [
    { type: "mc", prompt: "The day after Monday is ___.", options: ["Sunday", "Tuesday", "Wednesday"], correct: 1,
      explanation: "Después de Monday viene Tuesday." },
    { type: "mc", prompt: "The first month of the year is ___.", options: ["December", "January", "March"], correct: 1,
      explanation: "January es el primer mes del año." },
    { type: "fill", prompt: "The season after winter is ___.", correct: ["spring"],
      explanation: "El orden es: winter → spring → summer → autumn/fall." },
    { type: "fill", prompt: "The last day of the week (en el calendario inglés) is ___.", correct: ["sunday"],
      explanation: "En el calendario en inglés, la semana suele terminar en Sunday." },
    { type: "match", pairs: [["June","Junio"],["September","Septiembre"],["Friday","Viernes"],["summer","verano"]],
      explanation: "Se recomienda memorizar estos nombres, ya que no siguen reglas fonéticas fijas." }
  ]
};
