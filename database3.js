import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

	const firebaseConfig = 
	{
	    apiKey: "AIzaSyCyizOZNUcbczGjh1P0sxn85LoiLI9Q0yw",
	    authDomain: "sahashop-97ae5.firebaseapp.com",
	    databaseURL: "https://sahashop-97ae5-default-rtdb.firebaseio.com",
	    projectId: "sahashop-97ae5",
	    storageBucket: "sahashop-97ae5.firebasestorage.app",
	    messagingSenderId: "620364206298",
	    appId: "1:620364206298:web:bb9a99e5e60e4be3dad5e3"
	};
	const app = initializeApp(firebaseConfig);
	import {getDatabase, set, get,update,remove,ref,runTransaction,child,onValue}
	from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

	const db=getDatabase();
	const dbref=ref(db);
	const counterRef = ref(db, 'globalCounter');
	
	onValue(counterRef, (snapshot) => 
	{
	    const likeCount = snapshot.val();
		globalThis.id=likeCount;
	});
	
	const maintenanceRef = ref(db, "maintenance/1");

	onValue(maintenanceRef, (snapshot) => 
	{
	    if (snapshot.exists()) 
		{
	        const data = snapshot.val();
			console.log(data.state);
	        if (data.state)window.location.href = "./index.html";
	    }
	});