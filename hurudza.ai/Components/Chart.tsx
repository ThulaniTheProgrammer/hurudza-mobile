import { BarChart } from "react-native-gifted-charts";
import { View, Text, TouchableOpacity } from "react-native";  
import tw from "tailwind-react-native-classnames";     
export const Chart = () => {
    const barData = [
        {value: 250, label: 'Maize'},
        {value: 500, label: 'Rice', frontColor: '#32CD32'},
        {value: 745, label: 'Saya beans', frontColor: '#32CD32'},
        {value: 320, label: 'Wheat'},
        {value: 600, label: 'Tobacco', frontColor: '#32CD32'},
        {value: 256, label: 'Cotton'},
        {value: 100, label: 'Ground nuts'},
   
    ];
    return (
        <View    style={tw`flex-row h-40 `}>

            <BarChart
                barWidth={40}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    );
};