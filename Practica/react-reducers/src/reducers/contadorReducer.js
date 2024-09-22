import { Types } from "../actions/ContadorActions";

export const valorInicial = { contador: 0 };

export function contadorReducer(state, action) {
  switch (action.Type) {
    case Types.INCREMENTAR:
      return { contador: state.contador + 1 };
    case Types.DECREMENTAR:
      return { contador: state.contador - 1 };
    case Types.INCREMENTAR5:
      return { contador: state.contador + 5 };
    case Types.DECREMENTAR5:
      return { contador: state.contador - 5 };
    case Types.RESET:
        
    default:
      break;
  }
}
