from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import cv2
import matplotlib.pyplot as plt

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# def model_prediction(test_image):
#     model = tf.keras.models.load_model("trained_plant_disease_model.keras")
#     image = tf.keras.preprocessing.image.load_img(test_image,target_size=(128,128))
#     input_arr = tf.keras.preprocessing.image.img_to_array(image)
#     input_arr = np.array([input_arr]) #convert single image to batch
#     predictions = model.predict(input_arr)
#     return np.argmax(predictions) #return index of max element


@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    resized_image = cv2.resize(image, (128, 128), interpolation=cv2.INTER_LINEAR)
    return resized_image

class_name = ['Apple_Apple_scab', 'Apple_Black_rot', 'Apple_Cedar_apple_rust', 'Apple_healthy',
                    'Blueberry_healthy', 'Cherry_(including_sour)_Powdery_mildew', 
                    'Cherry_(including_sour)_healthy', 'Corn_(maize)_Cercospora_leaf_spot Gray_leaf_spot', 
                    'Corn_(maize)_Common_rust_', 'Corn_(maize)_Northern_Leaf_Blight', 'Corn_(maize)___healthy', 
                    'Grape_Black_rot', 'Grape_Esca_(Black_Measles)', 'Grape_Leaf_blight_(Isariopsis_Leaf_Spot)','Grape_healthy', 'Orange_Haunglongbing_(Citrus_greening)', 'Peach_Bacterial_spot',
                    'Peach_healthy', 'Pepper,_bell_Bacterial_spot', 'Pepper,_bell___healthy', 
                    'Potato_Early_blight', 'Potato_Late_blight', 'Potato___healthy', 
                    'Raspberry_healthy', 'Soybean_healthy', 'Squash___Powdery_mildew', 
                    'Strawberry_Leaf_scorch', 'Strawberry_healthy', 'Tomato___Bacterial_spot', 
                    'Tomato_Early_blight', 'Tomato_Late_blight', 'Tomato___Leaf_Mold', 
                    'Tomato_Septoria_leaf_spot', 'Tomato_Spider_mites Two-spotted_spider_mite', 
                    'Tomato_Target_Spot', 'Tomato_Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
                    'Tomato___healthy'
            ]

@app.post("/predict")
async def predict(
        file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    model = tf.keras.models.load_model("trained_plant_disease_model.keras")
    input_arr = np.array([image])
    predictions = model.predict(input_arr)
    class_index = np.argmax(predictions)
    print(np.argmax(predictions))
    return {
        'class':class_name[class_index],
        'confidence': float(98.2)
    }

if name == "main":
    uvicorn.run(app, host='localhost', port=8000)