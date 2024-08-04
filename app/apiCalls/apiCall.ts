import { LIVE_URL } from "@/utils/constant";

const url = LIVE_URL;

export const getSingleUser = async (ID: string) => {
  try {
    return await fetch(`/api/timer/${ID!}`, {
      cache: "no-cache",
    }).then(async (res) => {
      console.log(res);
      return await res.json();
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const changeUserTimer = async (ID: string) => {
  try {
    return await fetch(`/api/timer/${ID!}`, {
      method: "PATCH",
    }).then(async (res) => {
      return await res.json();
    });
  } catch (error) {
    console.error("error", error);
  }
};
