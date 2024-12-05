**Readme** 

Ser mujer y privada de libertad: La menstruación como castigo adicional en Chile  

Este proyecto tiene como objetivo diseñar una webstory que aborde la problemática de la higiene menstrual en el contexto carcelario. Partimos de la hipótesis que dentro del presupuesto destinado a salud e higiene en el readme no se consideraban los gastos extras que las mujeres comprenden por menstruar.  

**Quien hizo que:**  

| Tareas:  | Codificar en Visual Studio Code   | Crónica   | Readme, carrusel y gráficos    |
| :---- | :---- | :---- | :---- |
| Dominga Krotik  | 1 1 | 1 1 | 1 1 |
| Valentina Zaldívar   |   | 1 1 | 1 1 |
| Teresa Leiva   |   | 1 1 | 1 1 |

 

**Paso a paso:**   

Lo primero que hicimos fue generar una página hmtl en nuestro Visual Studio Code, luego lo subimos a Github y comenzamos a trabajar   

los primeros códigos que ingresamos fueron bases para que los demás códigos funciones como “lang=es”, "UTF-8", “\<meta name="viewport" y “\<link\>” con css, esto para que la página esté en español, para que los caracteres especiales (como ñ o tildes) se muestren correctamente, para que sea adaptable a los dispositivos móviles y que la página se conecte con el archivo style.css.  

Luego codificamos cosas más específicas como:  

* \<video controls autoplay muted loop\>    
     \<source src="toallita.mp4" type="video/mp4"\>    
    

Esto para que se muestre el video.   


* \<h1\>Ser mujer y privada de libertad...\</h1\>  


Esto para el título   


* \<p class="parrafo"\>...\</p\>  


Esto para los párrafos   

 

* \<img src="graficok.jpg" id="grafico"\>    
  \<img src="carcel.jpg" id="carcel"\>  


Esto para las imágenes   


* \<section\>...\</section\>  


Esto para organizar el contenido en bloques temáticos   


* \<footer\>	\<p\> Dominga Krotik Teresa Leiva Valentina Zaldívar\</p\>    
  \</footer\>  


Esto para el pie de página.   

Para agregar nuestras decisiones de estilo ocupamos  los siguientes códigos:   

**1\. Estilo General:** 

* **Fuente:** Elegimos 'Lora', una tipografía serif clásica que aporta elegancia y profesionalismo. Se seleccionó por su versatilidad en estilos, lo cual ahondaremos más en la entrega final   
* **Color de Fondo:** Usamos el color **\#ebded4** (beige cálido) para crear una base suave y neutral.   
* **Margen y Padding:** Se eliminaron los márgenes y el padding predeterminados del navegador para un control total sobre el diseño. 

**Código:**  

body { 

	font-family: 'Lora', serif; 

	background-color: \#ebded4; 

	margin: 0; 

	padding: 0; 

	display: flex; 

	justify-content: center; 

	align-items: center; 

	flex-direction: column; 

} 

**2\. Encabezado:** 

