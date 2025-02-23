export const removeDuplicateItems = (data: any) => {
  const uniqueCategories = [];
  const categorySet = new Set();

  data.forEach((item) => {
    if (!categorySet.has(item.category.name)) {
      categorySet.add(item.category.name);
      uniqueCategories.push(item);
    }
  });
  return uniqueCategories;
};
