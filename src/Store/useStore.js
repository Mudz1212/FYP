import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStore = (key, initialRecord = []) => {
  const [record, setRecord] = useState(initialRecord);

  useEffect(() => {
    const loadRecord = async () => {
      try {
        const storedData = await AsyncStorage.getItem(key);
        if (storedData) {
          setRecord(JSON.parse(storedData));
        }
      } catch (error) {
        console.error(`Error loading ${key} record: ${error}`);
      }
    };
    loadRecord();
  }, []);

  const saveRecord = async (newRecord) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(newRecord));
      setRecord(newRecord);
    } catch (error) {
      console.error(`Error saving ${key} record: ${error}`);
    }
  };

  return [record, saveRecord];
};

export default useStore;
