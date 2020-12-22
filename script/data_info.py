import json

with open('src\data\mbfc.json') as f:
  data = json.load(f)

accuracy = []
bias = []

for source in data["sources"]:
    accuracy.append(source["accuracy"])
    bias.append(source["bias"])


accuracy = set(accuracy)
bias = set(bias)

print(accuracy)
print(bias)