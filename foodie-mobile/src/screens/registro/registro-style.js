import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    container: {
      flex: 1,
      padding: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    form: {
      width: "100%",
      marginTop: 15
    },
    ScrollView: {
      width: "100%"
    },
    form2: {
        width: "100%",
        marginTop: 25
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