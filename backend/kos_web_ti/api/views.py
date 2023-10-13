from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request




#################### MOCK ######################
from api.utils.SessionData import sessionsData


class MockPostSelectedBoardsView(APIView):

    @staticmethod
    def post(request: Request, id) -> Response:
        """
        MockPostFileView
        """

        if sessionsData.get(id) is None:
            return Response(
                {"detail": "no such session"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            return Response(
                sessionsData.add_yaml(id),
                status=status.HTTP_200_OK,
            )


class MockPostFileView(APIView):

    @staticmethod
    def post(request: Request, id) -> Response:
        """
        MockPostFileView
        """

        if sessionsData.get(id) is None:
            return Response(
                {"detail": "no such session"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            return Response(
                sessionsData.add_artifact(id),
                status=status.HTTP_200_OK,
            )


class MockPostRunTestView(APIView):

    @staticmethod
    def post(request: Request, id) -> Response:
        """
        MockPostRunTestView
        """

        if sessionsData.get(id) is None:
            return Response(
                {"detail": "no such session"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            return Response(
                sessionsData.run_session(id),
                status=status.HTTP_200_OK,
            )


class MockGetBoardsView(APIView):

    @staticmethod
    def get(request: Request) -> Response:
        """
        """

        boards = {
            "board": [
                {
                    "id": 0,
                    "name": "rpi4",
                    "platform": "hw"
                },
                {
                    "id": 1,
                    "name": "m805",
                    "platform": "hw"
                },
                {
                    "id": 2,
                    "name": "dummy",
                    "platform": "hw"
                },
                {
                    "id": 3,
                    "name": "utx3117",
                    "platform": "hw"
                },
                {
                    "id": 4,
                    "name": "proxy",
                    "platform": "hw"
                },
                {
                    "id": 5,
                    "name": "host",
                    "platform": "hw"
                },
                {
                    "id": 6,
                    "name": "qemu",
                    "platform": "hw"
                },
                {
                    "id": 7,
                    "name": "tn1200",
                    "platform": "hw"
                }
            ]
        }

        return Response(
            boards,
            status=status.HTTP_200_OK,
        )


class MockGetParsersView(APIView):

    @staticmethod
    def get(request: Request) -> Response:
        """
        """

        parsers = {
            "parser": [
                {
                    "id": 0,
                    "name": "example"
                },
                {
                    "id": 1,
                    "name": "gtest"
                },
                {
                    "id": 2,
                    "name": "cmocka"
                },
                {
                    "id": 3,
                    "name": "bonnie"
                },
                {
                    "id": 4,
                    "name": "ktest"
                }
            ]
        }

        return Response(
            parsers,
            status=status.HTTP_200_OK,
        )


# GET_LIST_SESSIONS
# POST_CREATE_SESSION
class MockPostGetSessionView(APIView):

    @staticmethod
    def post(request: Request) -> Response:
        """
        """

        name = request.data.get("name")

        return Response(
            sessionsData.add(name),
            status=status.HTTP_200_OK,
        )

    @staticmethod
    def get(request: Request) -> Response:
        """
        """

        return Response(
            {"sessions": sessionsData.list()},
            status=status.HTTP_200_OK,
        )


# GET_SESSION_PARAMS
class MockGetSessionParamsView(APIView):

    @staticmethod
    def delete(request: Request, id) -> Response:
        """
        """

        if sessionsData.delete(id) is None:
            return Response(
                {"detail": "no such session"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            sessionsData.delete(id)
            return Response(
                {"detail": "success"},
                status=status.HTTP_200_OK,
            )

    @staticmethod
    def get(request: Request, id) -> Response:
        """
        """
        print("id in MockGetSessionParamsView = ", id)

        if sessionsData.get(id) is None:
            return Response(
                {"detail": "no such session"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            return Response(
                sessionsData.get(id),
                status=status.HTTP_200_OK,
            )


# GET_SESSION_LOG
class MockGetSessionLogsView(APIView):

    @staticmethod
    def get(request: Request, id) -> Response:
        """
        """

        logs = {
            "logs": [
                "==================================================",
                "test session starts",
                "==================================================",
                "platform KasperskyOS",
                "-- Python 3.9.6, pytest-6.2.4, pluggy-0.13.1",
                "-- /path/to/python3 rootdir: /path/to/your/project collected 5 items",
                "test_module.py::test_addition PASSED [ 20%]",
                "test_module.py::test_subtraction PASSED [ 40%]",
                "test_module.py::test_multiplication PASSED [ 60%]",
                "test_module.py::test_division PASSED [ 80%]"
            ]
        }

        return Response(
            logs,
            status=status.HTTP_200_OK,
        )


# GET_DOWNLOAD_RESULT
class MockGetSessionDownloadResultView(APIView):

    @staticmethod
    def get(request: Request, id) -> Response:
        """
        """

        download_results = {
            'id': id,
            "test_results_ready": False
        }

        return Response(
            download_results,
            status=status.HTTP_200_OK,
        )


# GET_DASHBOARDS
class MockGetSessionDashboardsView(APIView):

    @staticmethod
    def get(request: Request, id) -> Response:
        """
        """

        dashboards = {
            'id': id,
            "dashboards": [
                {"id": 1, "link": "https://www.temporary-url.com/9A365D1"},
                {"id": 2, "link": "https://www.temporary-url.com/9A365D"},
                {"id": 3, "link": "https://www.temporary-url.com/9A365D"},
            ]
        }

        return Response(
            dashboards,
            status=status.HTTP_200_OK,
        )


# GET_STREAM
class MockGetSessionStreamView(APIView):

    @staticmethod
    def get(request: Request, id) -> Response:
        """
        """

        dashboards = {
            'id': id,
            "stream": "http://localhost:8080/stream.mjpg"
        }

        return Response(
            dashboards,
            status=status.HTTP_200_OK,
        )
