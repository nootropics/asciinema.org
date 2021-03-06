//= require rAF
//= require react-0.10.0
//= require asciinema-player
//= require screenfull

function tryCreatePlayer(parentNode, asciicast, options) {
  function createPlayer() {
    asciinema.CreatePlayer(
      parentNode,
      asciicast.width, asciicast.height,
      asciicast.stdout_frames_url,
      asciicast.duration,
      {
        snapshot: asciicast.snapshot,
        speed: options.speed,
        autoPlay: options.autoPlay,
        loop: options.loop,
        fontSize: options.fontSize,
        theme: options.theme
      }
    );
  }

  function fetch() {
    $.get('/api/asciicasts/' + asciicast.id + '.json', function(data) {
      asciicast = data;
      checkReadiness();
    });
  }

  function checkReadiness() {
    if (asciicast.stdout_frames_url) {
      $('.processing-info').remove();
      createPlayer();
    } else {
      $('.processing-info').show();
      setTimeout(fetch, 2000);
    }
  }

  checkReadiness();
}
