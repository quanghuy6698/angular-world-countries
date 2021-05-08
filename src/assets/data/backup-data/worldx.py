import json

f = open('worldx.txt', 'r')

worlds = []
for line in f:
    ct = line.split(',')
    worlds.append({
        "name": ct[0],
        "iso2": ct[1],
        "iso3": ct[2],
        "isoNumeric": ct[5],
        "phoneCode": ct[8],
        "continent": ct[9],
        "capital": ct[10],
        "currency": ct[12],
        "area": ct[13]
    })

ws = open("worlds.txt", 'r')

data = json.load(ws)

for d in data:

    isIn = False
    for w in worlds:
        isIn = False
        if w['iso2']==d['code']:
            w['name']=d['name']
            w['continent']=d['area']
            isIn=True
    if isIn==False:
        worlds.append({
        "name": d['name'],
        "iso2": d['code'],
        "iso3": d['isoAlpha3Code'] if d['isoAlpha3Code'] else "",
        "isoNumeric": "",
        "phoneCode": "",
        "continent": d['area'],
        "capital": "",
        "currency": "",
        "area": ""
        })

output = open('worldxy.txt', 'w')
json.dump(worlds, output)