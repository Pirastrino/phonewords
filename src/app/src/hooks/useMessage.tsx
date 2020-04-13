import create from 'zustand';

type Message = {
  message: string;
  filter: string[];
  lastWord: RegExp;
  switchWord: (newWord: string) => void;
  addChar: (char: string) => void;
  removeChar: () => void;
};

const emojiReg = new RegExp(
  /(\u00a9 |\u00ae | [\u2000 -\u3300] |\ud83c[\ud000 -\udfff]|\ud83d[\ud000 -\udfff]|\ud83e[\ud000 -\udfff])*$/
);

const [useMessage] = create<Message>((set, get) => ({
  message: '',
  filter: [],
  lastWord: new RegExp(/(\b[a-zA-Z]*)([^a-zA-Z]*$)/),
  switchWord: (newWord) => {
    const word: RegExpMatchArray | null = get().message.match(get().lastWord);
    const prefix = word!.input!.slice(0, word!.index);
    const suffix = word!.input!.slice(word!.index! + word![1].length);
    set((_) => ({ message: [prefix, newWord, suffix].join('') }));
  },
  addChar: (char) => set((state) => ({ message: state.message.concat(char) })),
  removeChar: () => {
    const index =
      get().message.match(emojiReg) && get().message.match(emojiReg)![1]
        ? -2
        : -1;
    set((state) => ({ message: state.message.slice(0, index) }));
  },
}));

export { useMessage };
