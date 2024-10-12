# Documentación proceso de limpieza de datos

1. **Nombre**
Dominga Krotik

2. **Explicación de cómo se realizó el proceso de limpieza de datos, cada paso y decisión tomada**.

Primero al ingresar a la página web de gendarmería me pude dar cuenta que el dato más reciente era de agosto de 2024 y como nosotras íbamos a investigar desde 2022 decidí ordenar los datos disponibles de agosto de 2022, agosto de 2023 y agosto de 2024 para poder hacer comparaciones año a año. Tambien tomamos la decisión de no eliminar a los hombres de nuestra investigación ya que de todas formas es información relevante para hacernos una idea de los gastos totales que hace gendarmería.


Para los datos de agosto 2024 decidí dividirlo en todas las regiones en un archivo y en otro archivo solamente la región metropolitana para tener un orden visual más claro. Además de ordenar que aparecieran todos los hombres primero y las regiones por orden alfabético. Con la RM ordene por establecimiento y género, es decir que aparecieran ordenados los establecimientos y todos los hombres primero. 


Los datos de 2022 y 2023 eran entregados en formato imagen y no en tanto detalle como los de 2024, por ejemplo no incluya especificado el genero de los reos. De todas formas lo traspase de manera manual a excel para poder tenerlo en formato csv.

Todo fue hecho de manera manual en excel y no con códigos ya que me parecio que al manejar mejor excel era más fiable para mi hacerlo de esa manera.


3. **Lista de las fuentes de datos utilizadas y una explicación de por qué las eligieron.**

Estadística de la Población Vigente Atendida año 2024, extraida de [esta sección](https://www.gendarmeria.gob.cl/est_general.html)
Estadísticas de la Población Atendida Vigente en Agosto del año 2022 y 2023 extraídas de [esta sección](https://www.gendarmeria.gob.cl/rep_est_mes.html)


Las elegimos porque para poder responder todas nuestras preguntas es fundamental saber la población carcelaria de los últimos años y con estos datos podemos lograr un aproximado de cómo ha ido cambiando año tras año y cual es el panorama actual. Lo última base de datos es de hace solo dos meses por lo tanto es bastante actualizada.

Ademas al ser datos de gendarmería nos aseguramos de que son confiables.

4. **Algunos ejemplos sobre preguntas que se pueden responder su base de datos limpia**


¿Cuántos hombres y cuántas mujeres se encuentran viviendo tiempo completo en un recinto penitenciario en la región Metropolitana?

¿En qué región hay una mayor cantidad de mujeres viviendo en la cárcel?

¿Cuántas personas cumplen condena en prisión versus arresto domiciliario u otras formas de pena?

5. Código utilizado en Google Collab para graficar
 
 import panda as pd
 df= pd.read_csv (INSERTE AQUÍ LA BASE DE DATOS)
 df.head ()