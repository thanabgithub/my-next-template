# DOCKER

## build image

```
docker build . -t <image name>:<version> --no-cache
```

## deploy container and acce3ss bash terminal

```
docker run -p <localhost port>:<container port> -it <image name>:<version> bash
```

# OTHERS

## deal with conflict version of dependencies

```
npm install --legacy-peer-deps
```

## check whether there is any process at port 80

```
fuser 80/tcp
```

https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux

# kill process on port 80

```
fuser -k 80/tcp
```

https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux
