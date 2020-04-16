import create from 'zustand';

type Message = {
  message: string;
  index: number;
  setFirst: boolean;
  transform: 0 | 1 | 2;
  textTransform: (word: string) => string;
  setTransform: () => void;
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
  index: 0, // marks single char position to prevent whole message regex match
  setFirst: true, // preselect first word from returned data
  transform: 1, // 0 - no transform, 1- capitalized, 2 - to uppercase

  textTransform: (word) => {
    switch (get().transform) {
      case 1:
        return word.charAt(0).toUpperCase() + word.slice(1);
      case 2:
        return word.toUpperCase();
      default:
        return word;
    }
  },

  setTransform: () =>
    set((state) => ({
      transform: state.transform === 0 ? 1 : state.transform === 1 ? 2 : 0,
    })),

  switchWord: (newWord) => {
    const message = get().message.slice(0, get().index);
    const word = get().message.slice(get().index).match(lastWordReg);
    const prefix = (word !== null && word.input!.slice(0, word.index)) || '';
    const suffix =
      (word !== null && word.input!.slice(word.index! + word![1].length)) || '';
    set((_) => ({ message: [message, prefix, newWord, suffix].join('') }));
  },

  addChar: (char) => {
    const newMessage = get().message.concat(char);
    const lastWord = newMessage.match(lastWordReg);
    const transform = ['. ', '! ', '? '].includes(get().message.slice(-2))
      ? 1
      : lastWord!.index !== 0 && lastWord![1].length === 1 && char !== ' '
      ? 0
      : get().transform;
    set((state) => ({
      message: newMessage,
      setFirst: true,
      transform: transform,
    }));
  },

  addSingleChar: (char) =>
    set((state) => ({
      message: state.message.concat(get().textTransform(char)),
      index: state.message.length,
      setFirst: false,
      transform: (get().transform !== 2 && get().transform) || 0,
    })),

  removeChar: () => {
    // an emoji contains two unicodes
    const index =
      get().message.match(emojiReg) && get().message.match(emojiReg)![1]
        ? -2
        : -1;
    const newMessage = get().message.slice(0, index);
    const lastWord =
      (newMessage.match(lastWordReg) && newMessage.match(lastWordReg)![1]) ||
      '';
    const transform =
      lastWord !== '' && lastWord === lastWord!.toUpperCase()
        ? 2
        : (lastWord !== '' &&
            lastWord ===
              lastWord!.charAt(0).toUpperCase() + lastWord!.slice(1)) ||
          newMessage === ''
        ? 1
        : 0;
    set((state) => ({
      message: newMessage,
      index: 0,
      setFirst: false,
      transform: transform,
    }));
  },
}));

export { useMessage, lastWordReg };
