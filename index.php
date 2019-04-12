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
    var n=2;   //inici
    var m=300; //final
    document.querySelector('#limit').innerHTML=m;

    //taula
    var t=document.querySelector('table#taula');
    var newRow=t.insertRow(-1);
    var nombres_primers=llista(m);

    //headers
    newRow.insertCell(-1);
    nombres_primers.forEach(p=>{
      newRow.insertCell(-1).outerHTML='<th>'+p;
    });

    //score: number of divisors of number i
    var composability=[];
    var max_score=0;

    //content
    for(var i=n;i<=m;i++){
      //tradueix el nombre i
      var tra=tradueix(i);

      //expressa "i" com a producte de primers
      var producte=(function(){
        var primers=[];
        tra.forEach((f,k)=>{
          if(f){
            primers.push(nombres_primers[k]+(f==1?"":"<sup>"+f+"</sup>"));
          }
        });
        return primers.join(' · ');
      })();

      //nova fila
      var newRow=t.insertRow(-1);
      newRow.setAttribute('caption',producte);

      //color de fons fila
      var background=nombres_primers.indexOf(i)+1 ? "lightgreen":"";
      newRow.style.background=background;

      //primera cel·la
      newRow.insertCell(-1).outerHTML='<th>'+i;

      //exponents dels nombres primers
      tra.forEach(f=>{
        var color=f?"":"style=color:#ccc";
        newRow.insertCell(-1).outerHTML='<td '+color+'>'+f;
      });

      //score: divisors
      /*
      var score=divisors(i);
      if(score>max_score){
        max_score=score;
        composability.push({num:i,score});
      }
      */
    }
  })();
  Caption.listeners();
</script>
