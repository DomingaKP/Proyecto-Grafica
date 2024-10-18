# Limpieza de datos: 
## Proceso de limpieza
**1.** Lo primero que hice fue traspasar a mano las tablas que estaban como imágenes en el informe a un Excel para poder limpiarlos. No cambié el orden. De esta forma, a partir de 3 informes, terminé con una gran tabla. Sé que existen maneras más tecnológicas de hacerlo, pero la tecnología me ganó esta vez.

**2.** Cree una nueva columna para dividir los años en los que tengo datos (2023,2022,2021), ya que cada informe tiene datos según su año.
Decidí agrupar por producto y dentro de cada producto hacer subdivisiones por año y días de flujo. Esto me permite ver de manera más clara la evolución de precios de un producto específico a lo largo del tiempo, pero teniendo en cuenta que varía de acuerdo a los días de flujo. 

**3.** Decidí dejar los valores tanto anuales como mensual, porque como todavía no tenemos los datos de Gendarmería de Presupuestos (tenemos fe de que lleguen) no sabemos cómo están desglosados.  

**4.** Eliminé la columna que tenía la mediana de los datos del 2023, porque no lo considero relevante y no voy a poder compararlo con otros años, ya que es la única mediana que tengo.

**5.** Si bien no tengo todas las casillas llenas, decidí no eliminar los productos donde no tengo la información respecto a los 3 años, porque así tengo más datos que eventualmente si me pueden servir para llegar a ciertas conclusiones.

## Lista de fuentes de datos utilizados: 
[2023](https://www.sernac.cl/portal/619/articles-80228_recurso_1.pdf):
Su origen viene de la entrega de datos al Sernac por parte de distintos proveedores de este tipo de productos y de “webscraping” de las tiendas donde la información no fue entregada. 

[2022](https://www.sernac.cl/portal/619/articles-67830_archivo_01.pdf): Su origen viene de sitios web oficiales de los principales comercios de Chile que fueron recolectados el 30 de junio de 2022. Para esto se utilizó una metodología cuantitativa y descriptiva.  


[2021](https://www.sernac.cl/portal/619/articles-63337_archivo_01.pdf ): Se realizó una recolección de precios de los productos menstruales más comunes, basado en los resultados de la encuesta hecha a 10.545 personas. Esta se llevó a cabo en páginas web de farmacias, supermercados y tiendas especializadas entre el 22 y el 25 de junio de 2021. 

Considero que las fuentes seleccionadas son altamente confiables y bien documentadas, ya que vienen de una entidad oficial **(SERNAC)** que garantiza que el proceso de obtención de datos se hizo con seriedad y de la manera correcta.

Además, los datos han sido recolectadas utilizando métodos rigurosos que incluyen tanto el acceso directo a precios oficiales como el web scraping y encuestas a consumidores. Esto permite realizar un análisis preciso y bien fundamentado sobre la evolución de los precios de productos higiénicos menstruales en Chile, teniendo en cuenta tanto factores temporales como el impacto de los días de flujo.

## **Ejemplos de preguntas:**
1. Para una persona con recursos económicos limitados; **¿Cuál sería su mejor opción de producto higiénico + ácido mefenámico?** Esto según cada año

2. **¿Cómo varían los precios de los productos según la duración del flujo (3, 5 y 7 días)?**

3. **¿Cómo ha cambiado el precio promedio de cada producto (toallas desechables, tampones, protectores diarios, etc.) a lo largo de los años?**

4. **¿Es posible proyectar cómo podrían evolucionar los precios de estos productos en 2024 según la tendencia observada entre 2021 y 2023?**
