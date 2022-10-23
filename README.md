# goit-node-hw-01-cliApp

Модуль 1. Основи Node.js

## CLI Reference

#### Get all items

```cli
  node index.js --action="list"
```

| Parameter  | Alias | Value  | Role          | Description  | Screenshot (https://ibb.co/) |
| :--------- | :---- | :----- | :------------ | :----------- | :--------------------------- |
| `--action` | `-a`  | `list` | choose action | **Required** | https://ibb.co/2d5pQgK       |

#### Get item

```cli
  node index.js --action="get" --id=5
```

| Parameter  | Alias | Value     | Role          | Description  | Screenshot (https://ibb.co/) |
| :--------- | :---- | :-------- | :------------ | :----------- | :--------------------------- |
| `--action` | `-a`  | `get`     | choose action | **Required** | https://ibb.co/JqVfYh3       |
| `--id`     | `-i`  | `user id` | user id       | **Required** |                              |

#### Add item

```cli
  node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
```

| Parameter  | Alias | Value        | Role          | Description  | Screenshot (https://ibb.co/) |
| :--------- | :---- | :----------- | :------------ | :----------- | :--------------------------- |
| `--action` | `-a`  | `add`        | choose action | **Required** | https://ibb.co/mNz6Tz7       |
| `--name`   | `-n`  | `user name`  | user name     | **Required** |                              |
| `--email`  | `-e`  | `user email` | user email    | **Required** |                              |
| `--phone`  | `-p`  | `user phone` | user phone    | **Required** |                              |

#### Remove item

```cli
  node index.js --action="remove" --id=3
```

| Parameter  | Alias | Value     | Role          | Description  | Screenshot (https://ibb.co/) |
| :--------- | :---- | :-------- | :------------ | :----------- | :--------------------------- |
| `--action` | `-a`  | `remove`  | choose action | **Required** | https://ibb.co/0cm2bBG       |
| `--id`     | `-i`  | `user id` | user id       | **Required** |                              |

## Documentation

[Documentation](https://www.edu.goit.global/uk/learn/1805637/2439558/2439561/homework)
