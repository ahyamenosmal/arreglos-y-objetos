const propiedadesAlquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: "2 Habitaciones",
      baños: "2 Baños",
      costo: "2.000",
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: "3 Habitaciones",
      baños: "3 Baños",
      costo: "2.500",
      smoke: true,
      pets: true,
    },
    {
      nombre: "Condominio moderno y chic",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: "2 Habitaciones",
      baños: "2 Baños",
      costo: "2.200",
      smoke: false,
      pets: false,
    },
    {
        nombre: "Casa campestre y moderna",
        src: "https://envato-shoebox-0.imgix.net/9c26/5721-f6ad-47ef-9ec2-6845ab7519c4/750_7966.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=66dbde3a5ece257fe6bea68ede06c0b4",
        descripcion:
          "Casa de campo ideal para un relajante fin de semana",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "3 Habitaciones",
        baños: "1 Baños",
        costo: "1.300",
        smoke: true,
        pets: true,
      },
  ];


  const alquiler = document.querySelector("#alquiler");
  let alquilerPropiedades = "";
  for (const propiedad of propiedadesAlquiler) {
    alquilerPropiedades  += `
          <div class="col-md-4 mb-4">
      <div class="card">
      <img src= ${propiedad.src} class="card-img-top" alt="Imagen del inmueble"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones}
          <i class="fas fa-bath"></i> ${propiedad.baños}</p>
          <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
      <p>
                              ${
                                propiedad.smoke
                                  ? '<i class="fas fa-smoking"></i> <span class="text-success">Permitido fumar</span>'
                                  : '<i class="fas fa-smoking-ban"></i> <span class="text-danger">No se permite fumar</span>'
                              }
                          </p>
                          <p>
                              ${
                                propiedad.pets
                                  ? '<i class="fas fa-paw"></i> <span class="text-success">Se permiten mascotas</span>'
                                  : '<i class="fas fa-ban"></i> <span class="text-danger">No se permiten mascotas</span>'
                              }
                          </p>
                      </div>
                  </div>
              </div>`;
  }
  
 alquiler.innerHTML = alquilerPropiedades;
  