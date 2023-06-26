import "../styles/tokens-grid.css";

interface TokensGridProps {
  tokens: Record<string, string>; // Record - Constrói um tipo de objeto cujas chaves de propriedade são Key, se cujos valores de propriedade são Type.
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace("rem", "")) * 16}px</td> // convertendo o valor em rem para px
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
