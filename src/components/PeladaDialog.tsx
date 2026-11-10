import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Pelada } from "../hooks/usePeladas";
export type DialogView = "criar" | "entrar" | "privacidade";
interface Props {
  view: DialogView | null;
  onClose: () => void;
  onChangeView: (view: DialogView) => void;
  peladas: Pelada[];
  onCreate: (data: Omit<Pelada, "id">) => void;
  onClear: () => void;
  notify: (message: string) => void;
}
export function PeladaDialog({
  view,
  onClose,
  onChangeView,
  peladas,
  onCreate,
  onClear,
  notify,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (view && !dialog.open) dialog.showModal();
    else if (!view && dialog.open) dialog.close();
  }, [view]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const venue = String(data.get("venue") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const cost = Number(data.get("cost"));
    if (
      !name ||
      !venue ||
      !Number.isFinite(new Date(date).getTime()) ||
      !Number.isFinite(cost) ||
      cost < 0
    ) {
      setError("Preencha o nome, o local, a data e um valor válido.");
      return;
    }
    try {
      onCreate({ name, venue, date, cost });
      setError("");
      onChangeView("entrar");
      notify("Pelada salva neste navegador!");
    } catch {
      setError(
        "O navegador não permitiu salvar. Verifique o armazenamento disponível.",
      );
    }
  }
  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) {
          const bounds = ref.current.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            onClose();
        }
      }}
      aria-labelledby="dialog-title"
    >
      <button className="close" aria-label="Fechar" onClick={onClose}>
        ×
      </button>
      {view === "criar" && (
        <>
          <span className="eyebrow">SUA PRÓXIMA PELADA</span>
          <h2 id="dialog-title">Vamos colocar a bola pra rolar?</h2>
          <p>
            Crie sua pelada de demonstração. Os dados ficam salvos somente neste
            navegador.
          </p>
          <form onSubmit={submit}>
            <label>
              Nome da pelada
              <input
                name="name"
                required
                maxLength={70}
                placeholder="Ex.: Resenha de quinta"
              />
            </label>
            <label>
              Quadra ou local
              <input
                name="venue"
                required
                maxLength={100}
                placeholder="Ex.: Arena do bairro"
              />
            </label>
            <label>
              Data e horário
              <input name="date" type="datetime-local" required />
            </label>
            <label>
              Valor da quadra (R$)
              <input
                name="cost"
                type="number"
                min="0"
                step="0.01"
                required
                placeholder="200,00"
              />
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="primary" type="submit">
              Criar pelada de demonstração →
            </button>
          </form>
          <div className="local-note">
            Protótipo · sem cadastro de conta ou convite de jogadores nesta
            versão.
          </div>
        </>
      )}
      {view === "entrar" && (
        <>
          <span className="eyebrow">DEMONSTRAÇÃO LOCAL</span>
          <h2 id="dialog-title">Minhas peladas</h2>
          <p>
            Suas peladas salvas neste navegador. O acesso com conta será
            conectado em uma próxima etapa.
          </p>
          {peladas.length === 0 ? (
            <div className="saved-card">
              Você ainda não criou uma pelada de demonstração.
            </div>
          ) : (
            peladas.map((pelada) => (
              <article className="saved-card" key={pelada.id}>
                <h3>{pelada.name}</h3>
                <p>
                  {pelada.venue}
                  <br />
                  {new Date(pelada.date).toLocaleString("pt-BR")}
                  <br />
                  Quadra:{" "}
                  {pelada.cost.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </article>
            ))
          )}
          <button
            className="primary"
            onClick={() => {
              setError("");
              onChangeView("criar");
            }}
          >
            + Criar outra pelada
          </button>
        </>
      )}
      {view === "privacidade" && (
        <>
          <h2 id="dialog-title">Privacidade nesta demonstração</h2>
          <p>
            Nome, local, data e valor são armazenados somente neste navegador. O
            formulário não envia os dados para um cadastro de jogadores.
          </p>
          <p>
            Você pode apagar as peladas salvas pelo botão abaixo ou pelas
            configurações do navegador.
          </p>
          <button
            className="primary"
            onClick={() => {
              try {
                onClear();
                notify("Peladas locais apagadas.");
                onClose();
              } catch {
                notify("Não foi possível apagar os dados neste navegador.");
              }
            }}
          >
            Apagar minhas peladas salvas
          </button>
        </>
      )}
    </dialog>
  );
}
