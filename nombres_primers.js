//comprova si 'n' és primer (boolean)
//  nombres_primers és l'array de nombres primers ja trobats anteriorment
function es_primer(n,nombres_primers){
  if(n<=1)  return false;//nombres negatius, 0 i 1 no són primers
  if(n<4)   return true; //2 i 3 són primers
  if(n%2==0)return false;//nombres parells no
  //si n es pot dividir per algun dels nombres primers que ja hem trobat: no és primer
  for(let i=0;i<nombres_primers.length;i++){
    if(n%nombres_primers[i]==0) return false;
  };
  //si supera el bucle és primer
  return true;
}

//calcula els nombres primers menors que 'limit'
function llista(limit){
  if(!limit)return false;

  //nombres primers que anem trobant
  let nombres_primers=[2,3,5,7];

  //comprova si els nombres son primers fins a 'limit'
  for(let i=9;i<=limit;i+=2){
    if(es_primer(i,nombres_primers)){
      nombres_primers.push(i);
    }
  }

  return nombres_primers;
  /*
    test
    let llista_limit = llista(50);
    console.log(llista_limit);
  */
}

//expressa el nombre n com un "array d'exponents de nombres primers"
function tradueix(n){
  let traduccio=[]; //tindrà tants elements com nombres_primers més petits que ell
  let nombres_primers=llista(n);

  let acumulat=1; //construeix n a partir de p
  nombres_primers.forEach(p=>{
    let vegades=0;  //vegades que p pot dividir n
    let n_copia=n;  //copia n per anar-lo dividint
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
    let limit=40;
    console.log(limit,llista(limit));
    for(let i=2;i<limit;i++){
      let tra=tradueix(i);
      console.log(i,tra);
    }
  */
}

//calcula quants divisors té un número
function divisors(n){
  let score=0;
  for(let i=0;i<=n;i++){
    if(n%i==0)
      score++;
  }
  return score;
}
