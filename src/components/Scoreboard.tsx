import { useEffect, useReducer } from "react";
interface GameState {
  seconds: number;
  running: boolean;
  match: number;
  scores: [number, number];
  fouls: number;
}
type GameAction =
  | { type: "tick" | "toggle" | "foul" | "end" }
  | { type: "goal"; side: 0 | 1 };
const initialState: GameState = {
  seconds: 462,
  running: false,
  match: 3,
  scores: [2, 1],
  fouls: 0,
};
function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "toggle":
      return { ...state, running: state.seconds < 600 && !state.running };
    case "tick": {
      const seconds = Math.min(state.seconds + 1, 600);
      return { ...state, seconds, running: seconds < 600 };
    }
    case "foul":
      return { ...state, fouls: state.fouls + 1 };
    case "goal": {
      const scores: [number, number] = [...state.scores];
      scores[action.side]++;
      return { ...state, scores };
    }
    case "end":
      return {
        seconds: 0,
        running: false,
        match: state.match === 8 ? 1 : state.match + 1,
        scores: [0, 0],
        fouls: 0,
      };
  }
}
const teams = [
  {
    name: "COLETE VERDE",
    average: "4.2",
    players: [
      ["01", "Danilo (Goleiro)", "GOL", "4.4 ★"],
      ["08", "Lucas “Canhoto”", "MEI", "⚽ 4.6 ★"],
      ["10", "Thiago Silva", "ZAG", "4.1 ★"],
      ["09", "Rodrigo Broa", "ATA", "⚽ 3.9 ★"],
    ],
  },
  {
    name: "COLETE PRETO",
    average: "4.1",
    players: [
      ["01", "Marcão Muralha", "GOL", "4.3 ★"],
      ["05", "Rafael Volante", "MEI", "4.0 ★"],
      ["07", "Felipe Drible", "ATA", "⚽ 4.2 ★"],
      ["04", "Gustavo Trator", "ZAG", "4.0 ★"],
    ],
  },
];
export function Scoreboard({ notify }: { notify: (message: string) => void }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (!state.running) return;
    const interval = window.setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => window.clearInterval(interval);
  }, [state.running]);
  const time = `${String(Math.floor(state.seconds / 60)).padStart(2, "0")}:${String(state.seconds % 60).padStart(2, "0")}`;
  const renderTeam = (side: 0 | 1) => {
    const team = teams[side];
    return (
      <div className={`team ${side === 0 ? "green-team" : ""}`}>
        <div className="team-heading">
          <strong className="kit">{team.name}</strong>
          <small>Média {team.average} ★</small>
          <b className="score" aria-label={`Placar ${team.name}`}>
            {state.scores[side]}
          </b>
        </div>
        <div className="roster">
          {team.players.map(([number, name, position, rating]) => (
            <div key={number}>
              <em>{number}</em>
              {name}
              <small>{position}</small>
              <span>{rating}</span>
            </div>
          ))}
        </div>
        <button
          className="goal"
          aria-label={`Marcar gol para ${team.name}`}
          onClick={() => {
            dispatch({ type: "goal", side });
            notify(`Gol do ${team.name.toLowerCase()}!`);
          }}
        >
          + Marcar gol
        </button>
      </div>
    );
  };
  return (
    <div className="scoreboard wrap" id="mesa">
      <div className="board-top">
        <strong>
          <i className="live-dot" /> MESA AO VIVO{" "}
          <span className="muted">•</span> JOGO{" "}
          {String(state.match).padStart(2, "0")} DE 08
        </strong>
        <small className="tag">Quadra 02 · Society</small>
        <span className="demo-tag">DEMONSTRAÇÃO</span>
        <div className="timer" aria-label="Tempo de jogo">
          ◴ {time}
        </div>
        <span className="time-label">
          {state.seconds === 600 ? "TEMPO ENCERRADO" : "TEMPO CORRIDO"}
        </span>
      </div>
      <div className="match-grid">
        {renderTeam(0)}
        <div className="versus">
          VS
          <small>
            DISPERSÃO
            <br />
            <b>±0.05 pts</b>
          </small>
        </div>
        {renderTeam(1)}
      </div>
      <div className="board-bottom">
        <small>
          <b>◷</b> Próximo time na fila:{" "}
          <strong>Colete Branco (Aguardando fim do Jogo {state.match})</strong>
        </small>
        <div>
          <button
            className="secondary"
            disabled={state.seconds >= 600}
            onClick={() => dispatch({ type: "toggle" })}
          >
            {state.running ? "Ⅱ Pausar" : "▶ Iniciar"}
          </button>
          <button
            className="secondary"
            onClick={() => dispatch({ type: "foul" })}
          >
            Falta coletiva {state.fouls}
          </button>
          <button
            className="primary"
            onClick={() => {
              notify(
                `Jogo encerrado: ${state.scores[0]} × ${state.scores[1]}. Mesa pronta para a próxima partida.`,
              );
              dispatch({ type: "end" });
            }}
          >
            ⚑ Encerrar Jogo
          </button>
        </div>
      </div>
      <p className="board-hint">
        Teste os controles. Os dados e a fila desta mesa são ilustrativos.
      </p>
    </div>
  );
}
