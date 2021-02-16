window.addEventListener('load', () => {

  const products = [
  {
    id: "id-1",
    name: 'Lipstick',
    price: '1199',
    image: 'https://www.dior.com/beauty/version-5.1610097138802/resize-image/ep/870/580/90/0/%252FY0172009%252FV007%252FY0172009_C017500999_E01_ZHC.jpg?imwidth=870',
  },

  {
    id: "id-2",
    name: 'Mascara',
    price: `1499`,
    image: 'https://www.dior.com/beauty/version-5.1595261547029/resize-image/ep/715/773/90/0/horizon%252Fcovers%252FY0697400_F069740090_E01_GHC.jpg?imwidth=800',
  },

  {
    id: "id-2",
    price: '1900',
    image: 'https://www.dior.com/beauty/version-5.1610097138802/resize-image/ep/870/580/90/0/%252FY0205731%252FV001%252FY0205731_C020573100_E01_ZHC.jpg?imwidth=870',
  }
  ];

  let totalCost = 0; 
  
  const productsContainer =  document.querySelector('.products'); 

  productsContainer.innerHTML = `${products.map(item => {


    let name = item.name;

        if(!name) {
            name = 'Default name';
        }
        return `

      <div class="product">  
          <div class="product__title ${item.name ? '' : 'grey'}">${name}</div>
          <img class="product__image" src="${item.image}">
          <div class="product__price">
             <button class="product__action" data-product-id="${item.id}">Add</button>
             <span>${item.price}</span>
          </div>
      </div> `;

    

  }).join('')}`;

  const buttons = productsContainer.querySelectorAll('button.product__action');
  const totalContainer = document.querySelector('#total')

  const selectCurrencyName = document.querySelector('#currencyName');
  selectCurrencyName.addEventListener('change', (e) => {
    const currency = e.target.value;
    totalCost = convertTotal(totalCost, currency);
    totalContainer.innerHTML = totalCost.toFixed(2);
  });

  buttons.forEach(btn => {
      btn.addEventListener('click', onButtonAddClick)
  })

  function onButtonAddClick(event) {
      const productId = event.target.dataset.productId;
      const currentProduct = products.find(function (item) {
          return item.id == productId
        });

      totalCost += Number(convertTotal(currentProduct.price, selectCurrencyName.value));
      totalContainer.innerHTML = totalCost.toFixed(2);
  }

  function reset() {
    totalCost = 0;
    totalContainer.innerHTML = totalCost.toFixed(2);
  }

  const resetButton = document.querySelector('#resetButton')
  resetButton.addEventListener('click', reset);

  function convertTotal(total, currency) {
      let rate = 1;
      switch (currency) {
        case "$":
            rate = 28;
            break;
        case "€":
            rate = 30;
            break;
      }
      return (total / rate);
  }
  
})
