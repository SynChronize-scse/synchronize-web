import { useEffect } from "react";
import { useNavigation } from "src/navigation/NavigationContext";

const NotFound = () => {
  const { goto } = useNavigation();

  useEffect(() => {
    document.title = "404 | Not Found";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-400 text-white">
      <h1 className="text-primary-400 text-xl font-[AdieuRegular]">
        404 | Not Found
      </h1>

      <button
        onClick={() => goto("/")}
        className="text-sm px-3 py-2 hover:underline"
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
