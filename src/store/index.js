import { createSlice, configureStore } from "@reduxjs/toolkit";

import mockup from "../assets/images/desktop_mockup.png";

const initialState = {
  scrollPositionPercentage: 0,
  projectIndex: 0,
  isProjectMounted: false,
  displayedProject: null,
  projectDataList: [
    {
      key: '0',
      title: "FitN",
      langs: ["Flutter","●","Dart"],
      desc: "Mobile application made with Flutter that allows the user to log their workouts and provides them with many health-related tools.",
      link: "https://www.swag.com",
      images: [mockup, mockup, mockup, mockup],
    },
    {
      key: '1',
      title: "Algerian Vis",
      langs: ["React","●","HTML","●", "CSS","●", "JS"],
      desc: "Website that visualizes algorithms and shows that i have brain",
      link: "https://www.swag.com",
      images: [mockup, mockup, mockup, mockup],
    },
    {
      key: '2',
      title: "TEMPLATE 2",
      langs: ["Java","●","Python"],
      desc: "LOREM IPSUM GLOCK IN MY POCKET",
      link: "https://www.swag.com",
      images: [mockup, mockup, mockup, mockup],
    },
  ],
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    updateState(state, action) {
      var winYOffset = action.payload;
      var docHeight = document.body.clientHeight;
      var winHeight = window.innerHeight;
      var scrollPercent = winYOffset / (docHeight - winHeight);
      var scrollPercentRounded = scrollPercent * 100;

      state.scrollPositionPercentage = scrollPercentRounded;

      const scrollPercentToMountProjectInfo = 25;
      const projectHeightInPercent = 14;

      state.projectIndex = Math.floor(
        (state.scrollPositionPercentage - scrollPercentToMountProjectInfo) /
          projectHeightInPercent
      );

      if (
        state.projectIndex >= 0 &&
        state.projectIndex < state.projectDataList.length
      ) {
        state.displayedProject = state.projectDataList[state.projectIndex];
        state.isProjectMounted = true;
      } else {
        state.isProjectMounted = false;
      }
    },
  },
});

const store = configureStore({
  reducer: scrollSlice.reducer,
});

export const scrollActions = scrollSlice.actions;
export default store;
