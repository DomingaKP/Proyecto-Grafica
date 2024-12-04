**Propuesta de visualizaciones atómicas** 

**Primer gráfico:** 

El gráfico creado en el código proporcionado es un **gráfico de barras agrupadas** con etiquetas, que está diseñado para mostrar la relación entre los productos, los días de flujo y los promedios mensuales en distintos años. 

Esto está alineado con nuestra historia, con el objetivo de reflejar cómo el aumento en el consumo de productos de higiene menstrual se mantiene de manera constante a lo largo de los años. Decidimos variar la duración del ciclo menstrual para mostrar que este patrón se repite en todos los promedios de duración, lo que impacta el presupuesto de cada mujer, especialmente en cuanto al monto destinado a este gasto dentro de sus presupuestos. 

***Dimensiones del Gráfico*** 

* **Eje X:** Representa los días de flujo en los cuales se realiza la medición. Estos días están categorizados en 3, 5 y 7 días de flujo. Esta variable es categórica, lo que permite agrupar las barras según los días de flujo.   
* **Mensaje**: Los diferentes días de flujo corresponden a diferentes comportamientos de los productos, permitiendo comparar cómo varía el promedio mensual de los productos en función de los días de flujo. 

   

* **Eje Y:** Muestra la suma de los promedios mensuales en CLP (pesos chilenos) para cada grupo de días de flujo y por año.   
     
* **Mensaje**: Muestra cómo varían los costos a lo largo de los años para cada tipo de producto. Esto puede indicar cómo el consumo o las ventas de estos productos cambian según el tiempo. 

   

* **Colores (Días de flujo)**: Se utiliza una escala de colores de acuerdo con la estética de la página para diferenciar los días de flujo en el gráfico (3, 5, 7 días). Cada barra tiene un color asignado según el día de flujo correspondiente.   
* **Etiquetas:** Sobre cada barra se muestra una etiqueta con el valor del "Promedio Mensual CLP".   
* **Mensaje**: Las etiquetas ayudan a comunicar el valor exacto de la suma de los promedios mensuales para cada categoría sin necesidad de hacer cálculos adicionales. Esto proporciona claridad a los usuarios sobre las cifras representadas por las barras. 

   

* **Facetas:** El gráfico se divide en facetas por año. Cada columna de facetas representa un año (2021, 2022, 2023), y dentro de cada faceta se muestran las barras agrupadas por días de flujo.   
* **Mensaje**: Las facetas por año permiten comparar cómo cambian los promedios mensuales en diferentes años para los mismos días de flujo, de acuerdo con los datos obtenidos del Informe de gestión menstrual del 2021,2022,2023 

**Código utilizado en Google Colab:** 

\# Importar librerías necesarias 

import pandas as pd 

import altair as alt 

\# Datos 

data \= { 

'Producto': \['Toallas desechables', 'Toallas desechables', 'Toallas desechables', 'Acido mefenamico', 'Acido mefenamico', 'Acido mefenamico', 

'Toallas desechables', 'Toallas desechables', 'Toallas desechables', 'Acido mefenamico', 'Acido mefenamico', 'Acido mefenamico', 

'Toallas desechables', 'Toallas desechables', 'Toallas desechables', 'Acido mefenamico', 'Acido mefenamico', 'Acido mefenamico'\], 

'Año': \[2021, 2022, 2023, 2021, 2022, 2023, 2021, 2022, 2023, 2021, 2022, 2023, 2021, 2022, 2023, 2021, 2022, 2023\], 

'Días de flujo': \[3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7\], 

'Promedio Mensual': \[2389, 3024, 3319, 1360, 1456, 1410, 3167, 5040, 5532, 2720, 2427, 2350, 4778, 7056, 7744, 2720, 3398, 3290\] 

} 

\# Crear un DataFrame 

df \= pd.DataFrame(data) 

 

\# Calcular la suma de promedios mensuales por días de flujo y año 

df\_sum \= df.groupby(\['Año', 'Días de flujo'\])\['Promedio Mensual'\].sum().reset\_index() 

\# Convertir los valores de "Promedio Mensual" a formato CLP (con punto como separador de miles) 

df\_sum\['Promedio Mensual CLP'\] \= df\_sum\['Promedio Mensual'\].apply(lambda x: f"{x:,.0f}".replace(",", ".")) 

\# Colores personalizados (con color diferente para el flujo de 7 días) 

colors \= \['\#6a1b9a', '\#9c27b0', '\#9c4f96'\] \# Cambié el color de 7 días 

\# Crear gráfico de barras agrupadas por año 

