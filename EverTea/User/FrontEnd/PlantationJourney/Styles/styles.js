import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8FCFF',
      paddingHorizontal: 20,
    },
    scrollContainer: {
      flex: 1,
      paddingBottom: 80, // Adds padding at the bottom to prevent content from overlapping with bottom navigation
    },
    scrollContent: {
      paddingBottom: 80, // Ensures the content is spaced above the bottom navigation
    },


    cancelButton: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingTop: '15%',
      paddingHorizontal: 20,
    },
    cancelBorder: {
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 20,
      backgroundColor: 'red',
      padding: 10,
    },
    cancelText: {
      fontSize: 20,
      color: 'lavender',
    },

    progressIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '8%',
    },
    numberBorder: {
        borderWidth: 1,
        width: 40,
        borderColor: '#BFBFBF',
        borderRadius: 20,
        backgroundColor: 'transparent',
        padding: 10,
    },
    number: {
        color: '#BFBFBF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    numberBorderProgress: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 20,
        backgroundColor: '#BFBFBF',
        width: 50,
        height: 10,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
    },

    headerBackground: {
      height: 300,
      justifyContent: 'space-between',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '8%',
    },
    headerTopic: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
  
    },
    greetingText: {
      fontSize: 28,
      color: 'black',
    },
    boldText: {
      fontWeight: 'bold',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#FFF',
    },
    plantationButton: {
      flexDirection: 'row',
      backgroundColor: '#C8F1D1',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    plantationButtonText: {
      color: '#004D40',
      fontWeight: 'bold',
    },
    buttonIcon: {
      width: 24,
      height: 24,
    },
    exploreSection: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
    },
    featureCards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      alignItems: 'center',
      padding: 10,
      width: '30%',
      elevation: 3,
    },
    cardImage: {
      width: 60,
      height: 60,
      marginBottom: 10,
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardSubtitle: {
      fontSize: 12,
      color: 'gray',
    },
    servicesSection: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    serviceButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      padding: 15,
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    greenButton: {
      backgroundColor: '#5BD5A6',
      width: '70%',
    },
    yellowButton: {
      backgroundColor: '#FDD835',
    },
    skyblueButton: {
      backgroundColor: '#9FE9C8',
    },
    tealButton: {
      backgroundColor: '#20C58D',
    },
    iconButton: {
      backgroundColor: '#5BD5A6',
      padding: 15,
      borderRadius: 10,
      marginLeft: 10,
    },
    serviceText: {
      fontWeight: 'bold',
      color: '#FFF',
    },
    serviceIcon: {
      width: 30,
      height: 30,
    },
    // Bottom Navigation Styles
    bottomNav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#F8FCFF',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 20,
      borderTopWidth: 1,
      borderRadius: 10,
      borderTopColor: '#25B785',
    },

    
    inputContainer: {
        paddingTop: 20,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#FD8045',
        width:'80%',
        color: 'black',
        paddingLeft: 20,
    },
    searchContainer: {
      borderColor: 'transparent',
      backgroundColor: '#FD8045',
      borderWidth: 1,
      borderRadius: 20,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchIcon: {
      width: 28,
      height: 28, 
      alignItems: 'center',
    },

    bodyContent: {
        flex: 1,
        padding: 20,
    },
    topic: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    
  });