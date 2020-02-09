import create from 'zustand';

type Message = {
  message: String;
  currentWord: String;
  filter: String[];
  pushChar: (str: String | JSX.Element) => void;
  pushWord: (word: String) => void;
};

const [useMessage] = create<Message>(set => ({
  message: '',
  currentWord: '',
  filter: [],
  pushChar: str => {
    if (typeof str == 'string')
      set(state => ({ filter: [...state.filter, str] }));
  },
  pushWord: word => {
    set(state => ({ message: state.message.concat(`${word} `) }));
  },
}));

export { useMessage };
