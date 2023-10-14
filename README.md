# Web приложение для оценки загруженности отделений бакка ВТБ"
Проект на хакатон More Tech Hack 2023

Команда: **Win+ners**

## Демо:
=
[![Watch the video](./materials/prototype_preview.jpg)](https://youtu.be/o1A6QMTDYNQ;)

## Оглавление
0. [Команда](#Команда)
1. [Задача](#Задача)
2. [Архитектура](#Архитектура)
3. [Описание Backend](#Описание-Backend)
4. [Описание Frontend](#Описание-Frontend)
5. [Развёртывание решения](#Развёртывание-решения)
6. [Описание структуры папок проекта](#Описание-структуры-папок-проекта)
7. [Запуск](#Запуск)

## Команда
1. [Дмитрий Борисов](https://t.me/DmitriiBorisov) - backend/frontend
2. [Максим Кишик](https://t.me/kishikmaxim) - backend
3. [Таня](https://t.me/bezasfalta) - product manager
4. [Максим](https://t.me/Rainor1) - frontend
5. [Аня Мархаева](https://t.me/privetobnako) - designer

[:arrow_up:Оглавление](#Оглавление)

## Задача
### Описание задачи
Реализовать приложение для оценки загруженности отделений бакка ВТБ

[:arrow_up:Оглавление](#Оглавление)

## Архитектура
    python 3.10
    backend - django rest framework
    forntend - react.js
    database - sqlite3/ or PostgeSQL

[:arrow_up:Оглавление](#Оглавление)

## Описание Backend

Backend, реализованный на `framefork` `Django 4.1`, нахоодится в папке `backend`.
Ниже представлены возможности нашего API

### документация к API

##### `get atms`
    method: GET
    link: http://127.0.0.1:8000/api/v1/atms/

##### `get offices`
    method: GET
    link: http://127.0.0.1:8000/api/v1/offices/

[:arrow_up:Оглавление](#Оглавление)

## Описание Frontend

Нами был использован `framefork` `react 18` и сборщик `Vite` для создания приложения.

[:arrow_up:Оглавление](#Оглавление)

## Развёртывание решения

Для удобства запуска приложения на разных платформах был использован `docker`. В папке `frontend` есть `dockerfile` который описывает состояние контейнера. Созданный контейнер будет оптравлен и развернут на удаленном сервере

### 1. Установка Docker (Ubuntu 20.04) 
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-ru

    sudo apt update
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
    sudo apt update
    apt-cache policy docker-ce
    sudo apt install docker-ce
    sudo systemctl status docker // status

### 2. Установка Docker-compose (Ubuntu 20.04)
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-ru

    sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version // status


### 3. Запуск через Docker-compose
https://webdevblog.ru/kak-ispolzovat-django-postgresql-i-docker/
    
    # склонировать репу
    git clone https://github.com/bd240897/more_tech_hack.git
    # перейти в папку
    cd more_tech_hack/
    # установить в файле frontend/.env backend url и port (VITE_BACK_URL, VITE_BACK_PORT)
    nano frontend/.env
    # запустить проект
    docker-compose up --build -d 
    
[:arrow_up:Оглавление](#Оглавление)

## Описание структуры папок проекта

Размеченные шаблоны страниц для нашего приложения находятся в папке `templates`.
В задании был использован `bootstrap` framework

- **backend/kos_web_ti** - Файлы для бэкенда (django, python 3.10)
  - kos_web_ti - папка с настройками проекта
  - ...
  - api - приложение с логикой
  - req.txt - зависимости проекта
  - Dockerfile - докер файл для развертывания
  - ...
- **frontend** - Файлы для фронтенда (react 18 + Vite)
  - public - Общедоступные файлы
  - src - исходники
  - .env - переменные окружения
- **materials** - дополнительные материалы
- **cnn_learning** - скрипты обучения нейронки

[:arrow_up:Оглавление](#Оглавление)

## Запуск
Протестировать уже запущенный сайт можно по ссылке:</br>

    http://51.250.14.192:3000 (доступен на момент предоставления решения)
    # или
    http://localhost:3000/ (доступен при создании локального проекта)

[:arrow_up:Оглавление](#Оглавление)

## Заметки
```
Оформление гитхаба
https://github.com/GnuriaN/format-README#Оглавление
```
