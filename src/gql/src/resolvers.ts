import { words } from './data/words';
import { fetchEmoji } from './utils/fetchEmoji';

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
        .map((c) => `[${groups.filter((g: string) => g.includes(c))[0]}]`);
      const regex = new RegExp(`^${regexMap.join('')}$`);
      const key = regexMap.length < 10 ? regexMap.length : 10;
      return (
        [
          ...new Set(
            words
              .get(key)
              ?.filter((w: string) => w.match(regex))
              .concat(base)
          ),
        ].map((w: string) => ({ lemma: w })) || []
      );
    },
    emojis: () => fetchEmoji(),
  },
};

export { resolvers };
