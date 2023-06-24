# nginx-loadbalancer 

Implementing load balancer in nginx server using docker containers. 

## Why to even use nginx?

* Single server can handle only fewer requests
* Large number of requests to a single server can cause bottleneck and introduce latency to the system
* To address this issue, we can add multiple servers. But how do you manage these multiple server instances?
* Now comes NGINX into the picture because it helps to manage servers by acting as a reverse proxy
* Reverse Proxy provides - Load balancing, Caching, TLS Setup etc. 
<br/>
NOTE : nginx will load all files in /opt/homebrew/etc/nginx/servers/
<br/>

## How to use NGINX for serving content ?

Static Content : 
* Create a http context for handling http requests
* Include server context, which will have listen(port) and root(path) directives 
<img src="https://github.com/SanjeevYadavcr7/nginx-container/blob/main/nginx-location.png" />￼
 
* To use different type of documents we need to include mime.types inside NGINX config file
*  NOTE: Restart the serve to see the changes. Use nginx -s reload 
 <br/>
 <br/>
* We can use upstream and proxy_pass to use multiple server instances(below is an example of load balancer using docker containers) 
<img src="https://github.com/SanjeevYadavcr7/nginx-container/blob/main/docker-container.png" />￼
