import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

const CalendarPage = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [recentEntries, setRecentEntries] = useState([
    {
      date: "15/12/24",
      entry:
        "My cat - prince was lost for 12hrs!! Nearly cried myself to sleep that night",
    },
    { date: "To be filled", entry: "*" },
  ]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <TouchableOpacity
          key={i}
          style={styles.day}
          onPress={() =>
            alert(`Selected Date: ${i}/${currentMonth + 1}/${currentYear}`)
          }
        >
          <Text style={styles.dayText}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return days;
  };

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prev) => prev - 1);
      } else {
        setCurrentMonth((prev) => prev - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((prev) => prev + 1);
      } else {
        setCurrentMonth((prev) => prev + 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
      </View>

      {/* Month Navigation */}
      <View style={styles.monthNavigation}>
        <TouchableOpacity onPress={() => handleMonthChange("prev")}>
          <Text style={styles.navButton}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {months[currentMonth]} {currentYear}
        </Text>
        <TouchableOpacity onPress={() => handleMonthChange("next")}>
          <Text style={styles.navButton}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <View style={styles.calendar}>
        <View style={styles.weekDays}>
          {["M", "T", "W", "Th", "F", "Sa", "Su"].map((day, index) => (
            <Text key={index} style={styles.weekDayText}>
              {day}
            </Text>
          ))}
        </View>
        <ScrollView contentContainerStyle={styles.daysContainer}>
          {renderCalendar()}
        </ScrollView>
      </View>

      {/* Recent Entries */}
      <View style={styles.recentEntries}>
        <Text style={styles.recentEntriesTitle}>Recent Entries</Text>
        <FlatList
          data={recentEntries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.entry}>
              <Text style={styles.entryDate}>{item.date}</Text>
              <Text style={styles.entryText}>{item.entry}</Text>
            </View>
          )}
        />
      </View>

      {/* Add Entry Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert("Add new entry!")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 40,
  },
  backButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4a373",
  },
  monthNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  navButton: {
    fontSize: 16,
    color: "#d4a373",
    fontWeight: "bold",
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  calendar: {
    marginVertical: 10,
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  weekDayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    width: "14%",
    textAlign: "center",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  day: {
    width: "14%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d4a373",
  },
  dayText: {
    fontSize: 16,
    color: "#000",
  },
  recentEntries: {
    marginTop: 20,
  },
  recentEntriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  entry: {
    backgroundColor: "#ffe4b5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  entryDate: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  entryText: {
    fontSize: 16,
    color: "#000",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#d4a373",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  addButtonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CalendarPage;
