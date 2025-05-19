import google.generativeai as genai
from googleapiclient.discovery import build
from dotenv import load_dotenv
import os

load_dotenv()

# Configura tus claves
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

# Configura Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Función para generar descripción usando Gemini
def generar_contenido_gemini(tema):
    model = genai.GenerativeModel('gemini-1.5-pro')
    prompt = f"Explica de manera clara y breve el tema de redes de computadoras: {tema}"
    response = model.generate_content(prompt)
    return response.text

# Función para buscar videos en YouTube
def buscar_videos_youtube(tema, max_results=3):
    youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
    request = youtube.search().list(
        part="snippet",
        q=tema,
        type="video",
        maxResults=max_results
    )
    response = request.execute()
    videos = [
        {
            "titulo": item["snippet"]["title"],
            "videoId": item["id"]["videoId"],
            "url": f"https://www.youtube.com/watch?v={item['id']['videoId']}"
        }
        for item in response.get("items", [])
    ]
    return videos
