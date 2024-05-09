import './calendar.css';

export default function Calendar() {
  // Get today's date
  const today = new Date();

  // Array of weekdays for calendar
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div id="calendar">
      {weekdays.map((weekday, index) => {
        // Calculate date for each day of the week
        const date = new Date(today);
        date.setDate(today.getDate() - today.getDay() + index);

        // Check if date is today
        const isToday = today.toDateString() === date.toDateString();

        return (
          <div className={isToday ? "day today" : "day"} key={index}>
            <h6 className="weekday">{weekday}</h6>
            <h5 className="daysDate">{date.getDate()}</h5>
            {isToday && <h5>•</h5>}
          </div>
        );
      })}
    </div>
  );
}
