

import {choice, remove} from './helpers';
import fruits from './fruits';

const ranDrawFruit = () => {
  const ranChoiceFruit = choice(fruits);

  console.log(`I'd like one ${ranChoiceFruit}, please.`);
  console.log(`Here you go: ${ranChoiceFruit}`);

  remove(fruits, ranChoiceFruit);

  console.log(`Delicious! May I have another?`)
  console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)
}


ranDrawFruit()

