// Practice 01: continuous Yellow–Orange–Red color scale.
// The domain follows the largest neighborhood count in the selected year.
window.cartogramTheme = {
  color: (count, max) => d3.scaleSequential(d3.interpolateYlOrRd)
    .domain([0, max]).clamp(true)(count),
  text: (count, max) => count / max >= 0.6 ? '#ffffff' : '#492b1b',
  legend: max => Array.from({ length: 6 }, (_, i) => {
    const count = max * i / 5;
    return { color: d3.interpolateYlOrRd(i / 5), label: Math.round(count) + ' records' };
  })
};
