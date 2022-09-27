# DOCKER

## build image

```
docker build -t <image name>:<version> .
```

Ex.

```
docker build -t test:2 .
```

## deploy container and access bash terminal

```
docker run -p <localhost port>:<container port> -it <image name>:<version> bash
```

Ex.

```
docker run -p 3000:80 -it test:2 bash
```

if you would like to use "nice" to prioritize process
you should run the following command

```
docker run -p <localhost port>:<container port>  --privileged=true -it <image name>:<version> bash
```

Ex.

```
docker run -p 3000:80 --privileged=true -it test:2 bash
```

according to https://stackoverflow.com/questions/26044490/how-can-i-set-negative-niceness-of-a-docker-process

# NODE

## build by npm

```
npm run build
```

## build by native

```
./node_modules/.bin/next build
```

if you would like to highly prioritize the process

```
nice -n -20 ./node_modules/.bin/next build
```

as i checked by measuring time, it doesn't improve speed for small system

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
