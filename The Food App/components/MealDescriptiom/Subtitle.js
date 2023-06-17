import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
 return (
    <Text style={styles.subtitle}>{children}</Text>
 );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 6,
        borderBottomColor: '#e2b497', 
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 6, 
        color: '#e2b497',
      },
});