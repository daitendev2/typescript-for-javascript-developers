export {};

let name = 'ham-san';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'taro',
  height: 178,
} as const;

// profile.name = 'jiro';
// profile.height = 180;
