import create from 'zustand';

const [useStore] = create(set => ({
  input: [],
  word: '',
  addValue: (e: MouseEvent, value: string) => {
    set(state => ({ input: [...state.input, value] }));
  },
}));

export { useStore };
