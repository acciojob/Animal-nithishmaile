//your JS code here. If required.
const imagesArray=["https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/cheetah.jpg","https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/elephant.jpg","https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/gorilla.jpg","https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/koala.jpg",
"https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/lion.jpg",
"https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/polar_bear.jpg",
"https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/tiger.jpg",
"https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/wolf.jpg", ]
const photoContainer=document.getElementById("photo-container");

const tempDom=document.createDocumentFragment()

for( let url of imagesArray){
	const div=document.createElement("div")
	div.style.backgroundImage=`url(${url})`
	div.style.width = "200px";      // example styling
  div.style.height = "200px";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.margin = "10px";
  div.style.borderRadius = "10px";
	tempDom.appendChild(div)
	
}

photoContainer.appendChild(tempDom)

