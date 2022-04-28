# json-server

Use json-server to create a Bach API server stub that returns some default data. Useful for when the server is not available.

# Usage

Run the following command from the project root directory.

```bash
#!/usr/bin/env zsh

npx json-server \
  --config json-server/json-server.json \
  --watch json-server/db.json \
  --routes json-server/routes.json

```

Tip: move these files to the project root dir to instead run using:

`npx json-server --watch db.json --routes routes.json`

# References

* json-server documentation (https://github.com/typicode/json-server)