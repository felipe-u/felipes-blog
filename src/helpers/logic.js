export function formatDate(dateToFormat) {
  return dateToFormat.toISOString().split('T')[0]
}
