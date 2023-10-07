import { create } from "zustand";

export const useSkillsStore = create((set) => ({
  selectedSkills: [],
  setSelectedSkills: (children) =>
    set((state) => {
      if (
        state.selectedSkills &&
        Array.isArray(state.selectedSkills) &&
        state.selectedSkills.includes(children)
      ) {
        return {
          selectedSkills: state.selectedSkills.filter(
            (skill) => skill !== children
          ),
        };
      } else {
        if (state.selectedSkills) {
          return {
            selectedSkills: [...state.selectedSkills, children],
          };
        } else {
          return {
            selectedSkills: [children],
          };
        }
      }
    }),
}));

export const useThemeStore = create((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
