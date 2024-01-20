import React from "react";
import Card from "./Card";

const Workon = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <Card heading="Literasia" desc="Lorem ipsum dolor sit amet consectetur. Semper ut nec vitae eget malesuada orci adipiscing." gambar="https://andika1412.github.io/Andikaputra/Images/Literasia1.png" />
        <Card heading="Titikbaca Digital" desc="Lorem ipsum dolor sit amet consectetur. Semper ut nec vitae eget malesuada orci adipiscing." gambar="https://andika1412.github.io/Andikaputra/Images/Titikbaca.png" />
        <Card heading="Bisajadicreative" desc="Lorem ipsum dolor sit amet consectetur. Semper ut nec vitae eget malesuada orci adipiscing." gambar="https://andika1412.github.io/Andikaputra/Images/Bisajadi.png" />
      </div>
    </div>
  );
};

export default Workon;
