function dist(p, q) {
  const dx = q.x - p.x;
  const dy = q.y - p.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const p1 = {x: 1, y: 1};
const p2 = {x: 4, y: 5};
const d = dist(p1, p2);

console.log(d)