# 🧠 Brain Tumor Image Analysis – Deep Learning Pipeline

## Descripción técnica

Este proyecto implementa un **pipeline completo de análisis y preprocesamiento de imágenes médicas** para un dataset de **tumores cerebrales**, utilizando arquitecturas basadas en **redes neuronales convolucionales (CNN)** con el framework **PyTorch**.

El notebook está enfocado en la preparación robusta de datos para tareas de **clasificación multiclase en imágenes biomédicas**, incluyendo normalización, aumento de datos y evaluación de métricas.

---

## Objetivos del proyecto

- Implementar una canalización de carga de datos con `torch.utils.data.Dataset`.
- Aplicar transformaciones de imágenes con `torchvision.transforms`.
- Preparar el dataset para entrenamiento y validación con particiones estratificadas.
- Evaluar resultados mediante métricas de clasificación.

---

## Stack tecnológico

- **Lenguaje:** Python 3.x  
- **Framework principal:** PyTorch  
- **Procesamiento de imágenes:** Torchvision, Pillow  
- **Análisis de datos:** NumPy, Pandas  
- **Visualización:** Matplotlib, Seaborn  
- **Métricas:** Scikit-learn  
- **Optimización:** Adam / SGD (Torch Optim)  

---

## Flujo del pipeline

1. **Ingesta de datos:**  
   Carga de imágenes con `ImageFolder` y manejo de rutas con `os` y `pathlib`.

2. **Preprocesamiento:**  
   - Escalado y normalización de imágenes.  
   - Aplicación de transformaciones como `Resize`, `CenterCrop` y `ToTensor`.  

3. **Particionado del dataset:**  
   División automática en **train / validation / test** utilizando `splitfolders` y `random_split`.

4. **Configuración del modelo:**  
   Definición de capas usando `torch.nn` y funciones de activación con `torch.nn.functional`.

5. **Evaluación del desempeño:**  
   - Matriz de confusión  
   - `classification_report` (precisión, recall, F1-score)

---
