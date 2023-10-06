const StateSelection = ({ handleSelection, isExp, isExperience }) => {
  return (
    <div
      className={`${
        isExp
          ? isExperience
            ? "bg-bgLessBlue"
            : ""
          : !isExperience
          ? "bg-bgLessBlue"
          : ""
      } text-white px-2 py-1 select-none cursor-pointer`}
      onClick={() => handleSelection(isExp)}
    >
      {isExp ? "Experience" : "Education"}
    </div>
  );
};

export default StateSelection;
