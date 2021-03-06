const drivers = [
  {
    id: 1,
    firstName: 'Petr',
    lastName: 'Petrenko',
    avtarUrl: require('../assets/avatars/avatar.jpg'),
    currentPosition: [49.97931, 36.2645],
    driverStatus: 0,
  },
  {
    id: 2,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    avtarUrl: require('../assets/avatars/batman.svg'),
    currentPosition: [49.82762, 36.32973],
    driverStatus: 0,
  },
  {
    id: 3,
    firstName: 'Vasya',
    lastName: 'Vasenko',
    avtarUrl: require('../assets/avatars/charlie-chaplin.svg'),
    currentPosition: [49.69819, 36.35925],
    driverStatus: 1,
  },
  {
    id: 4,
    firstName: 'Eduard',
    lastName: 'Kozlov',
    avtarUrl: require('../assets/avatars/robot-02.svg'),
    currentPosition: [49.58852, 36.34724],
    driverStatus: 0,
  },
  {
    id: 5,
    firstName: 'Leonid',
    lastName: 'Kravchuck',
    avtarUrl: require('../assets/avatars/matrix-trinity.svg'),
    currentPosition: [49.81813, 36.05164],
    driverStatus: 0,
  },
  {
    id: 6,
    firstName: 'Vuyko',
    lastName: 'Mitich',
    avtarUrl: require('../assets/avatars/brazilian-native-man.svg'),
    currentPosition: [50.44767, 30.52002],
    driverStatus: -1,
  },
  {
    id: 7,
    firstName: 'Mykola',
    lastName: 'Mykolaychuk',
    avtarUrl: require('../assets/avatars/barack-obama.svg'),
    currentPosition: [49.84028, 24.02298],
    driverStatus: 1,
  },
  {
    id: 8,
    firstName: 'John',
    lastName: 'Smith',
    avtarUrl: require('../assets/avatars/muslim-man.svg'),
    currentPosition: [49.58605, 34.54308],
    driverStatus: 2,
  },
];

export default drivers;
