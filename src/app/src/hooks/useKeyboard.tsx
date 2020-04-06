import create from 'zustand';

type Keyboard = {
  numpad: boolean;
  secondary: string | false;
  toggleNumpad: () => void;
  setSecondary: (value?: string) => void;
};

const [useKeyboard] = create<Keyboard>((set) => ({
  numpad: false,
  // secondary: 'abc',
  secondary: false,
  toggleNumpad: () => set((state) => ({ numpad: !state.numpad })),
  setSecondary: (value) => set((_) => ({ secondary: value || false })),
}));

export { useKeyboard };
