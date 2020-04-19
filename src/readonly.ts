export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ham-san');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'hogera';
