export const getNextId = (data) => {
  if (data.length === 0) return 0;
  const maxId = data.reduce((prev, current) =>
    prev && prev.id > current.id ? prev.id : current.id
  );
  return maxId + 1;
};
