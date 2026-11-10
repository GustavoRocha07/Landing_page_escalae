import { useEffect, useState } from "react";
import { Scoreboard } from "./components/Scoreboard";
import { PresentationSections } from "./components/PresentationSections";
import { PeladaDialog, type DialogView } from "./components/PeladaDialog";
import { usePeladas } from "./hooks/usePeladas";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogView, setDialogView] = useState<DialogView | null>(null);
  const [toast, setToast] = useState<{ message: string; id: number } | null>(
    null,
  );
  const { peladas, addPelada, clearPeladas } = usePeladas();
  function notify(message: string) {
    setToast({ message, id: Date.now() });
  }
  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [toast]);
  return (
    <>
      <header>
        <a href="#inicio" aria-label="Escalaê — início">
          <img className="logo" src="assets/logo.png" alt="Escalaê" />
        </a>
        <nav
          id="nav"
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#sorteador">Sorteador Anti-Panela</a>
          <a href="#mesa">Mesa Ao Vivo</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas Frequentes</a>
        </nav>
        <div className="header-actions">
          <button className="outline" onClick={() => setDialogView("entrar")}>
            Entrar
          </button>
          <button className="primary" onClick={() => setDialogView("criar")}>
            Criar Pelada Grátis <span>⚽</span>
          </button>
        </div>
        <button
          className="menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="pitch" aria-hidden="true"></div>
          <div className="hero-content">
            <div className="badge yellow">
              ϟ   O FIM DAS BRIGAS NA HORA DE MONTAR OS TIMES
            </div>
            <h1>
              Organize sua pelada em
              <br /> minutos.
              <br />
              <span>Sem panela, sem atrasos</span> e com
              <br /> rodízio 100% justo.
            </h1>
            <p className="lead">
              Do check-in presencial no vestiário ao sorteador balanceado por
              nota e posição,
              <br className="desktop" /> mesa com cronômetro ao vivo e divisão
              de custos transparente. A ferramenta que
              <br className="desktop" /> todo capitão de respeito precisava.
            </p>
            <div className="actions">
              <button
                className="primary large"
                onClick={() => setDialogView("criar")}
              >
                ⚽   Comece a Usar Grátis
              </button>
              <a className="button large secondary" href="#mesa" id="demo-link">
                <span className="play">▶</span> Ver Demonstração Interativa
              </a>
            </div>
            <div className="benefits">
              <span>
                <b>♟</b> Feito para a pelada brasileira
              </span>
              <span>
                <b className="yellow">✦</b> Mais jogo, menos discussão
              </span>
              <span>
                <b className="yellow">★</b> Piloto gratuito
              </span>
            </div>
          </div>
          <Scoreboard notify={notify} />
        </section>
        <PresentationSections onCreate={() => setDialogView("criar")} />
      </main>
      <footer className="site-footer">
        <a href="#inicio">
          <img src="assets/logo.png" alt="Escalaê" className="logo" />
        </a>
        <small>
          © 2026 Escalaê. Gestão de peladas e futebol amador.
          <br />
          Protótipo de apresentação · funcionalidades em desenvolvimento.
        </small>
        <a href="#como-funciona">Como funciona</a>
        <a href="#duvidas">Dúvidas frequentes</a>
        <button
          className="text-button"
          onClick={() => setDialogView("privacidade")}
        >
          Privacidade
        </button>
      </footer>
      <PeladaDialog
        view={dialogView}
        onClose={() => setDialogView(null)}
        onChangeView={setDialogView}
        peladas={peladas}
        onCreate={addPelada}
        onClear={clearPeladas}
        notify={notify}
      />
      <div
        id="toast"
        className={toast ? "visible" : ""}
        role="status"
        aria-live="polite"
      >
        {toast?.message}
      </div>
    </>
  );
}
