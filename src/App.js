import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div
          onClick={this.props.setWhy}
          style={{
            userSelect: "none",
            border: "2px solid",
            backgroundColor: "rgb(65, 90, 159)",
            color: "white",
            borderRadius: "10px",
            padding: "4px 6px",
            cursor: "pointer",
            position: "fixed",
            right: "20px"
          }}
        >
          pricing
        </div>
        <a href="https://www.bhphotovideo.com/c/product/985255-REG/adesso_akb_232ub_foldbl_wtr_prf_usb.html">
          <img
            style={{
              float: "right",
              width: "300px",
              maxWidth: "calc(100% - 20px)"
            }}
            alt="antimicrobial waterproof keyboard"
            src="https://www.dropbox.com/s/b7cpdmos5rrzf21/hibit%20tent.png?raw=1"
          />
        </a>
        <h1>
          <a href="https://adailyimpeachment.quora.com/How-many-coders-are-begrudgingly-so-for-their-auxiliary-or-primary-industry-1">
            Hibit.cc
          </a>
          : Is a generous pricing model pay as you go?
        </h1>
        <h2>Cli</h2>
        {`
      mkdir folder && cd folder
      `}
        <br />
        {`
      git push --force
      `}
        <br />
        {`
      git add .
      `}
        <br />
        {`
      git init
      `}
        <br />
        {`
      git remote add origin https://github.com/You/ReositoryName.git
      `}
        <br />
        {`
      git commit -m "ok"
      `}
        <br />
        {`
      cd .. && rm -rf folder
      `}
        <br />
        <h2>Rules</h2>
        {`rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /numbers/{number} {
              allow read, write//: if number == "+17773332222"
            }
            match /users/{userId}{
              allow create: if request.auth.uid == userId
              allow read
              allow write: if request.auth.uid == userId
            }
            match /userDatas/{userData} {
              allow create: if request.auth != null
              allow read: if request.auth.uid == userData
              allow write: if request.auth != null
            }}}`}
        <span style={{ textDecoration: "line-through" }}>
          <h2>
            Serve (
            <a
              style={{ fontSize: "12px" }}
              href="https://stackoverflow.com/questions/59380373/mysterious-metrics-in-gcp-compute-engine-api-when-the-account-does-not-use-gcp-c"
            >
              compute.beta.InstancesService.ListReferrers
            </a>
            )
          </h2>
          kubernetes image container?
          <br />
          {`
      swagger: "2.0"
      info: 
        title: backbank
        description: node cloud run api mastercard p.12 customer keys
        version: 0.0.1
      security:
        - firebase: []
      securityDefinitions: 
        firebase: 
          authorizationUrl: ""
          flow: "implicit"
          type: "oauth2"
          x-google-issuer: "https://securetoken.google.com/vaumoney"
          x-google-jwks_uri: "https://www.googleapis.com/service_accounts/v1/metadata/x509/securetoken@system.gserviceaccount.com" # firebase-adminsdk-afvoy@vaumoney.iam.gserviceaccount.com" #/email_of_sa"
          x-google-audiences: "vaumoney"
      host: "vault-co.in"
      basePath: "/"
      
      schemes:
        - https
      consumes:
        - application/json
      produces:
        - application/json
      paths:
        /:
          get:
            summary: Yes Hello cloud run (api gateway, load balance) service
            operationId: get
            x-google-backend:
              address: https://vault-co.in:8080
              jwt_audience: 
              protocol: h2
            responses:
              200:
                description: This is a (Non-Graphical) Application Programming Interface
      
              default:
                description: Something is wrong
      
          options:
            summary: Enable CORS with headers
            operationId: options
            x-google-backend:
              address: https://vault-co.in:8080
              jwt_audience: https://vault-co.in 
              protocol: h2
            description: |
              Origin, Methods and Headers allowing headers potentially requested
            tags:
              - CORS
            responses:
              200:
                description: OPTIONS responding headers
                headers:
                  Access-Control-Allow-Origin:
                    type: string
                    default: "'i7l8qe.csb.app'"
                  Access-Control-Allow-Methods:
                    type: string
                    default: "'GET,POST'"
                  Access-Control-Allow-Headers:
                    type: string
                    default: "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
              403:
                description: OPTIONS responding headers
                headers:
                  Access-Control-Allow-Origin:
                    type: string
                    default: "'i7l8qe.csb.app'" # '''vau.money'''
                  Access-Control-Allow-Methods:
                    type: string
                    default: "'GET,POST'"
                  Access-Control-Allow-Headers:
                    type: string
                    default: "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'"
      
              default:
                description: Something is wrong
      
          post:
            summary: Respond properly indeed
            operationId: posted
            x-google-backend:
              address: https://vault-co.in:8080 
              jwt_audience: https://vault-co.in 
              protocol: h2
            description: |
              Successful api fetch
            parameters:
              - name: pageOffset
                in: body
                required: true
                schema:
                  type: object
                  properties:
                    pageOffset:
                      description: pageOffset is required, try 0
                      type: string
                    pageLength:
                      description: pageLength is required, try 10
                      type: string
                    postalCode:
                      description: postalCode is required, try 11101
                      type: string
      
            responses:
              default:
                description: post result
                schema:
                  type: object
                  description: response ok
                  required:
                    - results
                  properties:
                    results:
                      #collectionFormat: csv
                      type: array
                      default: []
                      items:
                        type: string
                    meta:
                      type: object
                      properties:
                        title:
                          type: string
                        description:
                          type: string
      `}
          <hr />
          {`
      apiVersion: v1
      kind: Service
      metadata:
        name: backbank
        labels:
          app: mastercard-backbank
      spec:
        ports:
        - port: 80
          targetPort: 8080
          protocol: TCP
        selector:
          app: mastercard-backbank
          tier: web
        type: LoadBalancer
        loadBalancerIP: "YOUR.IP.ADDRESS.HERE"
        externalTrafficPolicy: Local
      `}
          <hr />
          {`
      brew install kubectl
      `}
          <br />
          {`
      gcloud container clusters create backbank
      `}
          <br />
          {`
      kubectl apply -f service.yaml
      `}
          <br />
          {`
      gcloud beta container clusters update backbank --cluster-dns=clouddns --cluster-dns-scope=cluster
      `}
          <br />
          {`
      gcloud container node-pools create teller --cluster backbank --service-account YOUR_ENGINE-compute@developer.gserviceaccount.com
      `}
          <br />
          {`
      gcloud beta container clusters upgrade backbank --master --node-pool=teller --cluster-version=latest
      `}
          <br />
          {/*`
      suspend e2 vm instance group, migrate kubernetes service to a stopped container image (deploy that?)
        `*/}
          <a href="https://cloud.google.com/kubernetes-engine/docs/how-to/scaling-apps#scaling_an_application">
            scale down GKE cluster in 'workloads' to 0/"stop instances" to
            migrate to containers.
          </a>{" "}
          (v2k-generic-csi-controller, controllers-deploy-cert,
          controllers-controller-manager, csi-vlsdisk-controller)
        </span>
        <br />
        <br />
        <a href="https://tech.aufomm.com/how-to-use-cloudflare-tunnel-to-expose-multiple-local-services/">
          How to Use Cloudflare Tunnel to Expose Multiple Local Services
        </a>{" "}
        &bull;{" "}
        <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/local/local-management/ingress/#origin-configuration">
          Ingress
        </a>
        <h2>
          Design (
          <a
            style={{
              fontSize: "12px"
            }}
            href="https://codesandbox.io/s/react-local-firebase-i7l8qe"
          >
            react-local-firebase
          </a>
          )
        </h2>
        <h2>
          <a href="https://github.com/facebook/hermes/blob/main/tools/node-hermes/nodelib/AddWrappers.py">
            Build
          </a>
          ?
        </h2>
      </div>
    );
  }
}
