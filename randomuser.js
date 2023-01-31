fetch('https://randomuser.me/api/?results=4')
.then((response) => response.json())
.then((data) => {
  const user = data.results[0];
  
  const userImg = document.getElementById("hero-imagen-desarrollador");
  const saludoh1 = document.getElementById("saludo");
  const presentacion = document.getElementById("seccion-titulo");
  const userInfo = document.getElementById("info-desarrollador")

            

  userImg.innerHTML = `<img src= "${user.picture.large}" class ="imagen-desarrollador">`;
  userInfo.innerHTML = `<p> Telefono: ${user.cell} <br>${user.location}</br>             Email: ${user.email} </p>`
  userInfo.innerHTML = `<p> Edad: ${user.dob.age} años <br>Telefono: ${user.cell} <br>Direccion: ${user.location.street.name} ${user.location.street.number}<br>${user.location.state}</br>             Email: ${user.email} </p>`
  
  saludoh1.innerHTML = `Hola mi nombre es ${user.name.first} ${user.name.last}`;
  presentacion.innerHTML = `Conoce a ${user.name.first} ${user.name.last}`



  const testimonios = document.querySelectorAll(".testimonio-imagen");
  for (var i = 1; i < data.results.length; i++){
    testimonios[i-1].src = data.results[i].picture.large;
    testimonios[i-1].parentNode.querySelector('.cliente').textContent = data.results[i].name.first+ " " + data.results[i].name.last;
    
  }


  }
  


  );
  


