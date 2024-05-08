function display()
{
	const products = [
	  { name: 'Product A', price: 10 },
	  { name: 'Product B', price: 15 },
	  { name: 'Product C', price: 20 }
	];

	const productList = document.createElement('ul');

	for (let i = 0; i < products.length; i++) 
	{
	  const product = products[i];
	  const listItem = document.createElement('li');
	  listItem.textContent = product.name;
	  productList.appendChild(listItem);
	}

	document.body.appendChild(productList);
}