bars \= alt.Chart(df\_sum).mark\_bar().encode( 

x=alt.X('Días de flujo:N', title='Días de Flujo', axis=alt.Axis(labelAngle=0)), 

y=alt.Y('Promedio Mensual:Q', title='Suma de Promedios Mensuales ($CLP)'), 

color=alt.Color('Días de flujo:N', scale=alt.Scale(range=colors), title='Días de Flujo'), 

tooltip=\[ 

alt.Tooltip('Año:N', title='Año'), 

alt.Tooltip('Días de flujo:N', title='Días de Flujo'), 

alt.Tooltip('Promedio Mensual CLP:N', title='Suma de Promedio Mensual ($CLP)') 

\] 

).properties( 

width=200, 

height=400 

) 

\# Agregar etiquetas a cada barra 

text \= bars.mark\_text(align='center', baseline='bottom', dy=20).encode( 

text='Promedio Mensual CLP:N', 

x=alt.X('Días de flujo:N', title='Días de Flujo'), 

y=alt.Y('Promedio Mensual:Q', stack='zero'), 

color=alt.value('black') 

) 

\# Mostrar gráfico combinado con facetas por año 

final\_chart \= alt.layer(bars, text).facet(column='Año:N').resolve\_scale( 

x='shared' \# Compartir la escala de los ejes x entre las facetas 

).properties( 

title='Suma de Promedios Mensuales (Toallas Desechables \+ Ácido Mefenámico) por Días de Flujo', 

background="rgba(0, 0, 0, 0)" 

) 

\# Mostrar el gráfico 

final\_chart 

 

**Código HTML:** 

\<\!DOCTYPE html\>   
\<html\>   
\<head\>   
 \<style\>   
   .error {   
       color: red;   
   }   
 \</style\>   
 \<script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega@5"\>\</script\>   
 \<script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-lite@4.17.0"\>\</script\>   
 \<script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-embed@6"\>\</script\>   
\</head\>   
\<body\>   
 \<div id="vis"\>\</div\>   
 \<script\>   
   (function(vegaEmbed) {   
     var spec \= {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "layer": \[{"mark": "bar", "encoding": {"color": {"field": "D\\u00edas de flujo", "scale": {"range": \["\#8e44ad", "\#9b59b6", "\#c39bd3"\]}, "title": "D\\u00edas de Flujo", "type": "nominal"}, "tooltip": \[{"field": "A\\u00f1o", "title": "A\\u00f1o", "type": "nominal"}, {"field": "D\\u00edas de flujo", "title": "D\\u00edas de Flujo", "type": "nominal"}, {"field": "Promedio Mensual", "title": "Suma de Promedio Mensual", "type": "quantitative"}\], "x": {"field": "D\\u00edas de flujo", "title": "D\\u00edas de Flujo", "type": "nominal"}, "y": {"field": "Promedio Mensual", "title": "Suma de Promedios Mensuales ($CLP)", "type": "quantitative"}}, "height": 400, "width": 200}, {"mark": {"type": "text", "align": "center", "baseline": "bottom", "dy": 20}, "encoding": {"color": {"value": "black"}, "text": {"field": "Promedio Mensual", "type": "quantitative"}, "tooltip": \[{"field": "A\\u00f1o", "title": "A\\u00f1o", "type": "nominal"}, {"field": "D\\u00edas de flujo", "title": "D\\u00edas de Flujo", "type": "nominal"}, {"field": "Promedio Mensual", "title": "Suma de Promedio Mensual", "type": "quantitative"}\], "x": {"field": "D\\u00edas de flujo", "type": "nominal"}, "y": {"field": "Promedio Mensual", "stack": "zero", "type": "quantitative"}}, "height": 400, "width": 200}\], "background": "rgba(0, 0, 0, 0)", "data": {"name": "data-c448b505b3e8ff56a2f9b80220e334c7"}, "resolve": {"scale": {"y": "shared"}}, "title": "Suma de Promedios Mensuales (Toallas Desechables \+ \\u00c1cido Mefen\\u00e1mico) por D\\u00edas de Flujo", "$schema": "[https://vega.github.io/schema/vega-lite/v4.17.0.json](https://vega.github.io/schema/vega-lite/v4.17.0.json)", "datasets": {"data-c448b505b3e8ff56a2f9b80220e334c7": \[{"A\\u00f1o": 2021, "D\\u00edas de flujo": 3, "Promedio Mensual": 3749}, {"A\\u00f1o": 2021, "D\\u00edas de flujo": 5, "Promedio Mensual": 5887}, {"A\\u00f1o": 2021, "D\\u00edas de flujo": 7, "Promedio Mensual": 7498}, {"A\\u00f1o": 2022, "D\\u00edas de flujo": 3, "Promedio Mensual": 4480}, {"A\\u00f1o": 2022, "D\\u00edas de flujo": 5, "Promedio Mensual": 7467}, {"A\\u00f1o": 2022, "D\\u00edas de flujo": 7, "Promedio Mensual": 10454}, {"A\\u00f1o": 2023, "D\\u00edas de flujo": 3, "Promedio Mensual": 4729}, {"A\\u00f1o": 2023, "D\\u00edas de flujo": 5, "Promedio Mensual": 7882}, {"A\\u00f1o": 2023, "D\\u00edas de flujo": 7, "Promedio Mensual": 11034}\]}};   
     var embedOpt \= {"mode": "vega-lite"};   
   
     function showError(el, error){   
         el.innerHTML \= ('\<div class="error" style="color:red;"\>'   
                         \+ '\<p\>JavaScript Error: ' \+ error.message \+ '\</p\>'   
                         \+ "\<p\>This usually means there's a typo in your chart specification. "   
                         \+ "See the javascript console for the full traceback.\</p\>"   
                         \+ '\</div\>');   
         throw error;   
     }   
     const el \= document.getElementById('vis');   
     vegaEmbed("\#vis", spec, embedOpt)   
       .catch(error \=\> showError(el, error));   
   })(vegaEmbed);   
   
 \</script\>   
