
import states from "../../api/states.json";
import { NavLink } from "react-router-dom";

const Territories = () => {
  states.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="flex flex-col items-center p-4 my-4">
      <p className="text-center text-[4rem] font-[Kalam] mx-4 mt-4 drop-shadow-md dark:text-white">
        Territories
      </p>
      <div className="flex flex-wrap justify-center items-center m-auto my-5 gap-4 max-w-[80%] dark:text-white drop-shadow-lg">
        {states.map((state, index) => {
          return (
            <NavLink key={state.code} to={`s&ut/${state.code}`}>
              <span className="capitalize border-0 border-orange-600 rounded-lg px-2 py-1 w-fit drop-shadow-xs cursor-pointer hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-colors duration-200 ease-in-out">
                <span className="text-orange-600">{index + 1}.</span>{" "}
                {state.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Territories;
