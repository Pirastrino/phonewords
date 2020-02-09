import create from 'zustand';

type Keyboard = {
  numpad: Boolean;
  switchType: () => void;
};

const [useKeyboard] = create<Keyboard>(set => ({
  numpad: false,
  switchType: () => set(state => ({ numpad: !state.numpad })),
}));

export { useKeyboard };
