function myfunction()
{
	const products = 
	[
	  { name: 'product1', price: 11000 },
	  { name: 'product2', price: 15000 },
	  { name: 'product3', price: 20000 }
	];
	for (let i = 0; i < products.length; i++) 
	{
		const product = products[i];
		var img = document.createElement("img");
		img.src = "png/"+product.name+".png";
		img.title=product.price;
		var src = document.getElementById("body");
		src.append(img);
/*	  
	  const listItem = document.createElement('li');
	  listItem.textContent = product.name;
	  productList.appendChild(listItem);*/
	}
}	