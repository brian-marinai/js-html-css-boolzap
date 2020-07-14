function addListener() {

  var target = $("#new-message");
  target.keyup(sendKey);
}

function sendKey(event) {

  var tasto = event.which;
  if (tasto == 13) {
    var input = $(this);
    var testo = input.val();
    input.val("");
    sendMessage(testo);
  }
}

function sendMessage (testo) {

  var template = $("#template-message-send > div").clone();
  var target = $("#messaggio-destra");

  template.find("#message-text").text(testo);
  template.find("#message-time").text(getHour());

  target.append(template);
}

function getHour() {

  var date = new Date ();
  return date.getHours() + ":" + date.getMinutes();
}

function init() {
  addListener();
}

$(document).ready(init);
