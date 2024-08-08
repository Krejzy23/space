import React, { createContext, useContext } from 'react';
import { AnimationAction } from 'three';

type AnimationContextType = {
  actions: { [key: string]: AnimationAction } | null;
};

const AnimationContext = createContext<AnimationContextType>({ actions: null });

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationProvider = ({ children, actions }: { children: React.ReactNode, actions: { [key: string]: AnimationAction } }) => {
  return (
    <AnimationContext.Provider value={{ actions }}>
      {children}
    </AnimationContext.Provider>
  );
};
