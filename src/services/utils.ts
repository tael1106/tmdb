export const convertToPercentage = (value: number): number => {
  return Math.round(value * 10);
}

export const translateTimeWindow = (value: string): string => {
  if (value == "day") {
    return "journée";
  }
  return "semaine"
}