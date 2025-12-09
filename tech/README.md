# Análisis Exploratorio de Delitos Ambientales en Colombia (2003–2025)

Descripción
-----------
Este proyecto realiza un análisis exploratorio riguroso de los delitos ambientales registrados en Colombia entre 2003 y 2025. Empleando técnicas de limpieza de datos, estadística descriptiva y visualización interactiva, el objetivo es comprender la magnitud, evolución temporal y distribución territorial de las conductas que atentan contra el medio ambiente, y generar insights accionables para investigación, gestión pública y toma de decisiones.

Objetivo general
----------------
Entender la dinámica espacial y temporal de los delitos ambientales en Colombia (2003–2025) mediante análisis de datos reproducible, para identificar patrones, puntos críticos y tendencias relevantes.

Objetivos específicos
---------------------
- Estructurar y validar la base de datos original (fechas, ubicaciones, descripciones).
- Calcular estadísticas descriptivas clave: totales, frecuencias y porcentajes.
- Identificar las conductas delictivas predominantes y su participación relativa.
- Analizar la distribución geográfica por departamento y municipio para detectar zonas críticas.
- Explorar tendencias temporales (anuales y por intervalos) y variaciones estacionales.
- Visualizar resultados mediante gráficos estáticos e interactivos y preparar un dashboard para la exploración dinámica.
- Documentar hallazgos y proponer recomendaciones basadas en evidencia.

Variables principales analizadas
-------------------------------
- FECHA_HECHO (fecha del incidente)
- ANIO (año derivado de FECHA_HECHO)
- DEPARTAMENTO
- MUNICIPIO
- DESCRIPCION_CONDUCTA (texto estandarizado)
- ARTICULO (marco legal, si aplica)
- ZONA (Urbana / Rural)
- CANTIDAD (número de eventos o unidades cuantificadas)

Cada columna fue verificada, limpiada y transformada según los requisitos de análisis (normalización de nombres, imputación/control de nulos, conversión de tipos y creación de variables derivadas).

Metodología
-----------
1. Ingesta y exploración inicial: inspección de formatos, tipos y valores faltantes.  
2. Limpieza y estandarización: corrección de nombres de lugares, unificación de descripciones y tratamiento de duplicados.  
3. Enriquecimiento: derivación de ANIO, categorización de conductas y geocodificación cuando fue posible.  
4. Análisis descriptivo: conteos, porcentajes, ranking y estadísticas por grupo.  
5. Análisis temporal y espacial: series de tiempo, mapas coropléticos y heatmaps.  
6. Visualización e interacción: dashboards (Streamlit / Plotly) y gráficos explicativos.  
7. Documentación y conclusiones reproducibles.

Estadísticos clave calculados
-----------------------------
- Número total de registros y número total de casos (cuando difieren).  
- Frecuencia absoluta y relativa por tipo de conducta.  
- Top N conductas más frecuentes y su participación porcentual.  
- Top departamentos y municipios más afectados.  
- Tendencias anuales, medianas móviles y picos por subperiodos.  
- Heatmap (escala logarítmica opcional) para visualizar evolución por año y conducta.

Conductas de interés analizadas en detalle
-----------------------------------------
Se realizó un seguimiento específico a las siguientes conductas, evaluando totales y participación relativa en el periodo 2003–2025:
- Aprovechamiento ilícito de recursos naturales renovables  
- Explotación ilícita de yacimientos mineros  
- Daños a los recursos naturales / ecocidio  
- Caza ilegal  
- Contaminación ambiental

Resultados destacados (resumen)
-------------------------------
- Identificación del delito más frecuente en el periodo analizado.  
- Departamentos con mayor concentración de casos y su porcentaje sobre el total nacional.  
- Picos temporales y cambios en tendencia asociados a eventos o políticas específicas (cuando aplicable).  
- Mapas y visualizaciones que muestran zonas críticas y patrones espaciales consistentes.

Visualizaciones incluidas
-------------------------
- Series de tiempo por año y por intervalos (barras y líneas).  
- Top 8 conductas delictivas (gráficos de barras).  
- Top 10 departamentos y mapas coropléticos.  
- Heatmap logarítmico por año y conducta.  
- KPIs nacionales y por departamento.  
- Dashboard interactivo (Streamlit) con filtros por año, departamento, conducta y zona.

Tecnologías empleadas
--------------------
- Python 3.x  
- pandas, numpy (procesamiento y análisis)  
- matplotlib, seaborn, plotly (visualización)  
- geopandas / folium (mapas, si se geocodificó)  
- streamlit (dashboard interactivo)  
- Jupyter Notebook / JupyterLab (documentación y exploración)

Reproducibilidad
----------------
- Se recomienda usar un entorno virtual y un archivo requirements.txt con versiones fijadas.  
- Documentar la fuente de los datos (origen, fecha de descarga, licencia) y cualquier preprocesamiento aplicado.  
- Incluir scripts o notebooks separados para: ingestión, limpieza, análisis y generación de visualizaciones.  
- Guardar salidas relevantes (figuras, tablas resumen, datos procesados) en la carpeta outputs/ para facilitar auditoría.

Consideraciones éticas y de calidad de datos
--------------------------------------------
- Verificar la protección de datos personales antes de publicar resultados a nivel de municipio o punto.  
- Documentar limitaciones del dataset (sesgos de reporte, subregistro, cambios de protocolo en el tiempo).  
- Usar escalas logarítmicas y anotaciones claras cuando las cifras varíen ampliamente para evitar interpretaciones erróneas.


Licencia
--------
Indicar la licencia (por ejemplo, MIT) si se desea permitir la reutilización abierta del análisis.
