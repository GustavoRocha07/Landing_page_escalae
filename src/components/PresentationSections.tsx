export function PresentationSections({ onCreate }: { onCreate: () => void }) {
  return (
    <>
      <section className="section comparison" id="sorteador">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">FIM DAS RESENHAS NEGATIVAS</span>
            <h2>
              A diferença brutal entre a pelada no
              <br /> WhatsApp e o Escalaê
            </h2>
            <p>
              Quem organiza pelada toda semana conhece a dor de cabeça. Mais
              organização para o<br className="desktop" /> capitão e mais tempo
              para o que interessa: jogar bola.
            </p>
          </div>
          <div className="comparison-grid">
            <article className="panel chaos">
              <div className="panel-title">
                <span className="icon red">⚠</span>
                <div>
                  <h3>O Caos da Lista no WhatsApp</h3>
                  <small>Tensão constante e desgaste com amigos</small>
                </div>
              </div>
              <div className="issue">
                <i>×</i>
                <div>
                  <strong>Panela descarada no sorteio:</strong>
                  <p>
                    Dois capitães escolhem os melhores amigos, deixando o outro
                    time fadado à derrota.
                  </p>
                </div>
              </div>
              <div className="issue">
                <i>×</i>
                <div>
                  <strong>O famoso fura-fila do vestiário:</strong>
                  <p>
                    Quem chega atrasado entra direto no jogo enquanto o pontual
                    fica de fora.
                  </p>
                </div>
              </div>
              <div className="issue">
                <i>×</i>
                <div>
                  <strong>Discussão de rodízio e tempo:</strong>
                  <p>
                    Ninguém marca o tempo exato e ninguém lembra quem deve sair
                    da quadra.
                  </p>
                </div>
              </div>
              <div className="issue">
                <i>×</i>
                <div>
                  <strong>Prejuízo financeiro e confusão no Pix:</strong>
                  <p>
                    O organizador tem que cobrar um por um e cobrir o valor do
                    aluguel do próprio bolso.
                  </p>
                </div>
              </div>
            </article>
            <article className="panel order">
              <div className="panel-title">
                <span className="icon">✦</span>
                <div>
                  <h3>A Ordem Tática com Escalaê</h3>
                  <small>Organização clara do primeiro ao último jogo</small>
                </div>
              </div>
              <div className="issue">
                <i>⊙</i>
                <div>
                  <strong>Sorteador Anti-Panela por Nota &amp; Posição:</strong>
                  <p>
                    Uma proposta de equipes com equilíbrio tático e divisão
                    transparente dos jogadores.
                  </p>
                </div>
              </div>
              <div className="issue">
                <i>⊙</i>
                <div>
                  <strong>Regra de Chegada:</strong>
                  <p>
                    Check-in na entrada da quadra. Os primeiros a chegar
                    garantem lugar no sorteio inicial.
                  </p>
                </div>
              </div>
              <div className="issue">
                <i>⊙</i>
                <div>
                  <strong>Mesa Digital com Rodízio:</strong>
                  <p>
                    Cronômetro, registro dos gols e fila de times em um só
                    lugar.
                  </p>
                </div>
              </div>
              <div className="issue">
                <i>⊙</i>
                <div>
                  <strong>Rateio Transparente:</strong>
                  <p>
                    Divisão do custo por participante para todo mundo saber
                    quanto precisa pagar.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section" id="funcionalidades">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">DA LISTA À BOLA ROLANDO</span>
            <h2>
              Construído para a realidade da quadra
              <br /> brasileira
            </h2>
            <p>
              Uma experiência pensada para organizar a pelada de Futsal e
              Society.
              <br /> Conheça os recursos previstos para o Escalaê.
            </p>
          </div>
          <div className="features">
            <article className="panel">
              <span className="icon">⚖</span>
              <h3>1. Sorteador Tático Anti-Panela</h3>
              <p>
                Monte equipes considerando nota técnica e posição. Menos
                favoritismo, mais equilíbrio e disputa dentro de campo.
              </p>
              <footer>
                Equilíbrio tático <span>Sem panelinhas</span>
              </footer>
            </article>
            <article className="panel">
              <span className="icon yellow">◷</span>
              <h3>2. Regra dos 10 Primeiros</h3>
              <p>
                Quem chega primeiro tem prioridade. Os 10 primeiros presentes
                entram no sorteio e os demais formam a fila por ordem de
                chegada.
              </p>
              <footer className="yellow">
                Check-in presencial <span>Chegada registrada</span>
              </footer>
            </article>
            <article className="panel">
              <span className="icon">▣</span>
              <h3>3. Mesa Ao Vivo &amp; Cronômetro</h3>
              <p>
                Controle o tempo, registre os gols e acompanhe o placar na borda
                da quadra. Tudo em uma tela pensada também para o celular.
              </p>
              <footer>
                Mesa digital <span>Gols em tempo real</span>
              </footer>
            </article>
            <article className="panel">
              <span className="icon white">⇄</span>
              <h3>4. Rodízio Organizado</h3>
              <p>
                Com dois times esperando, saem os dois da quadra. Com um na
                espera, a rotação segue o resultado e as regras da pelada.
              </p>
              <footer>
                Fila de times <span>Zero confusão</span>
              </footer>
            </article>
            <article className="panel">
              <span className="icon yellow">▤</span>
              <h3>5. Rateio &amp; Prestação de Contas</h3>
              <p>
                Informe os custos da quadra e divida o valor entre os
                participantes. Acompanhe os pagamentos com clareza para todos.
              </p>
              <footer className="yellow">
                Custo por pessoa <span>Contas claras</span>
              </footer>
            </article>
            <article className="panel">
              <span className="icon">♧</span>
              <h3>6. Resumo para WhatsApp</h3>
              <p>
                Deixe a resenha no grupo e a organização no Escalaê. Compartilhe
                informações da pelada, lista de jogadores e resultados.
              </p>
              <footer>
                Pronto para compartilhar <span>Mais praticidade</span>
              </footer>
            </article>
          </div>
        </div>
      </section>
      <section className="section steps-section" id="como-funciona">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">SIMPLES E RÁPIDO</span>
            <h2>
              Como funciona uma noite de pelada com o<br /> Escalaê
            </h2>
            <p>Da confirmação no grupo à resenha pós-jogo em 5 etapas.</p>
          </div>
          <div className="steps">
            <article>
              <b>01</b>
              <h3>Crie o Grupo</h3>
              <p>Defina dia, quadra, horário, tempo de jogo e valor.</p>
              <small>PASSO INICIAL</small>
            </article>
            <article>
              <b>02</b>
              <h3>Confirmação</h3>
              <p>Jogadores confirmam presença pelo link da pelada.</p>
              <small>QUÓRUM GARANTIDO</small>
            </article>
            <article>
              <b>03</b>
              <h3>Check-in Quadra</h3>
              <p>
                Registre quem chegou. Os 10 primeiros formam os times 1 e 2.
              </p>
              <small>ORDEM DE CHEGADA</small>
            </article>
            <article>
              <b>04</b>
              <h3>Mesa Digital</h3>
              <p>Cronômetro, gols e rodízio para acompanhar cada partida.</p>
              <small>BOLA ROLANDO</small>
            </article>
            <article>
              <b>05</b>
              <h3>Resenha &amp; Rateio</h3>
              <p>Confira os resultados e divida as contas da noite.</p>
              <small className="green">TUDO RESOLVIDO</small>
            </article>
          </div>
        </div>
      </section>
      <section className="section pilot">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow yellow">
              A PRÓXIMA RESENHA COMEÇA AQUI
            </span>
            <h2>
              Menos trabalho para quem organiza.
              <br /> Mais futebol para todo mundo.
            </h2>
            <p>O Escalaê está começando. Faça parte da primeira versão.</p>
          </div>
          <div className="pilot-grid">
            <div className="panel">
              <span className="icon">♟</span>
              <h3>Para o capitão</h3>
              <p>
                Presenças, fila e custos reunidos. Organize a noite sem se
                perder nas mensagens.
              </p>
            </div>
            <div className="panel">
              <span className="icon yellow">⚽</span>
              <h3>Para quem joga</h3>
              <p>
                Confirme presença e acompanhe a pelada. Chegue, faça o check-in
                e entre no jogo.
              </p>
            </div>
            <div className="panel">
              <span className="icon">◎</span>
              <h3>Para a sua resenha</h3>
              <p>
                Regras claras e uma organização que respeita a dinâmica do seu
                grupo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section faq" id="duvidas">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">TIRE SUAS DÚVIDAS</span>
            <h2>Perguntas Frequentes</h2>
            <p>
              Tudo o que você e os atletas do seu grupo precisam saber antes do
              próximo jogo.
            </p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>O Escalaê é realmente grátis?</summary>
              <p>
                A proposta da fase piloto é ser gratuita para organizadores e
                jogadores. Nesta página, você pode experimentar a demonstração
                sem cartão de crédito.
              </p>
            </details>
            <details>
              <summary>Como funciona a nota técnica dos jogadores?</summary>
              <p>
                A proposta é que o administrador defina a nota e a posição de
                cada jogador para ajudar a montar equipes equilibradas. Esse
                recurso será validado durante o piloto.
              </p>
            </details>
            <details>
              <summary>
                E se algum jogador esquecer o celular na hora do check-in?
              </summary>
              <p>
                O organizador poderá registrar a chegada do jogador. A
                prioridade da fila deve seguir a ordem de chegada presencial na
                quadra.
              </p>
            </details>
            <details>
              <summary>Precisa baixar na loja de aplicativos?</summary>
              <p>
                Não. O Escalaê está sendo desenvolvido para a web e pode ser
                acessado no navegador do celular, tablet ou computador.
              </p>
            </details>
            <details>
              <summary>Já posso criar uma pelada por aqui?</summary>
              <p>
                Esta primeira página é um protótipo navegável. Você pode criar
                uma pelada de demonstração salva neste navegador e experimentar
                o placar. Cadastro de contas e participação de outros jogadores
                ainda serão conectados.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="section final-cta">
        <div className="wrap">
          <div className="badge green">⚑   VEM PARA O PILOTO DO ESCALAÊ</div>
          <h2>Pronto para elevar o nível da sua pelada?</h2>
          <p>
            Troque a lista confusa por uma experiência organizada.
            <br /> Do vestiário à resenha, todo mundo no mesmo time.
          </p>
          <button className="primary large" onClick={onCreate}>
            ⊕   Criar Pelada Grátis Agora
          </button>
          <div className="cta-notes">
            <span>✓ Sem cartão de crédito</span>
            <span>✓ Direto no navegador</span>
          </div>
        </div>
      </section>
    </>
  );
}
