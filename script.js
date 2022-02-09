const cars = document.querySelectorAll('.block__item-text');

for (let i = 0; i < cars.length; i++) {
  let carComplect = cars[i].querySelector('.complect');
  let value = 'Комплектация: City Life';
  console.log(carComplect);
  if (carComplect.includes(value)) {
    console.log(carComplect.includes(value));
  }
}