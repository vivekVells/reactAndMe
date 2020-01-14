import React from "react";

export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //     React.createElement("h3", {}, name),
  //     React.createElement("h3", {}, animal),
  //     React.createElement("h3", {}, breed)
  // ]);

  // jsx being used over here. the babel project used by parcel will be taking care of changing this to react specific code.
  return (
    <div>
      <h3>{name.toUpperCase()}</h3>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  );
}
