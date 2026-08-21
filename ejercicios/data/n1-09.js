window.EXERCISE_DATA = {
  title: "Prepositions of Time (at, on, in)",
  level: "Nivel 1 · Beginners",
  subtitle: "Preposiciones básicas de tiempo.",
  theory: `
    <table>
      <tr><td><strong>at</strong></td><td>horas exactas</td><td>at 5 o'clock, at midnight</td></tr>
      <tr><td><strong>on</strong></td><td>días y fechas</td><td>on Monday, on July 4th</td></tr>
      <tr><td><strong>in</strong></td><td>meses, años, estaciones</td><td>in July, in 2024, in summer</td></tr>
    </table>
    <p>Regla práctica: piensa en "at" para un punto exacto, "on" para un día concreto, e "in" para
    periodos más largos (meses, años, estaciones).</p>
  `,
  questions: [
    { type: "mc", prompt: "I wake up ___ 7 AM.", options: ["at", "on", "in"], correct: 0,
      explanation: "Con horas exactas se usa 'at'." },
    { type: "mc", prompt: "My birthday is ___ May.", options: ["at", "on", "in"], correct: 2,
      explanation: "Con meses se usa 'in'." },
    { type: "fill", prompt: "We have class ___ Mondays.", correct: ["on"],
      explanation: "Con días de la semana se usa 'on'." },
    { type: "fill", prompt: "She was born ___ 1998.", correct: ["in"],
      explanation: "Con años se usa 'in'." },
    { type: "match", pairs: [["at night","por la noche (hora)"],["on Friday","el viernes"],["in winter","en invierno"],["at noon","al mediodía"]],
      explanation: "'At night' es una excepción común que conviene memorizar." }
  ]
};
