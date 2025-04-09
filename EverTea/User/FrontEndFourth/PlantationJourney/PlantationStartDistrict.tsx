import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/PlantationStartDistrict'; // Import the styles

// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartDistrict: undefined;
  PlantationStartLand: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function PlantationStart({ navigation }: HomeScreenProps) {
  const {
    teaModelNameArraySub,
    selectedTeaType,
    renderTeaItem,
    districtInputHandler,
    districtSearchHandler,
  } = useAppLogic();

  return (
    <View style={styles.container}>
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
          <Text style={[styles.cancelBorder, styles.cancelText]}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressIndicator}>
        <Text style={[styles.numberBorder1, styles.number1]}>1</Text>
        <View style={styles.numberBorderProgress1} />
        <Text style={[styles.numberBorder2, styles.number2]}>2</Text>
        <View style={styles.numberBorderProgress2} />
        <Text style={[styles.numberBorder3, styles.number3]}>3</Text>
      </View>

      <View style={styles.headerContent}>
        <View style={styles.headerTopic}>
          <Text style={[styles.greetingText, styles.boldText]}>Enter Your District</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="District"
          onChangeText={districtInputHandler}
        />
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={districtSearchHandler} activeOpacity={0.7}>
            <Image
              source={require('../assets/Images/HomePage/PlantationJourney/Search.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bodyContent}>
        <View style={styles.headerTopic}>
          <Text style={[styles.greetingText, styles.topic]}>Choose your tea type</Text>

          <View style={styles.teaTypesContainer}>
            <FlatList
              data={teaModelNameArraySub}
              renderItem={renderTeaItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>

          {selectedTeaType && (
            <View style={styles.selectedTeaContainer}>
              <Text style={styles.selectedTeaText}>Selected Tea: {selectedTeaType}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.navButtons}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <Text style={[styles.backButtonBorder, styles.navButtonText]}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nextButton}>
          <TouchableOpacity onPress={() => navigation.navigate('PlantationStartLand')} activeOpacity={0.7}>
            <Text style={[styles.nextButtonBorder, styles.navButtonText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
