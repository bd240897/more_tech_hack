
FROM python:3.10.12-alpine

WORKDIR /app

# переменные окружения для python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Устанавливаем зависимости для Postgre
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
RUN apk add libffi-dev

# устанавливаем зависимости
RUN pip install --upgrade pip

COPY ./req.txt .
RUN pip install -r req.txt

# копируем содержимое текущей папки в контейнер
COPY . .
