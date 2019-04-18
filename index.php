<!doctype html><html><head>
  <meta charset=utf8>
  <script src=nombres_primers.js></script>
  <script src=format.js></script>
</head><body>

<h1>Nombres naturals &rarr; nombres primers (fins a <span id=limit></span>)</h1>
<div>
  <table id=taula border=1></table>
  <style>
    #taula {
      font-family:monospace;
      border-collapse:collapse;
    }
    #taula td, #taula th {
      height:15px;
      width:15px;
      text-align:center;
    }
    #taula th {
      background:lightgreen;
    }
  </style>
</div>

<?php include'caption.php'?>

<script>
  (function(){
    let n=2;   //inici
    let m=300; //final
    document.querySelector('#limit').innerHTML=m;

    //taula
    let t=document.querySelector('table#taula');
    let newRow=t.insertRow(-1);

    //llista tots els nombres primers menors que m
    let nombres_primers=llista(m);

    //headers
    newRow.insertCell(-1);
    nombres_primers.forEach(p=>{
      newRow.insertCell(-1).outerHTML='<th>'+p;
    });

    //score: number of divisors of number i
    let composability=[];
    let max_score=0;

    //content
    for(let i=n;i<=m;i++){
      //tradueix el nombre i
      let tra=tradueix(i);

      //expressa "i" com a producte de primers
      let producte=(function(){
        let primers=[];
        tra.forEach((f,k)=>{
          if(f){
            primers.push(nombres_primers[k]+(f==1?"":"<sup>"+f+"</sup>"));
          }
        });
        return primers.join(' · ');
      })();

      //nova fila
      let newRow=t.insertRow(-1);
      newRow.setAttribute('caption',producte);

      //color de fons fila
      let background=nombres_primers.indexOf(i)+1 ? "lightgreen":"";
      newRow.style.background=background;

      //primera cel·la
      newRow.insertCell(-1).outerHTML='<th>'+i;

      //exponents dels nombres primers
      tra.forEach(f=>{
        let color=f?"":"style=color:#ccc";
        newRow.insertCell(-1).outerHTML='<td '+color+'>'+f;
      });

      //score: divisors
      /*
      let score=divisors(i);
      if(score>max_score){
        max_score=score;
        composability.push({num:i,score});
      }
      */
    }
  })();
  Caption.listeners();
</script>
