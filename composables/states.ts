export const useSearch= () =>
  useState<{ search: string; season: string;}>("searchTerm", () => {
    console.log("setting up search");
    return {
      search: "",
      season: "*",
    };
  });