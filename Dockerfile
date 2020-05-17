FROM nginx:1.15.9-alpine
COPY dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-mime.types /etc/nginx/nginx-mime.types
EXPOSE 80





