const fs = require('fs');
const path = require('path');
const txt = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8');
const orbits = txt.split('\n');

const orbitMap = orbits.reduce((acc, orbit) => {
  const split = orbit.split(')');
  const objectA = split[0];
  const objectB = split[1];

  if (typeof acc[objectA] === 'undefined') acc[objectA] = [];
  acc[objectA].push(objectB);
  return acc;
}, {});

const queue = [{ node: 'COM', level: 0 }];
let total = 0;
let level = 0;
while (queue.length > 0) {
  const el = queue.shift();
  total += el.level;
  const children = orbitMap[el.node];
  if (children) queue.push(...children.map(child => ({ node: child, level: el.level + 1 })));
}

console.log(total);

/*
B)G
C)D
COM)B
D)I
D)E
E)F
J)K
G)H
B)C
E)J
K)L
*/

/*
TOTAL: 0 + 1 + 1 + 1 + 3 + 5 + 11 + 1 + 3 + 3 + 21 + 3

B: 2
G: 2
C: 3
D: 4
COM: 0
I: 3
E: 20
F: 11
J: 21
K: 2
H: 3
L: 3
*/