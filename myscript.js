const categories=
[
  { name: 'cat3'},
  { name: '„Ê«œ'},
  { name: 'skaker'},
  { name: 'cat1'}
];

const products= 
[
  { name: 'product1',category:'skaker',price: 11000 },
  { name: 'product2',category:'„Ê«œ', price: 15000 },
  { name: 'product3',category:'skaker', price: 20000 },
  { name: 'product4',category:'cat3', price: 2500000 },
  { name: 'product5',category:'cat3', price: 30000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product6',category:'cat3', price: 35000 },
  { name: 'product7',category:'cat1', price: 40000 },
  { name: 'product8',category:'cat1', price: 45000 }
];
const mycart =
[
  { name: 'product7',quantity:1, price: 40000 },
  { name: 'product8',quantity:2, price: 45000 }
];
function plus(number)
{
	alert(number);
}
function minus(number)
{
	alert(number);
}
function quantity(num,q)
{
	var prod=document.getElementById(num);
	prod.innerHTML=q;
	
}
function quantity(prodname)
{
  let quantity = prompt("Please enter quantity to product:"+prodname, document.getElementById(prodname).innerHTML);
  if (quantity != null) 
  {
    document.getElementById(prodname).innerHTML =quantity;
  }
}
function distributeCategories()
{
	var topnav=document.getElementById("myCategories");
	for (let i = 0; i < categories.length; i++)
	{
		const category = categories[i];
		var a= document.createElement("a");
		a.id=""+category.name;
		a.onclick="distribute('"+category.name+"')";
		a.href="javascript:distribute('"+category.name+"');";
		a.innerHTML=category.name;
		topnav.append(a);
	}
}
function distributeMyCart()
{
	var page=document.getElementById("page");
	page.innerHTML="";
	const sidebars=document.querySelectorAll("#topnav a[href]");
	for(let j=0;j<sidebars.length;j++)sidebars[j].className="";
	document.getElementById('My CART').className="active";
	if(mycart.length==0)
	{
		var div= document.createElement("div");
		div.className="container";
		
		var p=document.createElement("p");
		p.innerHTML="YOUR CART IS EMPTY PLEASE SELECT PRODUCTS";
		
		div.append(p);
		
		page.append(div);
	}
	else
	{
		for (let i = 0; i < mycart.length; i++) 
		{
			const product = products[i];
			
			var div= document.createElement("div");
			div.className="container";
			var a=document.createElement("a");
			a.href="javascript:adProductToCart('"+product.name+"');";
			var img = document.createElement("img");
			img.className="image";
			img.src = "png/"+product.name+".png";
			img.width="70";
			img.height="70";
			var p=document.createElement("p");
			p.className="overlay";
			p.id="overlay";
			p.style="font-size:0.8rem;";
			p.innerHTML=numberComma(product.price)+" L.L.";
			
			a.append(img)
			div.append(a);
			div.append(p);
			
			page.append(div);
		}
	}
}
function addProductToCart(number)
{
//	alert(""+number);
	var b=document.getElementById("total");
	b.innerHTML="50,000";
}
function distribute(cat)
{
	var page=document.getElementById("page");
	page.innerHTML="";
	const topnav=document.querySelectorAll("#topnav a[href]");
	for(let j=0;j<topnav.length;j++)topnav[j].className="";
	document.getElementById(cat).className="active";
	
	for (let i = 0; i < products.length; i++) 
	{
		const product = products[i];
		
		if(cat==product.category)
		{
		/*simulation	
		<div id="page" class="page">
			<div class="container">
				<a href="javascript:addProductToCart('productname');"><img class="image" src="png/productname.png" width=70 height=70>
				<p class="overlay"id="overlay" style="font-size:0.8rem;">numberComma(product.price)+" L.L."</p>
			</div>
		</div>
		*/
			var div= document.createElement("div");
			div.className="container";
			var a=document.createElement("a");
			a.href="javascript:addProductToCart('"+product.name+"');";
			var img = document.createElement("img");
			img.className="image";
			img.src = "png/"+product.name+".png";
			img.width="70";
			img.height="70";
			var p=document.createElement("p");
			p.className="overlay";
			p.id="overlay";
			p.style="font-size:0.8rem;";
			p.innerHTML=numberComma(product.price)+" L.L.";
			
			a.append(img)
			div.append(a);
			div.append(p);
			
			page.append(div);
		}
	}
}
function numberComma(number)
{
	var result="";
	var count=0;
	if(number.length<=3)result=""+number;
	else
	{
		result="";
		var txt=""+number;
		for(let i=txt.length-1;i>=0;i--)
		{
			if(count==3)
			{
				result=","+result;
				count=0;
			}
			result=txt.charAt(i)+result;
			count++;
		}
	}
	return result;
}