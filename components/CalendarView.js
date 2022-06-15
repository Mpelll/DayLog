import {format} from 'date-fns';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

function CalendarView({markedDates}) {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-mm-dd'),
  );

  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
