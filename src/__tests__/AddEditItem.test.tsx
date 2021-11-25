it("Periperhal is within the orrect range", () => {
  const price = 900;
  let allowed = false;

  if (Number(price) >= 1000 && Number(price) <= 2600) {
    allowed = true;
  } else {
    allowed = false;
  }
  expect(allowed).toBe(true);
});
