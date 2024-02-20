$(document).ready(function () {
  $("#tel").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#post").mask("00.000-000");
});

$("form").validate({
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
    },
    cpf: {
      required: true,
    },
  },
  messages: {
    name: "Por favor, insira seu nome:",
    email: "Por favor, informe seu email:",
    tel: "Por favor, informe seu celular:",
    cpf: "Por favor, insira o seu CPF:",
  },
});
