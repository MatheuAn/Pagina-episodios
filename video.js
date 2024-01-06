document.addEventListener('DOMContentLoaded', function () {
  var controlsPlayer = document.getElementById('controlsplayer');
  var secVideo = document.querySelector('.secvideo');
  var timeoutId;

  document.addEventListener('click', function (event) {
    var clickedElement = event.target;

    if (!isClickableElement(clickedElement)) {
      controlsPlayer.classList.toggle('controloff');
    }
  });

  document.addEventListener('dblclick', function (event) {
    var clickedElement = event.target;

    if (!isClickableElement(clickedElement)) {
      secVideo.classList.add('duplo');

      // Limpar temporizador se existir
      clearTimeout(timeoutId);

      // Configurar temporizador para remover a classe após 1 segundo
      timeoutId = setTimeout(function () {
        secVideo.classList.remove('duplo');
        controlsPlayer.classList.add('controloff'); // Adicionar .controloff
      }, 1000);
    }
  });

  function isClickableElement(element) {
    return (
      element.tagName === 'BUTTON' ||
      element.tagName === 'IMG' ||
      element.tagName === 'A' ||
      element.tagName === 'INPUT' ||
      element.hasAttribute('onclick') ||
      element.hasAttribute('href') ||
      element.hasAttribute('type')
    );
  }
});





//avançar e voltar seg
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var minussegBtn = document.getElementById('minusseg');
  var moresegBtn = document.getElementById('moreseg');
  var controlsPlayer = document.getElementById('controlsplayer');
  var secVideo = document.querySelector('.secvideo');
  var isButton = function (element) {
    return element.tagName.toLowerCase() === 'button';
  };

  controlsPlayer.addEventListener('dblclick', function (event) {
    // Verificar se o clique foi em um botão dentro do controlsplayer
    if (isButton(event.target)) {
      return;
    }

    // Verificar se o clique foi no lado direito ou esquerdo
    var x = event.clientX;
    var middle = controlsPlayer.offsetWidth / 2;

    if (x > middle) {
      // Duplo clique do lado direito, acionar moresegBtn e adicionar a classe .active
      moresegBtn.click();
      moresegBtn.classList.add('active');
      minussegBtn.classList.remove('active'); // Remover a classe .active de minussegBtn

      // Adicionar a classe .onright em secVideo
      secVideo.classList.add('onright');

      // Remover a classe .active e .onright após 300 segundos (5 minutos)
      setTimeout(function () {
        moresegBtn.classList.remove('active');
        secVideo.classList.remove('onright');
      }, 100);
    } else {
      // Duplo clique do lado esquerdo, acionar minussegBtn e adicionar a classe .active
      minussegBtn.click();
      minussegBtn.classList.add('active');
      moresegBtn.classList.remove('active'); // Remover a classe .active de moresegBtn

      // Adicionar a classe .onleft em secVideo
      secVideo.classList.add('onleft');

      // Remover a classe .active e .onleft após 300 segundos (5 minutos)
      setTimeout(function () {
        minussegBtn.classList.remove('active');
        secVideo.classList.remove('onleft');
      }, 100);
    }
  });

  minussegBtn.addEventListener('click', function () {
    skip(-10); // Retroceder 10 segundos
  });

  moresegBtn.addEventListener('click', function () {
    skip(10); // Avançar 10 segundos
  });

  function skip(duration) {
    video.currentTime += duration;
  }
});






// Progressão 
const video = document.querySelector("video");
const progressaoInput = document.querySelector(".progressao");
let isSeeking = false;

// Adiciona um ouvinte de evento para capturar mudanças no controle deslizante
progressaoInput.addEventListener("input", function() {
  isSeeking = true; // Define que estamos buscando manualmente
  const novoTempo = (video.duration / 100) * progressaoInput.value;
  video.currentTime = novoTempo;
});

