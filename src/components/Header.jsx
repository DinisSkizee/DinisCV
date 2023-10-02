export const Header = () => {
  const scrollToBlog = () => {
    const blogSection = document.getElementById("blog");
    const rect = blogSection.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop - 200;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };
  return (
    <div className="flex w-full justify-between px-5 py-9 fixed bg-bgblue z-40 lg:px-12 items-center">
      <div className="flex justify-start pl-4 text-white gap-2 leading-tight md:text-xl items-center">
        <div>
          DINIS
          <br />
          SILVA
        </div>
        <span className="font-extrabold">{`</>`}</span>
      </div>
      <div className="lg:justify-center gap-4 hidden lg:flex lg:text-lg lg:text-white">
        <div className="hover:text-greeny" onClick={scrollToBlog}>
          .about()
        </div>
        <div className="hover:text-greeny">.resume()</div>
        <div className="hover:text-greeny">.projects()</div>
        <div className="hover:text-greeny">.contact()</div>
        <div className="hover:text-greeny">.blog()</div>
      </div>
      <div className="flex cursor-pointer items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffffff"
          aria-hidden="true"
          className="h-6 w-6 rotate-0 scale-100 text-foreground transition-all dark:-rotate-90 dark:scale-0 md:h-8 md:w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffffff"
          aria-hidden="true"
          className="absolute h-6 w-6 rotate-90 scale-0 text-foreground transition-all dark:rotate-0 dark:scale-100 md:h-8 md:w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