\</body\>   
\</html\>   
 

 

 

**Respecto al segundo gráfico:**  

Se visualiza la población carcelaria de hombres y mujeres por región. Esto aporta contexto a la narrativa y se mantienen las proporciones, porque si bien, la población masculina es considerablemente mayor. El foco del reportaje está en la calidad más que en la cantidad. En el hecho de que sin importar si son minorías o no, las mujeres merecen la misma calidad de atención, porque son personas.  Dentro de eso, se entiende que la población carcelaria es bastante similar por región, manteniendo las proporciones. 

***Dimensiones del gráfico:***  

* **Eje X:** Representa la cantidad total de personas atendidas en las cárceles por región, expresada en valores absolutos (rango de 0 a más de 5,000).   
     
* **Mensaje:** Este eje permite visualizar las diferencias en el tamaño de la población atendida entre las distintas regiones. 

   

* **Eje Y:** Lista las regiones de Chile, ordenadas de mayor a menor según la cantidad de hombres y mujeres atendidos en las cárceles.   
     
* **Mensaje:** Facilita identificar rápidamente las regiones con mayor o menor población carcelaria femenina, destacando patrones regionales. 

**Colores:**   
Se utiliza un solo color para todas las barras del gráfico, con el objetivo de subrayar que el foco está en la humanidad y los derechos de las mujeres, no en las diferencias por género.   
 

* **Mensaje:** Esto refuerza visualmente la idea de que todas las personas merecen igual calidad de atención, sin importar su proporción dentro de la población general. 

**Etiquetas:**   
   
Aunque el gráfico no las incluye en su forma actual, las etiquetas podrían colocarse sobre cada barra con el valor exacto de la cantidad de personas atendidas por región.   
 

* **Mensaje:** Las etiquetas agregarían claridad al gráfico, permitiendo a los lectores identificar los valores exactos sin necesidad de estimaciones visuales.   
   

**Facetas del Gráfico:** 

* **Regiones con mayor población femenina en cárceles:**   
* La Región Metropolitana ocupa el primer lugar, seguida de Valparaíso y Biobío. 

   

* **Regiones con menor población femenina en cárceles:**   
* Aysén y Magallanes están al final de la lista.   
* **Mensaje:** Estas diferencias reflejan cómo la distribución de la población femenina carcelaria sigue un patrón similar al general, pero la narrativa resalta la necesidad de calidad de atención en todas las regiones, sin importar los números absolutos. 

**Código utilizado HTML:** 

\# Importar librerías   
import pandas as pd   
import altair as alt   
   
\# Cargar el archivo CSV   
file\_path \= '/content/Copia de DATOS LIMPIOS REGIONES 2024.csv'   
data \= pd.read\_csv(file\_path)   
   
\# Renombrar las columnas para facilitar su uso   
data.columns \= \['Fecha', 'Region', 'Establecimiento', 'Administracion', 'Subsistema',   
               'RegimenControl', 'TipoPoblacion', 'Poblacion', 'Sexo', 'Atendidos'\]   
   
\# Asegurarse de que la columna 'Atendidos' sea numérica   
data\['Atendidos'\] \= pd.to\_numeric(data\['Atendidos'\], errors='coerce')   
   
\# Filtrar datos necesarios   
data\_filtered \= data\[\['Region', 'Subsistema', 'Sexo', 'Atendidos'\]\].dropna()   
   
Visualización: Distribución de sexo por subsistema   
chart3 \= alt.Chart(data\_filtered).mark\_bar().encode(   
   x=alt.X('sum(Atendidos):Q', title='Total Atendidos'),   
   y=alt.Y('Subsistema:N', sort='-x', title='Subsistema'),   
   color='Sexo:N',   
   tooltip=\['Sexo', 'sum(Atendidos)'\]   
).properties(   
   title='Distribución de Sexo por Subsistema',   
   width=600,   
   height=400   
) 

