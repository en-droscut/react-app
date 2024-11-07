import { useState } from "react";
import produce from "immer";

const UpdatingArrayOfObjects = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = (bugId: number) => {
    // {} -> object literal
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === bugId);

        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}{" "}
          {bug.fixed ? (
            "Fixed"
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => handleClick(bug.id)}
            >
              {" "}
              Fix it!{" "}
            </button>
          )}
        </p>
      ))}
    </div>
  );
};

export default UpdatingArrayOfObjects;
