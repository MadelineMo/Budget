// Storage.js

import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: `budgetStorage`,
  path: `./storage/storage`,
})