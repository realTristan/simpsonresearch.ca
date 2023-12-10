import { Dispatch, SetStateAction } from "react";
import { Object3D, Object3DEventMap } from "three";

export type SetState<T> = Dispatch<SetStateAction<T>>;

/**
 * The star interface
 */
export interface Star extends Object3D<Object3DEventMap> {
  velocity: number;
}

export enum LightSpeedState {
  DEFAULT,
  FORWARD,
  BACKWARD,
}

export interface LightSpeedStateObject {
  lightSpeed: LightSpeedState;
}
