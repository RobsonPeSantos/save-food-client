import React from "react";
import { Link } from "react-router-dom";

const HowWorks = () => {
  return (
    <div className="howWorksBkg">
      <div>
        <p>.</p>
      </div>
      <div class="jumbotron">
        <h1 class="display-4">Como funciona?</h1>
        <p class="lead">
          A idéia é simples. Assim como em um <i>market place</i> nós unimos as
          duas pontas, consumidores e *vendedores. Os vendedores podem ser
          comerciantes de segmento alimentício de qualquer esfera, que tenham
          desperdício de comida e queiram fazer ofertas promocionais destes
          alimentos.
          <p>
            Exemplo: um restaurante que produz cinquenta a cem lasanhas
            semanalmente, mas acaba tendo que jogar no lixo 5 a 10 lasanhas no
            final da semana, pois elas já não estão mais próprias para o
            consumo.
          </p>
          <p>
            Este restaurante cadastra suas lasanhas que estão próximas do
            vencimento, com um preço promocional. Os consumidores podem acessar
            estas lasanhas cadastradas, através barra de pesquisa na nossa
            <Link to="/" style={{ color: "#e28250" }}>
              {" "}
              home{" "}
            </Link>{" "}
            e reservar sua retirada
          </p>
        </p>
        <hr class="my-4"></hr>
        <p>
          *Restaurantes, padarias, mercados, horti-fruti, vendinhas e catering
          são alguns exemplos de comerciantes que podem anunciar seus pratos e
          alimentos no Save Food.
        </p>
        <p class="lead">
          <Link
            class="btn btn-primary btn-lg"
            style={{ backgroundColor: "#276359", border: "#276359", width:"19rem" }}
            href="#"
            role="button"
            to="/user/signup"
          >
            Cadastre seu estabelecimento
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HowWorks;
