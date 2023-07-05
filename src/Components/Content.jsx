import React from "react";

const Content = ({ forms }) => {
  const renderValues = () => {
    const valueDivs = forms.map((form, index) => {
      const { platform, link } = form;
      let backgroundColor = "";

      if (platform === "github" || link.includes("https://github.com/")) {
        backgroundColor = "bg-black";
      } else if (
        platform === "youtube" ||
        link.includes("https://youtube.com/")
      ) {
        backgroundColor = "bg-red-600";
      } else if (
        platform === "linkedin" ||
        link.includes("https://linkedin.com/")
      ) {
        backgroundColor = "bg-blue-900";
      } else if (
        platform === "facebook" ||
        link.includes("https://facebook.com/")
      ) {
        backgroundColor = "bg-yellow-500";
      } else if (
        platform === "twitter" ||
        link.includes("https://twitter.com/")
      ) {
        backgroundColor = "bg-blue-400";
      }

      return (
        <div
          key={index}
          className={`
          rounded-lg p-1 h-6 
          flex 
          items-center 
          justify-center 
          ${backgroundColor}`}>
          <p className="text-white">{platform}</p>
        </div>
      );
    });

    const emptyDivs = Array.from(
      { length: 5 - valueDivs.length },
       (_, index) => (
      <div key={`empty-${index}`} className="bg-empty rounded-lg p-1 h-6"></div>
    ));

    return [...valueDivs, ...emptyDivs];
  };

  return (
    <aside className="
    max-h-[600px] min-h-[600px] min-w-[300px] 
    bg-iphone-image bg-no-repeat bg-center bg-cover 
    relative flex flex-col justify-center 
    items-center bg-white rounded-lg m-2">
      
      <div className="mb-3 rounded-full bg-empty w-[100px] h-[100px]">
        Profile Picture
      </div>

      <div className="mb-4 bg-empty rounded-lg p-1">Name</div>
      <div className=" bg-empty rounded-lg p-1">Email</div>
      <div className="w-[200px] mt-2 mb-4 flex flex-col gap-2 text-white rounded-lg">
        {renderValues()}
      </div>
    </aside>
  );
};

export default Content;
