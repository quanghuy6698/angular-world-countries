import json

ws = open("world5.txt", 'r', encoding="utf-8")

data = json.load(ws)

subregion = []
for d in data:

    if not d['region'] in subregion:
        subregion.append(d['region'])

out = open('region.txt', 'w')
json.dump(subregion, out)
