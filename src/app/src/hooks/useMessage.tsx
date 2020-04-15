import create from 'zustand';

type Message = {
  message: string;
  index: number;
  setFirst: boolean;
  switchWord: (newWord: string) => void;
  addChar: (char: string) => void;
  addSingleChar: (char: string) => void;
  removeChar: () => void;
};

const emojiReg = new RegExp(
  /(\u00a9 |\u00ae | [\u2000 -\u3300] |\ud83c[\ud000 -\udfff]|\ud83d[\ud000 -\udfff]|\ud83e[\ud000 -\udfff])*$/
);

const lastWordReg = new RegExp(/(\b[a-zA-Z]*)([^a-zA-Z]*$)/);

const [useMessage] = create<Message>((set, get) => ({
  message: '',
  index: 0,
  setFirst: true,
  switchWord: (newWord) => {
    const message = get().message.slice(0, get().index);
    const word = get().message.slice(get().index).match(lastWordReg);
    const prefix = (word !== null && word.input!.slice(0, word.index)) || '';
    const suffix =
      (word !== null && word.input!.slice(word.index! + word![1].length)) || '';
    set((_) => ({ message: [message, prefix, newWord, suffix].join('') }));
  },
  addChar: (char) =>
    set((state) => ({ message: state.message.concat(char), setFirst: true })),
  addSingleChar: (char) =>
    set((state) => ({
      message: state.message.concat(char),
      index: state.message.length,
      setFirst: false,
    })),
  removeChar: () => {
    const index =
      get().message.match(emojiReg) && get().message.match(emojiReg)![1]
        ? -2
        : -1;
    set((state) => ({
      message: state.message.slice(0, index),
      index: 0,
      setFirst: false,
    }));
  },
}));

export { useMessage, lastWordReg };
