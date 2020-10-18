import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanagesDetails';

import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';
import Header from './components/Header';

const {Navigator, Screen} = createStackNavigator(); 

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor:'#f2f3f5'}}}>
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />

                <Screen
                    name="OrphanagesDatails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato"/>
                    }}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no Mapa"/>
                    }}
                />

                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe no Mapa"/>
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
}