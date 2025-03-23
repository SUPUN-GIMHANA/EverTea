import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

interface ActionModalProps {
  visible: boolean;
  status: 'action' | 'noAction';
  onClose: () => void;
}

export default function ActionModal({
  visible,
  status,
  onClose,
}: ActionModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {status === 'action' ? (
            <>
              <Image
                source={require('../assets/action.png')}
                style={styles.modalImage}
                resizeMode="contain"
              />
              <Text style={styles.modalTitle}>Growth is weak</Text>
              <Text style={styles.modalText}>
                Growth is weak. Conduct a soil test to check nutrient levels and
                pH balance. Amend soil based on results. Consult your adviser
                for guidance."
              </Text>
            </>
          ) : (
            <>
              <Image
                source={require('../assets/noAction.png')}
                style={styles.modalImage}
                resizeMode="contain"
              />
              <Text style={styles.modalTitle}>No action needed</Text>
              <Text style={styles.modalText}>
                Your plantation is growing well. Continue maintaining current
                care practices.
              </Text>
            </>
          )}

          <TouchableOpacity
            style={[
              styles.closeButton,
              {
                backgroundColor: status === 'action' ? '#FF6666' : '#20C58D',
              },
            ]}
            onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E2A2A',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  closeButton: {
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
