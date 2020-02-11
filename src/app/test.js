const text = `ewqr  123.,  `;
const a = '';

const regex = new RegExp(/(\b[a-zA-Z]*)([^a-zA-Z]*$)/);

const match = text.match(regex);

const start = text.match(regex).index;
const end = text.match(regex).index + text.match(regex)[1].length;

console.log([text.slice(0, start), text.slice(start, end), text.slice(end)]);
console.log(match);
