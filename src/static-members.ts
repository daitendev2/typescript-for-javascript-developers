export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'taro';
  static lastName: string = 'yamada';

  static work(): string {
    // "Hey, guys! Are you interested in Typescript? Let's dive into Typescript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in Typescript? Let's dive into Typescript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.work());
