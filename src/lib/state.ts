/* eslint-disable react-hooks/rules-of-hooks */
import { type SetState } from "./types";
import { useState } from "react";

/**
 * Interface for a React object state.
 * @param T The type of the state.
 * @property value The value of the state.
 * @property set The function to set the state.
 * @returns A React object state.
 */
export interface ReactObjectState<T> {
  value: T;
  updated: boolean;
  set: (value: T) => void;
  // private readonly _set: SetState<T>;
  // private readonly setUpdated: SetState<boolean>;
}

/**
 * Object state is a class so that we can pass references to
 * components instead of creating copies, as well as instead of
 * having to pass the "set..." function and the variable itself
 * separately.
 * @param T The type of the state.
 * @property value The value of the state.
 * @property set The function to set the state.
 * @returns A React object state.
 */
export class ObjectState<T> implements ReactObjectState<T> {
  public readonly value: T;
  private readonly _set: SetState<T>;

  public readonly updated: boolean = false;
  private readonly _setUpdated: SetState<boolean> = () => {
    return;
  };

  public readonly set = (value: T) => {
    this._set(value);
    if (!this.updated) this._setUpdated(true);
  };

  constructor(initialValue: T) {
    const [value, _set] = useState<T>(initialValue);
    this.value = value;
    this._set = _set;

    const [updated, _setUpdated] = useState<boolean>(false);
    this.updated = updated;
    this._setUpdated = _setUpdated;
  }
}
