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
fixed wrong base image
fixed the problem with package.json path
fixed wrong dependencies   inside package.json
