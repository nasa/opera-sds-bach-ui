import yaml
import json

with open("config", "r") as yaml_file, open("src/config/mozartConfig.json", "w") as json_file:
    yaml_object = yaml.safe_load(yaml_file)
    json.dump(yaml_object, json_file)
