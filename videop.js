.sectionpage main{
  width:94%;
  margin-left:2%;
}
  #player{
    margin-bottom:10px;
  }
  
  .titlepp h4{
    font-size:1.5em;
    color: white;
    margin-bottom:5px;
    margin:0;
  }
  .titlepp h2{
    font-size:0.8em;
    opacity:0.6;
    margin-bottom:10px;
  }
  
  .titlepp div{
    display:flex;
    gap:10px;
    align-items: center;
  }

  .titlepp div h5{
    font-weight:300;
    background: transparent;
    padding:3px 10px;
    border-radius:2px;
    font-size:0.6em;
    opacity:0.6
  }
  .titlepp div h5:nth-child(1) {
    background: white;
    color: black;
    font-weight:900;
    opacity:1
  }
  .titlepp div h5:nth-child(2) {
    border:1px solid white;
    opacity:1
  }
  
 
  
  .likepp{
    display:flex;
    margin-top: 20px
  }

  .nextprevpp a,
  .likepp button{
    background:#131D40 ;
    color:white;
    opacity:0.8;
    border:none;
    padding:5px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100px 0 0 100px;
    position:relative;
  }
    .likepp button:nth-child(2){
      border-radius: 0 100px 100px 0;
    }
  
  
 .nextprevpp a:active,
  .likepp button.active{
    color:orange;
    opacity:1;
    font-weight:900;
  }
    
  .likepp button:nth-child(1)::before,
  .likepp button:nth-child(2)::before{
    font-family:material symbols outlined;
    font-size:1.5em;
  }
  .likepp button:nth-child(1)::after,
  .likepp button:nth-child(1)::after {
    font-family: unset!important;
  }
  .likepp button:nth-child(1)::before {
    content: "\e8dc";
  }
  .likepp button:nth-child(2)::before {
    content: "\e8db";
  }
  .likepp button:nth-child(1)::after {
    content: "Like";
    margin-left:10px;
    font-weight:900;
  }
  .likepp button:nth-child(2)::after {
    position:absolute;
    left:0;
    bottom:20%;
    height:60%;
    width:1px;
    background:white;
    content: "";
    opacity:0.6;
  }
  
  .nextprevpp{
    display:flex;
    gap:10px;
    align-items:center;
    justify-content:right;
    margin-top:10px;
    width:100%;
    margin:0 auto;
  }
  
  .nextprevpp a{
    display:flex; align-items:center;
    justify-content:center;
    text-decoration: none;
    opacity:1;
    font-size:1.2em;
    background: rgba(255,255,255,0.05);
  }
.nextprevpp a:nth-child(2){
  border-radius:0;
}
.nextprevpp a:nth-child(3) {
  border-radius: 0 100px 100px 0;
}
  
  .nextprevpp a::before{
    content:"";
    font-family:material symbols outlined;
  }
  .nextprevpp a:nth-child(1)::before{
    content:"\e044";
    transform: rotate(180deg);
  }
  .nextprevpp a:nth-child(2)::before{
    content:"\e152";
  }
  .nextprevpp a:nth-child(3)::before{
    content:"\e044";
  }
    .download{
    width:100%;
    display:flex;
    justify-content:center;
    font-size:1em;
    
    border:2px solid orange;
    color:orange;
    padding:10px 0;
    margin-top: 20px
  }
  .download::before{
    content:"\f090";
    margin-right:20px;
    font-size:1.2em;
    font-family: material symbols outlined;
  }
  .download.active {
    background: orange;
    color:black;
  }
  
  #downloadpp{
    width:100%;
    display:none;
    gap:10px;
    justify-content:center;
    padding-bottom:30px;
    padding-top:30px;
  }
  #downloadpp a{
    padding:5px 20px;
    font-size:16px;
    text-decoration:none;
    border-radius:5px;
    position: relative; justify-content:center;
    display:flex; align-items:center;
  }

  
  #downloadpp a:nth-child(1){
    border:2px solid skyblue;
    color:skyblue;
  }  
  #downloadpp a:nth-child(2){
    border:2px solid limegreen;
    color:limegreen;
  }  
  #downloadpp a:nth-child(3){
    border:2px solid orangered;
    color:orangered;
  }
  
  #downloadpp a::after{
    content:"\f000";
    font-size:20px;
    margin-left:10px;
    font-family: material symbols outlined;
  }
  
  #downloadpp a.nolink{
    pointer-events:none;
    color:#ccc;
    border:2px solid #ccc;
    
  }
  
    #downloadpp a:nth-child(1).onlink {
      background: skyblue;
      color: black;
  
    }
  
  #downloadpp a:nth-child(2).onlink {
      background: limegreen;
      color: black;
  
    }  #downloadpp a:nth-child(3).onlink {
        background: red;
        color: black;
    
      }
