function formatNumber(number, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
  }).format(number);
}
export default formatNumber;
