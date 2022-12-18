export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, elem) => acc + (elem.count * elem.price), 0);

  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}
