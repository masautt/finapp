import { createSlice } from '@reduxjs/toolkit';

const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        businesses: [],
        categories: [],
        subcategories: [],
        locations: [],
        recurrings: [],
        recipients: [],
        reimburses: [],
        necessities: []
    },
    reducers: {
        addOptions: (state, action) => {
            const { businesses, categories, subcategories, locations, recurrings, recipients, reimburses, necessities } = action.payload; 
            if (businesses) state.businesses = state.businesses.concat(businesses);
            if (categories) state.categories = state.categories.concat(categories);
            if (subcategories) state.subcategories = state.subcategories.concat(subcategories);
            if (locations) state.locations = state.locations.concat(locations);
            if (recurrings) state.recurrings = state.recurrings.concat(recurrings);
            if (recipients) state.recipients = state.recipients.concat(recipients);
            if (reimburses) state.reimburses = state.reimburses.concat(reimburses);
            if (necessities) state.necessities = state.necessities.concat(necessities); // Add necessities
        }
    },
});

export const { addOptions } = optionsSlice.actions;
export const optionsReducer = optionsSlice.reducer;

export const selectBusinesses = state => state.options.businesses;
export const selectCategories = state => state.options.categories;
export const selectSubcategories = state => state.options.subcategories;
export const selectLocations = state => state.options.locations;
export const selectRecipients = state => state.options.recipients;
export const selectRecurrings = state => state.options.recurrings;
export const selectReimburses = state => state.options.reimburses;
export const selectNecessities = state => state.options.necessities; // Add selectNecessities
