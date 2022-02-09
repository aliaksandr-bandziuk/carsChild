const addHtml = () => {
  const cars = document.querySelectorAll('.block__item-text');

  for (let i = 0; i < cars.length; i++) {
    let carComplect = cars[i].querySelector('.complect');
    let complect = carComplect.innerHTML;
    let value = 'Комплектация: City Life';
    console.log(complect);
    if (complect.includes(value)) {
      console.log('привет');
      carComplect.innerHTML += '<div><p><b>Скидки! Акции! Покупайте!</b></p></div>'
    }
  }
}

setTimeout(addHtml, 3000);