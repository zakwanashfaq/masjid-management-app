### Building and running the application

To run the application for development, execute the following command:
`docker compose -f compose.dev.yaml up`.
Remove containers with: `docker compose -f compose.dev.yaml down`.

To build and run the application in prod, execute the following command:
`docker compose up --build`.

Make sure to run `docker compose down` when done testing/debugging.

Once the api-application is running, it can be accessed at http://localhost:6000.

### Deploying the application (CI)

To deploy the application to the cloud, follow these steps:

1. Build the Docker image by running: `docker build --platform=linux/amd64 -t masjid_api .`.

2. Push the image to your container registry, for example: `docker push myregistry.com/myapp`. todo: Replace dockerhub with aws ecr

### References
* [Docker's .NET guide](https://docs.docker.com/language/dotnet/)
* The [dotnet-docker](https://github.com/dotnet/dotnet-docker/tree/main/samples) repository contains various samples and documentation related to Docker and .NET.