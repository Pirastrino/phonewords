import { words } from './data';
// import { words } from './data/words2';

const resolvers = {
  Query: {
    words: (_: any, args: any) => {
      const regex = `^${args.group.map((g: string) => `[${g}]`).join('')}$`;
      const key = args.group.length < 10 ? args.group.length : 10;
      return words
        .get(key)
        ?.filter((w: string) => w.match(regex))
        .map((w: string) => ({ lemma: w }));
    },

    // getWordsFromWord: (_: any, args: any) => {

    // }
  },
};

export { resolvers };
