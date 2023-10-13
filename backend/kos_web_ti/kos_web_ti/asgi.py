import os

from django.core.asgi import get_asgi_application

from dotenv import load_dotenv
from pathlib import Path
from uvicorn import Config, Server

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(
    os.path.join(BASE_DIR.parent.parent, 'infra/.env'),
    verbose=True,
)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kos_web_ti.settings')

application = get_asgi_application()
