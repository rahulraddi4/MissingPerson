import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, SafeAreaView, StatusBar } from 'react-native';
import Pie from 'react-native-pie';

const pieData = [
    { label: 'Karnataka', percentages: [30, 40, 30], colors: ['#C70039', '#FF5733', '#44CD40'] },
    { label: 'Maharashtra', percentages: [20, 50, 30], colors: ['#44CD40', '#FF5733', '#EBD22F'] },
    { label: 'Tamil Nadu', percentages: [10, 60, 30], colors: ['#404FCD', '#EBD22F', '#44CD40'] },
    { label: 'Kerala', percentages: [40, 30, 30], colors: ['#EBD22F', '#404FCD', '#FF5733'] },
    { label: 'Andhra Pradesh', percentages: [30, 40, 30], colors: ['#FF5733', '#C70039', '#44CD40'] },
];

const Stats = () => {
    const renderItem = ({ item }) => (
        <View style={styles.pieContainer}>
            <View style={styles.textContainer}>

                <Text style={styles.labelText}>{item.label}:</Text>
                <Text style={styles.paragraphText}>
                    % of Male: {item.percentages[0]}%
                    {'\n'}
                    % of Female: {item.percentages[1]}%
                    {'\n'}
                    % of Others: {item.percentages[2]}%
                </Text>
            </View>
            <Pie
                radius={80}
                innerRadius={item.index === 1 ? 50 : 0}
                sections={item.percentages.map((percentage, index) => ({
                    percentage,
                    color: item.colors[index],
                }))}
                strokeCap={'butt'}
            />
        </View>
    );

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 17, paddingBottom: 20 }}>Stats of Total MP's Based on their Gender:</Text>
                <FlatList

                    data={pieData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.flatListContainer}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2F7FF',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    flatListContainer: {
        paddingHorizontal: 20,
    },
    pieContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    textContainer: {
        flex: 1,
        marginRight: 20,
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    paragraphText: {
        fontSize: 14,
        color: 'black',
    },
});

export default Stats;
