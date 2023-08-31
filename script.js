// Example shoe data (replace with actual data)
const shoes = [
  { name: 'Running Shoes', price: 100, image: 'running-shoes.jpg' },
  { name: 'Casual Sneakers', price: 80, image: 'casual-sneakers.jpg' },
  // Add more shoe items
];

// Display shoes on the webpage
const shoeList = document.querySelector('.shoe-list');

function displayShoes() {
  shoeList.innerHTML = '';
  shoes.forEach(shoe => {
    const shoeItem = document.createElement('div');
    shoeItem.classList.add('shoe-item');
    
    const shoeImage = document.createElement('img');
    shoeImage.src = shoe.image;
    shoeImage.alt = shoe.name;
    
    const shoeName = document.createElement('h2');
    shoeName.textContent = shoe.name;
    
    const shoePrice = document.createElement('p');
    shoePrice.textContent = `$${shoe.price}`;
    
    shoeItem.appendChild(shoeImage);
    shoeItem.appendChild(shoeName);
    shoeItem.appendChild(shoePrice);
    
    shoeList.appendChild(shoeItem);
  });
}

displayShoes();
