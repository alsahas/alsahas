let mycart =
[
/*  { name: 'product7',quantity:1, price: 40000 },
  { name: 'product8',quantity:2, price: 45000 }*/
];
function setValue()
{
	document.getElementById("customername").innerHTML=document.getElementById("name").value;
	document.getElementById("phonenumber").innerHTML=fix(document.getElementById("phone1").value)+"/"+fix(document.getElementById("phone2").value);
	document.getElementById("address").innerHTML=document.getElementById("address2").value;
}
function getValue()
{
	var cus=document.getElementById("customername").innerHTML;
	var pho=document.getElementById("phonenumber").innerHTML;
	var add=document.getElementById("address").innerHTML;
	var txt="alsaha314\n"+updateTotal()+"\n"+cus+"\n"+pho+"\n"+add+"\n";
	for (let i = 0; i < mycart.length; i++)
	{
		const prod = mycart[i];
		txt+=prod.id+":"+prod.quantity+"\n";
	}
	document.getElementById("subject").value="alsaha313";
	document.getElementById("message").value=txt+"alsaha315";
	return txt;
}
function fix(number)
{
	var fixed="";
	var cod=-1;
	for (let i = 0; i < number.length; i++)
	{
		cod=number[i].charCodeAt(0);
		if(cod>=1632&&cod<=1641)
		{
			if(cod==1632)fixed+="0";
			else if(cod==1633)fixed+="1";
			else if(cod==1634)fixed+="2";
			else if(cod==1635)fixed+="3";
			else if(cod==1636)fixed+="4";
			else if(cod==1637)fixed+="5";
			else if(cod==1638)fixed+="6";
			else if(cod==1639)fixed+="7";
			else if(cod==1640)fixed+="8";
			else if(cod==1641)fixed+="9";
		}
		else fixed+=number[i];
	}
	return fixed;
}
function navigateLeft()
{
	var nav = document.getElementById("topnav");
	var button = document.getElementById("button");

	if (nav.style.display === "none") 
	{
		nav.style.display = "block";
		button.innerHTML="إخفاء اللائحة";
	} 
	else 
	{
		nav.style.display = "none";
		button.innerHTML="إظهار اللائحة";
	}
}
function isArabicDigit(chr) 
{
	//alert(chr.charCodeAt(0)+"hello");		1632-1641	<=>	0 to 9 in arabic
	var arabic = /[\u0660-\u0669]/;
	return(arabic.test(chr));
}
function disableButton()
{
	document.getElementById("button1").disabled = true;
}
function emptyPhone()
{
	document.getElementById("phone1").value="";
	document.getElementById("phone2").value="";
}
function emptyPhone1()
{
	document.getElementById("phone1").value="";
}
function emptyPhone2()
{
	document.getElementById("phone2").value="";
}
function checkPhone()
{
	var p1=document.getElementById("phone1");
	if(!p1.value)p1.focus();
}
function checkPhone1()
{
	var p1=document.getElementById("phone1");
	var p2=document.getElementById("phone2");
	filterDigit(p1,1);
	if(p1.value.length==2)p2.focus();

}
function checkPhone2()
{
	var p2=document.getElementById("phone2");
	var addr=document.getElementById("address2");
	filterDigit(p2,2);
	if(p2.value.length==6)addr.focus();
}
function checkGoodName(element)
{
	var p=document.getElementById(element);
	if(p.value.length>0)p.style="border: 2px solid #00cc0c;border-radius:3px;font-size:1rem;width:60%;height:35px;";
	else p.style="border: 2px solid #ff1100;border-radius:3px;font-size:1rem;width:60%;height:35px;";
}
function checkGood1()
{
	var p1=document.getElementById("phone1");
	if(p1.value.length==2)p1.style="border: 2px solid #00cc0c;border-radius:3px;font-size:1rem;width:20%;height:35px;";
	else p1.style="border: 2px solid #ff1100;border-radius:3px;font-size:1rem;width:20%;height:35px;";
}
function checkGood2()
{
	var p2=document.getElementById("phone2");
	if(p2.value.length==6)p2.style="border: 2px solid #00cc0c;border-radius:3px;font-size:1rem;width:36.5%;height:35px;";
	else p2.style="border: 2px solid #ff1100;border-radius:3px;font-size:1rem;width:36.5%;height:35px;";
}
function checkSubmit()
{
	var p1=document.getElementById("name");
	var p2=document.getElementById("phone1");
	var p3=document.getElementById("phone2");
	var p4=document.getElementById("address2");
	if(p1.value.length>0&&p2.value.length==2&&p3.value.length==6&&p4.value.length>0)
	{
		document.getElementById("button1").disabled = false;
	}
	else
	{
		document.getElementById("button1").disabled = true;
	}
}
function filterDigit(element,mark)
{
	var text=element.value;
	var newText="";
	if(text.length>0)
	{
		for (let i = 0; i < text.length; i++)
		{
			if(isArabicDigit(text[i]))newText+=text[i];
			else if(Number(text[i])||text[i]=="0")newText+=text[i];
		}
		element.value=newText;
		if(mark==2&&newText.length>6)element.value=newText.substring(0,6);
	}
}
function distribute(cat)
{
	document.getElementById('inputsearch').value="";
	document.getElementById('numberitems').innerHTML="";

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
		<div class="container">
			<a href="javascript:addProductToCart('product1',29000);"><img class="image" src="png/products/product3.png" width=100 height=100></a>
			<a href="javascript:removeProductFromCart('product1');"><img id="cartproduct1"class="cart" style="display:none;"src="png/cart.png" width=100 height=100></a>
			<p id="imagename"class="imagename">name</p>
			<p class="overlay"id="overlay" style="font-size:0.8rem;">120,000 L.L.</p>
		</div>

		*/
			var div= document.createElement("div");
			div.className="container";
			
			let vision="";
			if(existInMyCart(product.name))vision="block";
			else vision="none";
			
			var p=document.createElement("p");
			p.className="imagename";
			p.style="font-size:21px;white-space: nowrap;";
			p.innerHTML=product.name;
			
			var p2=document.createElement("p");
			p2.className="overlay";
			p2.id="overlay";
			p2.style="font-size:21px;white-space: nowrap;";
			p2.innerHTML=numberComma(product.price)+" L.L.";
			
			div.append(p);
			page.append(div);
			let w=p.clientWidth;
			w-=100;
			if(w>0)w=parseInt(w/2);
			else w=0;
			
			var a=document.createElement("a");
			a.href="javascript:addProductToCart("+product.id+",'"+product.name+"',"+product.price+","+product.pngExist+");";
			if(product.pngExist)a.innerHTML="<img style=position:relative;left:"+w+"px;class='image' src='png/products/"+product.id+".png' width=100 height=100>";
			else a.innerHTML="<img style=position:relative;left:"+w+"px;class='image' src='png/products/0.png' width=100 height=100>";
			
			var a2=document.createElement("a");
			a2.href="javascript:removeProductFromCart('"+product.name+"',"+product.price+");";
			a2.innerHTML="<img id='cart"+product.name+"' class='cart' style='left:"+w+"px;display:"+vision+"'src='png/cart.png'>";
			
			div.append(a);
			div.append(a2);
			div.append(p);
			div.append(p2);
			page.append(div);
		}
	}
}
function distributeAll()
{
	var page=document.getElementById("page");
	page.innerHTML="";
	const topnav=document.querySelectorAll("#topnav a[href]");
	for(let j=0;j<topnav.length;j++)topnav[j].className="";
	if(document.getElementById('inputsearch').value.length==0)
	{
		document.getElementById('numberitems').innerHTML="";
	}
	else
	{
		var items=0;
		for (let i = 0; i < products.length; i++) 
		{
			const product = products[i];
			if(products[i].name.toLowerCase().includes(document.getElementById('inputsearch').value.toLowerCase()))
			{
				items++;
				var div= document.createElement("div");
				div.className="container";
				
				let vision="";
				if(existInMyCart(product.name))vision="block";
				else vision="none";
				
				var p=document.createElement("p");
				p.className="imagename";
				p.style="font-size:21px;white-space: nowrap;";
				p.innerHTML=product.name;
				
				var p2=document.createElement("p");
				p2.className="overlay";
				p2.id="overlay";
				p2.style="font-size:21px;white-space: nowrap;";
				p2.innerHTML=numberComma(product.price)+" L.L.";
				
				div.append(p);
				page.append(div);
				let w=p.clientWidth;
				w-=100;
				if(w>0)w=parseInt(w/2);
				else w=0;
				
				var a=document.createElement("a");
				a.href="javascript:addProductToCart("+product.id+",'"+product.name+"',"+product.price+","+product.pngExist+");";
				if(product.pngExist)a.innerHTML="<img style=position:relative;left:"+w+"px;class='image' src='png/products/"+product.id+".png' width=100 height=100>";
				else a.innerHTML="<img style=position:relative;left:"+w+"px;class='image' src='png/products/0.png' width=100 height=100>";
				
				var a2=document.createElement("a");
				a2.href="javascript:removeProductFromCart('"+product.name+"',"+product.price+");";
				a2.innerHTML="<img id='cart"+product.name+"' class='cart' style='left:"+w+"px;display:"+vision+"'src='png/cart.png'>";
				
				div.append(a);
				div.append(a2);
				div.append(p);
				div.append(p2);
				page.append(div);
			}
			document.getElementById('numberitems').innerHTML="items found : "+items;

		}
	}
}
function distributeCategories()
{
	if((document.documentElement.clientWidth/document.documentElement.clientHeight)<0.62)screen.orientation.lock('landscape').catch((e) => alert(e));
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
	document.getElementById('inputsearch').value="";
	document.getElementById('numberitems').innerHTML="";
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
/*
	<div class="container">
		<img class="prod"width="100"height="100"src="png/products/product2.png">
		<a href="javascript:plus('1');"><img class="plus" src="png/plus.png" width=20 height=20></a>
		<a href="javascript:minus('1');"><img class="minus" src="png/minus.png" width=20 height=20></a>
		<a href="javascript:remove('1');"><img class="remove" src="png/delete.png" width=25 height=25></a>
		<a href="javascript:quantity('product');"><p id="quantity"class="quantity">1</p></a>
		<p id="quantity"class="quantity">1</p>
		<p id="imagename"class="iamgename">name</p>
		<p id="product2"class="overlay">150,000,000 L.L.</p>
	</div>

*/	
		for (let i = 0; i < mycart.length; i++) 
		{
			const product = mycart[i];
		
			//<div class="container">
			var div= document.createElement("div");
			div.className="container";
			
			//<img class="prod"width="100"height="100"src="png/products/product2.png">
			var img = document.createElement("img");
			img.className="prod";
			img.width="100";
			img.height="100";
			if(product.pngExist)img.src = "png/products/"+product.id+".png";
			else img.src = "png/products/0.png";
			div.append(img);
			
			//<a href="javascript:plus('1');"><img class="plus" src="png/plus.png" width=20 height=20></a>
			var a=document.createElement("a");
			a.href="javascript:plus('"+product.name+"');";
			a.innerHTML="<img class='plus'width='20'height='20'src='png/plus.png'>";
			div.append(a);
			
			//<a href="javascript:minus('1');"><img class="minus" src="png/minus.png" width=20 height=20></a>
			a=document.createElement("a");
			a.href="javascript:minus('"+product.name+"');";
			a.innerHTML="<img class='minus'width='20'height='20'src='png/minus.png'>";
			div.append(a);

			//<a href="javascript:remove('1');"><img class="remove" src="png/delete.png" width=25 height=25></a>
			a=document.createElement("a");
			a.href="javascript:remove('"+product.name+"');";
			a.innerHTML="<img class='remove'width='25'height='25'src='png/delete.png'>";
			div.append(a);

			//<a href="javascript:quantity('product');"><p id="quantity"class="quantity">1</p></a>
			a=document.createElement("a");
			a.href="javascript:quantity('quantity"+product.name+"');";
			a.innerHTML="<p id='quantity"+product.name+"'class='quantity'>&nbsp&nbsp"+product.quantity+"&nbsp&nbsp</p>";
			div.append(a);
			
			//<p id="imagename"class="imagename">name</p>
			p=document.createElement("p");
			p.className="imagename";
			p.style="font-size:21px;white-space: nowrap;";
			p.innerHTML=product.name;
			div.append(p);
			
			//<p id="product2"class="overlay">150,000,000 L.L.</p>
			p=document.createElement("p");
			p.id=product.name;
			p.style="font-size:21px;white-space: nowrap;";
			p.className="overlay";
			p.innerHTML=numberComma(product.price*product.quantity)+" L.L.";
			div.append(p);
			
			page.append(div);
		}
		updateTotal
	}
}
function plus(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)mycart[i].quantity++;
	}
	distributeMyCart();
	updateTotal();
}
function minus(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)
		{
			if(product.quantity>1)mycart[i].quantity--;
		}
	}
	distributeMyCart();
	updateTotal();
}
function remove(name)
{
	var dict=[];
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name);
		else dict.push(mycart[i]);
	}
	mycart=dict.slice();
	distributeMyCart();
	updateTotal();
}
function quantity(prodname)
{
	let quantvalue=document.getElementById(prodname).innerHTML;
	let quantity = prompt("Please enter quantity to product:"+prodname.substring(8,prodname.length), quantvalue.substring(12,quantvalue.length-12));
	quantity=quantity.trim();
	if(quantity=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (quantity != null && !isNaN(quantity)) 
	{
		if(Number(quantity)>0)
		{
			updateMyCartQuantity(prodname.substring(8,prodname.length),parseInt(quantity));
			document.getElementById(prodname).innerHTML ="&nbsp&nbsp"+parseInt(quantity)+"&nbsp&nbsp";
			document.getElementById(prodname.substring(8,prodname.length)).innerHTML =numberComma(getPriceMyCart(prodname.substring(8,prodname.length))*parseInt(quantity))+" L.L.";
		}	
		else alert("You Must Enter Number Greater Than Zero !!!");
	}
	else
	{
		alert("Only Numbers is Allowed !!!");
	}
}
function getPhone()
{
	let phone = prompt("Please enter your phone number:must be of 8 digits e.g. 76123456");
	phone=phone.trim();
	if(phone=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (phone != null && !isNaN(phone)) 
	{
		if(Number(phone)>0&&phone.length==8)
		{
			document.getElementById("phonenumber").innerHTML=phone;
			getCustomerName();
		}	
		else alert("You Must Enter Number of 8 digits !!!");
	}
	else
	{
		alert("Only Numbers is Allowed !!!");
	}
}
function getCustomerName()
{
	let customer = prompt("Please enter your name");
	customer=customer.trim();
	if(customer=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (customer.length<30) 
	{
		document.getElementById("customername").innerHTML=customer;
		getAddress();
	}
	else
	{
		alert("Name is too long must be less than 30 !!!");
	}
}
function getAddress()
{
	let address = prompt("Please enter your address");
	address=address.trim();
	if(address=="")
	{
		alert("Empty Value Not Allowed !!!");
	}
	else if (address.length<60) 
	{
		document.getElementById("address").innerHTML=address;
		getValue();
		document.form.submit();
	}
	else
	{
		alert("Address is too long must be less than 60 !!!");
	}
}
function addProductToCart(idd,nom,pr,exist)
{
	var dict = [];
	let found=false;
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==nom)found=true;
		else dict.push(mycart[i]);
	}
	if(!found)
	{
		let row={id:idd,name:nom,quantity:1,price:pr,pngExist:exist};
		dict.push(row);
		mycart = dict.slice();
		document.getElementById("cart"+nom).style.display = "block";
	}
	updateTotal();
}
function removeProductFromCart(nom,pr)
{
	var dict = [];
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==nom)
		{
		}
		else dict.push(mycart[i]);
	}
	mycart = dict.slice();
	document.getElementById("cart"+nom).style.display = "none";
	updateTotal();
}
function updateTotal()
{
	let total=0;
	for (let i = 0; i < mycart.length; i++) 
	{
		total+=mycart[i].price*mycart[i].quantity;
	}
	var b=document.getElementById("total");
	b.innerHTML=""+numberComma(total);
	if(mycart.length==0)
	{
		var f=document.getElementById("form");
		f.style="display:none;";
	}
	else 
	{
		var f=document.getElementById("form");
		f.style="display:block;";
	}
	return total;
}
function updateMyCartQuantity(name,quant)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)mycart[i].quantity=quant;
	}
	updateTotal();
}
function getPriceMyCart(name)
{
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==name)return mycart[i].price;
	}
}
function existInMyCart(nom)
{
	let exist=false;
	for (let i = 0; i < mycart.length; i++) 
	{
		const product = mycart[i];
		if(product.name==nom)exist=true;
	}
	return exist;
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
const categories=
[
{ name: 'أعشاب'},
{ name: 'سكاكر'},
{ name: 'أجبان'},
{ name: 'مواد غذائية'},
{ name: 'مشروبات'},
{ name: 'منظفات'},
{ name: 'مواد أخرى'},
{ name: 'دخان'}
];
const products=
[
{ id: 1,name:'صلصة يمامة 660غ',category:'مواد غذائية',price:144000,pngExist:true},
{ id: 3,name:'زهورات العطارةالكركديه',category:'أعشاب',price:67500,pngExist:true},
{ id: 4,name:'زهورات العطارة خ ملينة',category:'أعشاب',price:67500,pngExist:true},
{ id: 5,name:'زهورات العطارة موريجنا',category:'أعشاب',price:67500,pngExist:true},
{ id: 6,name:'زهورات العطارة ز شامية',category:'أعشاب',price:67500,pngExist:true},
{ id: 7,name:'زهورات العطارة زنجبيل وعسل',category:'أعشاب',price:67500,pngExist:true},
{ id: 8,name:'زهورات العطارة بابونج',category:'أعشاب',price:67500,pngExist:true},
{ id: 9,name:'زهورات العطارة كمون وليمون',category:'أعشاب',price:67500,pngExist:true},
{ id: 11,name:'كاريوكا 400غرام',category:'مواد غذائية',price:476100,pngExist:true},
{ id: 13,name:'معجون غادةحلاقة',category:'منظفات',price:90000,pngExist:true},
{ id: 15,name:'new park chocolate',category:'مشروبات',price:25200,pngExist:true},
{ id: 16,name:'new park strawberry',category:'مشروبات',price:25200,pngExist:true},
{ id: 17,name:'new park biscuits',category:'مشروبات',price:25200,pngExist:true},
{ id: 22,name:'ميونيز ويت بل 1000مل',category:'مواد غذائية',price:387000,pngExist:true},
{ id: 23,name:'ميونيز ويت بل 500مل',category:'مواد غذائية',price:180000,pngExist:true},
{ id: 25,name:'دومينغو 200 غرام',category:'مشروبات',price:180000,pngExist:true},
{ id: 26,name:'دومينغو 400غرام',category:'مشروبات',price:427500,pngExist:true},
{ id: 27,name:'زيت سيدي هشام 1 ليتر',category:'مواد غذائية',price:495000,pngExist:true},
{ id: 28,name:'زيت سيدي هشام 2 ليتر',category:'مواد غذائية',price:981000,pngExist:true},
{ id: 32,name:'زيت الوزير 3ليتر',category:'مواد غذائية',price:1800000,pngExist:true},
{ id: 35,name:'اطلس محارم',category:'مواد أخرى',price:79200,pngExist:true},
{ id: 39,name:'سيف خشن',category:'منظفات',price:42300,pngExist:true},
{ id: 42,name:'شوربا تاج دجاج',category:'مواد غذائية',price:39600,pngExist:true},
{ id: 43,name:'قطن اذنين',category:'مواد أخرى',price:20700,pngExist:true},
{ id: 44,name:'درينا مانغا ظرف',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 45,name:'درينا ظرف ورد',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 46,name:'درينا ظرف فريز',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 47,name:'درينا ظرف توت',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 48,name:'درينا ظرف اناناس',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 49,name:'درينا ظرف الغوافة',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 50,name:'درينا ظرف تروبيكال',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 51,name:'درينا ظرف برتقال',category:'مواد غذائية',price:19800,pngExist:true},
{ id: 53,name:'قشقوان رونا300غرام',category:'أجبان',price:297900,pngExist:true},
{ id: 54,name:'ميونيز هوليدي صغير',category:'مواد غذائية',price:67500,pngExist:true},
{ id: 55,name:'coffee creamer400g',category:'مواد غذائية',price:108000,pngExist:true},
{ id: 57,name:'اودكس',category:'منظفات',price:117000,pngExist:true},
{ id: 59,name:'بريل600مل',category:'منظفات',price:85500,pngExist:true},
{ id: 60,name:'دومتي 250غرام',category:'أجبان',price:58500,pngExist:true},
{ id: 64,name:'رمبو',category:'منظفات',price:211500,pngExist:true},
{ id: 67,name:'تونا deroniحر',category:'مواد غذائية',price:118800,pngExist:true},
{ id: 68,name:'تون deroni ',category:'مواد غذائية',price:121500,pngExist:true},
{ id: 70,name:'اودكس غالون4ك',category:'منظفات',price:315000,pngExist:true},
{ id: 74,name:'اندومي 75غ',category:'مواد غذائية',price:25200,pngExist:true},
{ id: 77,name:'اندومي كاري 75غ',category:'مواد غذائية',price:24300,pngExist:true},
{ id: 80,name:'كتشب xtra 2.2;',category:'مواد غذائية',price:297000,pngExist:true},
{ id: 83,name:'برايفت9',category:'مواد أخرى',price:81000,pngExist:true},
{ id: 84,name:'بريفت 8',category:'مواد أخرى',price:58500,pngExist:true},
{ id: 86,name:'مماسح ارض',category:'منظفات',price:45000,pngExist:true},
{ id: 87,name:'ليف استحمام',category:'منظفات',price:85500,pngExist:true},
{ id: 88,name:'معكرونة reggia',category:'مواد غذائية',price:43200,pngExist:true},
{ id: 91,name:'حمص مطحون',category:'مواد غذائية',price:58500,pngExist:true},
{ id: 92,name:'بازيلا شتورا صغير',category:'مواد غذائية',price:54000,pngExist:true},
{ id: 93,name:'ملح pearl',category:'مواد غذائية',price:18000,pngExist:true},
{ id: 94,name:'بازيلا شتورا850 غرام ',category:'مواد غذائية',price:99000,pngExist:true},
{ id: 95,name:'فول شتورا850',category:'مواد غذائية',price:108000,pngExist:true},
{ id: 96,name:'فول شتورا 400غرام',category:'مواد غذائية',price:49500,pngExist:true},
{ id: 97,name:'فول مع حمص شتورا 400 غرام',category:'مواد غذائية',price:55800,pngExist:true},
{ id: 98,name:'حمص حب شتورا',category:'مواد غذائية',price:59400,pngExist:true},
{ id: 99,name:'فول مع حمص شتورا 600 غرام',category:'مواد غذائية',price:72000,pngExist:true},
{ id: 100,name:'فول شتورا 600غرام',category:'مواد غذائية',price:67500,pngExist:true},
{ id: 104,name:'ميونيز dollys 250ml',category:'مواد غذائية',price:121500,pngExist:true},
{ id: 106,name:'هنية دجاج 1 ك',category:'مواد غذائية',price:153000,pngExist:true},
{ id: 107,name:'هنية بقر 340غ',category:'مواد غذائية',price:108000,pngExist:true},
{ id: 108,name:'هنية دجاج 340',category:'مواد غذائية',price:108000,pngExist:true},
{ id: 110,name:'هنية بقر 200غ',category:'مواد غذائية',price:81000,pngExist:true},
{ id: 111,name:'nutella630g',category:'مواد غذائية',price:458999,pngExist:true},
{ id: 112,name:'nutella400غ',category:'مواد غذائية',price:306000,pngExist:true},
{ id: 113,name:'صلصة petti',category:'مواد غذائية',price:108000,pngExist:true},
{ id: 114,name:'فطر شرائح glendy',category:'مواد غذائية',price:58500,pngExist:true},
{ id: 152,name:'زيت bell food-5 ليتر',category:'مواد غذائية',price:589500,pngExist:true},
{ id: 161,name:'جبنة قشقوان-رونا 600 غرام',category:'أجبان',price:522000,pngExist:true},
{ id: 311,name:'jordina red',category:'سكاكر',price:19800,pngExist:true},
{ id: 342,name:'زيت الوزير 0.5ل',category:'مواد غذائية',price:387000,pngExist:true},
{ id: 379,name:'بسكويت ديو',category:'سكاكر',price:90000,pngExist:true},
{ id: 386,name:'علكة cloretsالنعناع',category:'سكاكر',price:30600,pngExist:true},
{ id: 388,name:'علكة clorest نعناع اصلي',category:'سكاكر',price:29700,pngExist:true},
{ id: 390,name:'علكة clorestقرفة',category:'سكاكر',price:29700,pngExist:true},
{ id: 394,name:'سكيتلز أحمر',category:'سكاكر',price:58500,pngExist:true},
{ id: 402,name:'M&M chocolate',category:'سكاكر',price:58500,pngExist:true},
{ id: 410,name:'البيلا كيك',category:'سكاكر',price:19800,pngExist:true},
{ id: 412,name:'albeni 30%',category:'سكاكر',price:32400,pngExist:true},
{ id: 416,name:'albeni كيك',category:'سكاكر',price:40500,pngExist:true},
{ id: 422,name:'ozmo بيضة',category:'سكاكر',price:66600,pngExist:true},
{ id: 424,name:'ozmo club',category:'سكاكر',price:45000,pngExist:true},
{ id: 440,name:'digestive ',category:'سكاكر',price:58500,pngExist:true},
{ id: 445,name:'damla ch',category:'سكاكر',price:4000,pngExist:true},
{ id: 452,name:'علكة مينتوس 3dp',category:'سكاكر',price:33300,pngExist:true},
{ id: 453,name:'علكة مينتوس 3dب',category:'سكاكر',price:33300,pngExist:true},
{ id: 454,name:'مينتوس ice n',category:'سكاكر',price:40500,pngExist:true},
{ id: 455,name:'مينتوس ice n2',category:'سكاكر',price:40500,pngExist:true},
{ id: 456,name:'مينتوس ice r',category:'سكاكر',price:40500,pngExist:true},
{ id: 461,name:'kombo',category:'سكاكر',price:41400,pngExist:true},
{ id: 466,name:'leo',category:'سكاكر',price:49500,pngExist:true},
{ id: 494,name:'kinder joy p',category:'سكاكر',price:72000,pngExist:true},
{ id: 500,name:'metro 40%',category:'سكاكر',price:29700,pngExist:true},
{ id: 508,name:'unica ',category:'سكاكر',price:15300,pngExist:true},
{ id: 516,name:'granolies p',category:'سكاكر',price:39600,pngExist:true},
{ id: 517,name:'granolies oreo',category:'سكاكر',price:39600,pngExist:true},
{ id: 518,name:'granolies choco',category:'سكاكر',price:39600,pngExist:true},
{ id: 524,name:'dabke original',category:'سكاكر',price:12600,pngExist:true},
{ id: 525,name:'yan yan',category:'سكاكر',price:90000,pngExist:true},
{ id: 526,name:'mastro kappa',category:'سكاكر',price:18000,pngExist:true},
{ id: 534,name:'no 1',category:'سكاكر',price:25200,pngExist:true},
{ id: 553,name:'ulker  kakaolu',category:'سكاكر',price:58500,pngExist:true},
{ id: 554,name:'saklikoy',category:'سكاكر',price:41400,pngExist:true},
{ id: 555,name:'toren cocoa',category:'سكاكر',price:27000,pngExist:true},
{ id: 557,name:'toren strawberry',category:'سكاكر',price:27000,pngExist:true},
{ id: 559,name:'maltesers',category:'سكاكر',price:67500,pngExist:true},
{ id: 564,name:'junior',category:'سكاكر',price:36000,pngExist:true},
{ id: 565,name:'adicto',category:'سكاكر',price:29700,pngExist:true},
{ id: 567,name:'wafe up cocoa',category:'سكاكر',price:35100,pngExist:true},
{ id: 568,name:'wafe up strawberry',category:'سكاكر',price:33300,pngExist:true},
{ id: 569,name:'wafe up d choco',category:'سكاكر',price:33300,pngExist:true},
{ id: 571,name:'gofret kakaolu',category:'سكاكر',price:22500,pngExist:true},
{ id: 574,name:'tuttifrutti',category:'سكاكر',price:31499,pngExist:true},
{ id: 575,name:'kitkat',category:'سكاكر',price:45000,pngExist:true},
{ id: 577,name:'ulker جارور احمر',category:'سكاكر',price:45000,pngExist:true},
{ id: 581,name:'bounty ',category:'سكاكر',price:81000,pngExist:true},
{ id: 583,name:'mars',category:'سكاكر',price:54000,pngExist:true},
{ id: 584,name:'twix',category:'سكاكر',price:54000,pngExist:true},
{ id: 585,name:'laviva',category:'سكاكر',price:31499,pngExist:true},
{ id: 588,name:'torku',category:'سكاكر',price:36000,pngExist:true},
{ id: 592,name:'biscolata duomax',category:'سكاكر',price:49500,pngExist:true},
{ id: 654,name:'olalla choco',category:'سكاكر',price:7000,pngExist:true},
{ id: 1012,name:'milka bubbly white',category:'سكاكر',price:76500,pngExist:true},
{ id: 1013,name:'milka oreo choco',category:'سكاكر',price:90000,pngExist:true},
{ id: 1014,name:'milka tuc',category:'سكاكر',price:65700,pngExist:true},
{ id: 1018,name:'سيدرز كرتون فضي',category:'دخان',price:64800,pngExist:true},
{ id: 1019,name:'سيدرز كرتون ازرق',category:'دخان',price:64800,pngExist:true},
{ id: 1020,name:'سيدرز فضي طويل',category:'دخان',price:64800,pngExist:true},
{ id: 1024,name:'كنت فضي',category:'دخان',price:119700,pngExist:true},
{ id: 1025,name:'سيدرز قديم',category:'دخان',price:59400,pngExist:true},
{ id: 1029,name:'skittels prple',category:'سكاكر',price:25000,pngExist:true},
{ id: 1058,name:'ozmo popsy',category:'سكاكر',price:31499,pngExist:true},
{ id: 1074,name:'jordina 3 s',category:'سكاكر',price:19800,pngExist:true},
{ id: 1079,name:'albeni tane tane',category:'مشروبات',price:38700,pngExist:true},
{ id: 1112,name:'هالي ',category:'سكاكر',price:22500,pngExist:true},
{ id: 1113,name:'ديو كاكو',category:'سكاكر',price:90000,pngExist:true},
{ id: 1117,name:'rulokat 9',category:'سكاكر',price:39600,pngExist:true},
{ id: 1120,name:'lotus t',category:'سكاكر',price:119700,pngExist:true},
{ id: 1121,name:'skittels bite red',category:'سكاكر',price:7000,pngExist:true},
{ id: 1146,name:'ملبورو ورق احمر',category:'دخان',price:149400,pngExist:true},
{ id: 1147,name:'ملبورو ورق ابيض',category:'دخان',price:149400,pngExist:true},
{ id: 1148,name:'ملبورو touch',category:'دخان',price:125099,pngExist:true},
{ id: 1149,name:'ملبورو كرفت احمر',category:'دخان',price:109800,pngExist:true},
{ id: 1150,name:'ملبورو كرفت ابيض',category:'دخان',price:109800,pngExist:true},
{ id: 1151,name:'وينستون ازرق compact',category:'دخان',price:106200,pngExist:true},
{ id: 1153,name:'ونستون ازرق لايت',category:'دخان',price:120600,pngExist:true},
{ id: 1154,name:'ونستون لايت رفيع',category:'دخان',price:120600,pngExist:true},
{ id: 1155,name:'ونشتر ورق',category:'دخان',price:85500,pngExist:true},
{ id: 1156,name:'ونشتر كرتون ',category:'دخان',price:85500,pngExist:true},
{ id: 1157,name:'مارلبورو احمر كرتون',category:'دخان',price:229499,pngExist:true},
{ id: 1158,name:'مارلبورو ابيض كرتون',category:'دخان',price:261000,pngExist:true},
{ id: 1159,name:'دافيدوف غولد',category:'دخان',price:234000,pngExist:true},
{ id: 1160,name:'دافيدوف ازرق ايفولف',category:'دخان',price:114300,pngExist:true},
{ id: 1161,name:'دافيدوف احمر ايفولف',category:'دخان',price:114300,pngExist:true},
{ id: 1162,name:'اليغنس ازرق رفيع',category:'دخان',price:54000,pngExist:true},
{ id: 1164,name:'سيدرز فضي رفيع',category:'دخان',price:64800,pngExist:true},
{ id: 1165,name:'سيدرز اسود رفيع',category:'دخان',price:64800,pngExist:true},
{ id: 1166,name:'سيدرز ازرق رفيع',category:'دخان',price:64800,pngExist:true},
{ id: 1171,name:'نخلة تفاحتين',category:'دخان',price:129600,pngExist:true},
{ id: 1172,name:'مزايا حامض ونعنع',category:'دخان',price:88200,pngExist:true},
{ id: 1173,name:'مزايا تفاحتين',category:'دخان',price:88200,pngExist:true},
{ id: 1174,name:'خليل مامون',category:'دخان',price:84600,pngExist:true},
{ id: 1193,name:'pik one candy',category:'سكاكر',price:40500,pngExist:true},
{ id: 1260,name:'davidoff silver',category:'دخان',price:114300,pngExist:true},
{ id: 1261,name:'nakhlaكف',category:'دخان',price:649800,pngExist:true},
{ id: 1262,name:'tofiluk',category:'سكاكر',price:16200,pngExist:true},
{ id: 1267,name:'gandour lucky555',category:'سكاكر',price:9000,pngExist:true},
{ id: 1273,name:'damla sour belt',category:'سكاكر',price:49500,pngExist:true},
{ id: 1290,name:'دخان ديفيدوف ابيض رفيع',category:'دخان',price:234000,pngExist:true},
{ id: 1307,name:'cudbury oroe',category:'سكاكر',price:13500,pngExist:true},
{ id: 1351,name:'alpella nuga bar 35g',category:'سكاكر',price:18000,pngExist:true},
{ id: 1371,name:'milka حليب',category:'سكاكر',price:90000,pngExist:true},
{ id: 1390,name:'kinder country',category:'سكاكر',price:45000,pngExist:true},
{ id: 1392,name:'mentos orange ice',category:'سكاكر',price:40500,pngExist:true},
{ id: 1395,name:'mentos rule نعناع ',category:'سكاكر',price:35100,pngExist:true},
{ id: 1407,name:'eti gold',category:'سكاكر',price:5000,pngExist:true},
{ id: 1489,name:'كيك اولالا سوفلي ',category:'سكاكر',price:49500,pngExist:true},
{ id: 1548,name:'ozmo burger',category:'سكاكر',price:45000,pngExist:true},
{ id: 1558,name:'milka oreostrw',category:'سكاكر',price:85500,pngExist:true},
{ id: 1567,name:'kinder delice 2',category:'سكاكر',price:67500,pngExist:true},
{ id: 1699,name:'galaxy milk ',category:'سكاكر',price:81000,pngExist:true},
{ id: 1774,name:'unica creamy vanillia ',category:'سكاكر',price:15300,pngExist:true},
{ id: 1775,name:'peanut signature ',category:'سكاكر',price:27000,pngExist:true},
{ id: 1776,name:'dark signature ',category:'سكاكر',price:27000,pngExist:true},
{ id: 1779,name:'hazelnut signature ',category:'سكاكر',price:27000,pngExist:true},
{ id: 1780,name:'tsipers icy flakes ',category:'سكاكر',price:14400,pngExist:true},
{ id: 1781,name:'tsipers choco crisps',category:'سكاكر',price:14400,pngExist:true},
{ id: 1782,name:'poppins honey flakes',category:'سكاكر',price:13500,pngExist:true},
{ id: 1783,name:'poppins frosted flakes ',category:'سكاكر',price:13500,pngExist:true},
{ id: 1784,name:'choco bits ',category:'سكاكر',price:13500,pngExist:true},
{ id: 1785,name:'big bang white chocolate ',category:'سكاكر',price:13500,pngExist:true},
{ id: 1786,name:'big bang ,ilk chocolate ',category:'سكاكر',price:13500,pngExist:true},
{ id: 1788,name:'big bamg choco flakes ',category:'سكاكر',price:14400,pngExist:true},
{ id: 1895,name:'شانكي',category:'سكاكر',price:49500,pngExist:true},
{ id: 1913,name:'go fresh',category:'سكاكر',price:5000,pngExist:true},
{ id: 1950,name:'هولز شركة',category:'سكاكر',price:34200,pngExist:true},
{ id: 1951,name:'هولز شركة ازرق',category:'سكاكر',price:25200,pngExist:true},
{ id: 1957,name:'mentos 3d نعنع',category:'سكاكر',price:33300,pngExist:true},
{ id: 2076,name:'مزايا كف',category:'دخان',price:413999,pngExist:true},
{ id: 2093,name:'brilliant slim',category:'دخان',price:72000,pngExist:true},
{ id: 2104,name:'damla سور',category:'سكاكر',price:11000,pngExist:true},
{ id: 2106,name:'mentos',category:'سكاكر',price:32400,pngExist:true},
{ id: 2126,name:'okay caramel0 ',category:'سكاكر',price:20700,pngExist:true},
{ id: 2140,name:'كف مزايا حامض ونعنع',category:'دخان',price:413999,pngExist:true},
{ id: 2198,name:'okay strawbery ',category:'سكاكر',price:20700,pngExist:true},
{ id: 2212,name:'choco balls ',category:'سكاكر',price:14400,pngExist:true},
{ id: 2237,name:'gauloise احمر',category:'دخان',price:113400,pngExist:true},
{ id: 2241,name:'mastro peanut  ',category:'سكاكر',price:18000,pngExist:true},
{ id: 2296,name:'جوردنيا موز',category:'سكاكر',price:18000,pngExist:true},
{ id: 2297,name:'جوردنيا زبدة',category:'سكاكر',price:18000,pngExist:true},
{ id: 2304,name:'nouba',category:'سكاكر',price:22500,pngExist:true},
{ id: 2314,name:'ETi wanted',category:'سكاكر',price:20700,pngExist:true},
{ id: 2315,name:'ETi adicto gourmet',category:'سكاكر',price:45000,pngExist:true},
{ id: 2319,name:'TWIRL ',category:'سكاكر',price:94500,pngExist:true},
{ id: 2327,name:'بريك 4 اصابع',category:'سكاكر',price:27000,pngExist:true},
{ id: 2335,name:'سانيتا الباشا',category:'دخان',price:28800,pngExist:true},
{ id: 2421,name:'biscolata due max hazelnut',category:'سكاكر',price:45000,pngExist:true},
{ id: 2426,name:'pop cake',category:'سكاكر',price:36000,pngExist:true},
{ id: 2439,name:'biscolata moodd',category:'سكاكر',price:46800,pngExist:true},
{ id: 2467,name:'براوني intense',category:'سكاكر',price:300000,pngExist:true},
{ id: 2481,name:'winston silver رفيع',category:'دخان',price:120600,pngExist:true},
{ id: 2486,name:'BEBETO watermelon',category:'سكاكر',price:58500,pngExist:true},
{ id: 2487,name:'BEBETO pink&white',category:'سكاكر',price:58500,pngExist:true},
{ id: 2489,name:'BEBETO roller',category:'سكاكر',price:58500,pngExist:true},
{ id: 2495,name:'BEBETO sour worms',category:'سكاكر',price:64800,pngExist:true},
{ id: 2496,name:'BEBETO ocean park',category:'سكاكر',price:64800,pngExist:true},
{ id: 2498,name:'BEBETO berries',category:'سكاكر',price:64800,pngExist:true},
{ id: 2515,name:'cookies gandour ',category:'سكاكر',price:37800,pngExist:true},
{ id: 2516,name:'lucky 555 choco',category:'سكاكر',price:13500,pngExist:true},
{ id: 2572,name:'wafe up hazelnut',category:'سكاكر',price:33300,pngExist:true},
{ id: 2621,name:'gardena hazelnut',category:'سكاكر',price:67500,pngExist:true},
{ id: 2623,name:'gardena sandwish dark choco',category:'سكاكر',price:49500,pngExist:true},
{ id: 2624,name:'gardena sandwish milk vanilla',category:'سكاكر',price:45000,pngExist:true},
{ id: 2633,name:'extra peppermint',category:'سكاكر',price:45000,pngExist:true},
{ id: 2636,name:'extra white',category:'سكاكر',price:45000,pngExist:true},
{ id: 2639,name:'علكه غندور مستكه',category:'سكاكر',price:10800,pngExist:true},
{ id: 2640,name:'علكه غندور فواكه',category:'سكاكر',price:10800,pngExist:true},
{ id: 2642,name:'pik one',category:'سكاكر',price:13500,pngExist:true},
{ id: 2647,name:'دوفيدوف قديم',category:'دخان',price:234000,pngExist:true},
{ id: 2705,name:'biscolata stars ',category:'سكاكر',price:27000,pngExist:true},
{ id: 2715,name:'FLAKE',category:'سكاكر',price:33300,pngExist:true},
{ id: 2741,name:'mentos sour fruite',category:'سكاكر',price:36000,pngExist:true},
{ id: 2742,name:'wanted pops ',category:'سكاكر',price:27000,pngExist:true},
{ id: 2766,name:'safari',category:'سكاكر',price:18000,pngExist:true},
{ id: 2826,name:'marlboro crafted compact blue',category:'دخان',price:90000,pngExist:true},
{ id: 2890,name:'mentos water melon mini',category:'سكاكر',price:76500,pngExist:true},
{ id: 2891,name:'mentos strawbery mini ',category:'سكاكر',price:76500,pngExist:true},
{ id: 2892,name:'mentos  bubble mini ',category:'سكاكر',price:76500,pngExist:true},
{ id: 2893,name:'mentos fresh mint mini ',category:'سكاكر',price:76500,pngExist:true},
{ id: 2909,name:'milka oreo w',category:'سكاكر',price:75600,pngExist:true},
{ id: 2921,name:'snacks',category:'سكاكر',price:45000,pngExist:true},
{ id: 2993,name:'skittles yellow',category:'سكاكر',price:58500,pngExist:true},
{ id: 3011,name:'loacker sandwish hazelnut 25g',category:'سكاكر',price:49500,pngExist:true},
{ id: 3087,name:'loacker sandiwsh choco',category:'سكاكر',price:49500,pngExist:true},
{ id: 3099,name:'biscolate milk cream m',category:'سكاكر',price:24300,pngExist:true},
{ id: 3113,name:'poppins choco pops ',category:'سكاكر',price:13500,pngExist:true},
{ id: 3144,name:'mentos fresh ',category:'سكاكر',price:33300,pngExist:true},
{ id: 3169,name:'biscoff roll',category:'سكاكر',price:27000,pngExist:true},
{ id: 3170,name:'happy jo',category:'سكاكر',price:27000,pngExist:true},
{ id: 3171,name:'mallow pop marshmello',category:'سكاكر',price:27000,pngExist:true},
{ id: 3172,name:'toren coconut',category:'سكاكر',price:27000,pngExist:true},
{ id: 3173,name:'toren lemon',category:'سكاكر',price:62999,pngExist:true},
{ id: 3174,name:'toren orange',category:'سكاكر',price:40500,pngExist:true},
{ id: 3175,name:'jordina dream choco',category:'سكاكر',price:40500,pngExist:true},
{ id: 3187,name:'no :1 bllack',category:'سكاكر',price:18000,pngExist:true},
{ id: 3328,name:'oreo original *4',category:'سكاكر',price:29700,pngExist:true},
{ id: 3438,name:'crunch milk',category:'سكاكر',price:58500,pngExist:true},
{ id: 3467,name:'poppins cookies',category:'سكاكر',price:13500,pngExist:true},
{ id: 3510,name:'milkaa بندق',category:'سكاكر',price:90000,pngExist:true},
{ id: 3554,name:'snickers new',category:'سكاكر',price:58500,pngExist:true},
{ id: 3581,name:'hazelnut wooly booly',category:'سكاكر',price:15300,pngExist:true},
{ id: 3582,name:'dark wooly booly',category:'سكاكر',price:15300,pngExist:true},
{ id: 3583,name:'choco wooly booly',category:'سكاكر',price:15300,pngExist:true},
{ id: 3650,name:'ness 1',category:'سكاكر',price:25200,pngExist:true},
{ id: 3656,name:'ness 1 فستق حلبي ',category:'سكاكر',price:25200,pngExist:true},
{ id: 3687,name:'jellygum grape',category:'سكاكر',price:15300,pngExist:true},
{ id: 3768,name:'ozmo poxi ',category:'سكاكر',price:31499,pngExist:true},
{ id: 3786,name:'milka red',category:'سكاكر',price:90000,pngExist:true},
{ id: 3798,name:'لوتس 2 حبة',category:'سكاكر',price:31499,pngExist:true},
{ id: 3808,name:'منتوس فانتا',category:'سكاكر',price:52200,pngExist:true},
{ id: 3926,name:'kinder happy',category:'سكاكر',price:50400,pngExist:true},
{ id: 3927,name:'day break',category:'سكاكر',price:29700,pngExist:true},
{ id: 3932,name:'milka فراولة',category:'سكاكر',price:90000,pngExist:true},
{ id: 4061,name:'leo go 1',category:'سكاكر',price:90000,pngExist:true},
{ id: 4064,name:'m and m شوكولا',category:'سكاكر',price:90000,pngExist:true},
{ id: 4066,name:'milka سادة...',category:'سكاكر',price:90000,pngExist:true},
{ id: 4068,name:'milka luflee ',category:'سكاكر',price:90000,pngExist:true},
{ id: 4069,name:'milka riso',category:'سكاكر',price:90000,pngExist:true},
{ id: 4088,name:'popel coakie ',category:'سكاكر',price:19800,pngExist:true},
{ id: 4128,name:'ملبورو كرفت رفيع',category:'دخان',price:79200,pngExist:true},
{ id: 4134,name:'baunty dobel',category:'سكاكر',price:50000,pngExist:true},
{ id: 4137,name:'okay oreoo',category:'سكاكر',price:20700,pngExist:true},
{ id: 4148,name:'crumbz حبنة',category:'سكاكر',price:39600,pngExist:true},
{ id: 4149,name:'crumbz ملح',category:'سكاكر',price:39600,pngExist:true},
{ id: 4151,name:'crumbz باربيكيو',category:'سكاكر',price:39600,pngExist:true},
{ id: 4213,name:'galaxy flutes 1',category:'سكاكر',price:25200,pngExist:true},
{ id: 4257,name:'مبسم اركيلة النخلة',category:'دخان',price:39600,pngExist:true}
];
