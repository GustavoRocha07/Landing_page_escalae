import { useState } from "react";
export interface Pelada {
  id: string;
  name: string;
  venue: string;
  date: string;
  cost: number;
}
const STORAGE_KEY = "escalae-react-peladas";
function loadPeladas(): Pelada[] {
  try {
    const value: unknown = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]",
    );
    if (!Array.isArray(value)) return [];
    return value.filter(
      (p): p is Pelada =>
        Boolean(p) &&
        typeof p.id === "string" &&
        typeof p.name === "string" &&
        typeof p.venue === "string" &&
        typeof p.date === "string" &&
        Number.isFinite(p.cost),
    );
  } catch {
    return [];
  }
}
export function usePeladas() {
  const [peladas, setPeladas] = useState<Pelada[]>(loadPeladas);
  function addPelada(data: Omit<Pelada, "id">) {
    const next = [...peladas, { ...data, id: crypto.randomUUID() }];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPeladas(next);
  }
  function clearPeladas() {
    localStorage.removeItem(STORAGE_KEY);
    setPeladas([]);
  }
  return { peladas, addPelada, clearPeladas };
}
