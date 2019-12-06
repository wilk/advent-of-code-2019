const fs = require('fs');
const path = require('path');
const txt = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8');
let program = txt.split(',').map(Number);

const ADD_INSTRUCTION = 1;
const MULTIPLY_INSTRUCTION = 2;
const READ_INSTRUCTION = 3;
const PRINT_INSTRUCTION = 4;
const END_INSTRUCTION = 99;

const programs = {
  [ADD_INSTRUCTION]: (i, program, modes) => {
    const firstValue = modes[0] === 0 ? program[program[i]] : program[i];
    const secondValue = modes[1] === 0 ? program[program[i + 1]] : program[i + 1];
    const output = firstValue + secondValue;
    program[program[i + 2]] = output;
    return [program, true, 3];
  },
  [MULTIPLY_INSTRUCTION]: (i, program, modes) => {
    const firstValue = modes[0] === 0 ? program[program[i]] : program[i];
    const secondValue = modes[1] === 0 ? program[program[i + 1]] : program[i + 1];
    const output = firstValue * secondValue;
    program[program[i + 2]] = output;
    return [program, true, 3];
  },
  [READ_INSTRUCTION]: (i, program) => {
    program[program[i]] = 1;
    return [program, true, 1];
  },
  [PRINT_INSTRUCTION]: (i, program, modes) => {
    const value = modes[0] === 0 ? program[program[i]] : program[i];
    console.log(value);
    return [program, true, 1];
  },
  [END_INSTRUCTION]: () => [program, false, 1]
};

let i = 0;
let running = true;
let increment = 0;
while (running && i < program.length) {
  const instruction = String(program[i]);
  const opcode = Number(`${instruction[instruction.length - 2] || 0}${instruction[instruction.length - 1]}`);
  const modes = [Number(instruction[instruction.length - 3] || 0), Number(instruction[instruction.length - 4] || 0), Number(instruction[instruction.length - 5] || 0)];

  i++;
  [program, running, increment] = programs[opcode](i, program, modes);
  i += increment;
}

//console.log(program);
