export const LeftSider = () => {
  return (
    <div className="flex-col hidden w-4 gap-4 lg:flex fixed bottom-0 lg:left-24">
      <a
        className="text-sm -rotate-90 text-white"
        href="mailto:dinissilvauk@gmail.com"
      >
        dinissilvauk@gmail.com
      </a>
      <div className="ml-2 h-16 border-l border-foreground"></div>
    </div>
  );
};
