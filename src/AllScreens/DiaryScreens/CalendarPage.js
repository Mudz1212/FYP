import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useCalendar } from "../../Hooks/UsingDiary";

const CalendarPage = ({ navigation }) => {
  const {
    currentMonth,
    currentYear,
    recentEntries,
    months,
    daysInMonth,
    handleMonthChange,
  } = useCalendar();

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
      </View>

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

      <View style={styles.recentEntries}>
        <Text style={styles.recentEntriesTitle}>Recent Entries</Text>
        <FlatList
          data={recentEntries}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No recent entries</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.entry}>
              <Text style={styles.entryDate}>{item.date}</Text>
              <Text style={styles.entryText}>{item.entry}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.viewEntriesButton}
          onPress={() => navigation.navigate("EntriesList")}
        >
          <Text style={styles.viewEntriesButtonText}>
            View All Recent Entries
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddEntry")}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
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
    color: "#d4a373",
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
    minHeight: 50,
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
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
    marginTop: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  viewEntriesButton: {
    backgroundColor: "#d4a373",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 10,
    alignItems: "center",
  },
  viewEntriesButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  addButton: {
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