* **Color:** Fondo morado (**\#6c5ce7**) que contrasta frente al beige y destaca el logo central.   
* **Espaciado:** Se aplicó un padding de **20px** para separar el contenido del borde.   
* **Logo:** Se insertó a través de un video que sigue los mismos estilos. 

**Código:**  

header { 

	background-color: \#6c5ce7; 

	color: white; 

	padding: 20px; 

	text-align: center; 

} 

**3\. Diseño del Cuerpo:** 

* Se utilizó **Flexbox** para centrar el contenido de manera vertical y horizontal, con flex-direction: column; para apilar los elementos en una sola columna.   
   

**4\. Estilo del Video:** 

* **Ancho:** El video ocupa el **100% del ancho disponible**, con un máximo de **1500px** para mantener proporciones adecuadas.   
* **Relación de aspecto:** Se mantiene con height: auto;.   
* **Espaciado:** Márgenes de **50px** arriba y abajo para separar visualmente. 

**Código:**  

video { 

	width: 100%; 

	max-width: 100%; 

	height: 100%; 

	margin-top: 50px; 

	margin-bottom: 50px; 

} 

**5\. Títulos:** 

Decidimos que los títulos estén centrados de manera horizontal, usando el siguiente código:  

.Titulo { 

	text-align: center; 

} 

**6\.  Uso de IDs:** 

* **\#grafico:** Configurado para ocupar el ancho completo del contenedor con márgenes de separación.   
* **Ancho:** 1500px.   
* **Altura:** 100%.   
* **Margen:** 50px arriba y abajo para espaciar el contenido. 

 

* **\#carcel:** Similar a \#grafico, pero adaptado a distintos elementos.   
* **Ancho:** 100% para ajustarse al contenedor.   
* **Margen:** Igual que en \#grafico. 

**7\. Clases Utilizadas:** 

* **.parrafo:**   
* **Margen:** 25px arriba/abajo, 250px laterales para un buen espaciado.   
* **Texto:** Justificado, con tamaño **medium** y un interlineado de **25px** para mejorar la legibilidad. 

**Código:**  

.parrafo { 

	margin: 25px 250px 25px 250px; 

	text-align: justify; 

	font-size: medium; 

	line-height: 25px; 

* **.text-box:hover:** Al pasar el cursor, el elemento aumenta de tamaño y se añade una sombra para destacar.   
* **Transformación:** Aumenta un 5% el tamaño (scale(1.05)).   
* **Sombra:** Se agrega una sombra más intensa (box-shadow) para destacar el elemento. 

**8\. Navegación:** 

* **Estilo de Enlaces:**   
* Color gris oscuro (**\#2d3436**) y texto en **negrita** para mejorar la visibilidad.   
* Márgenes laterales de **15px** entre enlaces.   
* Eliminamos el subrayado con text-decoration: none; para un diseño limpio. 

**Código:** 

nav a { 

	margin: 0 15px; 

	color: \#2d3436; 

	text-decoration: none; 

	font-weight: bold; 

**9\. Footer:** 

* **Color y Consistencia:** Mantuvimos el fondo morado (**\#6c5ce7**) del encabezado para coherencia visual.   
* **Texto:** Blanco y centrado, con un padding de **10px** para separar el contenido del borde. 

**Código:** 

footer { 

	background-color: \#6c5ce7; 

	color: white; 

	text-align: center; 

	padding: 10px 0; 

**10\. Interactividad (Hover Effects):** 

* Los elementos .text-box crecen al pasar el cursor, ofreciendo dinamismo y mejorando la experiencia del usuario mediante un efecto visual sutil y elegante. 

**Código:** 

.text-box:hover { 

	transform: scale(1.05); 

	box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.2); 

 

Por último, agregamos movimiento a la página con los siguientes códigos de JavaScript: 

**Javascript:**  

Agregamos el efecto de zoom suave. 

* Lo primero que hicimos fue seleccionar las imágenes con el siguiente código: 

   const images \= document.querySelectorAll('img') 

* Luego le indicamos que queríamos que recorriera solo a la imagen y cuando el mouse esté por encima:  

  image.addEventListener('mouseover', () \=\> { 

  image.style.transform \= 'scale(1.1)'; 

  image.style.transition \= '1s'; 

  image.addEventListener('mouseout', () \=\> { 

  image.style.transform \= 'scale(1)'; 

 

Carrusel: [https://www.canva.com/design/DAGYX0tMbts/nNK9N5FBBG6ypbnlQY8X2w/view?utm\_content=DAGYX0tMbts\&utm\_campaign=designshare\&utm\_medium=link\&utm\_source=editor](https://www.canva.com/design/DAGYX0tMbts/nNK9N5FBBG6ypbnlQY8X2w/view?utm_content=DAGYX0tMbts&utm_campaign=designshare&utm_medium=link&utm_source=editor) 

Video: [https://youtu.be/0c4rVEyAY1o?feature=shared](https://youtu.be/0c4rVEyAY1o?feature=shared) 

