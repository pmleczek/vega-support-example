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

  const setStreaming = useCallback(
    (streaming: boolean) => {
      setAtom((prev) => ({
        ...prev,
        streaming,
      }));
    },
    [setAtom]
  );

  return {
    loading: atom.loading,
    setLoading,
    streaming: atom.streaming,
    setStreaming,
  };
};

export default useAppState;
