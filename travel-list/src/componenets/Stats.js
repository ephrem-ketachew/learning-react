export function Stats({ items }) {
  const itemsCount = items.length;
  if (!itemsCount) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const packedItemsCount = items.filter((item) => item.packed).length;
  const packedItemsPercentage = Math.round(
    (packedItemsCount * 100) / itemsCount
  );

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "You got everything. You are ready to go✈️"
          : `You have ${itemsCount} items on your list, and you already packed
        ${packedItemsCount} (${packedItemsPercentage}%)`}
      </em>
    </footer>
  );
}
