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

    //Progress Indicator


    progressIndicator: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: '8%',
    },
    numberBorder1: {
        borderWidth: 1,
        width: 40,
        borderColor: 'green',
        borderRadius: 20,
        backgroundColor: 'transparent',
        padding: 10,
    },
    number1: {
        color: '#BFBFBF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    numberBorderProgress1: {
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

    numberBorder2: {
        borderWidth: 1,
        width: 40,
        borderColor: '#BFBFBF',
        borderRadius: 20,
        backgroundColor: 'transparent',
        padding: 10,
    },
    number2: {
        color: '#BFBFBF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    numberBorderProgress2: {
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

    numberBorder3: {
      borderWidth: 1,
      width: 40,
      borderColor: '#BFBFBF',
      borderRadius: 20,
      backgroundColor: 'transparent',
      padding: 10,
    },
    number3: {
        color: '#BFBFBF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
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
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    greetingText: {
      fontSize: 28,
      color: 'black',
    },
    boldText: {
      fontWeight: 'bold',
    },
    
    buttonIcon: {
      width: 24,
      height: 24,
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



    teaButton: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      alignItems: 'center',
    },
    selectedTeaButton: {
      backgroundColor: '#a0a0a0', // Change color for selected button
    },
    teaButtonText: {
      fontSize: 16,
      color: '#000',
    },
    sendButton: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#4CAF50',
      borderRadius: 5,
      alignItems: 'center',
    },
    sendButtonText: {
      fontSize: 16,
      color: '#fff',
    },



















    // Next and Back Buttons

    navButtons:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: '10%',
      paddingBottom: '10%',
    },
    backButton: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingTop: '15%',
      paddingHorizontal: 20,
    },
    backButtonBorder: {
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 20,
      backgroundColor: '#343434',
      padding: 10,
      width: 100,
      textAlign: 'center',
    },
    nextButton: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingTop: '15%',
      paddingHorizontal: 20,
    },
    nextButtonBorder: {
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 20,
      backgroundColor: '#20C58D',
      padding: 10,
      width: 100,
      textAlign: 'center',
    },
    navButtonText: {
      fontSize: 20,
      color: 'lavender',
    },











    //js styles


    // flatlist
    teaTypesContainer: {  // Style for the FlatList container
      flex: 1, // or a specific height
      width: '100%', // or a specific width
      padding: 10,
      
    },
    teaButton: {
        backgroundColor: 'transparent', // Example blue color
        padding: 10,
        margin: 5,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center', // Center text within the button
        flex: 1, // Important to have the buttons take up the whole width in the columns
      },
      teaButtonText: {
        color: 'black',
        fontSize: 16,
      },
      selectedTeaButton: { // Style for the selected button
        backgroundColor: '#038C25', // Example green color for selected button
      },
      selectedTeaButtonText: {
        color: 'white',
      },
      selectedTeaContainer: {
        marginTop: 20, // Add some space above
        alignItems: 'center'
      },
      selectedTeaText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
  });