// Storage.js

import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: `budgetStorage`,
  path: `/Users/madelinemoran/Apps/Budget/src/Storage`,
})
