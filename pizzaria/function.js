function logar ()
   var login=document.gpteleventbyID ('Login').value;
   var senha=document.gpteleventbyID ('Senha').value;
   var email=document.gpteleventbyID ('Email').value;

   if (login=="admin" && senha=="123") { alert ('sucesso');
   location.href="home.html";}

   else{ alert ('Usuário ou senha incorretas');}
