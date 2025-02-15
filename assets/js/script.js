const propiedadesVentaIndex = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    baños: "4 Baños",
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    baños: "1 Baño",
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    costo: "4.500",
    smoke: false,
    pets: true,
  },
];

const propiedadesAlquilerIndex = [
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
];

let indexVentas = document.querySelector("#ventaPropiedad");
let ventaIndex = "";
for (let propiedad of propiedadesVentaIndex) {
  ventaIndex += `
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

indexVentas.innerHTML = ventaIndex;

const indexAlquiler = document.querySelector("#alquilerPropiedad");
let alquilerIndex = "";
for (const propiedad of propiedadesAlquilerIndex) {
  alquilerIndex += `
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

indexAlquiler.innerHTML = alquilerIndex;
