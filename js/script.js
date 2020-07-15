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
    sendMessage(testo, "spedito");

    setTimeout(function() { sendMessage("ok", "ricevuto"); }, 2000 );
  }
}

function addsearchListener() {

  var target = $("#contact-filter");
  target.keyup(searchKeyup);
}

function searchKeyup() {

  var input = $(this);
  var testo = input.val();

  var contacts = $(".contatti .contatto");
  contacts.each(function() {
    var contact = $(this);
    var name = contact.find(".contact-name").text();

    if (name.toLowerCase().includes(testo.toLowerCase())) {
      contact.show();
    } else {
      contact.hide();
    }
  });

}


function sendMessage (testo, type) {

  var template = $("#template-message > div").clone();
  var target = $("#messaggio-destra");

  template.addClass(type);

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
  addsearchListener();

}

$(document).ready(init);
