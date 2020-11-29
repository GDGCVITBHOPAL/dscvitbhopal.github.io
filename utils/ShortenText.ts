export default function ShortenText(
  text: string,
  startingPoint: number,
  maxLength: number
) {
  if (text) {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  } else {
    return text;
  }
}
