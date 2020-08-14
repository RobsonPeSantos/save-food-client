import React from "react";

const AboutUs = () => {
  return (
    <div id="section-2">
      <div id="dark-background">
        <h1 style={{fontSize: "4.6rem"}}>Sobre nós</h1>
        <p className="font-size-p-AboutUs" style={{fontSize: "1.3rem"}}>
          Somos um grupo formado para desenvolver aplicações inteligentes que
          melhorem a vida dos usuários, trazendo soluções inteligentes para o
          dia-a-dia.
        </p>
        <h2 style={{fontSize: "2.3rem"}}>Reduzir o desperdício</h2>
        <div class="embed-responsive embed-responsive-21by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IN7JB0GtzHc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <p style={{fontSize: "1.3rem"}}>
          A Organização das Nações Unidas para a Alimentação e a Agricultura
          (FAO) divulgou que 1,3 bilhão de toneladas de alimentos são perdidos
          no planeta a cada ano, cerca de 30% do total produzido. No Brasil, os
          últimos dados, divulgados em 2013, revelam que em apenas um ano o país
          perdeu ou desperdiçou 26,3 milhões de toneladas de alimentos. Isso
          representa quase 10% dos alimentos disponíveis. Enquanto isso, 5,2
          milhões de pessoas no Brasil passam fome. Segundo a FAO, a perda de
          alimentos prevalece nos países em desenvolvimento, como o Brasil. Já o
          desperdício ocorre no final da cadeia alimentar (varejo e consumo), e
          estaria mais associado às nações desenvolvidas.
        </p>
        <p style={{fontSize: "1.3rem"}}>
          Enquanto isso, com a situação financeira do país debilitada, muitos
          consumidores procuram por soluções para adquirir alimentos de
          qualidade mais baratos, enquanto os comerciantes buscam reduzir seu
          prejuízo gerado pelo desperdício alimentar de produtos produzidos com
          curta duração de validade e aparas de alimentos que são processados.
          Assim nasce a Save Food.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
