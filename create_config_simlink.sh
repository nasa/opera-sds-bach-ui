config_path=$1
bach_ui_path=$2
source ~/mozart/bin/activate
[ -f mozartConfig.json ] && rm -f mozartConfig.json
pip install -e .
ln -s $config_path $bach_ui_path/config
cp $bach_ui_path/src/config/index.prod.template.js $bach_ui_path/src/config/index.js
python convert_config.py
