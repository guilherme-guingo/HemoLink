export function calculateBloodStock(bloodStock) {
  const values = Object.values(bloodStock)
  const totalBlood = values.reduce((acc, value) => acc + value, 0)
  const averageBlood = totalBlood / values.length
  const percentage = Math.min(averageBlood, 100)

  return { totalBlood, averageBlood, percentage }
}
