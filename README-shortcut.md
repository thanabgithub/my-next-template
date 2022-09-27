```
docker build -t myapp:2 --target runner .
docker image prune --force
```

```
docker build -t myapp:2 --target runner .
docker image prune --filter label=stage=deps --force
docker image prune --filter label=stage=builder --force
```

deploy

```
docker run -p 80:3000 myapp:2
```

build & deploy

```
docker build -t myapp:2 --target runner .
docker image prune --force
docker run -p 80:3000 myapp:2
```
