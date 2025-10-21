import { atom } from "jotai";
import type { AppStateAtomType } from "./types";

const appStateAtom = atom<AppStateAtomType>({
  loading: false,
  streaming: false,
});

export default appStateAtom;
