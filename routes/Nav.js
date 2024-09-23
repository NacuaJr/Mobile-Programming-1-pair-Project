import {NavigationContainer} from '@react-navigation/native';
import Favorites from '../Components/Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Components/HomePage';
import Cart from '../Components/Cart';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Navigation(){
    
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={({route, navigation}) => ({
            tabBarIcon:({color, focused, size}) => {
                let iconName;
                if(route.name === "HomePage"){
                    iconName = focused ? "home" : "home-outline"
                }else if (route.name === "Favorites"){
                    iconName = focused ? "heart-sharp" : "heart-outline"
                } else if (route.name === "Cart"){
                    iconName = focused ? "cart-sharp" : "cart-outline"
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: "#20AB7D", //color if naa ka diha nga tab
            tabBarInactiveTintColor: "#fff", //color if wala naka ana nga tab
            tabBarStyle:{
                backgroundColor: "#25242B",
            },
        })}>
            <Tab.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
            <Tab.Screen name="Favorites" component={Favorites} options={{headerShown: false}}/>
            <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}