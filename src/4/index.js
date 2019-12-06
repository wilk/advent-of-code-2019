const start = 271973;
const end = 785961;

let passwordsCount = 0;
for (let i = start; i < end; i++) {
  const password = String(i);
  let oneDouble = false;
  let incremental = true;
  let repeatCounter = 1;
  for (let j = 0; j < password.length - 1; j++) {
    const currentDigit = parseInt(password[j]);
    const nextDigit = parseInt(password[j + 1]);
    if (currentDigit > nextDigit) {
      incremental = false;
      break;
    }
    if (currentDigit === nextDigit) repeatCounter++;
    else {
      if (repeatCounter === 2) oneDouble = true;
      repeatCounter = 1;
    }
  }
  if (repeatCounter === 2) oneDouble = true;
  if (oneDouble && incremental) {
    passwordsCount++;
  }
}

console.log(passwordsCount);