// Adiciona um ouvinte de evento para atualizar o controle deslizante conforme o vídeo é reproduzido
video.addEventListener("timeupdate", function() {
  if (!isSeeking) {
    const porcentagemConcluida = (video.currentTime / video.duration) * 100;
    progressaoInput.value = porcentagemConcluida;
  }
});

// Adiciona um ouvinte de evento para detectar quando o usuário para de buscar manualmente
progressaoInput.addEventListener("mouseup", function() {
  isSeeking = false;
});






// volume
const volumeBtn = document.getElementById('volumepp');

volumeBtn.addEventListener('click', toggleMute);

function toggleMute() {
  if (volumeBtn.classList.contains('notvol')) {
    volumeBtn.classList.remove('notvol');
  } else {
    volumeBtn.classList.add('notvol');
  }
  moreBtn.classList.toggle('offv', volumeBtn.classList.contains('notvol'));
  
}


// volume altura 
document.addEventListener('DOMContentLoaded', function () {
  var voluSlider = document.querySelector('.volu');
 
  var volumepp = document.getElementById('volumepp'); // Substitua 'volumepp' pelo ID do seu elemento de volume

  // Inicie o volume do vídeo com 100%
  video.volume = 1;

  voluSlider.addEventListener('input', function () {
    updateAfterWidth(voluSlider);
    updateVideoVolume(voluSlider);
  });

  function updateAfterWidth(slider) {
    var thumbWidth = getComputedStyle(slider).getPropertyValue('--thumb-width');
    var thumbPercent = (slider.value - slider.min) / (slider.max - slider.min);
    var afterWidth = thumbPercent * 100;

    slider.style.setProperty('--thumb-width', thumbWidth);
    slider.style.setProperty('--after-width', afterWidth + '%');
    
    // Verifique se o volume é 0 e adicione a classe 'duplonotvol'
    if (video.volume === 0) {
      volumepp.classList.add('duplonotvol');
    } else {
      volumepp.classList.remove('duplonotvol');
    }
  }

  function updateVideoVolume(slider) {
    var volume = slider.value / 100;
    video.volume = volume;

    // Verifique se o volume é 0 e adicione a classe 'duplonotvol'
    if (volume === 0) {
      volumepp.classList.add('duplonotvol');
    } else {
      volumepp.classList.remove('duplonotvol');
    }
  }
});




// pular opening animes
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var pular90sBtn = document.getElementById('pularop');

  pular90sBtn.addEventListener('click', function () {
    skip(90); // Avançar 90 segundos
  });

  function skip(duration) {
    video.currentTime += duration;
  }
});

// próximo eplink
document.addEventListener('DOMContentLoaded', function () {
  var eplinkproBtn = document.getElementById('eplinkpro');
  var proxeplinkElement = document.querySelector('.proxeplink');

  if (!proxeplinkElement || !proxeplinkElement.getAttribute('href')) {
    eplinkproBtn.classList.add('off');
  }

  eplinkproBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    if (proxeplinkElement) {
      var linkHref = proxeplinkElement.getAttribute('href');
      if (linkHref) {
        window.location.href = linkHref; // Redireciona para o link na mesma página
      }
    }
  });
});







// qualidade
const endpartH3Elements = document.querySelectorAll('.endpart h3');

