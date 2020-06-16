export const CardUtil = (items, cardItemToAdd) => {
  const existItem = items.find((item) => item.id === cardItemToAdd.id);
  if (existItem) {
    return items.map((item) =>
      item.id === cardItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...items, { ...cardItemToAdd, quantity: 1 }];
};
