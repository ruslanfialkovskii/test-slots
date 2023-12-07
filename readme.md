This is a test task
Needs to fix this docker file and run app:
```
FROM nginx:latest
RUN apt-get upddate && apt-get install -y nodejs
# WORKDIR /app
COPY package*
.json ./
COPY index.js ./
CMD "node index.js"
```
Fixes:
- fixed wrong base image
- fixed the problem with package.json path
- fixed wrong dependencies   inside package.json
Fixed:
```
FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY index.js ./

RUN npm install 

EXPOSE 3000

CMD npm start
```
Kubernetes tasks:
I tested everything in minikube.
You have to enable addons 
- metrics-server
- default-storageclass
- storage-provisioner

Ingress configured as nginx-ingress so you have to install it to. 
helm install nginx-ingress-controller  oci://registry-1.docker.io/bitnamicharts/nginx-ingress-controller

Screen shots inside archive.