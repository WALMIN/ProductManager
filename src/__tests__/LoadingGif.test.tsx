import "react-native";
import React from "react";
import { LoadingGif } from "../components/LoadingGif";
import renderer from "react-test-renderer";

it("LoadingGif renders correctly", () => {
  renderer.create(<LoadingGif />);
});
