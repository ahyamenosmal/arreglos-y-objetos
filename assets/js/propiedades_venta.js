const propiedadesVenta = [
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
    {
        nombre: "Casona colonial costera",
        src: "https://envato-shoebox-0.imgix.net/0ff4/57b1-b82c-414e-8fe6-73e83ab4c2b6/malaga+%28197%29.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=4bc38dcbe137a433e13f6c7d2221e685",
        descripcion:
          "Esta casa colonialcostera ofrece las mejores vacaciones con las mejores vistas",
        ubicacion: "689 Rode Avenue, Malibú, CA 56789",
        habitaciones: "4 Habitaciones",
        baños: "2 Baños",
        costo: "3.200",
        smoke: false,
        pets: true,
      },
  ];


let venta = document.querySelector("#venta");
let ventaPropiedades = "";
for (let propiedad of propiedadesVenta) {
    ventaPropiedades += `
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

venta.innerHTML = ventaPropiedades;