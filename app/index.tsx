import { BottomBar } from "@/components";
import type { IndexState } from "@/types";
import { Color } from "@/utils/style";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [state, setState] = useState<IndexState>({
    loading: false,
    response: "",
  });

  const handleUpdateState = useCallback((update: Partial<IndexState>) => {
    setState((prev) => ({ ...prev, ...update }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {state.loading || !state.response ? (
          <Text style={styles.response}>
            {state.loading ? "AI is thinking..." : "Ask something!"}
          </Text>
        ) : (
          <ScrollView>
            <Text style={styles.response}>{state.response}</Text>
          </ScrollView>
        )}
      </View>
      <BottomBar setIndexState={handleUpdateState} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0a0a0a",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  response: {
    color: Color.foregroundPrimary,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 64,
  },
});
