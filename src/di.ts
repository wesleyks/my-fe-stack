import { createContext, useContext } from 'react';
import { container, DependencyContainer, InjectionToken } from 'tsyringe';

export const DIContext = createContext<DependencyContainer>(container);

export function useResolve<T>(token: InjectionToken<T>): T {
  const localContainer = useContext(DIContext);
  return localContainer.resolve(token);
}
