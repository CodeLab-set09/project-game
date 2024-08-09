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
  let c = a?.sort();
  let d = b?.sort();

  if (d?.length <= 0) {
    return false;
  }

  return d?.every((el) => c?.includes(el));
};

// let userInputValue: string;

// const resultCheck = (a: string) => {
//   return a?.split(".")[1]?.split("(")[0];
// };

// const checkResult = (mainInput: Array<string>, userInputValue: string) => {
//   return mainInput?.some((el) => {
//     return el === userInputValue;
//   });
// };

//   userInputValue = resultCheck(state!)!;

//   useEffect(() => {
//     resultCheck(state!);
//   }, [userInputValue!]);

//   checkResult(answer, `.${userInputValue}`);
