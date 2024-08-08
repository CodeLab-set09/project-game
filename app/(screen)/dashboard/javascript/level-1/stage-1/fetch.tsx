export const fet = async () => {
  const url = "https://js-add.vercel.app/api/add";
  const res = await fetch(url, {
    method: "GET",
    cache: "no-cache",
    mode: "no-cors",
  });
  const data = await res.json();
  console.log(data);

  return data;
};
