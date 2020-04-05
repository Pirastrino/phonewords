import { words } from './data/words';

interface wordsArgs {
  base: string;
}

const resolvers = {
  Query: {
    words: (_: any, args: wordsArgs) => {
      const { base } = args;
      const groups = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxzy'];
      const regexMap = base
        .split('')
        .map(c => `[${groups.filter((g: string) => g.includes(c))[0]}]`);
      const regex = new RegExp(`^${regexMap.join('')}$`);
      const key = regexMap.length < 10 ? regexMap.length : 10;
      return (
        words
          .get(key)
          ?.filter((w: string) => w.match(regex))
          .map((w: string) => ({ lemma: w })) || []
      );
    },
  },
};

export { resolvers };
