import create from 'zustand';

type ThemeContext = {
  dark: boolean;
  toggleDarkTheme: () => void;
};

const [useTheme] = create<ThemeContext>((set) => ({
  dark: true,
  toggleDarkTheme: () => set((state) => ({ dark: !state.dark })),
}));

export { useTheme };
