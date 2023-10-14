import json

from django.conf import settings
from django.http import HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
# chat/views.py
from django.shortcuts import render
import os


#################### MOCK ######################

def load_json(file_name):
    """Грузит json файл из папки"""

    def read_file(path):
        file = open(path, "r", encoding="utf-8")
        data = file.read()
        file.close()
        return data

    path = os.path.join(settings.BASE_DIR, "media", "json_dumps", file_name)
    return json.loads(read_file(path))


class TestView(APIView):

    @staticmethod
    def get(request: Request) -> Response:

        loaded_data = load_json("RQ-10000.json")

        return Response(
            loaded_data,
            status=status.HTTP_200_OK,
        )


class AtmsView(APIView):

    @staticmethod
    def get(request: Request) -> Response:

        loaded_data = load_json("atms_fixed.json")

        return Response(
            loaded_data,
            status=status.HTTP_200_OK
        )

class OfficesView(APIView):

    @staticmethod
    def get(request: Request) -> Response:

        loaded_data = load_json("offices_fixed.json")

        return Response(
            loaded_data,
            status=status.HTTP_200_OK,
        )