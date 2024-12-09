import { FluidLoadingSpinner, FluidSize } from '@lmig/fluid-react-utils';

interface ComponentSymbolProps {
  symbol: string;
  name?: string;
  color: 'blue' | 'yellow' | 'green' | 'red';
  onClick?: () => void;
}
export default function ComponentSymbol(props: ComponentSymbolProps) {
  const { symbol, name, color, onClick } = props;
  return (
    <div onClick={onClick}>
      <div className={`component-card ${color}`}>
        <div className="component-symbol">
          <FluidLoadingSpinner
            loading={!name && !symbol}
            size={FluidSize.EXTRA_SMALL}
          />
          {symbol}
        </div>
        {name && <div className="component-name">{name}</div>}
      </div>
      <style jsx>{`
        .component-card {
            width: 120px;
            height: 120px;
            display: inline-block;
            border: 1px solid grey;
            box-shadow: 2px 2px 2px darkgrey;
            margin: 5px 5px 5px 0;
            position: relative; 
            
        &:hover {
            border: 1px solid black;
            box-shadow: 2px 2px 2px black;
            cursor: pointer;
        }

        &.blue {
            background-color: #f3f3ff;
        }

        &.yellow {
            background-color: #ffe8a5;
        }

        &.red {
            background-color: #ffc3c3;
        }

        &.green {
            background-color: #f6ffc3;
        }

        .component-symbol {
            font-size: 30px;
            text-align: center;
            padding-top: 30px;
        }

        .component-name {
            font-size: 12px;
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 100%;
        }
    }`}</style>
    </div>
  );
}
