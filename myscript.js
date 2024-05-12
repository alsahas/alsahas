const categories=
[
  { name: 'cat3'},
  { name: 'mawad'},
  { name: 'skaker'},
  { name: 'cat'},
];

const products= 
[
  { name: 'product1',category:'skaker',price: 11000 },
  { name: 'product2',category:'mawad', price: 15000 },
  { name: 'product3',category:'skaker', price: 20000 },
  { name: 'product4',category:'cat3', price: 25000 },
  { name: 'product5',category:'cat3', price: 30000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product7',category:'cat', price: 40000 },
  { name: 'product8',category:'cat', price: 45000 }
];
const mycart =[];

function distributeCategories()
{
	var sidebar=document.getElementById("sidebar");
	for (let i = 0; i < categories.length; i++)
	{
		const category = categories[i];
		var a= document.createElement("a");
		a.id=""+category.name;
		a.onclick="distribute('"+category.name+"')";
		a.href="javascript:distribute('"+category.name+"');";
		a.innerHTML=category.name;
		sidebar.append(a);
	}
}
function distributeMyCart()
{
	var page=document.getElementById("page");
	page.innerHTML="";
	const sidebars=document.querySelectorAll("#sidebar a[href]");
	for(let j=0;j<sidebars.length;j++)sidebars[j].className="";
	document.getElementById('My CART').className="active";
	
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		
		var div= document.createElement("div");
		div.className="container";
		
		var img = document.createElement("img");
		img.className="image";
		img.src = "png/"+product.name+".png";
		
		var p=document.createElement("p");
		p.className="overlay";
		p.innerHTML=""+product.price;
		
		div.append(img);
		div.append(p);
		
		page.append(div);
	}
}

function distribute(cat)
{
	var page=document.getElementById("page");
	page.innerHTML="";
	const sidebars=document.querySelectorAll("#sidebar a[href]");
	for(let j=0;j<sidebars.length;j++)sidebars[j].className="";
	document.getElementById(cat).className="active";
	for (let i = 0; i < products.length; i++) 
	{
		const product = products[i];
		
		if(cat==product.category)
		{
			var div= document.createElement("div");
			div.className="container";
			
			var img = document.createElement("img");
			img.className="image";
			img.src = "png/"+product.name+".png";
			img.width="70";
			img.height="70";
			var p=document.createElement("p");
			p.className="overlay";
			p.innerHTML=""+product.price;
			
			div.append(img);
			div.append(p);
			
			page.append(div);
		}
	}
}