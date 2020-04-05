const deleteById = (collection, replacement) =>
    collection.filter((replaceble) => !(replaceble.id === replacement.id));

export default deleteById;
