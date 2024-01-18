import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerInput = ({ onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
    setSelectedDate(date.toISOString().split('T')[0]); 
    onDateChange(date);
  };

  const openDatePicker = () => {
    showDatePicker();
  };

  return (
    <TouchableWithoutFeedback onPress={openDatePicker}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento"
          value={selectedDate}
          editable={false}
          placeholderTextColor="#C6CBD9"
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderColor: '#C6CBD9',
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    color: 'white',
    fontSize: 16,
    width: 300,
    marginBottom: 8,
  },
});

export default DatePickerInput;
