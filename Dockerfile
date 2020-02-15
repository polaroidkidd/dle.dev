FROM nginx:1.15.9-alpine
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80





