export const mainFn = (state: string) => {
  let newResult = state?.split(".").map((el) => {
    return el?.split(")")[0];
  });
  newResult?.splice(0, 1);

  let mainNewResult = newResult
    ?.filter((el) => {
      return !el.includes("log");
    })
    .join("")
    .split("(")
    ?.filter((el) => {
      return el !== "";
    });

  return mainNewResult;
};

export const confirmResultFn = (a: Array<string>, b: Array<string>) => {
  // let c = a?.sort();
  // let d = b?.sort();

  if (b?.length <= 0) {
    return false;
  }
  return b?.every((el) => a?.includes(el));
};

export const confirmMainResultFn = (a: string, b: Array<string>) => {
  // let c = a?.sort();
  // let d = b?.sort();

  if (a?.length <= 0) {
    return false;
  }

  return b?.some((el) => a?.includes(el));
};

export const checkQuestionAnswer = (a: string, b: Array<string>): boolean => {
  let c = b.map((el) => {
    return a?.includes(el);
  });

  console.log(c);

  return c?.includes(true);
};
