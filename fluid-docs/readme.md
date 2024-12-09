### FLUID Documentation Site

This repository, at the time of writing (Thursday 18th July, 2024) contains 2 documentation 
sites applications (one Angular legacy site, and one NextJS with MDX go-forward site), along with 
a Typescript CDK project to deploy the applications to S3 fronted by Cloudfront.

### Installation

To install the dependencies for both applications, simply run `npm run init` from the root
of the project.

This will install dependencies for both the legacy application, and the new go-forward application.

### Running the Applications

Once installed, run `npm run start:all` from the root of the project. This will start both the legacy 
application, and the go-forward application at `http://localhost:4201` and `http://localhost:3000` 
respectively.

This will allow content to be migrated from the legacy application to the new go-forward 
applcation easily.

### Deploying the Applications

The CDK is surrently set-up to determine which application to deploy based on the environment.

The `non-production` and `production` environments will deploy the legacy site to;

Non-Prod: http://non-production-docs.fluid.lmig.com
Prod: http://docs.fluid.lmig.com

Whereas, the `development` environment will deploy the go-forward application to;

Development: http://dev-docs.fluid.lmig.com

This will allow you to test changes to both the legacy app, and the go-forward application 
in deployed environments easily.