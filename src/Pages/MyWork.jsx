import React from "react";

import Library from "../Component/MyWorkComponents/Library";
import LibraryProject from "../Component/MyWorkComponents/LibraryProject";
import TesColumn from "../Component/MyWorkComponents/TesColumn";

const Mywork = () => {
  return (
    <div className="md:px-[100px] px-[24px]  ">
      <Library />
      <LibraryProject />
    </div>
  );
};

export default Mywork;
