// Portfolio Item FIlter

// const filterContainer=document.querySelector(".portfolio-filter"),
// 	  filterBtns=filterContainer.children,
// 	  totalFilterBtn=filterBtns.length,
// 	  portfolioItems=document.querySelectorAll(".portfolio-items"),
// 	  totalPortfolioItem=portfolioItems.length;
	 
	  
// 	  for(let i=0; i<totalFilterBtn; i++){
// 	  	filterBtns[i].addEventListener("click", function(){
// 	  		filterContainer.querySelector(".active").classList.remove("active");
// 	  		this.classList.add("active");

// 	  		const filterValue=this.getAttribute("data-filter");
// 	  		for (let k=0; k<totalPortfolioItem; k++){
// 	  			if(filterValue === portfolioItems[k].getAttribute("data-category")){
// 	  				portfolioItems[k].classList.remove("hide");
// 	  				portfolioItems[k].classList.add("show");
// 	  			}
// 	  			else{
// 	  				portfolioItems[k].classList.add("hide");
// 	  			}
// 	  		}
// 	  	})
// 	  }


// Testimonial slider

(() =>{

	const sliderContainer = document.querySelector(".testi-slider-container"),
	slides = sliderContainer.querySelectorAll(".testi-item");
	slideWidth = sliderContainer.offsetWidth,
	prevBtn = document.querySelector(".testi-slider-nav .prev"),
	nextBtn = document.querySelector(".testi-slider-nav .next");
	activeSlide = sliderContainer.querySelector(".testi-item.active");
	let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
	


	slides.forEach((slide) =>{
		slide.style.width = slideWidth + "px";
	})

	
	sliderContainer.style.width = slideWidth * slides.length + "px";

	nextBtn.addEventListener("click", ()=>{
		if(slideIndex === slides.length-1){
			slideIndex = 0;
		}
		else{
			slideIndex++;
		}
		slider();
	})
	prevBtn.addEventListener("click", ()=>{
		if(slideIndex === 0){
			slideIndex = slides.length-1;
		}
		else{
			slideIndex--;
		}
		slider();
	})

	function slider(){
		sliderContainer.querySelector(".testi-item.active").classList.remove("active");
		slides[slideIndex].classList.add("active");
		sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
	}
	slider();


})();