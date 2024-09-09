import { StyleSheet } from "react-native";

export const themeColors = {
    light: {
        container: '#FFFFFF',
        textColor: '#000000',
        foreColor: '#616161'
    }, 
    dark: {
        container: '#3C3D37',
        textColor: '#FFFFFF',
        foreColor: '#9E9E9E'
    },
    primary: {
        purple_400: '#AB47BC',
        pink_400: '#EC407A',
        teal_400: '#26A69A',
    }
}

export const myTheme = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        display: 'flex',  
        flexDirection: 'row',
    },
    column: {
        display: 'flex',  
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerAll: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    w_100: {
        width: '100%'
    }
});