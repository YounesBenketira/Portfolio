import { createSlice, configureStore } from "@reduxjs/toolkit";
import { desktop } from "../assets/images";
import { fitn1, fitn2, fitn3 } from "../assets/images";

const initialState = {
  scrollPositionPercentage: 0,
  projectIndex: 0,
  isProjectMounted: false,
  displayedProject: null,
  projectDataList: [
    {
      key: "0",
      title: "FitN",
      langs: ["Flutter", "●", "Dart"],
      desc: "Mobile application made with Google's Flutter SDK. The application allows users to log their workouts and provides them with many health-related tools.",
      link: "https://github.com/YounesBenketira/FitN",
      type: "mobile",
      images: [fitn1, fitn2, fitn3],
    },
    {
      key: "1",
      title: "VisualGo",
      langs: ["React.js"],
      desc: "Web Application created with React.js that visualizes many different types of algorithms using graphs and other types of tools.",
      link: "https://github.com/YounesBenketira/VisualGo",
      type: "desktop",
      images: [desktop, desktop, desktop, desktop],
    },
    // {
    //   key: "2",
    //   title: "Coming Soon",
    //   langs: ["Coming", "●", "Soon"],
    //   desc: "This will be my next project after VisualGo.",
    //   link: "https://github.com/YounesBenketira",
    //   type: "desktop",
    //   images: [desktop, desktop, desktop, desktop],
    // },
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
      state.scrollPositionPercentage = scrollPercent * 100;

      var deviceWidth = window.innerWidth;
      let scrollPercentToMountProjectInfo;
      let projectHeightInPercent;
      if (deviceWidth <= 425) {
        scrollPercentToMountProjectInfo = 30;
        projectHeightInPercent = 20;
      } else if (deviceWidth <= 768) {
        scrollPercentToMountProjectInfo = 25;
        projectHeightInPercent = 23;
      } else {
        scrollPercentToMountProjectInfo = 28;
        projectHeightInPercent = 20;
      }

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
