### Building and running the application

To run the application for development, execute the following command:
`dotnet watch run` (recommended)
or
`docker compose -f compose.dev.yaml up`.
Remember to remove containers with: `docker compose -f compose.dev.yaml down`.

To build and run the application in prod, execute the following command:
`docker compose up --build`.

Make sure to run `docker compose down` when done testing/debugging.

Once the api-application is running, it can be accessed at http://localhost:6000.

### Deploying the application (CI)

Deployment is taken care of automatically with AWS Codepipeline & AWS Codebuild.
For reference check `buildspec.yml`, `Dockerfile` & `compose.yaml`.

### References
* [Docker's .NET guide](https://docs.docker.com/language/dotnet/)
* The [dotnet-docker](https://github.com/dotnet/dotnet-docker/tree/main/samples) repository contains various samples and documentation related to Docker and .NET.