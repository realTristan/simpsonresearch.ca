"use client";

/**
 * Main Header
 * @param props
 * @returns JSX.Element
 */
interface MainHeaderProps {
  onClick: () => void;
}
export default function MainHeader(props: MainHeaderProps): JSX.Element {
  return (
    <div id="main-header" className="flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl font-black tracking-wider text-white">
        SIMPSON RESEARCH
      </h1>
      <p className="mt-4 text-center text-lg font-light tracking-widest text-white">
        Innovating solutions.
      </p>
      <button
        onClick={props.onClick}
        className="mt-12 rounded-lg border border-white px-10 py-3 text-lg font-light tracking-widest text-white backdrop-blur-sm duration-700 ease-in-out hover:bg-white hover:tracking-[0.2em] hover:text-black"
      >
        ENGAGE LIGHT SPEED
      </button>
    </div>
  );
}
