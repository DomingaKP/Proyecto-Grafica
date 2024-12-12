**Propuesta de visualizaciones atómicas**

**Primer gráfico:**

Es un gráfico de barras agrupadas que representa la relación entre los productos de higiene menstrual, los días de flujo y los promedios mensuales a lo largo de distintos años.

Este diseño está alineado con nuestra narrativa, cuyo objetivo es evidenciar que el precio de productos de higiene menstrual ha mantenido un aumento constante con el tiempo. Para reforzar esta idea, se variaron las duraciones del ciclo menstrual (3, 5 y 7 días), mostrando que este patrón se repite sin importar la cantidad de días de flujo.

La idea de crear este gráfico, era para reflejar como este aumento constante impacta directamente el presupuesto mensual dentro de los gastos de una mujer y como con el paso de los años, sale cada vez más caro comprar y usar los productos que las mujeres necesitan durante su menstruación. Esto sin duda fue un descubrimiento que tuvimos a la hora de investigar la variación de los precios de los productos higiénicos con el paso de los años.

***Dimensiones del Gráfico***

* Eje X: Representa los días de flujo en los cuales se realiza la medición. Estos días están categorizados en 3, 5 y 7 días de flujo. Esta variable es categórica, lo que permite agrupar las barras según los días de flujo.


Mensaje: Los diferentes días de flujo corresponden a diferentes comportamientos de los productos, permitiendo comparar cómo varía el promedio mensual de los productos en función de los días de flujo.

* Eje Y: Muestra la suma de los promedios mensuales en CLP (pesos chilenos) para cada grupo de días de flujo y por año.


Mensaje: Muestra cómo varían los costos a lo largo de los años para cada tipo de producto. Esto puede indicar cómo el consumo o las ventas de estos productos cambian según el tiempo.

* Colores (Días de flujo): Se utiliza una escala de colores de acuerdo con la estética de la página para diferenciar los días de flujo en el gráfico (3, 5, 7 días). Cada barra tiene un color asignado según el día de flujo correspondiente.  
    
* Etiquetas: Sobre cada barra se muestra una etiqueta con el valor del "Promedio Mensual CLP".


Mensaje: Las etiquetas ayudan a comunicar el valor exacto de la suma de los promedios mensuales para cada categoría sin necesidad de hacer cálculos adicionales. Esto proporciona claridad a los usuarios sobre las cifras representadas por las barras.

* Facetas: El gráfico se divide en facetas por año. Cada columna de facetas representa un año (2021, 2022, 2023), y dentro de cada faceta se muestran las barras agrupadas por días de flujo.

Mensaje: Las facetas por año permiten comparar cómo cambian los promedios mensuales en diferentes años para los mismos días de flujo, de acuerdo con los datos obtenidos del Informe de gestión menstrual del 2021,2022,2023. 

* #### **Fondo Transparente:** El gráfico tiene un fondo transparente para integrarse de manera estética en cualquier entorno o diseño de página.

Estos fueron los colores utilizados, para continuar con la estética de la página: \#8e44ad

\#9b59b6

\#c39bd3

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

**Segundo gráfico:**  
La idea del segundo gráfico, es categorizar en qué tipo de subsistema se encuentran las reas en nuestro país, porque si bien ha aumentado el porcentaje de reclusas mujeres, no es lo mismo estar privados de libertar 24/7 en una cárcel, que poder estar fuera todo el día y solo regresar a pernoctar.

Esto es importante para nuestra historia, porque no es lo mismo el origen de los productos de higiene menstrual de una persona que depende al 100% del presupuesto carcelario o encomiendas, a alguien que puede llevar sus cosas para dormir todas las noches.

Estos datos reflejan, que hasta octubre de este año, 5.136 mujeres están cumplimiento sus penas dentro de recintos penitenciarios con restricción total de libertad, lo que signi

### **Dimensiones del Gráfico**

