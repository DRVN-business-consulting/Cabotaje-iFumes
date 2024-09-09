import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../providers/theme_provider'
import { myTheme, themeColors } from '../themes/myTheme'

const ListHeader = () => {
    const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme()
    return (
        <View>
            <Text style={[styles.appName, { color: primaryColor}]}>iFumes</Text>
            <View style={styles.container}>
                <View style={[myTheme.row, styles.settingContainer]}>
                    <Text style={[styles.label, { color: themeColors[theme].textColor}]}>Toggle theme mode</Text>
                    <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor}]} onPress={toggleTheme}>
                        <Text style={styles.buttonText}>{`${theme} MODE`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[myTheme.row, styles.settingContainer, { marginTop: 20}]}>
                    <Text style={[styles.label, { color: themeColors[theme].textColor}]}>Pick primary color</Text>
                
                    <View style={[myTheme.row, myTheme.centerAll, styles.colorContainer]}>
                        {
                            Object
                            .entries(themeColors.primary)
                            .map(([key, value]) => 
                                <TouchableOpacity 
                                    key={key}
                                    onPress={() => setPrimaryColor(value)}
                                    style={[styles.colorBox, { backgroundColor: value }]} />
                            )
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appName: { paddingHorizontal: 10, marginVertical: 25, textAlign: 'center', fontSize: 25, fontStyle: 'italic', fontWeight: 'bold'},
    container: {
        marginBottom: 12,
        marginHorizontal: 10,
    },
    settingContainer: { alignItems: 'center', justifyContent: 'space-between'},
    label: {
        marginStart: 5,
        fontSize: 20, fontWeight: 'bold'
    },
    button: { paddingHorizontal: 38, paddingVertical: 15, borderRadius: 10},
    buttonText: {textTransform: 'uppercase', color: 'white', textAlign: 'center',},
    colorContainer:  { gap: 5, },
    colorBox: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
})

export default ListHeader