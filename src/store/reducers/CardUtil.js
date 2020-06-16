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

export const removeItem = (items, removItem) => {
  const existItem = items.find((item) => item.id === removItem.id);
  if (existItem.quantity === 1) {
    return items.filter((item) => item.id !== removItem.id);
  }
  return items.map((item) =>
    item.id === removItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
