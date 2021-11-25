import React from "react";
import renderer from "react-test-renderer";

import { ProductItem } from "../components/ProductItem";

it("ProductItem render correctly with attributes", () => {
  renderer.create(
    <ProductItem
      onClick={() => console.log("Successful test click")}
      id={1}
      name={"Mjölk"}
      price={1.2}
      type={0}
    />
  );
});
