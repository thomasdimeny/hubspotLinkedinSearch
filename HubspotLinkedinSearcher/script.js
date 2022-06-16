function contactSelector(){
	//need to pull name from html in row
	console.log("running");

    hoverElts = document.querySelectorAll("[data-onboarding=contact-name-cell]");
	//console.log(hoverElts.length); 
	//assign each element an onclick function that opens to their linkedin page!
	Array.from(hoverElts).forEach(b => {
		b.addEventListener("click", function() {
		//Grab their name from row in table
		var html = b.querySelector("a").innerText;
		console.log(html);
		console.log('running')
		//pass name to linkedin URL
		myWindow = window.open(`https://www.linkedin.com/search/results/all/?keywords=${html}&origin=GLOBAL_SEARCH_HEADER&sid=BME`, "myWindow", "width=400,height=500"); 
		});
	});	
}

  let button = document.createElement("button");
  button.innerHTML = "Click to refresh contacts";
  document.body.appendChild(button);
  button.onclick = function(){
	  contactSelector();
  }
 	

	
