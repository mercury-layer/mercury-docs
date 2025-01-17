---
sidebar_position: 1
---

# Server deployment

A mercury server instance can be deployed using a docker compose file provided in the main mercury layer github repository. 

To run a mercury layer instance via Docker, the following services (containers) are required at a minimum:

1. The main `mercury-server` (REST/http server). 
2. The private key server `lockbox`
3. Postgres databases for the `mercury-server` and `lockbox`

In addition, the following services can also be deployed depending on the requirements:

- A hashicorp `vault` container to manage the lockbox sealing keys. 
- A `token-server` to handle payments to generate deposit `token_ids`
- A `tor-server` to enable access to the `mercury-server` container via a Tor hidden service. 

Docker compose files are provided for each of these options. 

## Tor server deployment

Download the `docker-compose-tor.yml` file

Create the `tor_data` directory in the same location as the file.

Start the services with:

```
docker-compose up -d
```

Retrieve the .onion address from `./tor_data/hidden_service/hostname` file. 

