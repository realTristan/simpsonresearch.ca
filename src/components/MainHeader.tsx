import { LIGHT_SPEED_TIMEOUT } from "@/lib/scene/constants";
import { ObjectState } from "@/lib/state";
import { LightSpeedStateObject, LightSpeedState } from "@/lib/types";

/**
 * Main Title Props
 */
interface MainTitleProps {
  lightSpeedState: ObjectState<LightSpeedStateObject>;
  showProjects: ObjectState<boolean>;
}

/**
 * Main Title
 * @param props
 * @returns JSX.Element
 */
export default function MainTitle(props: MainTitleProps): JSX.Element {
  return (
    <div id="main-title" className="flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl font-black tracking-wider text-white">
        SIMPSON RESEARCH
      </h1>
      <p className="mt-4 text-center text-lg font-light tracking-widest text-white">
        Innovating passion.
      </p>
      <button
        onClick={() => {
          // Enable light speed
          props.lightSpeedState.set({
            ...props.lightSpeedState,
            lightSpeed: LightSpeedState.FORWARD,
          });

          // Add the fade-out animation to main-title classname
          const mainTitle = document.getElementById("main-title");
          if (mainTitle) mainTitle.className += " fade-out";

          // Show the projects
          setTimeout(() => props.showProjects.set(true), LIGHT_SPEED_TIMEOUT);
        }}
        className="mt-12 rounded-lg border border-white px-10 py-3 text-lg font-light tracking-widest text-white backdrop-blur-sm duration-700 ease-in-out hover:bg-white hover:tracking-[0.2em] hover:text-black"
      >
        ENGAGE LIGHT SPEED
      </button>
    </div>
  );
}
