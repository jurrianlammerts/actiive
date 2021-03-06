export default function(amount) {
  const options = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  };
  // If its a whole, dollar amount, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("de-EU", options);
  return formatter.format(amount/ 100);
}
