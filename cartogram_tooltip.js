// Practice 02: count records per title within the hovered neighborhood.
// Ties use alphabetical title order so results remain deterministic.
window.cartogramTooltip = (name, rows) => {
  const counts = new Map();
  rows.filter(row => row.area === name).forEach(row => {
    counts.set(row.title, (counts.get(row.title) || 0) + 1);
  });
  const ranked = [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'en'));
  if (!ranked.length) return `${name}\nNo location records for this year.`;
  const [title, count] = ranked[0];
  const tied = ranked.filter(entry => entry[1] === count).length > 1;
  return `${name}\nMost recorded title${tied ? ' (tied)' : ''}: ${title}\n${count} location record${count === 1 ? '' : 's'}`;
};
