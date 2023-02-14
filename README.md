<h1 align="center"> TATTOO CENTER FRONT</h1>

Projecto final de Front-end en ISDI Coders, en este proyecto se llama al Back-end Tattoo-center.

Dos semanas y media para entregar este proyecto, he decidido no tocarlo mas para demostrar lo que he podido hacer con el tiempo establecido.
cumple un crud completo:
- get
- post
- patch
- delete

---

# Clone el repositorio
git clone

# Instale las dev
npm i

# Para el despliegue importante
npm run start

se abrira en http://localhost:3000

# TATTOO CENTER

[**Diseño en figma de las paginas**](https://www.figma.com/file/vdlESQE81Wlj6pNbhxQa38/Tatto-lucho?node-id=0%3A1&t=VgBoaJhpwXk1qHtb-1)

### SCAFFOLDING

- Public
  - Assents
  - Index
- Src
  - Features
    - login
    - logout
    - profile
    - register
    - tattoo
        - components
            - tattooButtons
            - tattooFrom
            - tattooItems
            - tattoList
        - hooks
        - reducerTattoo
        - tattooPage
    - user
        - components
        - hooks
        - reducerUser
        - userPage
  - Infrastructure
    - Components
      - app
      - footer
      - header
      - layout
      - menu
      - routes
    - mocks
    - model
    - services
    - store
    - types

---

## COMPONENTIZATION

### GLOBALS

- Header: Muesta el titulo de la web, el logo y tiene el menu de navegacion
- Footer: Muestra la informacion adicional de la pagina, redes sociales, correo electronico y el logo

### GALLERY

- Card: Muestra cada uno de los tatuajes, se comunica con la lista de tareas y con el componente boton de añadir y el componente eliminar, si se hace click en la imagen te dirije al componente details de tattoo
    - tendra dos componentes cardItem y cardList
        -cardList creara la lista de tattoo y pillara la infomacion de cada uno con un map
        -cardItem renderiza cada informacion de cada tattoo ,le llega esta informacion por la cardList

- Labels: Muestra una serie de botones con una pequeña descripcion, al dar click nos mostrara tatuajes con esa informacion indicada

### PROFILE

- Profile: Muestra la informacion del usuario con una foto y nombre,tambien tendra una descripcion del usuario, mostrara los botones de navegacion de Favorites y Portfolio, tambien tendra el boton de subir Tattoo que direcciona a la pagina de subir tattoo
  - Favorites: Mostrara los tatuajes a los que le diera me gusta
  - Portfolio: Muestra los tatuajes que subas

### DETAILS

- Details: mostrara la informacion de quien es la foto, que etiquetas tiene y la fotografia del tattoo

### LOGIN / REGISTER

- Login: mostrara inputs donde poder rellenar con tus datos para poder iniciar seccion
- Register: mostrara inputs donde poder rellenar con tus datos para poder registrarte y poder tener permiso para poder navegar mas libre por la pagina

### UPLOAD PHOTO

- Se vera una caja donde se mostrara la foto subida, una lista de que categorias quiere tener

---

### MODELO DE DATOS

    User
      id: ObjectId;
      name: string;
      email: string;
      password: string;
      image: string;
      favorites: Array<ObjectId>;
      portfolio: Array<ObjectId>;
      description: string;


    Tattoo
      id: ObjectId;
      image: string;
      categories: Array<Category>;
      link: string;
      owner: ObjectId; //user


    Category
      'TRADITIONAL' | 'Old SCHOOL' | 'TRIBAL' | 'REALISM' | 'JAPANESE' | 'BLACK & GREY'

---

### Endpoints

User
- [Get]-> '/:id' -> Envia un usurario por su id
- [Post]-> '/register' -> Envia el nombre,imagen, email y contraseña
- [Post]-> '/login' -> Envia el nombre y contraseña

- [Patch]-> '/addFavorites/:id','logged','who' -> para agrega a favoritos
- [Patch]-> '/deleteFavorites/:id','logged','who' -> para eliminar de favoritos

- [Delete]-> '/:id','logged','who' -> para borrar perfil de usuario

Tattoo

- [GetAll]-> '/' -> Trae todos los tattoos
- [Get]-> '/:id' -> Trae un tattoo por el id  --- Mirar search
- [Post]-> '/','logged','who' -> Crea un tattoo
- [Patch]-> '/:id','logged','who' -> Actualiza la informacion del tattoo, solo los tatuajes propios
- [Delete]-> '/:id','logged','who' -> Elimina el tattoo por su id, solo los tatuajes propios
