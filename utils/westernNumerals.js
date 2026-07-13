const EASTERN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_INDIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function toWesternNumerals(value) {
  if (value == null) return value;
  return String(value).replace(/[۰-۹٠-٩]/g, (char) => {
    const easternIndex = EASTERN_DIGITS.indexOf(char);
    if (easternIndex !== -1) return String(easternIndex);
    const arabicIndex = ARABIC_INDIC_DIGITS.indexOf(char);
    if (arabicIndex !== -1) return String(arabicIndex);
    return char;
  });
}
