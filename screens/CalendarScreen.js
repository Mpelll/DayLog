import React, {useContext, useState, useMemo} from 'react';
import CalendarView from '../components/CalendarView';
import {format} from 'date-fns';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function CalenderScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-mm-dd'),
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-mm-dd') === selectedDate,
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-mm-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={<CalendarView markedDates={markedDates} />}
    />
  );
}

export default CalenderScreen;
