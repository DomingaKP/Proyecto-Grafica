# # # # Necesidades Invisibilizadas

## Paso a paso

# Lo primero fue instalar la librería Altair. Escribí el código que el ayudante enseñó y seguí los demás pasos de la grabación, como cargar el archivo CSV e importarlo en Pandas.
# Mi primera dificultad fue que no tenía almacenamiento en Drive y tuve que crearme otra cuenta.
# Ingresé los códigos del gráfico de barras agrupado horizontal de la librería Altair, ya que anteriormente hice un boceto para decidir de qué manera se visualizaba mejor lo que quería contar, y ese era el gráfico que más se asemejaba.

# Tuve dificultades reemplazando los valores de las variables y tuve que cambiar mi base de datos para eliminar las columnas que no me servían.
# Además, sumé tres de las columnas de mi base de datos original (gastos en personal, bienes y servicios, y prestaciones de seguridad social) y creé una nueva columna llamada "gastos en reos".
# Por último, ordené los datos de la misma forma en que se mostraban en el ejemplo de la librería.

# Aunque logré avanzar con el gráfico, inicialmente no me aparecía la barra de color azul, y esto me frustró un poco.
# Sin embargo, la profesora me ayudó a identificar que los datos no estaban ordenados de forma correcta, lo que afectaba la visualización.
# Una vez solucionado, pude descargar el gráfico como imagen.

# El código que utilicé se escribió en pasos claros:
# Primero cargué los datos en Altair con alt.Chart(data).
# Luego seleccioné un gráfico de barras con mark_bar().
# Configuré los ejes, asignando el eje X a la suma del presupuesto inicial y el eje Y a las clasificaciones económicas.
# Añadí colores diferentes según cada clasificación y agrupé las barras por año utilizando la propiedad row.
# Además, agregué un tooltip para mostrar información relevante al pasar el cursor sobre las barras, como el año, la clasificación y el presupuesto inicial.
# Finalmente, ajusté el título del gráfico y la altura para que fuera más legible.

# El código final quedó así:
import altair as alt

alt.Chart(data).mark_bar().encode(
    x='sum(Presupuesto Inicial):Q',
    y='Clasificación Económica:N',
    color='Clasificación Económica:N',
    row='Año:O',
    tooltip=['Año', 'Clasificación Económica', 'Presupuesto Inicial']
).properties(
    title="Presupuesto Inicial por Año y Clasificación Económica (barras lado a lado)",
    height=150
)

# Este proceso me permitió comprender cómo visualizar datos de manera más efectiva, y gracias a la ayuda de la profesora logré superar los problemas iniciales y obtener un gráfico funcional que representaba correctamente la información.

# ## Comentarios

# Escogimos utilizar las bases de datos de la ley de presupuestos de los últimos tres años.
# Esta base la generamos nosotras a partir de los informes trimestrales que adjuntamos en la entrega anterior.
# Creemos que es importante considerar qué proporción del presupuesto se destina a reos.
# Nos gustaría tener el detalle sobre en qué específicamente se gasta, pero transparencia no nos ha dado la respuesta que solicitamos, es más, nos la ha aplazado y directamente no contestado.
# Con el conocimiento de la cantidad de dinero disponible y la proporción entre los gastos generales y los destinados a los reos, creemos que las personas se pueden hacer una idea de los recursos con los que se trabaja en la cárcel.
# Esto lo anexamos a nuestra historia, que es sobre la privación de salud e higiene menstrual de las mujeres en la cárcel.

# Consideramos que la falta de transparencia en la asignación de estos recursos es un reflejo de cómo el sistema invisibiliza las necesidades básicas de las mujeres privadas de libertad, perpetuando desigualdades de género.
# Nuestros hallazgos preliminares muestran que la proporción destinada a las necesidades básicas de los reos es significativamente baja, lo que respalda nuestras conclusiones sobre la precariedad en el acceso a salud e higiene menstrual en cárceles femeninas.
# Elegimos centrarnos en el análisis del presupuesto porque creemos que proporciona una perspectiva clara sobre las prioridades del sistema penitenciario y permite cuantificar la negligencia en áreas esenciales como la salud menstrual, un tema crucial para nuestra investigación.

# Respecto a cómo procesamos la base que utilizamos para el gráfico, esta fue, como dije en el paso a paso, creada para asimilar el formato de la librería Altair y con el agregado de la columna extra “gastos en reos” para simplificar valores y que la lectura fuera más simple.
# Para la próxima entrega sería ideal contar con más datos sobre las asignaciones presupuestarias pero estamos a la espera.

# ### Preguntas posibles

# - ¿Cuánto presupuesto tiene Gendarmería?
# - ¿Cuánto de este presupuesto está destinado a reos?
# - ¿Cuál es la diferencia de presupuesto inicial de los tres respectivos años?
# - ¿Cuánto más dinero se ha invertido a lo largo de los años?

