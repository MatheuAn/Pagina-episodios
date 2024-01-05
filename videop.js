document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll("#downloadpp a.statusText");n.forEach(function(e){e.getAttribute("href")||e.classList.add("nolink"),e.addEventListener("click",function(){n.forEach(function(t){t.classList.remove("onlink"),t.style.setProperty("--before-display","none")}),e.classList.add("onlink");var t=e.textContent;e.textContent="Baixando...",setTimeout(function(){e.textContent=t},6e3),setTimeout(function(){e.style.setProperty("--before-display","flex")},5e3)})})});

// downloadpp
function toggledowbpp(t){t.classList.toggle("active");var e=document.getElementById("downloadpp");t.classList.contains("active")?e.style.display="flex":e.style.display="none"}



// Like e deslike 
 document.addEventListener("DOMContentLoaded", function() {
   const likeppSpans = document.querySelectorAll('.likepp');

   likeppSpans.forEach(function(span) {
     const storedDataId = localStorage.getItem(span.dataset.id);

     if (storedDataId) {
       const buttons = span.querySelectorAll('button');
       buttons.forEach(function(btn) {
         if (btn.dataset.id === storedDataId) {
           btn.classList.add('active');
         }
       });
     }
   });
 });

 function toggleActive(button) {
   const span = button.parentNode;
   const buttons = span.querySelectorAll('button');

   buttons.forEach(function(btn) {
     if (btn === button) {
       btn.classList.add('active');
       localStorage.setItem(span.dataset.id, btn.dataset.id);
     } else {
       btn.classList.remove('active');
     }
   });
 }
 
 
 
  //iframe
  function resizeIframe(iframe) {
    // Aguarde o carregamento do iframe
    if (iframe.contentDocument && iframe.contentDocument.body.scrollHeight) {
      // Ajusta a altura do iframe com base no conteúdo
      iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
    }
  }
  
  
