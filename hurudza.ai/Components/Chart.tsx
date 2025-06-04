import { BarChart } from "react-native-gifted-charts";
import { View, Text, TouchableOpacity } from "react-native";  
import tw from "tailwind-react-native-classnames";     
export const Chart = () => {
    const barData = [
        {value: 376.48, label: 'Maize'},
        {value: 376, label: 'Traditional grains', frontColor: '#32CD32'},
        {value: 451, label: 'Wheat', frontColor: '#32CD32'},
        {value: 668, label: 'Sunflower'},
        {value: 580, label: 'Soya Beans', frontColor: '#32CD32'},
        {value: 800, label: 'Sesame'},
        {value: 451, label: 'Wheat Starndard'},
   
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