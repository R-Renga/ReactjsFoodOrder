import { useState } from "react";

const Section = ({
  user,
  description,
  Visible,
  setOfIsVisible,
  hideSection,
}) => {
  console.log(Visible);
  console.log(setOfIsVisible);
  return (
    <div className="p-2 m-2 border border-black">
      <h1 className="text-xl font-bold">{user}</h1>
      {Visible ? (
        <>
          {" "}
          <button
            onClick={() => {
              hideSection("");
            }}
            className="underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => {
            setOfIsVisible();
          }}
          className="underline"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible, "parent");
  console.log(setIsVisible, "parent");
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 m-2">Instamart</h1>
      <Section
        user={"Career"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        Visible={isVisible === "Career"}
        setOfIsVisible={() => setIsVisible("Career")}
        hideSection={() => setIsVisible("")}
      />
      <Section
        user={"Team"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        Visible={isVisible === "Team"}
        setOfIsVisible={() => setIsVisible("Team")}
        hideSection={() => setIsVisible("")}
      />
    </div>
  );
};

export default Instamart;
