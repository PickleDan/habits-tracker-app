const replaceById = (collection, replacement) =>
    collection.map((replacable) =>
        replacable.id === replacement.id
            ? { ...replacable, ...replacement }
            : replacable
    );

export default replaceById;
