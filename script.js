let button = document.querySelector("button");
let reset = document.querySelector(".reset");
let smurf = document.querySelector(".smurf-img")
let title = document.querySelector(".Title");
let subtitle = document.querySelector(".Subtitle");
let QA = document.querySelector(".QA");
button.addEventListener("click", function () {
    console.log("work")

const desribe = document.querySelector('input[name="desribe"]:checked');
   console.log(desribe);
const desribeValue = desribe.value;
  console.log(desribeValue);
 
const known = document.querySelector('input[name="known"]:checked');
   console.log(known);
const knownValue = known.value;
  console.log(knownValue);
  

if(desribeValue === "smart" && knownValue === "leadership"){
  console.log("x");
  smurf.src = "https://pbs.twimg.com/media/BQhXsoSCEAE5dME.png";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Papa Smurf";
  QA.style.display = "none";
  button.style.display = "none";
  reset.style.display = "initial";

} else if (desribeValue === "clumsy" && knownValue === "kindness"){
    smurf.src = "https://pbs.twimg.com/media/BQiMb46CYAAjXZP.png";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Clumsy Smurf";
   QA.style.display = "none";
   button.style.display = "none";
   reset.style.display = "initial";

} else if (desribeValue === "charismatic" && knownValue === "kindness"){
    smurf.src = "https://pbs.twimg.com/media/BQg6KINCIAEOCSv.jpg";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Smurfette";
   QA.style.display = "none";
   button.style.display = "none";
   reset.style.display = "initial";

} else if (desribeValue === "smart" && knownValue === "kindness"){
    smurf.src = "https://pbs.twimg.com/media/BQg6KINCIAEOCSv.jpg";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Smurfette";
   QA.style.display = "none";
   button.style.display = "none";
   reset.style.display = "initial";
} else if (desribeValue === "smart" && knownValue === "knowledge"){

    smurf.src = "https://i.pinimg.com/736x/f8/a2/4a/f8a24ab7799022b1ecc6d4f5d5e50781.jpg";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Brainy Smurf";
   QA.style.display = "none"; 
  button.style.display = "none";
   reset.style.display = "initial";

}else if (desribeValue === "clumsy" && knownValue === "leadership"){
    smurf.src = "https://pbs.twimg.com/media/BQiMb46CYAAjXZP.png";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Clumsy Smurf";
   QA.style.display = "none"; 
  button.style.display = "none";
   reset.style.display = "initial";

}else if (desribeValue === "clumsy" && knownValue === "knowledge"){
    smurf.src = "https://pbs.twimg.com/media/BQiMb46CYAAjXZP.png";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Clumsy Smurf";
   QA.style.display = "none"; 
  button.style.display = "none";
   reset.style.display = "initial";

}else if (desribeValue === "charismatic" && knownValue === "knowledge"){
    smurf.src = "https://i.pinimg.com/736x/f8/a2/4a/f8a24ab7799022b1ecc6d4f5d5e50781.jpg";
  title.innerHTML = "You Are...";
  subtitle.innerHTML = "Brainy Smurf";
   QA.style.display = "none";
  button.style.display = "none";
   reset.style.display = "initial";

}else if (desribeValue === "charismatic" && knownValue === "leadership"){
    smurf.src = "https://pbs.twimg.com/media/BQhXsoSCEAE5dME.png";
  title.innerHTML = "You Are..."
  subtitle.innerHTML = "Papa Smurf";
   QA.style.display = "none"; 
  button.style.display = "none";
   reset.style.display = "initial";
}
  
});

reset.addEventListener("click", function () {
  reset.style.display = "none";
  title.innerHTML = "Which Smurf Are You?";
  subtitle.innerHTML = "Answer These Two Questions To Find Out!!";
  smurf.src = "https://jambareeqi.com/wp-content/uploads/2019/04/smurfs-b-e1556532380908.jpg"
  QA.style.display = "initial";
  button.style.display = "initial";
  });