import diaryEntries from '../../data/diariesTs';

import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): Array<DiaryEntry> => {
  return diaryEntries;
}

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryEntries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};
const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries
};