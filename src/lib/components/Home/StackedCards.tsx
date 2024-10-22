const StackedCards = () => {
  return (
    <div className="w-full px-3 sm:px-20 flex flex-col gap-10 mt-10">
      <div className="bg-slate-700 h-[80vh] sticky top-10 rounded-xl p-5">
        Card 1
      </div>
      <div className="bg-slate-700 h-[80vh] sticky top-10 rounded-xl p-5">
        Card 2
      </div>
      <div className="bg-slate-700 h-[80vh] sticky top-10 rounded-xl p-5">
        Card 3
      </div>
    </div>
  );
};

export default StackedCards;
