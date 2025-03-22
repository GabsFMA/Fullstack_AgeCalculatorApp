import Dmy from "./components/dmy";

function App() {
  const DMY = [
    {
      name: "DAY",
      placeholder: "DD",
    },
    {
      name: "MONTH",
      placeholder: "MM",
    },
    {
      name: "YEAR",
      placeholder: "YYYY",
    },
  ];

  return (
    <div className="bg-[#fff] w-[900px] h-[600px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[192px]">
      <div className="m-16 flex flex-col gap-8">
        <div className="flex flex-row gap-8 w-full">
          {DMY.map((item, index) => {
            return (
              <Dmy
                key={index}
                name={item.name}
                placeholder={item.placeholder}
              />
            );
          })}
        </div>
        <div className="relative">
          <hr className="border-[#6F6E6E]" />
          <div className="absolute top-1/2 right-0 flex items-center justify-center transform -translate-y-1/2">
            <img
              src="images/icon-arrow.svg"
              alt="icon-arrow"
              className="bg-[#C64CFF] rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
