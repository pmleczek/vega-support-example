import appStateAtom from "@/atoms/appStateAtom";
import { useAtom } from "jotai";
import { useCallback } from "react";

const useAppState = () => {
  const [atom, setAtom] = useAtom(appStateAtom);

  const setLoading = useCallback(
    (loading: boolean) => {
      setAtom((prev) => ({
        ...prev,
        loading,
      }));
    },
    [setAtom]
  );

  return {
    loading: atom.loading,
    setLoading,
  };
};

export default useAppState;
