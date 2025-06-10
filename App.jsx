import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import educaOnLogo from "./assets/educa-on-logo.png";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Header */}
      <header className="bg-white shadow-sm sticky-top py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={educaOnLogo} alt="Educa-On" height="40" />
          <nav className="d-none d-md-flex gap-4">
            <a href="#funcionalidades" className="text-decoration-none text-dark">Funcionalidades</a>
            <a href="#acessibilidade" className="text-decoration-none text-dark">Acessibilidade</a>
            <a href="#depoimentos" className="text-decoration-none text-dark">Depoimentos</a>
          </nav>
          <button className="btn btn-outline-primary d-none d-md-block">Login</button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Educação acessível em qualquer lugar</h1>
          <p className="lead">Ensinar, aprender e acompanhar — tudo em um só lugar</p>
          <button className="btn btn-primary btn-lg mt-3">Conhecer a Plataforma</button>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Funcionalidades Principais</h2>
          <div className="row g-4">
            {[
              { icon: "📚", title: "Planejamento de Aulas" },
              { icon: "🧑‍🏫", title: "Criação de Turmas" },
              { icon: "📝", title: "Postagem de Atividades" },
              { icon: "📈", title: "Avaliação de Progresso" },
              { icon: "👨‍👩‍👧‍👦", title: "Integração com Pais" },
              { icon: "🌱", title: "Projetos Sustentáveis" }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acessibilidade */}
      <section id="acessibilidade" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Compromisso com a Acessibilidade</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <p className="lead">🔊 Compatível com leitores de tela</p>
            </div>
            <div className="col-md-4">
              <p className="lead">📱 Suporte offline em áreas remotas</p>
            </div>
            <div className="col-md-4">
              <p className="lead">🧭 Interface simples e intuitiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-5">Depoimentos</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <blockquote className="blockquote bg-light p-4 rounded shadow-sm">
                <p>“Com o Educa-On, consigo planejar minhas aulas até no ônibus.”</p>
                <footer className="blockquote-footer">Prof. Camila</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote bg-light p-4 rounded shadow-sm">
                <p>“Meu filho tem conseguido acompanhar mesmo sem ir à escola.”</p>
                <footer className="blockquote-footer">Mãe de aluno</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote bg-light p-4 rounded shadow-sm">
                <p>“Estamos usando o app na nossa ONG para alfabetização de jovens.”</p>
                <footer className="blockquote-footer">ONG Esperança</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-white text-center bg-primary">
        <div className="container">
          <h2 className="mb-3">Pronto para transformar a educação?</h2>
          <p className="mb-4">Cadastre-se agora como professor, escola ou responsável.</p>
          <form onSubmit={handleSubmit} className="row justify-content-center g-2">
            <div className="col-md-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-light btn-lg w-100">
                Quero Acessar
              </button>
            </div>
          </form>
          {isSubmitted && (
            <div className="alert alert-success mt-3 w-100">
              ✅ Obrigado! Entraremos em contato com seu acesso.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <small>&copy; 2025 Educa-On. Todos os direitos reservados.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
