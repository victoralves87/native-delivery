import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  restaurante: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop:10 
  },
  logo: {
    width: 80, // Corrigido de "with" para "width"
    height: 80,
  },
  texto: {
    flex: 1,
    padding: 8,
  },
  nome: {
    marginBottom: 3,
  },
  endereco: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm
  },
  favorito: {
    width: 30,
    height: 30,
  },
};
