let h=0.1;
let n=3;
yt=0;
xt=0;
function fxy(x, y){
	return 1+((y-x)**2);
}

function iteration(xi, yi){
let k1 = fxy(xi, yi);
let k2 = fxy(xi+0.5*h, yi+0.5*(h*k1));
let k3 = fxy(xi+0.5*h, yi+0.5*(h*k2));
let k4 = fxy(xi+h, yi+h*k3);
y_iplus = yi+(h/6)*(k1+2*k2+2*k3+k4);
return y_iplus;
}


console.log("exposant "+2**3);
document.formulaire.addEventListener("submit", function(e){
	e.preventDefault();
   let vn = parseFloat(this.n.value);
   let hn = parseFloat(this.h.value);
   let x = parseFloat(this.x.value);
   let y = parseFloat(this.y.value);
      document.getElementById("output").textContent = "Veuillez remplir correctement toute les valeurs.";
   if(typeof(vn)=='number' && vn && typeof(hn)=='number' && hn  && typeof(x)=='number' && x && typeof(y)=='number' && y ){
   
   	for(let i=1; i<=vn+1; i++){
	console.log(xt)

     let yf = iteration(x, y); 
     let div = document.createElement("div");
     div.textContent = "Y"+i+"="+y;
	 document.getElementById("output").appendChild(div);
    x+=h;
        y = yf;
}
   }
   //console.log("x="+x+" y="+y+" n="+n+" h="+h)
})