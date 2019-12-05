const start = 271973;
const end = 785961;

let passwordsCount = 0;
for (let i = start; i < end; i++) {
  const password = String(i);
  let oneDouble = false;
  let incremental = true;
  let j = 0;
  for (j = 0; j < password.length - 1; j++) {
    const d1 = parseInt(password[j]);
    const d2 = parseInt(password[j + 1]);
    if (d1 > d2) {
      incremental = false;
      break;
    }
    if (d1 === d2) oneDouble = true;
  }
  if (oneDouble && incremental) {
    passwordsCount++;
  }
}

console.log(passwordsCount);
