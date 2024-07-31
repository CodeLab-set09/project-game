import { LIVE_URL } from "@/utils/constant";

export const getSingleUser = async (id: string) => {
  try {
    return await fetch(
      `http://localhost:3000/api/timer/66aa36a4b21d43c49f58d19f`,
      {
        cache: "no-cache",
      }
    ).then(async (res) => {
      return await res.json();
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const changeUserTimer = async (id: string) => {
  try {
    return await fetch(
      `http://localhost:3000/api/timer/66aa36a4b21d43c49f58d19f`,
      {
        cache: "no-cache",
        method: "PATCH",
      }
    ).then(async (res) => {
      return await res.json();
    });
  } catch (error) {
    console.error("error", error);
  }
};