#downloadpp a.onlink::before {
  content: "Concluído!";
  position: absolute;
  bottom: -15px;
  width: auto;
  padding: 3px 10px;
  font-size: 10px;
  display: var(--before-display, none);
}

  
      #downloadpp a.onlink:nth-child(1)::before{
        background:black;
        border:2px solid skyblue;
        color:skyblue;
      }
        #downloadpp a.onlink:nth-child(2)::before{
        background:black;
        border:2px solid limegreen;
        color:limegreen;
      }
        #downloadpp a.onlink:nth-child(3)::before{
        background:black;
        border:2px solid orangered;
        color:orangered;
      }
  
  .listeppp{
    width:100%;
    height:100px;
    margin-top: 20px
    
  }
  
  #iframeep{
    width:100%;
    position:relative;
    overflow:hidden!important;
    margin-top:20px;
  }
  #iframeep iframe{
    width:100%;
  }
  
  .error{
    display:flex;
    gap:10px;
    background: orange;
    color:black;
    justify-content:center;
    border-radius:2px;
    padding:10px;
    margin-top:20px;
  }
  .error h4,
  .error h1{
    font-size:0.8em;
    color:black;
  }
  .error h4{
      font-weight:300;
  }
  
  .infos{
    background: rgba(255,255,255,0.05);
    border-radius:20px;
    display:flex;
    align-items:center;
    padding:5px;
    margin-top:20px;
  }
  
  .infos img{
    width:60px;
    height:60px;
    object-fit:cover;
    border-radius:20px;
    border:2px solid rgba(255,255,255,0.3);
  }
  .infos span{
    display:flex;
    flex-direction: column;
    min-height:90%;
    justify-content:left;
    margin-left:20px;
  }
  .infos h1{
    font-size:1em;
  }
  .infos h1::before{
    content:"Upload por:";
    margin-right:10px;
    opacity:0.6;
  }
  .infos h4{
    margin-top:auto;
  }
  .infos h4::before{
    content:"Função:";
    margin-right:10px;
    opacity:0.6;
  }
  
  .iframeep{
    display:none;
  }

@media screen and (min-width:1000px){
 
  .secvideo{
    border-radius:10px;
  }
  .geralvideopc{
    display:flex;
    gap:40px;
    width:96%;
    margin-left:2%;
    margin-top:20px;
  }
    
      
  .iframeep{
display: flex;
   width: 400px;
   height: 450px;
   padding: 20px;
    border-radius:10px;
    background:#252837;
    position: relative;
    overflow:hidden;
  
  }
  .iframeep iframe{
    width:100%;
    position:absolute;
    top:0;
    left:0%;
    min-height: 200% !important;
  }
  .titlepp{
    position:relative;
    width:100%;
  }
 .listeppp{
   display:none;
 }
 #iframeep{
   display:none;
 }
 .geralpc{
   display:flex;
   align-items:center;
 }
 .infos{
order:1;
padding-right:20px;
 }
 
 .infos h4{
   font-size:0.8em;
 }
 .download{
   width:auto;
   order:2;
   margin-left:20px;
   padding:5px 10px;
 }
 

 .likepp{
   order:3;
   margin-left:auto;
 }
 .nextprevpp{
   margin-left:50px;
 }
 
 .sectionpage main{
   flex-wrap:wrap;
 }
}
