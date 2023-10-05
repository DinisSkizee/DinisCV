import { create } from "zustand";

export const useStore = create((set) => ({
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
