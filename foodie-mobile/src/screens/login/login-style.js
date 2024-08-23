import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    container: {
      flex: 1,
      padding: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.white
    },
    form: {
      width: "100%",
      marginTop: 20
    },
    formGroup: {
      width: "100%",
      marginTop: 50
    },
    footer: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      marginBottom: 60,
      alignItems: "center",
    },
    footerText: {
      textAlign: "center",
      color: COLORS.dark_gray,
      fontSize: FONT_SIZE.md
    }
   
}