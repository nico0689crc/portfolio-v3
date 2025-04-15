export type PrimaryColorConfig = {
  name?: string;
  light?: string;
  main: string;
  dark?: string;
};

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#f8e17e',
    main: '#f5df4e',
    dark: '#c7a631',
  },
];

export default primaryColorConfig;
