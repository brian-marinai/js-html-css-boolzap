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

    setTimeout(function() { sendMessage("ok", "ricevuto"); }, 1000 );
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


function addContactListener() {

  var contact = $(".contatti .contatto");
  contact.click(contactClick);
}

function contactClick() {

  var clickedcontact = $(this);
  var id = clickedcontact.data("id");
  var contact = $(".contatti .contatto");

  var conversazioni = $(".messaggi-destra");
  var selectedconv = $(".messaggi-destra[data-id=" + id + "]");

  var contattohome = $(".home-contatto");
  var contattohomeselected = $(".home-contatto[data-id=" + id + "]");

  contact.removeClass("active");
  clickedcontact.addClass("active");

  conversazioni.removeClass("active");
  selectedconv.addClass("active");

  contattohome.removeClass("active");
  contattohomeselected.addClass("active");

}

function sendMessage (testo, type) {

  var template = $("#template-message > div").clone();
  var target = $(".messaggi-destra.active");

  template.addClass(type);

  template.find("#message-text").text(testo);
  template.find("#message-time").text(getHour());

  target.append(template);
}


function addMessagelistener() {

  $(document).on("click", ".messagge-option", messageoptionclick);
}

function messageoptionclick() {
  var messageButton = $(this);
  var messageoption = messageButton.siblings(".messaggio-opzioni-pannello");
  messageoption.toggle();
}

function addMessageDestrotListener() {

  $(document).on("click", ".messaggio-destroy", messageDestroy);
}
function messageDestroy() {
  var destroy = $(this);

  var message = destroy.closest(".messaggio");

  message.remove()
}



function openFolder() {

  var input = $(this);
  input.addClass("show");
}



function getHour() {

  var date = new Date ();
  return date.getHours() + ":" + date.getMinutes();
}

function init() {
  addListener();
  addsearchListener();
  addContactListener();
  addMessagelistener();
  addMessageDestrotListener();
}

$(document).ready(init);
