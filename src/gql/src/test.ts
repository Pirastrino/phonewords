const line = 'Lorem ipsum.';

const regex = /(\w+)\W*$/;

const match = line.match(regex);

if (match) console.log(match[1]);