* #### Eje X: Representa el total de mujeres atendidas por cada subsistema. Los valores en el eje X son numéricos y están formateados con separadores de miles para facilitar su lectura.

Mensaje: Este eje permite visualizar y comparar el volumen total de mujeres atendidas en cada subsistema, destacando las diferencias en magnitud.

* #### Eje Y: Muestra los nombres de los subsistemas: Subsistema Abierto, Subsistema Cerrado, y Subsistema Postpenitenciario. Es una variable categórica que organiza las barras por tipo de subsistema.

Mensaje: El eje Y organiza los datos por categoría, permitiendo identificar rápidamente los subsistemas involucrados y su contribución relativa.

* #### **Tooltip (Interactividad):** Al pasar el cursor sobre una barra, aparece un cuadro emergente que muestra:

    
* El nombre del subsistema.  
* El total exacto de mujeres atendidas en ese subsistema.

Mensaje: La interactividad permite a los usuarios obtener información precisa sobre cada barra sin saturar visualmente el gráfico.

* #### **Fondo Transparente:** El gráfico tiene un fondo transparente para integrarse de manera estética en cualquier entorno o diseño de página.


Estos fueron los colores utilizados, para continuar con la estética de la página: 

* Subsistema Abierto: \#8e44ad  
* Subsistema Cerrado: \#9b59b6  
* Subsistema Postpenitenciario: \#c39bd3

**Código utilizado en Google Colab:**

\# Importar las librerías necesarias

import pandas as pd

import altair as alt

from google.colab import files

\# Subir el archivo manualmente o desde Drive

try:

    \# Subida manual del archivo

    uploaded \= files.upload()

    file\_name \= list(uploaded.keys())\[0\]  \# Obtener el nombre del archivo subido

    data \= pd.read\_csv(file\_name)

except FileNotFoundError:

    \# Alternativamente, montar Google Drive

    from google.colab import drive

    drive.mount('/content/drive')

    file\_path \= '/content/drive/My Drive/tu\_carpeta/Datos poblacion carcelaria oct 2024.csv'

    data \= pd.read\_csv(file\_path)

\# Filtrar los datos para incluir solo mujeres

data\_mujeres \= data\[data\['sexo'\] \== 'Mujer'\]

\# Agrupar por subsistema y sumar los atendidos

data\_aggregated \= data\_mujeres.groupby('subsistema', as\_index=False)\['atendidos'\].sum()

\# Crear el gráfico interactivo con Altair

subsistemas\_unicos \= data\_aggregated\['subsistema'\].tolist()  \# Obtener lista de subsistemas únicos

color\_scale \= alt.Scale(domain=subsistemas\_unicos, 

                        range=\['\#8e44ad', '\#9b59b6', '\#c39bd3'\])

graph \= alt.Chart(data\_aggregated).mark\_bar().encode(

    x=alt.X('atendidos:Q', title='Total Atendidas', axis=alt.Axis(format=',.0f')),

    y=alt.Y('subsistema:N', sort='-x', title='Subsistema'),

    color=alt.Color('subsistema:N', scale=color\_scale, legend=None),

    tooltip=\[alt.Tooltip('subsistema:N', title='Subsistema'),

             alt.Tooltip('atendidos:Q', title='Atendidas', format=',.0f')\]  \# Tooltip para mostrar valores

).properties(

    title='Total de Mujeres Atendidas por Subsistema (Datos hasta octubre de 2024)',

    width=600,

    height=400,

    background='transparent'  \# Fondo transparente

)

\# Mostrar el gráfico en Google Colab

graph  \# Esto es suficiente para que Google Colab lo visualice

\# Guardar el gráfico como archivo HTML con fondo transparente e interactividad

output\_file \= '/content/graph\_interactive\_with\_tooltip.html'  \# Usar una ruta accesible

graph.save(output\_file)

\# Descargar el archivo HTML

files.download(output\_file)

