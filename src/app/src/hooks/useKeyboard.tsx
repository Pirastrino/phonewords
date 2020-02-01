import create from 'zustand';

const [useKeyboard] = create(set => ({
  numpad: false,
  switchType: (e: MouseEvent) => set(state => ({ numpad: !state.numpad })),
}));

export { useKeyboard };