// Adicionar um ouvinte de evento a cada elemento .endpart h3
endpartH3Elements.forEach(h3 => {
  h3.addEventListener('click', function () {
    // Adicionar a classe .play ao #customPlayPauseBtn
    document.getElementById('customPlayPauseBtn').classList.add('play');

    // Iniciar o vídeo automaticamente
    document.getElementById('myVideo').play();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Encontrar o h3 com a classe .hd e chamar a função changeSource
  const hdElement = document.querySelector('.hd');
  if (hdElement) {
    changeSource(hdElement);
  }

  // Verificar os h3 que não possuem data-source e aplicar a classe .offline
  document.querySelectorAll('h3').forEach(h3 => {
    if (!h3.getAttribute('data-source')) {
      h3.classList.add('offline');
    }
  });
});

function changeSource(element) {
  // Obter a posição atual do vídeo
  const currentVideoTime = document.getElementById('myVideo').currentTime;

  // Remover a classe .hd de todos os elementos h3
  document.querySelectorAll('h3').forEach(h3 => {
    h3.classList.remove('hd');
  });

  // Adicionar a classe .hd ao h3 clicado
  element.classList.add('hd');

  // Verificar se o data-source está vazio e aplicar a classe .offline se necessário
  if (!element.getAttribute('data-source')) {
    element.classList.add('offline');
  }

  // Atualizar o link do data-source no videoSource
  var videoSource = document.getElementById('videoSource');
  videoSource.src = element.getAttribute('data-source');

  // Exibir o link do data-source no console (opcional)
  console.log(`Link do data-source: ${element.getAttribute('data-source')}`);

  // Atualizar o valor de #qAtual com base no texto do h3
  const qAtualElem = document.getElementById('qAtual');
  qAtualElem.textContent = element.textContent;

  // Recarregar e reproduzir o vídeo
  const myVideo = document.getElementById('myVideo');
  myVideo.load();

  // Adicionar um evento 'loadeddata' para garantir que o vídeo foi carregado antes de definir a posição
  myVideo.addEventListener('loadeddata', function () {
    // Definir a posição do vídeo para onde estava antes da mudança da qualidade
    myVideo.currentTime = currentVideoTime;
  });
}

// ...




// qualidade button
const qualidadeBtn = document.getElementById('qualidade');
const moreBtn = document.querySelector('.morebtn');


qualidadeBtn.addEventListener('click', toggleMoreqClass);

function toggleMoreqClass() {
  // Adiciona ou remove a classe moreq no #qualidade
  qualidadeBtn.classList.toggle('moreq');
  moreBtn.classList.toggle('off', qualidadeBtn.classList.contains('moreq'));


  // Encontrar todos os elementos h3 após #qualidade
  const h3Elements = document.querySelectorAll('#qualidade.moreq + h3');

  // Aplicar ou remover a classe de display flex nos elementos h3
  h3Elements.forEach(h3 => {
    h3.classList.toggle('display-flex', qualidadeBtn.classList.contains('moreq'));
  });
}





// timeline
const progressInput = document.querySelector('.progressao');
const currentTimeElem = document.querySelector(".current-time");
const totalTimeElem = document.querySelector(".total-time");

// Atualizar o tempo atual e a barra de progresso imediatamente ao arrastar o timeline
progressInput.addEventListener('input', function () {
  const progress = progressInput.value / 100;
  const newTime = progress * video.duration;
  video.currentTime = newTime;

  // Atualizar a largura do pseudo-elemento ::before diretamente
  progressInput.style.background = `linear-gradient(to right, var(--destaquepp) ${progress * 100}%, #ddd ${progress * 100}%)`;

  // Atualizar o tempo atual
  currentTimeElem.textContent = formatarTempo(newTime);
});

// Adicionar evento 'timeupdate' para atualizar o tempo total e a barra de progresso
video.addEventListener('timeupdate', function () {
  const progress = (video.currentTime / video.duration) * 100;
  progressInput.value = progress;

  // Atualizar a largura do pseudo-elemento ::before diretamente
  progressInput.style.background = `linear-gradient(to right, var(--destaquepp) ${progress}%, #ddd ${progress}%)`;

  // Atualizar o tempo atual
  currentTimeElem.textContent = formatarTempo(video.currentTime);

  // Verificar se o tempo total é um número válido e maior que zero antes de exibi-lo
  if (!isNaN(video.duration) && isFinite(video.duration) && video.duration > 0) {
    totalTimeElem.textContent = formatDuration(video.duration);
  }
});

// Adicionar evento 'loadeddata' para atualizar o tempo total quando o vídeo for carregado
video.addEventListener('loadeddata', function () {
  // Verificar se o tempo total é um número válido e maior que zero antes de exibi-lo
  if (!isNaN(video.duration) && isFinite(video.duration) && video.duration > 0) {
    totalTimeElem.textContent = formatDuration(video.duration);
  }
});

// Restante do seu código...



function formatarTempo(tempo) {
  const minutos = Math.floor(tempo / 60);
  const segundos = Math.floor(tempo % 60);
  const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
  const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
  return `${minutosFormatados}:${segundosFormatados}`;
}

function formatDuration(time) {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  if (hours === 0) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}






//play pause
    
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var playPauseBtn = document.getElementById('customPlayPauseBtn');
  var posterElement = document.querySelector('.poster');
  var bannerElement = document.querySelector('.bannerads');
  var countdownElement = document.getElementById('countdownpp');
  var closeButton = document.getElementById('closeButton');
  var contBannerElement = document.getElementById('contbanner');
  var bannerVisible = false;

  // Configurar o atributo src da imagem dentro de .poster
  posterElement.querySelector('img').src = video.poster;

  playPauseBtn.addEventListener('click', function () {
    // Adicionar a classe .off à .poster quando o vídeo é reproduzido
    posterElement.classList.add('off');

    // Verificar se há conteúdo na div contbanner
    if (contBannerElement.textContent.trim() !== '') {
      // Adicionar a classe .on ao banner para torná-lo visível
      bannerElement.classList.add('on');

      // Pausar o vídeo automaticamente ao acionar o banner
      video.pause();

      // Iniciar contagem regressiva quando o banner é acionado
      startCountdown();

      bannerVisible = true;
    } else {
      // Se o banner não estiver visível, alternar a reprodução/pausa do vídeo
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }

      bannerVisible = false;
    }

    playPauseBtn.classList.toggle('play');
  });

  video.addEventListener('ended', function () {
    playPauseBtn.classList.remove('play');

    // Remover a classe .off da .poster quando o vídeo chegar ao final
    posterElement.classList.remove('off');

    // Tornar o banner invisível ao final do vídeo
    bannerElement.classList.remove('on');
    bannerVisible = false;
  });

  closeButton.addEventListener('click', function () {
    // Fechar o banner quando o botão for clicado
    bannerElement.style.display = 'none';

    // Retornar a classe .on ao banner para futuras exibições
    bannerElement.classList.add('on');

    // Retornar a contagem regressiva para 5
    countdownElement.textContent = '5';

    // Retornar o vídeo à reprodução quando o banner é fechado
    video.play();
    bannerVisible = false;
  });

  function startCountdown() {
    var countdownValue = 5;

    var countdownInterval = setInterval(function () {
      countdownValue--;

      // Atualizar o texto da contagem regressiva
      countdownElement.textContent = countdownValue === 0 ? 'X' : countdownValue;

      // Se a contagem regressiva chegar a 0, permitir o fechamento do banner
      if (countdownValue === 0) {
        clearInterval(countdownInterval); // Parar a contagem regressiva
        closeButton.removeAttribute('disabled'); // Habilitar o botão de fechar
      }
    }, 1000);
  }
});



// velocidade
const speedBtn = document.querySelector(".speed-btn")

speedBtn.addEventListener("click", changePlaybackSpeed)
function changePlaybackSpeed() {
  let newPlaybackRate = video.playbackRate + 0.25
  if (newPlaybackRate > 2) newPlaybackRate = 0.25
  video.playbackRate = newPlaybackRate
  speedBtn.textContent = `${newPlaybackRate}x`
}


// View Modes
const fullScreenBtn = document.querySelector(".full-screen-btn");
const videoContainer = document.querySelector(".video-container");

fullScreenBtn.addEventListener("click", toggleFullScreenMode);

function toggleFullScreenMode() {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement);
  if (document.fullscreenElement) {
    videoContainer.style.width = "100vw";
    videoContainer.style.height = "100vh";
  } else {
    videoContainer.style.width = null;
    videoContainer.style.height = null;
  }
});




//iframe
