import React, { createContext, useContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props: any) => {
  const { children } = props;
  const [isMoviesSelected, setIsMovieSelected] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const context = {
    isMoviesSelected,
    setIsMovieSelected,
    search,
    setSearch,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export const useSearchContext = () => useContext(Context);
