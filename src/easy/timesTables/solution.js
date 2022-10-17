function timesTableMaker(num1) {
  const timeTable = []
  for (let i = 1; i <= 12; i++) {
    timeTable.push(num1 * i)
  }
  return timeTable
}
