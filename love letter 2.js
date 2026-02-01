$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.on('click', openEnvelope);
  btn_open.on('click', openEnvelope);
  btn_reset.on('click', closeEnvelope);

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }
  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }
});
