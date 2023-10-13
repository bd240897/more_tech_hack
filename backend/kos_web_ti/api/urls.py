from django.urls import path
from .views import MockPostFileView, MockPostRunTestView, MockGetParsersView, MockGetBoardsView, MockPostGetSessionView, \
    MockGetSessionParamsView, MockGetSessionLogsView, MockGetSessionDownloadResultView, MockGetSessionDashboardsView,\
    MockPostSelectedBoardsView, MockGetSessionStreamView

app_name = 'api'

urlpatterns = [
    # POST_SELECTED_BOARDS
    path(
        'sessions/<int:id>/setup/',
        MockPostSelectedBoardsView.as_view(),
        name='MockPostFileView',
    ),

    # POST_FILES_URL
    path(
        'sessions/<int:id>/artifacts/',
        MockPostFileView.as_view(),
        name='MockPostFileView',
    ),

    # POST_RUN_TEST
    path(
        'sessions/<int:id>/run/',
        MockPostRunTestView.as_view(),
        name='MockPostRunTestView',
    ),

    # GET_PARSERS
    path(
        'parser_type/',
        MockGetParsersView.as_view(),
        name='parser_types',
    ),

    # GET_BOARDS
    path(
        'boards/',
        MockGetBoardsView.as_view(),
        name='boards',
    ),

    # GET_LIST_SESSIONS
    # POST_CREATE_SESSION
    path(
        'sessions/',
        MockPostGetSessionView.as_view(),
        name='sessions',
    ),

    # GET_SESSION_PARAMS
    path(
        'sessions/<int:id>/',
        MockGetSessionParamsView.as_view(),
        name='sessions',
    ),

    # GET_SESSION_LOG
    path(
        'sessions/<int:id>/logs/',
        MockGetSessionLogsView.as_view(),
        name='sessions',
    ),

    # test_results_ready
    path(
        'sessions/<int:id>/test_results_ready/',
        MockGetSessionDownloadResultView.as_view(),
        name='sessions',
    ),

    # GET_DASHBOARDS
    path(
        'sessions/<int:id>/dashboards/',
        MockGetSessionDashboardsView.as_view(),
        name='sessions',
    ),

    # GET_STREAM
    path(
        'sessions/<int:id>/stream/',
        MockGetSessionStreamView.as_view(),
        name='sessions',
    ),

]
