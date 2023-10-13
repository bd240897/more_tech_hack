params_list = [
    {
        "id": 1,
        "name": "name_1",
        "artifacts": None,
        "is_config_exists": False,
        "status": "created",
        "test_results": "path-path-path"
    },
    {
        "id": 2,
        "name": "name_2",
        "artifacts": None,
        "is_config_exists": False,
        "status": "pending",
        "test_results": "path-path-path"
    },
    {
        "id": 3,
        "name": "name_3",
        "artifacts": None,
        "is_config_exists": False,
        "status": "failed",
        "test_results": "path-path-path"
    },
    {
        "id": 4,
        "name": "name_4",
        "artifacts": None,
        "is_config_exists": False,
        "status": "succeeded",
        "test_results": "path-path-path"
    },
    {
        "id": 5,
        "name": "name_5",
        "artifacts": None,
        "is_config_exists": False,
        "status": "canceled"
    },
    {
        "id": 6,
        "name": "name_6",
        "artifacts": None,
        "is_config_exists": False,
        "status": "failed",
        "test_results": "path-path-path"
    },
    {
        "id": 7,
        "name": "name_7",
        "artifacts": None,
        "is_config_exists": False,
        "status": "succeeded",
        "test_results": "path-path-path"
    },
    {
        "id": 8,
        "name": "name_8",
        "artifacts": None,
        "is_config_exists": False,
        "status": "succeeded",
        "test_results": "path-path-path"
    },
    {
        "id": 9,
        "name": "name_9",
        "artifacts": None,
        "is_config_exists": False,
        "status": "succeeded",
        "test_results": "path-path-path"
    },
    {
        "id": 10,
        "name": "name_10",
        "artifacts": None,
        "is_config_exists": False,
        "status": "succeeded",
        "test_results": "path-path-path"
    },
    {
        "id": 11,
        "name": "name_11",
        "artifacts": None,
        "is_config_exists": False,
        "status": "succeeded",
        "test_results": "path-path-path"
    }
]


class SessionData:
    def __init__(self, data_list):
        self.data_list = data_list

    def delete(self, session_id: int):
        """Удалить сессию"""

        find_data = list(filter(lambda el: el["id"] == session_id, self.data_list))

        if len(find_data) > 0:
            self.data_list = list(filter(lambda el: el["id"] != session_id, self.data_list))
            return "done"
        else:
            return None

    def get(self, session_id: int):
        """ Получить данные сессии """

        find_data = list(filter(lambda el: el["id"] == session_id, self.data_list))

        print("res_data", find_data)

        if len(find_data) > 0:
            return find_data[0]
        else:
            return None

    def list(self):
        """ Получить список сессий"""

        return self.data_list

    def add(self, name: str):
        """ Добавить сессию """

        if len(self.data_list) > 0:
            max_id = max([el["id"] for el in self.data_list])
        else:
            max_id = 0

        new_data = {
            "id": max_id + 1,
            "name": f"{name}",
            "artifacts": None,
            "is_config_exists": False,
            "status": "created",
            "test_results": "path-path-path"
        }

        self.data_list.append(new_data)

        return new_data

    def add_artifact(self, session_id: int):
        """ Добавить артефакт """

        find_data = list(filter(lambda el: el["id"] == session_id, self.data_list))

        if len(find_data) > 0:
            find_data[0]["artifacts"] = f"id={session_id}-path-path-path"
            return find_data[0]
        else:
            return None

    def add_yaml(self, session_id: int):
        """ Добавить ямл """

        find_data = list(filter(lambda el: el["id"] == session_id, self.data_list))

        if len(find_data) > 0:
            find_data[0]["config_content"] = "bin_img: kos-image\nboard: M8XX\nplatform: hw\ntype: bonnie\ntimeout: 4800\n",
            return find_data[0]
        else:
            return None


    def run_session(self, session_id: int):
        """ Запустить сессию """

        find_data = list(filter(lambda el: el["id"] == session_id, self.data_list))

        if len(find_data) > 0:
            find_data[0]["status"] = "pending"
            return find_data[0]
        else:
            return None


sessionsData = SessionData(params_list)
