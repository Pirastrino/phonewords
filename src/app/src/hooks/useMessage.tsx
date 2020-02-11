import create from 'zustand';

type Message = {
  message: string;
  filter: string[];
  lastWord: () => RegExpMatchArray | null;
  switchWord: (newWord: string) => void;
  addChar: (char: string) => void;
  removeChar: () => void;
};

// Regex for last word in the string
const regex = new RegExp(/(\b[a-zA-Z]*)([^a-zA-Z]*$)/);

const [useMessage] = create<Message>((set, get) => ({
  message: '',
  filter: [],
  lastWord: () => get().message.match(regex),
  switchWord: newWord => {
    // TODO Better Regex
    const word: RegExpMatchArray | null = get().message.match(regex);
    const prefix = word!.input!.slice(0, word!.index);
    const suffix = word!.input!.slice(word!.index! + word![1].length);
    set(state => ({ message: [prefix, newWord, suffix].join('') }));
  },
  addChar: char => set(state => ({ message: state.message.concat(char) })),
  removeChar: () => set(state => ({ message: state.message.slice(0, -1) })),
}));

export { useMessage };
