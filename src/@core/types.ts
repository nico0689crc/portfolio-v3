import type { ReactNode } from 'react';

export type Mode = 'system' | 'light' | 'dark';

export type SystemMode = 'light' | 'dark';

export type ChildrenType = {
  children: ReactNode;
};

export type PagesTypes = {
  public: {
    root: string;
  };
  authenticated: {
    root: string;
  };
};
