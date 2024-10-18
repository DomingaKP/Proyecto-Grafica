# Esta es la Ficha Técnica
## 1. **Características de los datos**

_**Tamaño del conjunto de datos:**_ Mi documento con los datos ya ordenados tiene 9 columnas y 51 filas.  
 
_**Tipos de datos:**_ Numéricos (precios mínimos, precios máximos, precios promedios, días de flujo) y categóricos (productos, años). 
 
_**Origen de los datos:**_ Esto depende del año:  

- [2023](https://www.sernac.cl/portal/619/articles-80228_recurso_1.pdf): Su origen viene de la entrega de datos al Sernac por parte de distintos proveedores de este tipo de productos y de “webscraping” de las tiendas donde la información no fue entregada. 

- [2022](https://www.sernac.cl/portal/619/articles-67830_archivo_01.pdf) : Su origen viene de sitios web oficiales de los principales comercios de Chile que fueron recolectados el 30 de junio de 2022. Para esto se utilizó una metodología cuantitativa y descriptiva.  

- [2021](https://www.sernac.cl/portal/619/articles-63337_archivo_01.pdf): Se realizó una recolección de precios de los productos menstruales más comunes, basado en los resultados de la encuesta hecha a 10.545 personas. Esta se llevó a cabo en páginas web de farmacias, supermercados y tiendas especializadas entre el 22 y el 25 de junio de 2021


_**Calidad:**_ Las 3 fuentes de datos que utilicé son confiables y con un trabajo riguroso, ya que era el SERNAC el que llevaba a cabo los informes, sin embargo, hay unos detalles.

- **2023:** La tarea de recolección de datos por parte del SERNAC fue bastante rigorosa, pero igual debido a algunos problemas en este proceso fueron excluidos ciertos proveedores (Walmart) que es dueño de Líder, y Mercado Libre, lo que puede alterar levemente la calidad y resultados del análisis.  

- **2022:** Respecto a su calidad, no se menciona específicamente si existen valores faltantes como el caso de Walmart en el 2023, pero sí dice que la recolección de datos fue en una fecha expecífica

- **2021:** Al haber usado de referencia las marcas que más fueron mencionadas en los resultados de la encuesta, si quedan datos excluidos. 


## 2. Alcance metodológico 
_**Fuentes de datos:**_ Esto también depende de cada año:

- **2023:** Para llegar a este muestreo, se tomó la decisión de utilizar los datos de las principales tiendas del país, estos son; supermercados (Tottus, Jumbo, Unimarc y Santa Isabel), farmacias (Ahumada, Cruz Verde y Salcobrand), tiendas especializadas (Maicao, Preunic y Liquimax) y Marketplace (Falabella, Ripley, Paris). 
  

- **2022:** Respecto a las fuentes de datos utilizadas, estos vienen de los sitios web oficiales de comercios. Respecto a farmacias se extrajo información de la Ahumada, Cruz Verde y Salcobrand. Para los supermercados a Tottus, Jumbo, Líder, Unimarc y Santa Isabel. En tiendas especializadas Maicao, Preunic y Liquimax y Marketplace a Falabella, Ripley, Paris, MercadoLibre y Linio.  


- **2021:** Este año no hay profundización de los sitios donde obtuvieron los precios, solo dice sitios web de farmacias, supermercados y tiendas especializadas.

 
_**Métodos de recolección:**_ 

- **2023:** El Sernac solicitó a proveedores un listado de los productos de higiene menstrual utilizados y sus precios a la fecha (septiembre 2023). Los que no pudieron conseguir los buscaron en internet con el método de webscraping.  

- **2022:** Este levantamiento de datos fue realizado de manera online el 30 de junio de 2022 y respecto al muestreo se seleccionaron los productos con mayor representatividad en el mercado, según una encuesta que hizo el SERNAC el 2021 sobre gestión menstrual. 

- **2021:** Se realizó un levantamiento de precios en las páginas web de farmacias, supermercados y tiendas especializadas. Este proceso se llevó a cabo entre el 22 y el 25 de junio de 2021.

_**Muestreo:**_ 

Las marcas y productos utilizados en el estudio son los con mayor representatividad obtenidos de la Encuesta Salud, Higiene y Gestión menstrual 2021 realizado también por el Sernac. 

_**Limitaciones metodológicas:**_

Al ser datos de recopilados de informes de años diferentes, no tomaron siempre las mismas variables, por lo que hay cierta información en relación a un producto y su año que no tengo, como por ejemplo, no se analizaron los precios de las toallas húmedas y las reutilizables el 2023, por lo que en un eventual cruce de datos, esos productos no podrán ser comparados en relación con ese año.

- **2023:** Como limitaciones en el alcance metodológico respecto al muestreo tenemos la exclusión de ciertos proveedores de esta categoría de productos, como Mercado Libre, que, al tener a una persona como vendedor, este puede poner los precios que quiera, llegando a distorsionar los datos.

- **2022:** No se consideraron todas las marcas y tipos de productos disponibles en el mercado, solo las más mencionadas por los encuestados.

## 3. Variables incorporadas: variable | descripción 
- **Producto:** Tipo de producto analizado (toallas desechables, tampones, protectores diarios, ácido mefenámico, toallas húmedas, copa menstrual, toallas reutilizables, calzón menstrual). 
- **Año:** Año en que se registraron los datos: 2021,2022,2023 
- **Días de flujo:** Días de flujo de la menstruación (3, 5, 7)  
- **Mínimo Mensual:** Precio mínimo registrado en un mes de la categoría del producto. 
- **Máximo Mensual:** Precio máximo registrado en un mes de la categoría del producto. 
- **Promedio Mensual:** Precio promedio registrado en un mes de la categoría del producto.  
- **Mínimo Anual:** Precio mínimo registrado en un año de la categoría del producto 
- **Máximo Anual:** Precio máximo registrado en un año de la categoría del producto. 
- **Promedio Anual:** Precio promedio registrado en un año de la categoría del producto. 
 
 
## 4. Observaciones sobre la base de datos 

_**Calidad de los datos:**_

Dado que los datos fueron recopilados a partir de informes de diferentes años, no siempre se consideraron las mismas variables. Por esta razón, hay información ausente en relación con ciertos productos y años específicos. Por ejemplo, en 2023 no se analizaron los precios de las toallas húmedas ni de los productos reutilizables. Esto significa que, en un eventual cruce de datos, esos productos no podrán ser comparados para ese año.

- **2023:** De acuerdo con lo investigado, el uso de webscraping para recolectar datos en línea puede afectar la precisión y calidad de los datos recolectados. 
Si bien considero que la calidad de los datos es buena, si existe una cierta exclusión de proveedores debido a problemas técnicos y distorsión de los datos, lo que afecta directamente la precisión de los precios.  Esto también es una limitación metodológica respecto a la muestra de datos y hace que no sean del todo representativo por las exclusiones. 

- **2022** 
Respecto a la calidad, surgen dudas sobre si omitieron datos o no para realmente confirmar si es una muestra representativa completa. Pero, como se recopilaron datos a través de precios publicados en los comercios principales creo que si son datos representativos de la información que se encuentra en línea. 

_**Pertinencia:**_

Estos datos sirven para analizar los precios de los distintos precios de productos de higiene menstrual que existen en el mercado, en los 3 años. Se comparan producto-precio, para ver sus correlaciones, tanto a nivel mensual como anual. 

Además, que los productos que estoy investigando son básicos para la higiene menstrual femenina. Estos datos nos permitirán evaluar el impacto económico de esta categoría en los presupuestos necesarios para que una rea pueda cubrir esta necesidad básica.

_**Posibles errores:**_
Los datos los traspasé yo misma desde los informes a mi propia tabla. Si bien lo hice con mucho cuidado y lentitud para no equivocarme, siempre está la posibilidad del error humano.

_**Limitaciones:**_
Si bien tengo 3 informes para analizar, me gustaría que hubiesen sido más años para así tener una base de datos aún más completa.

Los datos faltantes en la tabla, que me van a imposibilitar cruzar ese dato con otro, sobre todo en el 2023, que es donde hubo una mayor diferencia en el proceso de recopilar y exponer los datos.




 

