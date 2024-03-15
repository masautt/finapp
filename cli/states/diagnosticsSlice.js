const { createSlice } = require('@reduxjs/toolkit');

const diagnosticsSlice = createSlice({
  name: 'diagnostics',
  initialState: {
    csvLoaded: false
  },
  reducers: {
    markCsvLoaded: (state) => {
      state.csvLoaded = true;
    }
  }
});

const { markCsvLoaded } = diagnosticsSlice.actions;

const diagnosticsReducer = diagnosticsSlice.reducer;

module.exports = {
  markCsvLoaded,
  diagnosticsReducer
};
