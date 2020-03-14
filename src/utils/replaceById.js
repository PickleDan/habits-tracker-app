const replaceById = (collection, replacement) =>
  collection.map(replacable => {
    if (replacable.id === replacement.id) {
      return replacement;
    }
    return replacable;
  });

export default replaceById;
