const StateSelection = ({ handleSelection, isExp, isExperience }) => {
  return (
    <div
      className={`${
        isExp
          ? isExperience
            ? "bg-bgBlue"
            : ""
          : !isExperience
          ? "bg-bgBlue"
          : ""
      } text-white px-2 py-1`}
      onClick={() => handleSelection(isExp)}
    >
      {isExp ? "Experience" : "Education"}
    </div>
  );
};

export default StateSelection;
