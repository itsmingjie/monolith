export const msToTime = (ms: number): string => {
  // convert ms to time like 1:30 or 4:03:59
  const seconds = ms / 1000;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = Math.floor(seconds % 60);
  const hoursString = hours > 0 ? `${hours}:` : "";

  return `${hoursString}${minutes < 10 ? "0" : ""}${minutes}:${
    secondsLeft < 10 ? "0" : ""
  }${secondsLeft}`;
};
