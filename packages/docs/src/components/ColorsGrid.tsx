import { colors } from "@ignite-ui-nathallye/tokens";
import { getContrast } from "polished";

export const ColorsGrid = () => {
  // Object.entries - retorna um array com vários arrays onde a primeira posição é a chave e a segunda é o valor
  return Object.entries(colors).map(([key, color]) => { // em cima do retorno de Object.entries(colors), fazemos um map em cada array os quais iremos destruturar onde a chave(key) é o nome da cor e o valor(color) é o hexadecimal
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF"
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
};
