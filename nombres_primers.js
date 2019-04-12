//comprova si 'n' és primer (boolean)
//  nombres_primers és l'array de nombres primers ja trobats anteriorment
function es_primer(n,nombres_primers){
  if(n<=1)  return false;//nombres negatius, 0 i 1 no són primers
  if(n<4)   return true; //2 i 3 són primers
  if(n%2==0)return false;//nombres parells no
  //si n es pot dividir per algun dels nombres primers que ja hem trobat: no és primer
  for(var i=0;i<nombres_primers.length;i++){
    if(n%nombres_primers[i]==0)return false;
  };
  //si supera el bucle és primer
  return true;
}

//calcula els primers nombres primers menors que 'limit'
function llista(limit){
  if(!limit)return false;

  //array on guardem els nombres primers que trobem
  var nombres_primers=[];

  //bucle fins a 'limit'
  for(var i=0;i<=limit;i++){
    if(es_primer(i,nombres_primers)){
      nombres_primers.push(i);
    }
  }

  return nombres_primers;
  /*
    test
    var llista_limit = llista(50);
    console.log(llista_limit);
  */
}

//expressa el nombre n com un "array d'exponents de nombres primers"
function tradueix(n){
  var traduccio=[]; //tindrà tants elements com nombres_primers més petits que ell
  var nombres_primers=llista(n);

  var acumulat=1; //construeix n a partir de p
  nombres_primers.forEach(p=>{
    var vegades=0;  //vegades que p pot dividir n
    var n_copia=n;  //copia n per anar-lo dividint
    while(n_copia%p==0){
      n_copia/=p;
      vegades++;
      acumulat*=p;
    }

    if(acumulat<n || (acumulat==n && vegades>0)){
      traduccio.push(vegades);
    }
  });

  return traduccio;
  /*
    var limit=40;
    console.log(limit,llista(limit));
    for(var i=2;i<limit;i++){
      var tra=tradueix(i);
      console.log(i,tra);
    }
  */
}

function divisors(n){
  var score=0;
  for(var i=0;i<=n;i++){
    if(n%i==0)
      score++;
  }
  return score;
}
